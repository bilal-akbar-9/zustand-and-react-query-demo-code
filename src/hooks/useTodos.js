import axios from "axios";
import { useQuery } from "@tanstack/react-query";
const useTodos = () => {
	const fetchTodos = async () => {
		const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos")
		return data;
	};

    return useQuery({
        queryKey: ["todos"],
        queryFn: fetchTodos,
    });
};

export default useTodos;