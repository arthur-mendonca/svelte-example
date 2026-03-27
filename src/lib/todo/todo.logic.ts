export type Todo = {
	id: number;
	text: string;
	done: boolean;
};

export const initialTodos: Todo[] = [
	{ id: 1, text: "Estudar Runas do Svelte", done: false },
	{ id: 2, text: "Finalizar peticao do caso X", done: true },
];

export function addTodo(todos: Todo[], text: string): Todo[] {
	const trimmedText = text.trim();
	if (!trimmedText) {
		return todos;
	}

	return [...todos, { id: Date.now(), text: trimmedText, done: false }];
}

export function removeTodo(todos: Todo[], id: number): Todo[] {
	return todos.filter((todo) => todo.id !== id);
}

export function toggleTodo(todos: Todo[], id: number): Todo[] {
	return todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo));
}
