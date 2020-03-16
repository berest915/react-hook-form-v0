import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import FormContext from '../context/Form/FormContext'

const PrivateRoute = ({ component: Component, ...rest }) => {
	const { _step } = useContext(FormContext)

	return (
		<Route
			{...rest}
			render={(props) => {
				switch (_step) {
					case 0:
						return <Redirect to='/' />
					case 1:
						return <Redirect to='/step2' />
					default:
						return <Component {...props} />
				}
			}}
		/>
	)
}
export default PrivateRoute