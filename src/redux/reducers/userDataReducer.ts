import { UserData } from "../../models"
import * as types from "../actions/actionTypes"
import initialState from "../initialState"

const userDataReducer = (state = initialState.userData, action: { type: string; data: UserData }): UserData => {
	switch (action.type) {
		case types.LOAD_USER_DATA_SUCCESS:
			return action.data
		case types.LOAD_USER_DATA_ERROR:
			return {
				stravaAccess: false,
				email: "",
				access_token: "",
				refresh_token: "",
				expires_at: Infinity,
			}
		case types.STORE_STRAVA_AUTH_SUCCESS:
			return {
				...state,
				stravaAccess: true,
			}
		case types.REFRESH_STRAVA_TOKEN:
			return {
				...state,
				access_token: action.data.access_token,
				refresh_token: action.data.refresh_token,
				expires_at: action.data.expires_at,
			}
		default:
			return state
	}
}

export default userDataReducer
