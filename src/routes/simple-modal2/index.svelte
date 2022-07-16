<script>
  import { writable } from 'svelte/store';
	import Modal, { bind } from 'svelte-simple-modal';
  import Popup from './simplePopup2.svelte';
  const modal = writable(null);
  const showModal = () => modal.set(bind(Popup, { message: 'Surprise' }));
</script>

<Modal show={$modal}>
	<div class="text-center mt-10">
		<button on:click={showModal}>押して-2-！</button>
	</div>

</Modal>