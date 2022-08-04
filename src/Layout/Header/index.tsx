import { useLocation } from 'react-router-dom'
import { openMenu } from '../../store/store'
import './header.css'

export default function Header(): JSX.Element {
	const { pathname } = useLocation()
	return (
		<header
			style={pathname === '/' ? { height: 0, padding: 0 } : {}}
			className='header'>
			{pathname !== '/' ? (
				<button
					className={'header-btn'}
					onClick={() => {
						openMenu()
					}}>
					Меню
				</button>
			) : (
				<></>
			)}
		</header>
	)
}
