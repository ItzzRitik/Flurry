import todoList from '../../data/todoList.js';

export default function handler (req, res) {
	console.log(todoList);
	res.status(200).json(todoList);
}
