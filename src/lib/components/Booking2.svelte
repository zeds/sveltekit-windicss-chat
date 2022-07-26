<script>
	import TextInput from '$lib/components/TextInput.svelte'

	let data = {
    "data": [
        {
            "id": 10211096,
            "uid": "V056-RHNIWI0I",
            "guestnum": 3,
            "summary": "あしざわ えみ (V056-RHNIWI0I)",
            "status": "confirmed",
            "checkin_type": null,
            "checkin_status": "checked_in",
            "source": "rakuten",
            "created_at": "2022-05-22T15:54:16.154+09:00",
            "updated_at": "2022-07-03T05:25:08.772+09:00",
            "payment_status": "paid",
            "currency": "JPY",
            "reservation_site": null,
            "payment_method": "ota_collect",
            "adultnum": 3,
            "childnum": 0,
            "infantnum": 0,
            "description": null,
            "user": {
                "name": "あしざわ えみ",
                "email": "V056-RHNIWI0I@guest.vacation-stay.jp",
                "language": "ja",
                "phone": "08050660211",
                "address": null,
                "country": "Japan",
                "postal_code": null
            },
            "room": {
                "id": 33428,
                "name": "GLOCE Japanese Style Old House in Hayama 葉山の古民家",
                "room_unit": "101"
            },
            "house": {
                "id": 45050,
                "name": "S-H4.古民家  宮内様"
            },
            "fees": [
                {
                    "fee_type": "per_day",
                    "amount": 38193,
                    "included": false,
                    "paid": true,
                    "date": "2022-07-02",
                    "description": "Default Rate"
                },
                {
                    "included": true,
                    "paid": true,
                    "fee_type": "other_fee",
                    "amount": "3472.0"
                }
            ],
            "booking_fees": [
                {
                    "id": 2813288,
                    "fee_type": "extra",
                    "dtdate": "2022-07-16",
                    "description": "人数の追加料金",
                    "amount": "3000.0",
                    "included": false,
                    "paid": true
                }
            ],
            "cancellation_fee": null,
            "tasks": [
                {
                    "type": "checkout",
                    "date": "2022-07-03",
                    "status": "pending"
                }
            ],
            "start_date": "2022-07-02 03:00:00",
            "end_date": "2022-07-03 11:00:00",
            "room_id": 33428
        },
        {
            "id": 10291390,
            "uid": "HM353HSSQ2",
            "guestnum": 3,
            "summary": "安武 祥平 (HM353HSSQ2)",
            "status": "confirmed",
            "checkin_type": null,
            "checkin_status": "checked_in",
            "source": "airbnb2",
            "created_at": "2022-06-16T16:39:49.236+09:00",
            "updated_at": "2022-07-06T05:24:38.656+09:00",
            "payment_status": "paid",
            "currency": "JPY",
            "reservation_site": null,
            "payment_method": "ota_collect",
            "adultnum": 2,
            "childnum": 0,
            "infantnum": 1,
            "description": null,
            "user": {
                "name": "安武 祥平",
                "email": "guest-464508196@no-email-supplied.co",
                "language": "ja",
                "phone": "819050797927",
                "address": null,
                "country": "Japan",
                "postal_code": null
            },
            "room": {
                "id": 33428,
                "name": "GLOCE Japanese Style Old House in Hayama 葉山の古民家",
                "room_unit": "101"
            },
            "house": {
                "id": 45050,
                "name": "S-H4.古民家  宮内様"
            },
            "fees": [
                {
                    "fee_type": "per_day",
                    "amount": 24150,
                    "included": false,
                    "paid": true,
                    "date": "2022-07-04",
                    "description": "Perday 2022-07-04"
                },
                {
                    "fee_type": "per_day",
                    "amount": 24150,
                    "included": false,
                    "paid": true,
                    "date": "2022-07-05",
                    "description": "Perday 2022-07-05"
                },
                {
                    "included": true,
                    "paid": true,
                    "fee_type": "channel_fee",
                    "amount": "8445.0"
                },
                {
                    "included": false,
                    "paid": true,
                    "fee_type": "cleaning_fee",
                    "amount": "8000.0"
                }
            ],
            "booking_fees": [],
            "cancellation_fee": null,
            "tasks": [
                {
                    "type": "checkout",
                    "date": "2022-07-06",
                    "status": "pending"
                }
            ],
            "start_date": "2022-07-04 03:00:00",
            "end_date": "2022-07-06 11:00:00",
            "room_id": 33428
        },
        {
            "id": 10146494,
            "uid": "V056-M3YKOYES",
            "guestnum": 2,
            "summary": "じんの あきら (V056-M3YKOYES)",
            "status": "confirmed",
            "checkin_type": null,
            "checkin_status": "checked_in",
            "source": "rakuten",
            "created_at": "2022-04-28T00:27:06.349+09:00",
            "updated_at": "2022-07-10T05:25:54.958+09:00",
            "payment_status": "paid",
            "currency": "JPY",
            "reservation_site": null,
            "payment_method": "ota_collect",
            "adultnum": 2,
            "childnum": 0,
            "infantnum": 0,
            "description": null,
            "user": {
                "name": "じんの あきら",
                "email": "V056-M3YKOYES@guest.vacation-stay.jp",
                "language": "ja",
                "phone": "07010711517",
                "address": null,
                "country": "Japan",
                "postal_code": null
            },
            "room": {
                "id": 33428,
                "name": "GLOCE Japanese Style Old House in Hayama 葉山の古民家",
                "room_unit": "101"
            },
            "house": {
                "id": 45050,
                "name": "S-H4.古民家  宮内様"
            },
            "fees": [
                {
                    "fee_type": "per_day",
                    "amount": 34832,
                    "included": false,
                    "paid": true,
                    "date": "2022-07-09",
                    "description": "Default Rate"
                },
                {
                    "included": true,
                    "paid": true,
                    "fee_type": "other_fee",
                    "amount": "3166.0"
                }
            ],
            "booking_fees": [],
            "cancellation_fee": null,
            "tasks": [
                {
                    "type": "checkout",
                    "date": "2022-07-10",
                    "status": "pending"
                }
            ],
            "start_date": "2022-07-09 03:00:00",
            "end_date": "2022-07-10 11:00:00",
            "room_id": 33428
        }		
		]
	}

	let id = data.data[0].id;
	let guestnum = data.data[0].guestnum;
	let summary = data.data[0].summary;
	let status = data.data[0].status;
	let checkin_type = data.data[0].checkin_type;
	let source = data.data[0].source;
	let created_at = data.data[0].created_at;
	let updated_at = data.data[0].updated_at;
	let payment_status = data.data[0].payment_status;
	let currency = data.data[0].currency;
	let reservation_site = data.data[0].reservation_site;
	let payment_method = data.data[0].payment_method;
	let adultnum = data.data[0].adultnum;
	let childnum = data.data[0].childnum;
	let infantnum = data.data[0].infantnum;

	let user_name = data.data[0].user.name;
	let user_email = data.data[0].user.email;
	let user_language = data.data[0].user.language;
	let user_phone = data.data[0].user.phone;
	let user_address = data.data[0].user.address;
	let user_country = data.data[0].user.country;
	let user_postal_code = data.data[0].user.postal_code;

	let room_id = data.data[0].room.id;
	let room_name = data.data[0].room.name;
	let room_room_unit = data.data[0].room.room_unit;

	let house_id = data.data[0].house.id;
	let house_name = data.data[0].house.name;

	let fees = data.data[0].fees;
	//for ( let i=0; i<data.data[0].fees.length; i++){
	//	let fee_type = data.data[0].fees[i].fee_type;
	//	let amount = data.data[0].fees[i].amount;
	//	let included = data.data[0].fees[i].included;
	//	let paid = data.data[0].fees[i].paid;
	//	let date = data.data[0].fees[i].date;
	//	let description = data.data[0].fees[i].description;

	//	let fee = {fee_type, amount, included, paid, date, description}
	//	fees.push(fee);
	//}
	console.log("fees=",fees);

	let booking_fees = data.data[0].booking_fees;
	let cancellation_fee = data.data[0].cancellation_fee;

	let tasks = data.data[0].tasks;

	let start_date = data.data[0].start_date;
	let end_date = data.data[0].end_date;
	//let room_id = data.data[0].room_id;

	console.log("tasks=",tasks);

</script>

<div class="overflow-auto h-200">


<div class='flex flex-wrap'>
  <div class='w-full md:w-1/2 bg-white pb-4'>
    <div class="font-bold p-2">基本情報</div>
		<TextInput type="text" title="id" value={id} show={false} />
		<TextInput type="text" title="start_date" value={start_date} show={false} />
		<TextInput type="text" title="end_date" value={end_date} show={false} />
		<TextInput type="text" title="guestnum" value={guestnum} show={false} />
		<TextInput type="text" title="summary" value={summary} show={false} />
		<TextInput type="text" title="status" value={status} show={false} />
		<TextInput type="text" title="checkin_type" value={checkin_type} show={false} />
		<TextInput type="text" title="created_at" value={created_at} show={false} />
		<TextInput type="text" title="updated_at" value={updated_at} show={false} />

		<TextInput type="text" title="payment_status" value={payment_status} show={false} />
		<TextInput type="text" title="currency" value={currency} show={false} />
		<TextInput type="text" title="reservation_site" value={reservation_site} show={false} />
		<TextInput type="text" title="payment_method" value={payment_method} show={false} />
		<TextInput type="text" title="adultnum" value={adultnum} show={false} />
		<TextInput type="text" title="childnum" value={childnum} show={false} />
		<TextInput type="text" title="infantnum" value={infantnum} show={false} />

	</div>


  <div class='w-full md:w-1/2 bg-white pb-4'>
    <div class="font-bold p-2">ユーザー情報</div>
		<TextInput type="text" title="user_name" value={user_name} show={false} />
		<TextInput type="text" title="user_email" value={user_email} show={false} />
		<TextInput type="text" title="user_language" value={user_language} show={false} />
		<TextInput type="text" title="user_phone" value={user_phone} show={false} />
		<TextInput type="text" title="user_address" value={user_address} show={false} />
		<TextInput type="text" title="user_country" value={user_country} show={false} />
		<TextInput type="text" title="user_postal_code" value={user_postal_code} show={false} />
		<br>
    <div class="font-bold p-2">施設情報</div>
		<TextInput type="text" title="room_id" value={room_id} show={false} />
		<TextInput type="text" title="room_name" value={room_name} show={false} />
		<TextInput type="text" title="room_room_unit" value={room_room_unit} show={false} />
		<TextInput type="text" title="house_id" value={house_id} show={false} />
		<TextInput type="text" title="house_name" value={house_name} show={false} />
		<br>
		<TextInput type="text" title="cancellation_fee" value={cancellation_fee} show={false} />
		<br>
    <div class="font-bold p-2">タスク</div>
		<div class="ml-3">
			<table class="table-fixed bg-gray-200">
				<thead class="bg-gray-300">
					<tr>
						<th class="w-1/3 px-4 py-2">type</th>
						<th class="w-1/3 px-4 py-2">date</th>
						<th class="w-1/3 px-4 py-2">status</th>
					</tr>
				</thead>
				<tbody>
					{#each tasks as task }
						<tr>
							<td class="border px-4 py-2">{task.type}</td>
							<td class="border px-4 py-2">{task.date}</td>
							<td class="border px-4 py-2">{task.status}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</div>

<div class="font-bold p-2">支払い情報</div>
<table class="table-fixed bg-gray-200">
  <thead class="bg-gray-300">
    <tr>
      <th class="w-1/6 px-4 py-2">fee_type</th>
      <th class="w-1/6 px-4 py-2">amount</th>
      <th class="w-1/6 px-4 py-2">included</th>
      <th class="w-1/6 px-4 py-2">paid</th>
      <th class="w-1/6 px-4 py-2">date</th>
      <th class="w-1/6 px-4 py-2">description</th>
    </tr>
  </thead>
  <tbody>
		{#each fees as fee }
			<tr>
				<td class="border px-4 py-2">{fee.fee_type}</td>
				<td class="border px-4 py-2">{fee.amount}</td>
				<td class="border px-4 py-2">{fee.included}</td>
				<td class="border px-4 py-2">{fee.paid}</td>
				<td class="border px-4 py-2">{fee.date}</td>
				<td class="border px-4 py-2">{fee.description}</td>
			</tr>
		{/each}
  </tbody>
</table>

<div class="font-bold p-2">支払い情報(booking_fee}</div>

<table class="table-fixed bg-gray-200">
  <thead class="bg-gray-300">
    <tr>
      <th class="w-1/6 px-4 py-2">fee_type</th>
      <th class="w-1/6 px-4 py-2">amount</th>
      <th class="w-1/6 px-4 py-2">included</th>
      <th class="w-1/6 px-4 py-2">paid</th>
      <th class="w-1/6 px-4 py-2">date</th>
      <th class="w-1/6 px-4 py-2">description</th>
    </tr>
  </thead>
  <tbody>
		{#each booking_fees as fee }
			<tr>
				<td class="border px-4 py-2">{fee.fee_type}</td>
				<td class="border px-4 py-2">{fee.amount}</td>
				<td class="border px-4 py-2">{fee.included}</td>
				<td class="border px-4 py-2">{fee.paid}</td>
				<td class="border px-4 py-2">{fee.date}</td>
				<td class="border px-4 py-2">{fee.description}</td>
			</tr>
		{/each}
  </tbody>
</table>


</div>