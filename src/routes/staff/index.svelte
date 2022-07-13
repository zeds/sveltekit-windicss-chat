<script>
// @ts-nocheck
	import { goto } from '$app/navigation';
	import Button from "$lib/components/Button.svelte"
	import { onMount, onDestroy } from "svelte";

	//Utils
	import {strapi_get,
					browserGet,
					browserSet
	} from "$lib/req_utils.js"


	//Stores
	import {selected_room_name, selected_user_name, selected_staff_id} from "$lib/stores/index.js";

	let staffs = [];
	let error_message = '';	// Please select button above.

	onMount(async function(){
		$selected_room_name = browserGet("selected_room_name");
		console.log("selected_room_name=", $selected_room_name);
		if ($selected_room_name == ''){
			error_message = 'Pls select the room from above.';
		}else{
			error_message = 'Room name :' + $selected_room_name;
		}
		getStaffs();
	})

	/**
	* @param {string} room_name
	*/
	function clickRoomName(room_name){
		$selected_room_name = room_name;
		browserSet("selected_room_name",$selected_room_name);
		error_message = 'Room name :' + $selected_room_name;
	}

	function clickJoin(index) {

		if ($selected_room_name == '') {
			error_message = 'Please select the room before join.'
			console.log("error=",error_message);
			return;
		}

		browserSet("selected_user_name", staffs[index].name);
		browserSet("selected_staff_id", staffs[index].id);
		
		console.log("join click:",staffs);
		goto('/chat')
	}

	async function getStaffs(){

		let response = await strapi_get('staffs?populate=deep');
		console.log("staffs =",response);
		for (let i=0; i < response.length; i++){
			let name = response[i].attributes.name;
			let id = response[i].id;
			console.log("## id=",id);
			console.log("## attributes=",response[i].attributes.avatar.data.attributes.formats.thumbnail.url);
			let avatar = response[i].attributes.avatar.data.attributes.formats.thumbnail.url
			console.log("## avatar=",avatar);

			let staff = {id,name,avatar};
			staffs.push(staff);
			console.log("staff=",staff);
		}
		staffs = staffs;
		console.log("staffs=",staffs);
	}

	function clearLocalStorage() {
		localStorage.clear();
		$selected_room_name = '';
		error_message = "Please select the room from above."
	}


</script>
<br>
<br>
<br>
<div class="ml-3">
	<Button label="banana" on:click={()=>clickRoomName("banana")} />
	<Button label="mango" on:click={()=>clickRoomName("mango")} />
	<Button label="orange" on:click={()=>clickRoomName("orange")} />
	<p class="text-red-500">{error_message}</p>
	<br>

	<!--id, avatar, name-->
	<table class="table-fixed w-100 h-100">
		<thead>
			<tr class="bg-gray-100 border">
				<th class="content-center">ID</th>
				<th>AVATAR</th>
				<th>NAME</th>
				<th>Select</th>
			</tr>
		</thead>
		<tbody class="table-fixed center">
			{#each staffs as staff, index}
				<tr class="text-center items-center border">
					<td>{staff.id}</td>

					<!-- svelte-ignore a11y-img-redundant-alt -->
					<td class=""><img src={`${import.meta.env.VITE_STRAPI_DOMAIN}${staff.avatar}`} alt="avatar image" /></td>

					<td>{staff.name}</td>
					<td><Button label="join" on:click={()=> clickJoin(index)} /></td>
				</tr>
			{/each}
		</tbody>
	</table>

<br>
<Button width="w-100" label="clear local storage" on:click={()=> clearLocalStorage()} />



</div>
