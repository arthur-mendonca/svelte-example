<script>
	let count = $state(0);

	// Isso roda uma vez na montagem e
	// sempre que 'count' mudar.
	$effect(() => {
		console.log(`O contador agora é: ${count}`);

		// Função de limpeza (cleanup)
		return () => {
			console.log("Limpando efeito anterior...");
		};
	});
</script>

<button class="cursor-pointer rounded border bg-blue-800 p-2" onclick={() => count++}>
	Clicar para incrementar
</button>
