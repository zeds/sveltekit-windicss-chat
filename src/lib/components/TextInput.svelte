<script>
//RadioButton.svelte

	export let id="fuga";
	export let title = '';
	export let show = false;
  export let value = '';
	export let type='text';

</script>


<div>
	<label for={id} class="ml-1 mt-4 block text-xl text-gray-500">{title}</label>
	<div class="m-1">

		{#if type=="text"}	
			{#if show}
				<input id={id} type=text bind:value={value} required class="w-90 rounded bg-gray-100 border-gray-80  shadow-sm border-transparent border-solid border-black focus:ring-0 outline-none">
			{:else}
				<input id={id} type=text bind:value={value} class="w-90 rounded focus:bg-red-300 border-gray-100 rounded-lg shadow-sm" readonly>
			{/if}
		{/if}

		{#if type=="time"}	
			{#if show}
				<input id={id} type=time bind:value={value} required class="w-90 rounded bg-gray-100 border-gray-80  shadow-sm border-transparent border-solid border-black focus:ring-0 outline-none">
			{:else}
				<input id={id} type=time bind:value={value} class="w-90 rounded focus:bg-red-300 border-gray-100 rounded-lg shadow-sm" readonly>
			{/if}
		{/if}

	</div>
</div>
