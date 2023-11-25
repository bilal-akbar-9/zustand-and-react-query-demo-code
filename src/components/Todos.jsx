import useTodos from "../hooks/useTodos";

const Todos = () => {
	const { error, isLoading, data } = useTodos();
	return (
		<>
			{error && <div>{error}</div>}
			{isLoading && <div>Loading...</div>}
			{data && data.map((todo) => <div key={todo.id}>{todo.title}</div>)}
		</>
	);
};

export default Todos;
