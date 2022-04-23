import { todo } from '../../data';

export default function handler (req, res) {
	console.log(todo);
	res.status(200).json(todo);
}
