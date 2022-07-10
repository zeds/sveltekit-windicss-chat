<script>
// @ts-nocheck
	import { goto } from '$app/navigation';
	import Button from "$lib/components/Button.svelte"
	import { onMount, onDestroy } from "svelte";

	//Utils
	import {browserGet,browserSet} from "$lib/req_utils.js"

	//Stores
	import {selected_room_name, selected_user_name} from "$lib/stores/index.js";


	//let selected_room_name = '';
	//let selected_user_name = '';

	onMount(async function(){
		$selected_room_name = browserGet("room_name");
		$selected_user_name = browserGet("user_name");
	})

	/**
	* @param {string} room_name
	*/
	function clickRoomName(room_name){
		$selected_room_name = room_name;
		browserSet("room_name",room_name);
	}

	function clickUserName(){
		browserSet("user_name",$selected_user_name);
		goto('/chat')
	}
	function clickClear(){
		$selected_user_name = "";
		$selected_room_name = "";

		browserSet("room_name","");
		browserSet("user_name","");
	}

</script>
<br>
<br>
<br>
<div class="ml-3">
	<Button label="banana" on:click={()=>clickRoomName("banana")} />
	<Button label="mango" on:click={()=>clickRoomName("mango")} />
	<Button label="orange" on:click={()=>clickRoomName("orange")} />
	<p>room_name： {$selected_room_name}</p>
	<br>

	user_name：<input bind:value={$selected_user_name} class="border-4" />
	<Button label="submit" on:click={()=>clickUserName()} />
	<br>
	<Button label="clear" on:click={()=>clickClear()} />


</div>
