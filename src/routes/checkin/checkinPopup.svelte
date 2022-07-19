<script>
	import SelectList from "$lib/components/SelectList.svelte";
	import { onMount,getContext } from "svelte";
	import Button from "$lib/components/Button.svelte";

	const { close } = getContext('simple-modal');
	export let house_id=45056;
	export let house_name='ログ';
	export let booking_id=10330199;
	export let checkin_date='2022-07-20';
	export let task_type=1;	// 1:checkin 2:checkout
	let staff_id=0;
	let staff_name='';
	// note

	onMount(() => {
		console.log("onMount");
		console.log("staff_id=",staff_id);			//undefinedでOK
		console.log("staff_name=",staff_name);	//undefinedでOK
	})

	// 担当者
	const handleSelectedStaff = (e) => {
		console.log("handleSelectedStaff=",JSON.stringify(e.detail))
		staff_id = e.detail.id;
		staff_name = e.detail.name;
		//staff_id=0はDropDownが選択されていない状態です
	}

	const clickClose = () => {
		close();
	}

</script>

<div class="m-2 justify-center">
	<div>チェックイン担当者登録</div>
	<br>
	<div>予約ID：{booking_id}</div>
	<br>
	<div>施設ID：{house_id}</div>
	<br>
	<div>施設名：{house_name}</div>
	<br>
	<div>チェックイン日：{checkin_date}</div>
	<br>
	<div>時刻：<input type="time" /></div>
	<br>
	<div>担当者：</div>	<SelectList tableName="staffs" on:selectedList={handleSelectedStaff}/>

	<br>
	<div>note</div>
	<textarea class="h-20 w-full"/>
	<Button label="閉じる" on:click={() => clickClose()} />
	<Button label="保存" on:click={() => clickSave()} />

</div>
