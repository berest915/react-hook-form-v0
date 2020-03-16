import React, { Fragment, useContext, useEffect, useState } from 'react'
import FormContext from '../context/Form/FormContext'
import { useHistory } from 'react-router-dom'

const Confirm = () => {
	const { push } = useHistory()
	const { _userInfo, _clearCurrentInfo } = useContext(FormContext)

	const { firstName, lastName, email, yearsOfExp } = _userInfo

	const onSuccess = () => {
		_clearCurrentInfo()
		push('/success')
		//make sure unable to go back
	}

	const onUpdate = (e) => {
		push('/')
	}

	return (
		<Fragment>
			<br />
			<p style={pTitleStyle}>Your User Details as Below:</p>
			<ul style={ulStyle}>
				<li style={liStyle}>
					First Name:
					<span style={floatRight}>{firstName === null ? '' : firstName}</span>
				</li>
				<li style={liStyle}>
					Last Name:
					<span style={floatRight}>{lastName === null ? '' : lastName}</span>
				</li>
				<li style={liStyle}>
					Email:
					<span style={floatRight}> {email === null ? '' : email}</span>
				</li>
				<li style={liStyle}>
					Years of Experience:
					<span style={floatRight}>
						{' '}
						{yearsOfExp === null ? '' : yearsOfExp}
					</span>
				</li>
			</ul>
			<br />
			<p style={pTitleStyle}>Confirm ?</p>
			<div style={{ display: 'flex' }}>
				<button onClick={onSuccess} style={btnStyle}>
					Yes, I do confirm
				</button>
				<button onClick={onUpdate} style={btnStyle}>
					No, re-update my inputs
				</button>
			</div>
		</Fragment>
	)
}
const pTitleStyle = {
	textAlign: 'center',
	marginBottom: '3vh',
	color: 'orange'
}
const ulStyle = {
	margin: '0 10% 3vh 10%',
	listStyle: 'none'
}
const liStyle = {
	marginBottom: '1vh'
}
const btnStyle = {
	width: 'center',
	margin: '0.5vh 1vh'
}
const floatRight = {
	float: 'right'
}
export default Confirm
