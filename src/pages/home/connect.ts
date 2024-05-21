import { connect } from "react-redux"
import { getAuthToken, manualAuthUser } from "../../redux/actions/authUserActions"

export const mapStateToProps = (state: any) => {
	return {
		authState: state.authState,
	}
}

export const mapDispatchToProps = {
	getAuthToken,
	manualAuthUser,
}

export default connect(mapStateToProps, mapDispatchToProps)
