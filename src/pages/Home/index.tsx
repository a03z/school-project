import { openMenu } from '../../store/store'
import './home.css'

export default function Home(): JSX.Element {
	return (
		<div className='mainpage'>
			<h1>Творческий проект по информатике</h1>
			<h2>"Сайт-музей по истории школы №8"</h2>
			<button
				onClick={() => {
					openMenu()
				}}
				className='header-btn'>
				Навигация по сайту
			</button>
			<span>Выполнил ученик 10А класса(2020-2021гг.) Смелов Даниил</span>
		</div>
	)
}
