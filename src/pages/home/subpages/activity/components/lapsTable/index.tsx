import React from "react"
import { getMinsFromSeconds } from "../../../../utils/getMinsFromSeconds"
import { CardBody, CardContainer, CardHeader, HeadingText, TableHeader, TableRow } from "./components"
import { useTheme } from "@emotion/react"
import FeatherIcon from "feather-icons-react"
import { Table } from "react-bootstrap"
import connect from "./connect"

const LapsTable = ({ laps, units }: any) => {
	const theme = useTheme()
	if (!Array.isArray(laps) || laps.length < 1) return null
	return (
		<CardContainer className={`card text-${theme.bootstrap.textColor} bg-${theme.bootstrap.background} h-100`}>
			<CardHeader>
				<p>Laps</p>
			</CardHeader>
			<CardBody className="card-body">
				<Table variant={theme.bootstrap.background} striped className="mb-0">
					<TableHeader>
						<tr>
							<th scope="col">#</th>
							<th scope="col">
								<HeadingText>
									Distance
									<FeatherIcon icon="map-pin" size={"1rem"} />
								</HeadingText>
							</th>
							<th scope="col">
								<HeadingText>
									Time
									<FeatherIcon icon="clock" size={"1rem"} />
								</HeadingText>
							</th>
							<th scope="col">
								<HeadingText>
									Pace
									<FeatherIcon icon="watch" size={"1rem"} />
								</HeadingText>
							</th>
						</tr>
					</TableHeader>
					<tbody>
						{laps.map((lap: any) => (
							<TableRow key={lap.id}>
								<td>{lap.name}</td>
								<td>{(lap.distance / units.meters).toFixed(2) + ` ${units.unitString}`}</td>
								<td>{getMinsFromSeconds(lap.moving_time)}</td>
								<td>
									{lap.average_speed > 0
										? getMinsFromSeconds(units.meters / lap.average_speed) + `/ ${units.unitString}`
										: "--"}
								</td>
							</TableRow>
						))}
					</tbody>
				</Table>
			</CardBody>
		</CardContainer>
	)
}

export default connect(LapsTable)
