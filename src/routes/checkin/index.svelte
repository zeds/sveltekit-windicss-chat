<script>
  import { writable } from 'svelte/store';
	import Modal, { bind } from 'svelte-simple-modal';
  import CheckinPopup from './checkinPopup.svelte';
  const modal = writable(null);
  const showModal = () => modal.set(bind(CheckinPopup, { message: 'Surprise' }));
</script>

<Modal show={$modal}
	unstyled={true}
  classBg="m-1 bg-yellow-500 w-wcreen h-screen border-dashed border-1"
  classWindowWrap="flex items-center justify-center bg-blue-500 h-screen"
  classWindow="bg-gray-300 h-100 w-100"
  classContent="bg-gray-300"
  closeButton={true}

>
	<div class="text-center mt-10">
		<button on:click={showModal}>チェックイン,清掃担当者登録</button>
	</div>

</Modal>