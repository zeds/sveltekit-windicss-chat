<script>
  //
	export let bg_color = 'bg-green-600'
	export let text_color = 'text-white'
  export let label = 'Your text here'
	export let append = ''
	export let myClass = ''

</script>
<span class="inline-block ml-0">
  <button
    on:click 
    class='{myClass} py-1 px-1 {text_color} text-xs font-medium border {bg_color} hover:bg-blue-700 rounded'>
		{#if append != ''}
	    {label}-{append}
		{:else}
			{label}
		{/if}
  </button>
</span>