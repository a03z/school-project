import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './Layout'
import HospitalHistory from './pages/HospitalHistory'
import Graduators from './pages/Graduators'
import Clubs from './pages/Clubs'
import LizasPioneers from './pages/LizasPioneers'
import Teachers from './pages/Teachers'
import NotFound from './pages/NotFound'
import './App.css'
import DeveleopementInProgress from './pages/DevelopementInProgress'
import Formation from './pages/SchoolHistory'
import SchoolInWarTimes from './pages/SchoolInWarTimes'

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='' element={<Home />} />
					<Route
						path='/hospital-history'
						element={<HospitalHistory />}
					/>
					<Route path='/graduators' element={<Graduators />} />
					<Route path='/clubs' element={<Clubs />} />
					<Route
						path='/liza-and-pioneers'
						element={<LizasPioneers />}
					/>
					<Route path='/teachers' element={<Teachers />} />
					<Route
						path='/school-in-war-times'
						element={<SchoolInWarTimes />}
					/>
					<Route path='/formation' element={<Formation />} />
					<Route path='/not-found' element={<NotFound />} />
					<Route path='*' element={<Navigate to='/not-found' />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
