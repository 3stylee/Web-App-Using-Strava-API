import styled from "@emotion/styled"
import { SIDEBAR_WIDTH, TITLE_BANNER_HEIGHT } from "../../../constants/constants"

export const PageContainer = styled("div")`
	margin-top: ${TITLE_BANNER_HEIGHT};
	margin-left: ${SIDEBAR_WIDTH};
	height: 90vh;
	overflow-y: auto;
	scrollbar-width: thin;

	@media (max-width: 767px) {
		margin-left: 0;
	}
`
