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

export default (state, action) => {
	switch (action.type) {
		case SET_INFO_1:
		case SET_INFO_2:
			return {
				...state,
				_userInfo: {
					...state._userInfo,
					...action.payload
				}
			}
		case SET_CURRENT_INFO_1:
			return {
				...state,
				_currentInfo1: action.payload
			}
		case SET_CURRENT_INFO_2:
			return {
				...state,
				_currentInfo2: action.payload
			}
		case CLEAR_CURRENT_INFO:
			return {
				...state,
				_currentInfo1: null,
				_currentInfo2: null
			}

		case INC_STEP:
			return {
				...state,
				_step: state._step + 1
			}
		case DCR_STEP:
			return {
				...state,
				_step: state._step - 1
			}
		case RESET_STEP:
			return {
				...state,
				_step: 0
			}
		case CLEAR_ACCESS:
			return{
				...state,
				_access: false
			}
		case GET_ACCESS:
			return{
				...state,
				_access: true
			}
		
		default:
			return state
	}
}
