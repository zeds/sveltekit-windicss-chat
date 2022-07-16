<!-- Content.svelte -->
<script>
  import { getContext } from 'svelte';
  import Popup from './simplePopup.svelte';
  const { open } = getContext('simple-modal');
  const showSurprise = () => open(Popup, { message: "It's a modal!" });
</script>

<div class="text-center mt-10">
<p><button on:click={showSurprise}>押して！</button></p>
</div>
