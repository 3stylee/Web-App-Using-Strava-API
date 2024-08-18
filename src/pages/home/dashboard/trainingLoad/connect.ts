import { connect } from "react-redux"
import { DASHBOARD_ERRORS } from "../../../../constants/constants"
import { State } from "../../../../redux/initialState"

const mapStateToProps = (state: State) => {
	const dataError = state.apiError.message === DASHBOARD_ERRORS.ATHLETE_ACTIVITIES_ERROR
	return {
		athleteActivities: state.athleteActivities,
		dataError,
	}
}

export default connect(mapStateToProps)
