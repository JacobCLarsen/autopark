<script>
	let {
		name = $bindable(),
		phone = $bindable(),
		email = $bindable(),
		password = $bindable(),
		address = $bindable(),
		errors,
		...props
	} = $props();
</script>

<div id="user-info-form" class="grid grid-cols-2 grid-rows-3 gap-5 p-5">
	<div class="flex flex-col gap-1.5">
		<label class="text-gray-500" for="name">Navn</label>
		<input
			class="col-span-1 rounded text-gray-800 placeholder:text-gray-400 {errors?.name
				? 'border-red-500'
				: 'border-gray-300'}"
			type="text"
			placeholder="Michael Rune"
			name="name"
			bind:value={name}
			{...props}
		/>
		<p class="text-sm text-red-400">{errors?.name}</p>
	</div>

	<div class="flex flex-col gap-1.5">
		<label class="text-gray-500" for="phone">Telefonnummer</label>
		<input
			class="col-span-1 rounded text-gray-800 placeholder:text-gray-400 {errors?.phone
				? 'border-red-500'
				: 'border-gray-300'}"
			type="text"
			placeholder="+45 12 34 56 78"
			name="phone"
			bind:value={phone}
			{...props}
		/>
		<p class="text-sm text-red-400">{errors?.phone}</p>
	</div>

	<div class="flex flex-col gap-1.5">
		<label class="text-gray-500" for="email">Email</label>
		<input
			class="col-span-1 rounded text-gray-800 placeholder:text-gray-400 {errors?.email
				? 'border-red-500'
				: 'border-gray-300'}"
			type="text"
			placeholder="email@unipark.dk"
			name="email"
			bind:value={email}
			{...props}
		/>
		<p class="text-sm text-red-400">{errors?.email}</p>
	</div>

	<div class="flex flex-col gap-1.5">
		<label class="text-gray-500" for="password">Kodeord</label>
		<input
			class="col-span-1 rounded text-gray-800 placeholder:text-gray-400 {errors?.password
				? 'border-red-500'
				: 'border-gray-300'}"
			type="password"
			placeholder="* * * * * * *"
			name="password"
			bind:value={password}
			{...props}
		/>
		<p class="text-sm text-red-400">{errors?.password}</p>
	</div>

	<div class="col-span-2 flex flex-col gap-1.5">
		<label class="text-gray-500" for="address">Addresse</label>
		<input
			class="col-span-1 rounded text-gray-800 placeholder:text-gray-400 {errors?.address
				? 'border-red-500'
				: 'border-gray-300'}"
			type="text"
			placeholder="Begynd at skrive ..."
			name="address"
			bind:value={address}
			{...props}
		/>
		<p class="text-sm text-red-400">{errors?.address}</p>
	</div>
</div>
