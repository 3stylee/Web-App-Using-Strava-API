import styled from "@emotion/styled"
import { TITLE_BANNER_HEIGHT } from "../../constants"

export const PageContainer = styled("div")`
	padding-top: ${TITLE_BANNER_HEIGHT};
	display: flex;
	height: 100vh;
	background-color: #fbf7f5;

	@media (max-width: 768px) {
		display: block;
		height: 100%;
	}
`
