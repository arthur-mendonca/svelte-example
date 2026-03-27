<script lang="ts">
	import { resolve } from "$app/paths";

	let { data } = $props();

	type Post = { id: number; title: string };
</script>

<ul class="flex flex-col gap-2">
	{#each data.posts as post (post.id)}
		<li class="rounded bg-gray-600 px-4 py-2">
			<strong>{post.id}</strong> — {(post as Post).title}
		</li>
	{/each}
</ul>

<nav class="mt-6 flex items-center gap-4">
	{#if data.page > 1}
		<a
			href={resolve("/posts/[page]", { page: String(data.page - 1) })}
			class="rounded bg-slate-600 px-3 py-1 text-white transition hover:bg-slate-500"
		>
			Anterior
		</a>
	{:else}
		<span class="cursor-default rounded bg-slate-800 px-3 py-1 text-gray-500">Anterior</span>
	{/if}

	<span>Página {data.page}</span>

	{#if data.page < 10}
		<a
			href={resolve("/posts/[page]", { page: String(data.page + 1) })}
			class="rounded bg-slate-600 px-3 py-1 text-white transition hover:bg-slate-500"
		>
			Próxima
		</a>
	{/if}
</nav>
