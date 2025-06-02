<script>
	import Navbar from '$lib/components/navbar.svelte';
	import Generalinfo from '$lib/components/generalinfo.svelte';
	import Vehicleinfo from '$lib/components/vehicleinfo.svelte';
	import Payment from '$lib/components/payment.svelte';

	let formpage = $state(0);

	function nextForm() {
		if (formpage < 2) {
			formpage += 1;
		}
	}
	function prevForm() {
		if (formpage > 0) {
			formpage -= 1;
		}
	}
</script>

<Navbar />
<section class="mt-40 flex w-full flex-col items-center">
	<div class="flex flex-col items-center gap-7">
		<h1 class="text-4xl">Automatisk Registering af Parkering</h1>
		<p class="text-gray-500">Indtast oplysninger om dig og din bil herunder for at fortsætte</p>
	</div>
</section>

<section class="mt-30 h-full">
	<div class="flex h-full flex-col items-center">
		<div class="min-h-115 min-w-200 rounded-xl border-1 border-gray-200 p-10 shadow-lg">
			<form class="" action="register">
				<div class="min-h-80">
					<!-- Info om bruger (navn, email, adresse og kodeord)-->
					{#if formpage === 0}
						<Generalinfo />
					{/if}
					<!-- Registering af bil -->
					{#if formpage === 1}
						<Vehicleinfo />
					{/if}
					<!-- Betaling -->
					{#if formpage === 2}
						<Payment />
					{/if}
					<!-- Buttons -->
				</div>
				<div class="mr-5 flex justify-end gap-5">
					{#if formpage > 0}
						<button
							type="button"
							onclick={() => {
								prevForm();
							}}
							id="form-next-btn"
							class="px-5 py-2 font-sans tracking-wide text-gray-400 hover:text-gray-600
						">Tilbage</button
						>
					{/if}
					{#if formpage < 2}
						<button
							type="button"
							onclick={() => {
								nextForm();
							}}
							id="form-prev-btn"
							class="box-border rounded px-5 py-2 font-sans tracking-wide text-blue-600 outline-1 outline-blue-600 hover:text-blue-700 hover:outline-2 hover:outline-blue-700
						">Næste</button
						>
					{/if}
					{#if formpage === 2}
						<button
							type="button"
							onclick={() => {
								console.log('betalt!');
							}}
							id="form-pay-btn"
							class="box-border rounded bg-blue-600 px-5 py-2 font-sans tracking-wide text-white hover:bg-blue-700 hover:text-white
						">Betal</button
						>
					{/if}
				</div>
			</form>
		</div>
	</div>
</section>
