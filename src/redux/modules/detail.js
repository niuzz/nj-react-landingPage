
const initialState ={
	detailRow: {}
}

export const types = {
	SETROW: 'DETAIL/SETROW'
}

export const actions = {
	setrow: (row) => ({
		type: types.SETROW,
		row
	})
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case types.SETROW:
			return {...state, detailRow: action.row}
		default:
			return state
	}
}

export default reducer

export const getRow = (state) => state.detail.detailRow