import { Link } from 'react-router-dom'
import ErrorIcon from '../../features/Icons/ErrorIcon'
import './notFound.css'

export default function NotFound(): JSX.Element {
	return (
		<div className='notFoundPage'>
			<h1>The page does not exist.</h1>
			<ErrorIcon width='75px' height='75px' />
			<Link to='/'>На главную</Link>
		</div>
	)
}
