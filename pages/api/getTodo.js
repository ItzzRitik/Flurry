import { todo } from '../../data';

export default function handler (req, res) {
	res.status(200).json(todo);
}
