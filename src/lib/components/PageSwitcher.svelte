<script lang="ts">
	import { resolve } from "$app/paths";

	type AppRoute = "/" | "/contador" | "/sobre" | "/todo" | "/posts" | "/effect";

	type NavButton = {
		label: string;
		href: AppRoute;
	};

	let {
		buttons = [],
	}: {
		buttons?: NavButton[];
	} = $props();
</script>

<nav class="flex flex-wrap gap-3" aria-label="Navegacao de paginas">
	{#each buttons as button (button.href)}
		<div>
			<a
				href={resolve(button.href)}
				class="rounded bg-slate-900 px-4 py-2 text-white transition hover:bg-slate-700"
			>
				{button.label}
			</a>
		</div>
	{/each}
</nav>
