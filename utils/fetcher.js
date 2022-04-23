import { useSelector } from 'react-redux';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const useTodo = () => {
	const todo = useSelector((state) => state.todo.todo);
	return todo;
};

export const useSession = () => {
	const { data: session = {} } = useSWR('/api/getSession', fetcher);
	return session;
};

export const useUsers = () => {
	const { data: users = {} } = useSWR('/api/getUsers', fetcher);
	return users;
};
