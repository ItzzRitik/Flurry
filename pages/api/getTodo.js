import todoList from '../../data/todoList.json';

export default function handler (req, res) {
	res.status(200).json(todoList);
}
