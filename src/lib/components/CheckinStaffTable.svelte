<script>
	import { onMount } from "svelte"
  import { writable } from 'svelte/store';
	import Button from "$lib/components/Button.svelte";
	// Store
	import { checkinStaffs } from "$lib/stores/index";


	//Utils
	import {generic_api, strapi_get} from "$lib/req_utils.js"

	//Notification
	import { NotificationDisplay, notifier } from '@beyonk/svelte-notifications'

	import Modal, { bind } from 'svelte-simple-modal';


	export let title='ほげほげ';
	export let task_type = 1;	// 1:checkin 2:checkout

	let booking_id = 10330199;
	let n;

	//booking_id=10330199
	//checkinとチェックアウト情報を取得する
	onMount(async function () {
		let url = `${import.meta.env.VITE_STRAPI_DOMAIN}/api/checkins?populate=deep`;
		let method = 'GET'; // POST,PUT

		$checkinStaffs = await strapi_get('checkins?populate=deep&filters[booking_id][$eq]='+booking_id);

		
		console.log("$checkinStaffs=", $checkinStaffs);

	})


	const clickDelete = (id) => {
		console.log("id=",id);
		let url = `${import.meta.env.VITE_STRAPI_DOMAIN}/api/checkins/${id}`;
		let method = 'DELETE';
		const json = generic_api(fetch, url, method, {});

		notifier.success('削除しました', 500);
		

		for ( let i = 0 ; i < $checkinStaffs.length ; i++ ) {
			let item = $checkinStaffs[i];
			if ( item.id == id){
				$checkinStaffs.splice(i,1);
				console.log("checkinStaffs=",$checkinStaffs);
				$checkinStaffs = $checkinStaffs;
				break;
			}
		}

	}



</script>


<div>
{title}
<table class="table-fixed bg-gray-200">
  <thead class="bg-gray-300">
    <tr>
      <th class="w-1/5 px-4 py-2">担当者名</th>
      <th class="w-1/5 px-4 py-2">時間</th>
      <th class="w-1/5 px-4 py-2">note</th>
      <th class="w-1/5 px-4 py-2">*</th>
      <th class="w-1/5 px-4 py-2">*</th>
    </tr>
  </thead>
  <tbody>
		{#each $checkinStaffs as res}
			{#if res.attributes.task_type == task_type}
				<tr>
					<td class="border px-4 py-2">{res.attributes.rep.data.attributes.name}</td>
					<td class="border px-4 py-2">{res.attributes.checkin_time.slice(0,-7)}</td>
					<td class="border px-4 py-2">{res.attributes.note}</td>
					<td class="border px-4 py-2"><Button label="削除" on:click={() => clickDelete(res.id)}></Button></td>
					<td class="border px-4 py-2">*</td>
				</tr>
			{/if}
		{/each}
	</tbody>
</table>

</div>

<NotificationDisplay bind:this={n} />
