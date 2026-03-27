<script>
	import Chart from "chart.js/auto";

	let chartData = $state([10, 20, 15, 30]);
	let windowWidth = $state(0);
	let chartCanvas;
	let chartInstance = null; // Não precisa ser $state, é só a referência da lib

	function getLabels(data) {
		return data.map((_, i) => `Dado ${i + 1}`);
	}

	function getDatasetValues(data) {
		return [...data];
	}

	$effect(() => {
		if (!chartCanvas) return; // Aguarda o DOM montar

		if (!chartInstance) {
			// Cria o gráfico na primeira vez
			chartInstance = new Chart(chartCanvas, {
				type: "bar",
				data: {
					labels: getLabels(chartData),
					datasets: [
						{
							label: "Vendas",
							data: getDatasetValues(chartData),
							backgroundColor: "#ff3e00",
						},
					],
				},
				options: { responsive: true, maintainAspectRatio: false },
			});
		} else {
			// Se o chartData mudar, apenas atualiza os dados da instância existente
			chartInstance.data.labels = getLabels(chartData);
			chartInstance.data.datasets[0].data = getDatasetValues(chartData);
			chartInstance.update();
		}

		// Função de limpeza (Cleanup)
		return () => {
			// Só destrói o gráfico se o canvas tiver sido removido da tela (ex: mudou de página)
			if (chartInstance && chartCanvas && !document.contains(chartCanvas)) {
				chartInstance.destroy();
				chartInstance = null;
			}
		};
	});
</script>

<svelte:window bind:innerWidth={windowWidth} />

<div class="dashboard">
	<h2>Dashboard Real com Chart.js</h2>
	<p>Largura da Janela: {windowWidth}px</p>

	<div class="chart-container">
		<canvas bind:this={chartCanvas}></canvas>
	</div>

	<div class="controls">
		<button onclick={() => (chartData = [...chartData, Math.floor(Math.random() * 50)])}>
			Adicionar Dado
		</button>
		<button onclick={() => (chartData = [10, 20, 15, 30])}> Resetar Dados </button>
	</div>
</div>

<style>
	.dashboard {
		padding: 2rem;
		font-family: sans-serif;
	}
	.chart-container {
		width: 100%;
		height: 300px;
		background: #f4f4f4;
		margin: 1rem 0;
		padding: 1rem;
		border-radius: 8px;
	}
	.controls {
		display: flex;
		gap: 10px;
	}
	button {
		padding: 10px 20px;
		cursor: pointer;
		border: none;
		background: #333;
		color: white;
		border-radius: 4px;
	}
	button:hover {
		background: #555;
	}
</style>
