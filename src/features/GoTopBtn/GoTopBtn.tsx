import { useEffect, useState } from 'react'
import './goTopBtn.css'

export default function GoTopBtn(): JSX.Element {
	const [isShown, setIsShown] = useState<boolean>(false)

	const trackScroll = () => {
		const scrolled = window.pageYOffset
		if (scrolled > 300) {
			setIsShown(true)
		} else if (scrolled < 300) {
			setIsShown(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', trackScroll)
		return () => {
			window.removeEventListener('scroll', trackScroll)
		}
	}, [])

	const backToTop = async () => {
		if (window.pageYOffset > 0) {
			window.scrollTo({ top: 0, behavior: 'smooth' })
		}
	}

	return (
		<button
			className={isShown ? 'top top-show' : 'top'}
			onClick={() => {
				backToTop()
			}}>
			<img
				src='./img/up-arrow.svg'
				alt='up-arrow'
				style={{ width: '20px', height: '20px' }}
			/>
		</button>
	)
}
