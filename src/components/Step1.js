import React, { Fragment, useState, useContext, useEffect } from 'react'
import { useForm, ErrorMessage } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import FormContext from '../context/Form/FormContext'

const Step1 = () => {
	const { _incStep, _setInfo1, _setCurrentInfo1 } = useContext(FormContext)
	const { _currentInfo1 } = useContext(FormContext)

	const { push } = useHistory()

	const [userName, setUserName] = useState({
		firstName: '',
		lastName: ''
	})
	const { firstName, lastName } = userName

	useEffect(() => {
		if (_currentInfo1 !== null) {
			setUserName(_currentInfo1)
		} else {
			setUserName({
				firstName: '',
				lastName: ''
			})
		}
	}, [_currentInfo1])

	const { register, handleSubmit, errors } = useForm({
		// defaultValues: userInfo
	})

	const onChange = (e) => {
		setUserName({
			...userName,
			[e.target.name]: e.target.value
		})
	}
	const onProceed = () => {
		if (firstName !== '' && lastName !== '') {
			_setInfo1(userName)
			_setCurrentInfo1(userName)
			_incStep()
			push('/step2')
		}
	}

	return (
		<Fragment>
			<form onSubmit={handleSubmit(onProceed)}>
				<p style={{ margin: '10px 0' }}>Step 1</p>
				{/*//! first name  */}
				<label>
					First Name:
					<span style={floatRight}>
						<ErrorMessage errors={errors} name='firstName' as='abbr' />
					</span>
					<br />
					<input
						name='firstName'
						onChange={onChange}
						value={firstName}
						ref={register({ required: 'This is required.' })}
					/>
				</label>
				{/*//! last name  */}
				<label>
					Last Name:
					<span style={floatRight}>
						<ErrorMessage errors={errors} name='lastName' as='abbr' />
					</span>
					<br />
					<input
						name='lastName'
						onChange={onChange}
						value={lastName}
						ref={register({ required: 'This is required.' })}
					/>
				</label>
				{/*//! submit btn */}
				<button type='submit' onSubmit={onProceed} >{_currentInfo1 === null ? 'Proceed': 'Update'}</button>
			</form>
		</Fragment>
	)
}
const floatRight = {
	float: 'right'
}
export default Step1
