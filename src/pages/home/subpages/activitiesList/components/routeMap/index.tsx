import React from "react"
import { ActivityTitle, CardContainer, StyledImage, StyledLink } from "./components"
import { getMapboxEndpoint } from "../../../../utils/getMapboxEndpoint"
import { THEMES } from "../../../../../../constants"
import { LabelledStats } from "../../../../../../globalComponents/labelledStats"
import { useTheme } from "@emotion/react"
import { Card, Col } from "react-bootstrap"
import { getActivityStats } from "../../../../utils/getActivityStats"
import connect from "./connect"
import { Units } from "../../../../../../config/models"

export interface RouteMapProps {
	polyline?: any
	name: string
	time: number
	distance: string
	id: string
	speed: string
	units: Units
}

const RouteMap = ({ polyline, speed, name, time, distance, id, units }: RouteMapProps) => {
	const theme = useTheme()

	let url =
		theme.name === THEMES.DARK
			? require("../../../../../../assets/images/no_gps_dark.png")
			: require("../../../../../../assets/images/no_gps_light.png")
	if (polyline.length > 0) {
		const coordinatesString = polyline.map((coord: any[]) => `[${coord.join(",")}]`).join(",")
		url = getMapboxEndpoint(coordinatesString, theme.name)
	}
	const stats = getActivityStats(distance, speed, time, units)

	return (
		<Col>
			<StyledLink to={`/home/activity?id=${id}`}>
				<CardContainer
					id="map"
					text={theme.bootstrap.textColor}
					bg={theme.bootstrap.background}
					className="h-100">
					<StyledImage src={url} alt="route map" className="card-img-left" />
					<Card.Body>
						<ActivityTitle className="card-title">{name}</ActivityTitle>
						<LabelledStats stats={stats} small={true} />
					</Card.Body>
				</CardContainer>
			</StyledLink>
		</Col>
	)
}

export default connect(RouteMap)
