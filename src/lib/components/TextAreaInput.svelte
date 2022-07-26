<script>
	//RadioButton.svelte
	
		export let title = '';
		export let show = false;
		export let value = 'ほげ';
	
	</script>
	
	
	<div>
		<label for="TextInput" class="ml-1 mt-4 block text-xl text-gray-500">{title}</label>
		<div class="m-1">
			{#if show}
				<textarea
					bind:value={value}
					class="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
					rows="3"></textarea>
				{:else}
				<textarea
					bind:value={value}
					class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
					rows="3" readonly></textarea>
			{/if}
		</div>
	</div>
	