import { Link } from 'react-router-dom'
import ContsructionIcon from '../../features/Icons/ContsructionIcon'
import './developementInProgress.css'

export default function DeveleopementInProgress(): JSX.Element {
	return (
		<div className='developementInProgressPage'>
			<h1>Страница находится на стадии разработки.</h1>
			<ContsructionIcon width='75px' height='75px' />
			<Link to='/'>На главную</Link>
		</div>
	)
}
