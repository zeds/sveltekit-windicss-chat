<script>
	import TextInput from '$lib/components/TextInput.svelte';
	import TextAreaInput from '$lib/components/TextAreaInput.svelte';
	import SelectList from '$lib/components/SelectList.svelte';
	import Button from '$lib/components/Button.svelte';
	import CheckinStaffTable from '$lib/components/CheckinStaffTable.svelte';
	//Notification
	import { NotificationDisplay, notifier } from '@beyonk/svelte-notifications'
	//Utils
	import {generic_api, strapi_get} from "$lib/req_utils.js"

	// Store
	import { checkinStaffs } from "$lib/stores/index";


	export let task_type = 1;
	export let booking_id = 10330199;
	export let house_id = 45056;
	export let house_name = "ログ";
	export let checkin_date = "2022-07-25";
	export let checkin_time = '15:00';
	let selected_staff = {id:'',name:''}

	export let note = ''
	let n;

	//担当者
	const handleSelectedStaff = (e) => {
		selected_staff.id = e.detail.id;
		selected_staff.name = e.detail.name;
	}

	// @ts-ignore
	async function onSubmit(id){

		console.log("保存");
		console.log("task_type=",task_type);
		console.log("checkin_time=",checkin_time);
		console.log("selected_staff=",selected_staff);
		console.log("note=",note);

		let url = `${import.meta.env.VITE_STRAPI_DOMAIN}/api/checkins`;
		let method = 'POST'; // POST,PUT

		let post_data = {
			data: {
				booking_id: booking_id,
				house_id: house_id,     			// 45056
				checkin_date: checkin_date,     // 2022-03-21
				rep: selected_staff.id,                  // 担当者
				checkin_time: checkin_time + ':00.000', // 10:00:00.000
				note: note,											// あいうえお
				task_type: task_type						// チェックイン
			}
		}

		const json = generic_api(fetch, url, method, post_data);
		console.log("json=",JSON.stringify(json));

		url = `${import.meta.env.VITE_STRAPI_DOMAIN}/api/checkins?populate=deep`;
		method = 'GET'; // POST,PUT
		$checkinStaffs = await strapi_get('checkins?populate=deep&filters[booking_id][$eq]='+booking_id);

		$checkinStaffs = $checkinStaffs;


		console.log("checkinStaffs",$checkinStaffs);

		notifier.success('保存しました', 2000);

	}

	//$: console.log("task_type=",task_type);
	//$: console.log("checkin_time=",checkin_time);
	//$: console.log("selected_staff=",selected_staff);
	//$: console.log("note=",note);

</script>

<div class="overflow-auto h-200">

<!--<div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md bg-gray-200 rounded">-->
<div class="m-3 bg-gray-200 rounded">

	<div class='flex flex-wrap'>
		<div class='w-full md:w-1/2 pb-4'>
			<TextInput id="booking_id" bind:value={booking_id} title="予約ID" show={false} />
			<TextInput id="house_id" bind:value={house_id} title="施設ID" show={false} />
		</div>
	
		<div class='w-full md:w-1/2 pb-4'>
			<TextInput id="house_name" bind:value={house_name} title="施設名" show={false} />
			<TextInput id="checkin_date" bind:value={checkin_date} title="チェックイン日" show={false} />
	
		</div>
	</div>
	

	<form on:submit|preventDefault={onSubmit}>
		<!--task_type-->
		<div class="flex m-2">
		<label>
			<input type=radio bind:group={task_type} name="task_type" value={1} class="">
			<span class="relative top-0.6 text-xl text-gray-500">チェックイン</span>
		</label>

		<label class="ml-5">
			<input type=radio bind:group={task_type} name="task_type" value={2}>
			<span class="relative top-0.6 text-xl text-gray-500">清掃</span>
		</label>
		</div>

		<TextInput id="checkin_time" type="time" bind:value={checkin_time} title="時刻" show={true} />
		<SelectList id="staff" title="担当者" tableName="staffs" on:selectedList={handleSelectedStaff}/>
		<TextAreaInput id="note" title="ノート" bind:value={note} show={true}/>

		<div class="flex m-5 mb-2 justify-center">
			<Button label="保存" myClass="w-30 h-10 text-xl" />
		</div>
	</form>	

	<div class='flex flex-wrap'>
		<div class='w-full md:w-1/2 pb-4'>
			<CheckinStaffTable title="チェックイン" task_type=1 />
		</div>
	
		<div class='w-full md:w-1/2 pb-4'>
			<CheckinStaffTable title="清掃" task_type=2 />
		</div>
	</div>	
</div>

<NotificationDisplay bind:this={n} />

</div>