import { useStore } from 'effector-react'
import { Link } from 'react-router-dom'
import { $isMenuOpen, closeMenu } from '../../store/store'
import './menu.css'
import { MenuLinkI, menuLinks } from './model'

export default function Menu(): JSX.Element {
	const isMenuOpen = useStore($isMenuOpen)

	return (
		<>
			<div
				onClick={() => {
					closeMenu()
				}}
				className={isMenuOpen ? 'menu active' : 'menu'}
				id='menu'>
				<div className='menu-content'>
					{menuLinks.map((link: MenuLinkI) => {
						return (
							<Link
								key={link.id}
								to={link.path}
								onClick={() => [closeMenu()]}
								className={`menu-content__link ${
									link.additionalClassName
										? link.additionalClassName
										: ''
								}`}>
								{link.text}
							</Link>
						)
					})}
				</div>
				<img
					src='../img/menu/close.svg'
					alt='Закрыть'
					onClick={() => {
						closeMenu()
					}}
					className='menu-close'
				/>
			</div>
		</>
	)
}
