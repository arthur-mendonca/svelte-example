import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params, fetch }) => {
	const page = Number(params.page) || 1;
	const limit = 10;

	const response = await fetch(
		`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`,
	);
	const posts = await response.json();

	return { posts, page };
};
