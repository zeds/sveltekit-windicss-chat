<div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
	<form class="grid grid-cols-1 gap-6 m-16">
    <label class="block">
      <span class="text-gray-700">Full name</span>
      <input type="text"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        placeholder="">
    </label>
    <label class="block">
      <span class="text-gray-700">Email address</span>
      <input type="email"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        placeholder="john@example.com">
    </label>
    <label class="block">
      <span class="text-gray-700">When is your event?</span>
      <input type="date"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
    </label>
    <label class="block">
      <span class="text-gray-700">What type of event is it?</span>
      <select
        class="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
        <option>Corporate event</option>
        <option>Wedding</option>
        <option>Birthday</option>
        <option>Other</option>
      </select>
    </label>
    <label class="block">
      <span class="text-gray-700">Additional details</span>
      <textarea
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        rows="3"></textarea>
    </label>
    <div class="block">
      <div class="mt-2">
        <div>
          <label class="inline-flex items-center">
            <input type="checkbox"
              class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              checked="">
            <span class="ml-2">Email me news and special offers</span>
          </label>
        </div>
      </div>
    </div>
  </form>


	<div class="bg-white py-8 px-6 shadow rounded-lg sm:px-10">

		
		<form class="mb-0 space-y-6" action="#" method="POST">
			<div>
				<label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
				<div class="mt-1">
					<input id="email" name="email" type="email" autocomplete="email" required class="w-full border-gray-300 rounded-lg shadow-sm" />
				</div>
			</div>
			<div>
				<label for="password" class="block text-sm font-medium text-gray-700">Password</label>
				<div class="mt-1">
					<input id="password" name="password" type="password" autocomplete="current-password" required 
					class="w-full border-gray-300 rounded-lg shadow-sm" />
				</div>
			</div>

			<div>
				<label for="company-size" class="block text-sm font-medium text-gray-700">Company size</label>
				<div class="mt-1">
					<select type="text" name="company-size" id="company-size" class="w-full border-gray-300 rounded-lg shadow-sm">
						<option value="">Please select</option>
						<option value="small">1 to 10 employees</option>
						<option value="medium">11 to 50 employees</option>
						<option value="large">50+ employees</option>
					</select>
				</div>
			</div>

			<div>
				<button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-7-- focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign up</button>
			</div>

		</form>
	</div>
</div>