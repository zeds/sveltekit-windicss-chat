<script>
  import { onMount } from 'svelte';
  import { scale } from 'svelte/transition';
// @ts-nocheck

  import moment from "moment";
  import clsx from "clsx";

  export let text="あいうえお";
  export let timestamp;
  export let username;
	export let avatar;
  export let isSender = false;
	export let staffId;


	let show = false;
	let menu = null;

  onMount(() => {
    const handleOutsideClick = (event) => {
      if (show && !menu.contains(event.target)) {
        show = false;
      }
    };

    const handleEscape = (event) => {
      if (show && event.key === 'Escape') {
        show = false;
      }
    };

    // add events when element is added to the DOM
    document.addEventListener('click', handleOutsideClick, false);
    document.addEventListener('keyup', handleEscape, false);

    // remove events when element is removed from the DOM
    return () => {
      document.removeEventListener('click', handleOutsideClick, false);
      document.removeEventListener('keyup', handleEscape, false);
    };
  });

	/**
	* @param {string} id: staff_id
	*/
	function profile(id) {
		window.open('/profile?staffId='+id);
		show = false;
	}




</script>

<div bind:this={menu} class={clsx("relative flex pb-1 px-1", isSender ? "justify-end" : "justify-start")}>
	<!--Avatar-->
	<button
		on:click={() => (show = !show)}
		class="menu mr-2 focus:outline-none focus:shadow-solid"
	>
		<img class="rounded-full" src={avatar} alt="Rounded avatar">
	</button>

  <div class={clsx("relative w-400 px-2 break-all rounded text-sm  py-1 ", isSender ? "bg-gray-200": "bg-white")}>
    {#if !isSender}
      <div class="font-bold text-gray-600">
        {username}
      </div>
    {/if}
    <span class='break-words whitespace-pre-wrap'>{text}<span>
    <span style="font-size:10px" class={clsx("absolute mx-2 my-1 break-all text-gray-500  bottom-0 right-0")}>
      {moment(timestamp).format("LT")}
    <span>
  </div>

	{#if show}
		<!-- svelte-ignore missing-declaration -->
		<div
			in:scale={{ duration: 100, start: 0.95 }}
			out:scale={{ duration: 75, start: 0.95 }}
			class="z-50 origin-top-right absolute right-0 w-48 py-2 mt-1 bg-gray-200
				rounded shadow-md"
		>
			<p on:click={()=>profile(staffId)}
				class="block px-4 py-2 hover:bg-green-500 hover:text-green-100"
			>Profile</p>
			<a
				href="/api/logout"
				class="block px-4 py-2 hover:bg-green-500 hover:text-green-100"
			>Logout</a>
		</div>
	{/if}



</div>