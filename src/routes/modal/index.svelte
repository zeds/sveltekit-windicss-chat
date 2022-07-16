<script>
  import { writable } from 'svelte/store';
	import Modal, { bind } from './Modal.svelte';
  import Popup from './Popup.svelte';
  const modal = writable(null);
  const showModal = () => modal.set(bind(Popup, { message: 'Surprise' }));
</script>

<svelte:head>
	<script src="https://cdn.tailwindcss.com"></script>
</svelte:head>

<Modal
  show={$modal}
  unstyled={true}
  classBg="fixed top-0 left-0 w-screen h-screen flex flex-col justify-center bg-gray-500"
  classWindowWrap="relative m-2 max-h-full"
  classWindow="relative w-40 max-w-full max-h-full my-2 mx-auto text-orange-200 rounded shadow-md bg-orange-900"
  classContent="relative p-2 overflow-auto"
  closeButton={true}
>
  <button
    class="py-1 px-2 rounded"
    on:click={showModal}
  >
    Show modal
  </button>
</Modal>