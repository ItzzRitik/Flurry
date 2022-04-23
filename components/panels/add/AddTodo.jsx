import style from '../../../styles/components/panels/Add/addTodo.module.scss';

export default function AddTodo ({ showTodoModal, close }) {

	if (!showTodoModal)
		return null;

	return (
		<div className={style.addTodo}>
			<span className={style.backdrop} onClick={close} />
			<div className={style.container}>
				<div className={style.header}>Add Todo</div>
			</div>
		</div>
	);
}
