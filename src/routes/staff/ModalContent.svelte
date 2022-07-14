<!-- Content.svelte -->
<script>
  import { getContext } from 'svelte';
  import Popup from './ModalPopup.svelte';
	import Button from '$lib/components/Button.svelte'

  const { open } = getContext('simple-modal');

  const showSurprise = () => open(Popup, { message: "It's a modal!" });


</script>

<!--<p><button on:click={showSurprise}>Show me a surprise!</button></p>-->

<p><Button label="ログ" on:click={showSurprise}></Button></p>
