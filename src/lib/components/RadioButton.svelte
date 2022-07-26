<script>

	export let title = '';
	export let show = false;
  export let value = '';
	export let group = 'aaaaa';
	export let scoops = '';


	//2022-07-22 汎用的なコードにならないので、一旦停止

</script>

<label>
	<input type=radio bind:group={scoops} name="scoops" bind:value={value}>
	チェックイン
</label>

<label>
	<input type=radio bind:group={scoops} name="scoops" bind:value={value}>
	清掃
</label>


