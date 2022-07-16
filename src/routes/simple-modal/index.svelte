<!-- App.svelte -->
<script>
  import Content from './simpleContent.svelte';
  import Modal from 'svelte-simple-modal';
</script>

<Modal
unstyled={true}
	comment="Make this transparent later"
  classBg="fixed transparent top-0 left-0 w-screen h-screen flex flex-col justify-center"
  classWindowWrap="bg-red-500 p-2"
  classWindow="bg-green-200 p-2"
  classContent="bg-gray-500 h-full p-2"
  closeButton={true}
>
	<Content />
</Modal>
