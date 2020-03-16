import React, { useReducer } from 'react'
import FormContext from './FormContext'
import FormReducer from './FormReducer'
import {
	SET_INFO_1,
	SET_INFO_2,
	SET_CURRENT_INFO_1,
	SET_CURRENT_INFO_2,
	CLEAR_CURRENT_INFO,
	INC_STEP,
	DCR_STEP,
	RESET_STEP,
	CLEAR_ACCESS,
	GET_ACCESS
} from '../types'

const FormState = (props) => {
	const initialState = {
		_step: 0,
		_userInfo: null,
		_currentInfo1: null,
		_currentInfo2: null,
		_access: true
	}
	const [state, dispatch] = useReducer(FormReducer, initialState)

	const _setInfo1 = (username) => {
		dispatch({
			type: SET_INFO_1,
			payload: username
		})
	}

	const _setInfo2 = (input) => {
		console.log(input)
		dispatch({
			type: SET_INFO_2,
			payload: input
		})
	}

	const _setCurrentInfo1 = (input) => {
		dispatch({
			type: SET_CURRENT_INFO_1,
			payload: input
		})
	}
	const _setCurrentInfo2 = (input) => {
		dispatch({
			type: SET_CURRENT_INFO_2,
			payload: input
		})
	}
	const _clearCurrentInfo = () => {dispatch({type: CLEAR_CURRENT_INFO})}

	const _incStep = () => { dispatch({type: INC_STEP}) }
	const _dcrStep = () => { dispatch({type: DCR_STEP}) }
	const _resetStep = () => dispatch({type: RESET_STEP})

	const _clearAccess = () => dispatch({type: CLEAR_ACCESS})
	const _getAccess = () => dispatch({type: GET_ACCESS})

	return (
		<FormContext.Provider
			value={{
				_step: state._step,
				_userInfo: state._userInfo,
				_currentInfo1: state._currentInfo1,
				_currentInfo2: state._currentInfo2,
				_access: state._access,
				_setInfo1,
				_setInfo2,
				_setCurrentInfo1,
				_setCurrentInfo2,
				_clearCurrentInfo,
				_incStep,
				_dcrStep,
				_resetStep,
				_clearAccess,
				_getAccess
			}}
		>
			{props.children}
		</FormContext.Provider>
	)
}
export default FormState
