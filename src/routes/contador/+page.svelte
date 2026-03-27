<script lang="ts">
	import {
		createInitialCounterState,
		getDoubledCount,
		incrementCounter
	} from '$lib/logic/contador/contador.logic';

	let counterState = $state(createInitialCounterState());
	let doubled = $derived(getDoubledCount(counterState.count));

	function increment() {
		counterState = incrementCounter(counterState);
	}
</script>

<section class="flex flex-col items-start gap-4">
	<button
		onclick={increment}
		class="cursor-pointer rounded bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-700"
	>
		Cliques: {counterState.count}
	</button>

	<p class="text-lg">O dobro e: {doubled}</p>
</section>
