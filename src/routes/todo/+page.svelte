<script lang="ts">
	import {
		addTodo as addTodoToList,
		initialTodos,
		removeTodo as removeTodoFromList,
		toggleTodo,
		type Todo,
	} from "$lib/logic/todo/todo.logic";

	let todos: Todo[] = $state(initialTodos);
	let newTodoText = $state("");

	function addTodo() {
		todos = addTodoToList(todos, newTodoText);
		newTodoText = "";
	}

	function removeTodo(id: number) {
		todos = removeTodoFromList(todos, id);
	}

	function toggleTodoDone(id: number) {
		todos = toggleTodo(todos, id);
	}
</script>

<div class="flex flex-col gap-4 rounded border bg-gray-800 p-4">
	<h2 class="text-2xl font-bold">Minhas Tarefas</h2>

	<div class="flex gap-3">
		<input
			type="text"
			bind:value={newTodoText}
			class="rounded text-black"
			placeholder="O que precisa ser feito?"
			onkeydown={(e) => e.key === "Enter" && addTodo()}
		/>
		<button
			onclick={addTodo}
			class="cursor-pointer rounded border bg-blue-950 p-2 text-white transition hover:bg-blue-700"
		>
			Adicionar
		</button>
	</div>

	<ul>
		{#each todos as todo (todo.id)}
			<li
				class={`mb-2 flex items-center gap-3 rounded px-2 py-1 transition ${todo.done ? "bg-emerald-900/30" : ""}`}
			>
				<input
					type="checkbox"
					checked={todo.done}
					onchange={() => toggleTodoDone(todo.id)}
					class="h-4 w-4 accent-emerald-500"
				/>
				<span
					class="flex-1 transition"
					class:line-through={todo.done}
					class:text-gray-400={todo.done}
				>
					{todo.text}
				</span>
				<button
					onclick={() => removeTodo(todo.id)}
					class="cursor-pointer rounded border border-red-700 px-2 py-1 text-sm text-red-300 transition hover:bg-red-900/40"
				>
					X
				</button>
			</li>
		{:else}
			<p>Nada para fazer por enquanto! 🎉</p>
		{/each}
	</ul>
</div>
