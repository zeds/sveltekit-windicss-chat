<div class="content-container bg-gray-500 flex flex-col h-screen">
  <div class="flex h-32 bg-gray-200"></div>
  <div class="flex-1 w-2/3 mx-auto p-4 text-lg bg-white shadow-lg bg-gray-300">
    <router-view />
  </div>
</div>



<style>
	.content-container {
		height: calc(100vh - theme('spacing.20'));
	}	
</style>