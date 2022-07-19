<script>
  import { writable } from 'svelte/store';
	import Modal, { bind } from 'svelte-simple-modal';
  import Popup from './simplePopup2.svelte';
  const modal = writable(null);
  const showModal = () => modal.set(bind(Popup, { message: 'Surprise' }));
</script>

<Modal show={$modal}
	unstyled={true}
  classBg="fixed top-0 left-0 w-screen h-screen flex flex-col justify-center bg-transparent"
  classWindowWrap="h-auto bg-transparent p-5"
  classWindow="bg-lime-400 p-1"
  classContent="bg-orange-300 p-1 "
  closeButton={true}

>
	<div class="text-center mt-10">
		<button on:click={showModal}>押して-2-！</button>
	</div>

</Modal>