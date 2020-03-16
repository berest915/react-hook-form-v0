import React, { Fragment, useState, useContext, useEffect } from 'react'
import { useForm, ErrorMessage } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import FormContext from '../context/Form/FormContext'

const Step2 = () => {
	const { _incStep, _setInfo2, _setCurrentInfo2 } = useContext(FormContext)
	const { _step, _currentInfo2 } = useContext(FormContext)
	const { push } = useHistory()
	if (!_step >= 1) {
		push('/')
	}

	const [inputValue, setInputValue] = useState({
		email: '',
		yearsOfExp: ''
	})
	const { email, yearsOfExp } = inputValue

	useEffect(() => {
		if (_currentInfo2 !== null) {
			setInputValue(_currentInfo2)
		} else {
			setInputValue({
				email: '',
				yearsOfExp: ''
			})
		}
	}, [_currentInfo2])

	const { register, handleSubmit, errors } = useForm({})

	const onChange = (e) => {
		setInputValue({
			...inputValue,
			[e.target.name]: e.target.value
		})
	}
	const onSubmit = () => {
		if (email !== '' && yearsOfExp !== '') {
			_setInfo2(inputValue)
			_setCurrentInfo2(inputValue)
			_incStep()
			push('/confirm')
		}
	}

	return (
		<Fragment>
			<form onSubmit={handleSubmit(onSubmit)}>
				<p style={{ margin: '10px 0' }}>Step 2</p>
				{/*//! email  */}
				<label>
					Email:
					<span style={floatRight}>
						<ErrorMessage errors={errors} name='email' as='abbr' />
					</span>
					<br />
					<input
						name='email'
						onChange={onChange}
						value={email}
						ref={register({ required: 'This is required.' })}
					/>
				</label>
				{/*//! years-of-exp  */}
				<label>
					Years of Experience:
					<span style={floatRight}>
						<ErrorMessage errors={errors} name='yearsOfExp' as='abbr' />
					</span>
					<br />
					<input
						name='yearsOfExp'
						type='number'
						onChange={onChange}
						value={yearsOfExp}
						ref={register({
							required: 'This is required.',
							min: {
								value: 1,
								message: 'required at least 1-year-exp'
							}
						})}
					/>
				</label>
				{/*//! submit btn */}
				<div style={{display: 'flex'}}>
				<button type='submit' onClick={() => push('/')} style={btnStyle} >
					Previous
				</button>
				<button type='submit' onSubmit={onSubmit} style={btnStyle} >
				{_currentInfo2 === null ? 'Submit': 'Update & Submit'}
				</button>
				</div>
			</form>
		</Fragment>
	)
}
const btnStyle = {
	flexDirection: 'row',
	width: '40%',
	marginLeft: '10%',
	marginRight: '10%',
}
const floatRight = {
	float: 'right'
}
export default Step2
