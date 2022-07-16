<script>
// @ts-nocheck

  import moment from "moment";
  import clsx from "clsx";

  export let text="あいうえお";
  export let timestamp;
  export let username;
	export let avatar;

  export let isSender = false;
</script>

<div class={clsx("relative flex pb-1 px-1", isSender ? "justify-end" : "justify-start")}>
	<img class="w-10 h-10 rounded-full mr-3" src={avatar} alt="Rounded avatar">
  <div class={clsx("relative w-200 px-2 break-all rounded text-sm  py-1 ", isSender ? "bg-gray-200": "bg-white")}>
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
</div>