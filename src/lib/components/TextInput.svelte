<script>

	export let type='';
	export let title='';
	export let content='';
	export let show = true;

</script>


<div>
	<label for="email" class="ml-3 mt-4 block text-xl text-gray-500">{title}</label>
	<div class="mt-1">
		{#if show}
			<input id="email" name="email" type={type} autocomplete="email" required class="w-4/5 w-full focus:bg-red-300 border-gray-100 rounded-lg shadow-sm" value={content}>
		{:else}
			<input id="email" name="email" type={type} autocomplete="email" required class="w-4/5 mx-2 bg-gray-200 border-gray-100  shadow-sm border-transparent border-none focus:ring-0 outline-none" value={content} readonly>
		{/if}
	</div>
</div>
