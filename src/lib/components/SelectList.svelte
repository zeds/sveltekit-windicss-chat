<script>
	import { onMount } from "svelte";
	import { createEventDispatcher } from 'svelte';
	import { strapi_get } from "$lib/req_utils.js"

	//<Description>
	//return selected item.id item.name to parent component

	/**
	* @type {any[]}
	*/
	let items = []
	//注意！selected=0とすると、デフォルト項目名が表示されない
	let selected;	//デフォルトの項目名が表示されなかった。selectedという名前にしないとダメ？
	export let tableName='';

	onMount(async function () {
		console.log("onMount - SelectList");
		console.log("tableName=",tableName);
		//レコードを取得
		items = await strapi_get(tableName)
		console.log("items(SelectList)=",items)
  });

	//呼び出し元に取得した値を渡す
	const dispatch = createEventDispatcher();

	//項目が選択されたイベント
	function changeSelection() {
		console.log("selected=",selected);

		let id,name;
		if(selected==0){
			id=0;
			name='';
		}else{
			id = items[selected-1].id;
			name = items[selected-1].attributes.name;
		}

		const item = {
			id: id,
			name: name
		}
		dispatch('selectedList',item);
	}

$: console.log({selected});
</script>

<!--dropdownから、itemのindexが選択される。
先頭の"選択してください"が選択された場合は、selected=0
値を取得するには、items[selected-1].attributes.name-->

<select
	type="text"
	bind:value={selected}
	on:change="{() => changeSelection()}"
	class="w-3/4">
	<option value=0>▽ 選択してください</option>
	{#each items as item}
		<option value={item.id}>{item.attributes.name}</option>
	{/each}
</select>
