<script>
	// @ts-nocheck
	import {onMount, beforeUpdate, afterUpdate} from 'svelte';
	import Button from "$lib/components/Button.svelte"
	//import ChatBox from "$lib/components/ChatBox.svelte"
	import ChatBox from "$lib/components/ChatBox2.svelte"

	//import {ChatMessage} from "$lib/components/ChatMessage.svelte"

	//Utils
	import {strapi_get,
					browserGet,
					browserSet
	} from "$lib/req_utils.js"

	//import Pusher from 'pusher-js';
	import socket from 'socket.io-client'

	//Stores
	import {selected_room_name, selected_user_name, selected_staff_id} from "$lib/stores/index.js";

	//Connecting to Socket.io backend
	const io = socket(import.meta.env.VITE_STRAPI_DOMAIN);

	let welcome = {user:'',message:''}

	/**
* @type {{ offsetHeight: any; scrollTop: any; scrollHeight: number; scrollTo: (arg0: number, arg1: any) => void; }}
*/
	let divScroll;
	let autoscroll = false;


	/**
	* @type {any[]}
	*/
	let messages = [];
	let message = '';

	
	onMount(() => {

		$selected_user_name = browserGet("selected_user_name");
		$selected_room_name = browserGet("selected_room_name");
		$selected_staff_id = browserGet("selected_staff_id");

		// @ts-ignore
		io.emit("join", {username: $selected_user_name, name: $selected_room_name},(error) => {
			if (error) return alert(error);
		});
		
	})

	beforeUpdate(() => {
		console.log("beforeUpdate");
		// determine whether we should auto-scroll
		// once the DOM is updated...
		autoscroll = divScroll && (divScroll.offsetHeight + divScroll.scrollTop) > (divScroll.scrollHeight - 10);
	});

	afterUpdate(() => {
		console.log("afterUpdate");
		// ...the DOM is now in sync with the data
		if (autoscroll) divScroll.scrollTo(0, divScroll.scrollHeight);
	});

	io.on("welcome", async (data,error) => {
		let welcomeMessage = {
			user: data.user,
			message: data.text
		};
		welcome = welcomeMessage;
		console.log("welcome=",welcome);

		//接続したら、対象roomの全てのメッセージを取得する
		let response = await strapi_get('chats?populate=deep&filters[name][$eq]='+$selected_room_name);
		console.log("room_data=",response);
		for (let i=0; i < response.length; i++){
			console.log(`response[${i}]=`,response[i].attributes);
			let username = response[i].attributes.username;
			let message = response[i].attributes.message;
			let updatedAt = response[i].attributes.updatedAt;
			let avatar = `${import.meta.env.VITE_STRAPI_DOMAIN}`+response[i].attributes.staff.data.attributes.avatar.data.attributes.formats.thumbnail.url;

			let msg = {username, message, avatar, updatedAt}
			messages.push(msg);
			console.log("updatedAt=",updatedAt);
		}
		messages = messages;

	});

	//1.クライアントから投稿
	//2-1.サーバーで受け取れない場合、サーバでなにも処理されない
	//2-2.サーバーで受け取ったらDBに格納する
	//2-3.サーバーでDBに格納したら、そのまま送り返す
	//3.クライアントで送り返されたメッセージを表示する
	io.on("message", async (data, error) => {//Listening for a message connection
		console.log("data2=",data);
		let avatar = `${import.meta.env.VITE_STRAPI_DOMAIN}`+data.avatar;
		data.avatar = avatar;
		messages = [...messages, data];
		console.log("messages=",messages);

	});


	/**
* @param {any} msg
message
staff: id of staff
name: room name
username
*/
	const sendMessage = async () => {
		if (message) {
			// @ts-ignore
			console.log("message=", message);
			console.log("staff=", $selected_staff_id);
			console.log("username=", $selected_user_name);
			console.log("name=",$selected_room_name);

			let payload = { message, staff: $selected_staff_id, username: $selected_user_name, name: $selected_room_name };
			io.emit("sendMessage", payload, (error) => {
				if (error) {
					alert(error);
				}
			});
			message = '';
		} else {
			alert("Message can't be empty");
		}
	}

</script>


<div class="flex flex-col flex-auto h-100 p-2 bg-gray-700">
	<div bind:this={divScroll} class="flex flex-col overflow-x-auto mb-4 ">
		<div  class="flex flex-col bg-green-600">
			<div class="grid grid-cols-12 gap-y-2 bg-green-600">
				{#each messages as payload}
					<div class="col-start-1 col-end-8 p-3 rounded-lg">
						<ChatBox username={payload.username} avatar={payload.avatar} text={payload.message} timestamp={payload.updatedAt} />
					</div>
				{/each}												
			</div>
		</div>
	</div>

	<form for="form" on:submit|preventDefault={sendMessage}>
		<label for="chat" class="sr-only">Your message</label>
		<div class="flex items-center py-2 px-3 bg-gray-50 rounded-lg dark:bg-gray-700">
			<button type="button" class="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
				<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path></svg>
			</button>

			<button type="button" class="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
				<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clip-rule="evenodd"></path></svg>
			</button>

			<textarea id="input" rows="1" bind:value={message} class="form-control block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>

			<button type="submit" class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
				<svg class="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
			</button>
		</div>
	</form>
</div>



<style>

.content-container {
  height: calc(100vh - theme('spacing.10'));
}	
</style>