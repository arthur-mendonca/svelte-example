<script lang="ts">
	let count = $state(0);
	let doubled = $derived(count * 2);

	function increment() {
		count += 1;
	}
</script>

<section class="flex flex-col items-start gap-4">
	<button
		onclick={increment}
		class="cursor-pointer rounded bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-700"
	>
		Cliques: {count}
	</button>

	<p class="text-lg">O dobro e: {doubled}</p>
</section>
