import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Menu from './Menu'
import './layout.css'
import GoTopBtn from '../features/GoTopBtn/GoTopBtn'

export default function Layout(): JSX.Element {
	return (
		<div className='wrapper'>
			<Header />
			<Menu />
			<main className='container'>
				<Outlet />
			</main>
			<GoTopBtn />
			<Footer />
		</div>
	)
}
