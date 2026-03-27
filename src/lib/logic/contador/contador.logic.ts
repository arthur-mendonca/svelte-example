export type CounterState = {
	count: number;
};

export function createInitialCounterState(): CounterState {
	return { count: 0 };
}

export function incrementCounter(state: CounterState): CounterState {
	return {
		...state,
		count: state.count + 1
	};
}

export function getDoubledCount(count: number): number {
	return count * 2;
}
