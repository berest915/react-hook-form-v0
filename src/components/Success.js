import React, { useContext, useEffect } from 'react'
import FormContext from '../context/Form/FormContext'

const Success = () => {
  const { _userInfo, _resetStep, _clearAccess, _getAccess } = useContext(FormContext)
  // if(_step)
	const { firstName, lastName } = _userInfo

	useEffect(()=> {
		_clearAccess()
		// eslint-disable-next-line
	}, [])

  const onReset = () => {
		_getAccess()
		_resetStep()
	}

	return (
		<div style={divStyle}>
			<h3>
				{firstName} {lastName} has subscribed successfully.
				<br />
				<br />
				welcome
			</h3>
			<br/>
			<button onClick={onReset}>Resubmit new User Detail</button>
		</div>
	)
}
const divStyle = {
	textAlign: 'center',
	margin: '4vh auto'
}
export default Success
