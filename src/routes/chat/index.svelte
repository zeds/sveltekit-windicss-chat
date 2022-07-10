<script>
	import {onMount} from 'svelte';
	import Pusher from 'pusher-js';
	import io from 'socket.io-client'
	//Stores
	import {selected_room_name, selected_user_name} from "$lib/stores/index.js";

	let STRAPI_ENDPOINT = 'http://localhost:1337'
	//let STRAPI_ENDPOINT = 'https://code-school.biz:1443'

	var socket = io(STRAPI_ENDPOINT);

	let username = '';
	let msg = '';
	/**
* @type {any[]}
*/
	let messages = [];

	onMount(() => {
			Pusher.logToConsole = true;

			const pusher = new Pusher('', {
					cluster: ''
			});

			const channel = pusher.subscribe('chat');
			channel.bind('message', (/** @type {any} */ data) => {
					messages = [...messages, data];
			});

			//io.emit("join", {username: $selected_user_name},(error) =>{})
	})

	socket.on('chat message', function(msg) {
		console.log('chat message = ',msg);
		messages = [...messages, msg];
		console.log('messages = ',messages);
		console.log(typeof(msg));
	});


	const submit = async () => {
		console.log("button pressed!")
		socket.emit('chat', {msg,username: $selected_user_name});
		msg = '';
	}
</script>

<div class="container mx-10">
	user_name:{$selected_user_name}
	<br>
	room_name:{$selected_room_name}

	<div class="d-flex flex-column align-items-stretch flex-shrink-0 bg-white">
			<div class="list-group list-group-flush border-bottom scrollarea">
					{#each messages as payload}
							<div class="list-group-item list-group-item-action py-3 lh-tight">
									<div class="d-flex w-100 align-items-center justify-content-between">
											<!--<strong class="mb-1 ml-2">{payload.username}</strong>-->
											<strong class="mb-1 ml-2">{payload.username}</strong>
									</div>
									<div class="ml-3 col-10 mb-1 small">{payload.message}</div>
							</div>
					{/each}
			</div>
	</div>
	<form id="form" on:submit|preventDefault={submit}>
			<input id="input" class="form-control" placeholder="Write a message" bind:value={msg}/><button>Send</button>
	</form>
</div>

<style>
.scrollarea {
	min-height: 500px;
}
#form {
	background: rgba(0, 0, 0, 0.15);
	padding: 0.25rem;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	height: 3rem;
	box-sizing: border-box;
	backdrop-filter: blur(10px);
}
#form > button {
	background: #333;
	border: none;
	padding: 0 1rem;
	margin: 0.25rem;
	border-radius: 3px;
	outline: none;
	color: #fff;
}
#input {
	border: none;
	padding: 0 1rem;
	flex-grow: 1;
	border-radius: 2rem;
	margin: 0.25rem;
}
</style>
