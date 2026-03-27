<script lang="ts">
	import { page } from "$app/state";
	import "./layout.css";
	import favicon from "$lib/assets/favicon.svg";
	import PageSwitcher from "$lib/components/PageSwitcher.svelte";

	const navButtons: Array<{
		label: string;
		href: "/" | "/contador" | "/sobre" | "/todo" | "/posts";
	}> = [
		{ label: "Inicio", href: "/" },
		{ label: "Contador", href: "/contador" },
		{ label: "Sobre", href: "/sobre" },
		{ label: "To-do", href: "/todo" },
		{ label: "Posts", href: "/posts" },
		{ label: "Effect", href: "/effect" },
	];

	function getPageTitle(pathname: string) {
		if (pathname === "/") {
			return "Pagina Inicial";
		} else if (pathname === "/todo") {
			return "Lista de Tarefas";
		}

		const lastSegment = pathname.split("/").filter(Boolean).at(-1) ?? "";
		const normalizedSegment = decodeURIComponent(lastSegment).replace(/[-_]+/g, " ");

		return normalizedSegment
			.split(" ")
			.filter(Boolean)
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(" ");
	}

	const pageTitle = $derived(getPageTitle(page.url.pathname));

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>{pageTitle}</title>
</svelte:head>

<div class="min-h-screen w-full bg-gray-700 px-6 py-8 text-white">
	<div class="mx-auto mb-10 max-w-2xl">
		<PageSwitcher buttons={navButtons} />
	</div>

	<main class="mx-auto max-w-2xl">
		<h1 class="mb-6 text-3xl font-bold">{pageTitle}</h1>
		{@render children()}
	</main>
</div>
