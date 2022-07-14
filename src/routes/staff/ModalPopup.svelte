<script>
	// @ts-nocheck
	import {onMount, beforeUpdate, afterUpdate} from 'svelte';
	import Button from "$lib/components/Button.svelte"


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
			let avatar = `${import.meta.env.VITE_STRAPI_DOMAIN}`+response[i].attributes.staff.data.attributes.avatar.data.attributes.formats.thumbnail.url;

			let msg = {username: username, message: message, avatar: avatar}
			messages.push(msg);
			console.log("msg=",msg);
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


  //function changeActiveTab(event,tabID){
	const changeActiveTab = (event, tabID) => {
		console.log("changeActiveTab");

    let element = event.target;
    while(element.nodeName !== "A"){
      element = element.parentNode;
    }
    ulElement = element.parentNode.parentNode;
    aElements = ulElement.querySelectorAll("li > a");
    tabContents = document.getElementById("tabs-id").querySelectorAll(".tab-content > div");
    for(let i = 0 ; i < aElements.length; i++){
      aElements[i].classList.remove("text-white");
      aElements[i].classList.remove("bg-pink-600");
      aElements[i].classList.add("text-pink-600");
      aElements[i].classList.add("bg-white");
      tabContents[i].classList.add("hidden");
      tabContents[i].classList.remove("block");
    }
    element.classList.remove("text-pink-600");
    element.classList.remove("bg-white");
    element.classList.add("text-white");
    element.classList.add("bg-pink-600");
    document.getElementById(tabID).classList.remove("hidden");
    document.getElementById(tabID).classList.add("block");
  }
	




</script>




<div class="flex flex-wrap" id="tabs-id">
  <div class="w-full">
    <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
      <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
        <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal text-white bg-pink-600" onclick="changeAtiveTab(event,'tab-profile')">
          <i class="fas fa-space-shuttle text-base mr-1"></i>  Profile
        </a>
      </li>
      <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
        <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal text-pink-600 bg-white" onclick="changeAtiveTab(event,'tab-settings')">
          <i class="fas fa-cog text-base mr-1"></i>  Settings
        </a>
      </li>
      <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
        <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal text-pink-600 bg-white" onclick="changeAtiveTab(event,'tab-options')">
          <i class="fas fa-briefcase text-base mr-1"></i>  Options
        </a>
      </li>
    </ul>
    <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
      <div class="px-4 py-5 flex-auto">
        <div class="tab-content tab-space">
          <div class="block" id="tab-profile">
            <p>
              Collaboratively administrate empowered markets via
              plug-and-play networks. Dynamically procrastinate B2C users
              after installed base benefits.
              <br />
              <br />
              Dramatically visualize customer directed convergence
              without revolutionary ROI.
            </p>
          </div>
          <div class="hidden" id="tab-settings">
            <p>
              Completely synergize resource taxing relationships via
              premier niche markets. Professionally cultivate one-to-one
              customer service with robust ideas.
              <br />
              <br />
              Dynamically innovate resource-leveling customer service for
              state of the art customer service.
            </p>
          </div>
          <div class="hidden" id="tab-options">
            <p>
              Efficiently unleash cross-media information without
              cross-media value. Quickly maximize timely deliverables for
              real-time schemas.
              <br />
              <br />
              Dramatically maintain clicks-and-mortar solutions
              without functional solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!--<div class="content-container flex flex-col flex-auto h-full p-6 bg-gray-700">
	<div bind:this={divScroll} class="flex flex-col h-full overflow-x-auto mb-4 ">
		<div  class="flex flex-col h-full bg-green-600">
			<div class="grid grid-cols-12 gap-y-2 bg-green-600">
				Chat messages
				{#each messages as payload}
					<div class="col-start-1 col-end-8 p-3 rounded-lg">
						<div class="flex flex-row items-center">
							<img class="w-10 h-10 rounded-full" src={payload.avatar} alt="Rounded avatar">
							<div class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
								<p class='break-words whitespace-pre-wrap'>
									{payload.message}
								</p>
							</div>
						</div>
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
</div>-->
	


<style>

.content-container {
  height: calc(100vh - theme('spacing.40'));
}	
</style>