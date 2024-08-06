import { connect } from "react-redux"
import { updateActivityType } from "../../../../redux/actions/athleteActivitiesActions"

const mapDispatchToProps = {
	updateActivityType,
}

export default connect(null, mapDispatchToProps)
