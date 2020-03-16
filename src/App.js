import React, { Fragment, useContext } from 'react'
import { BrowserRouter, Link, Route, useLocation } from 'react-router-dom'
import './css_cast.css'

import FormState from './context/Form/FormState'

import Step1 from './components/Step1'
import Step2 from './components/Step2'
import Confirm from './components/Confirm'
import Success from './components/Success'
import PrivateRoute from './components/PrivateRoute'
import FormContext from './context/Form/FormContext'

const Pages = () => {
	const location = useLocation()
	const { _access } = useContext(FormContext)
	return (
		<Fragment>
			<nav className='container'>
				<ul className='steps' style={{ margin: '2vh 0' }}>
					{_access === true ? (
						<Fragment>
							<li className={location.pathname === '/' ? 'active' : ''}>
								<Link to='/'>Step I</Link>
							</li>
							<li className={location.pathname === '/step2' ? 'active' : ''}>
								<Link to='/step2'>Step II</Link>
							</li>
							<li className={location.pathname === '/confirm' ? 'active' : ''}>
								<Link to='/confirm'>Confirm</Link>
							</li>
						</Fragment>
					) : (
						<Fragment>
							<h4 style={{ textAlign: 'center' }}>Success Form Submission</h4>
						</Fragment>
					)}
				</ul>
			</nav>
			<Route exact path='/' component={Step1} />
			<Route exact path='/step2' component={Step2} />
			<PrivateRoute exact path='/confirm' component={Confirm} />
			<PrivateRoute exact path='/success' component={Success} />
		</Fragment>
	)
}

function App() {
	return (
		<div className='App'>
			<h1 style={{ marginTop: '5vh' }}>Multi-Step Login Form</h1>
			<FormState>
				<BrowserRouter>
					<Pages />
				</BrowserRouter>
			</FormState>
		</div>
	)
}
export default App
