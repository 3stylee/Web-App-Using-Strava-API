import React, { useEffect, useState } from "react"
import { Modal, Form, Button } from "react-bootstrap"
import connect from "./connect"
import { useTheme } from "@emotion/react"
import { CheckboxPlaceholder, FieldPlaceholder, LoadingCheckboxContainer, StyledModal } from "./components"
import { getEditableDetails } from "../../../utils/getEditableDetails"

interface EditModalProps {
	id: number
	show: boolean
	accessToken: string
	current?: boolean
	setShowEdit: (showEdit: boolean) => void
	editAthleteActivity: (id: number, data: object, current: boolean) => void
}

const EditModal = ({ id, show, accessToken, current = false, setShowEdit, editAthleteActivity }: EditModalProps) => {
	const theme = useTheme()
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState("")
	const [initialDetails, setInitialDetails] = useState({ name: "", description: "", muted: false })
	const [details, setDetails] = useState(initialDetails)

	useEffect(() => {
		if (show) getEditableDetails(id, accessToken, setInitialDetails, setDetails, setLoading, setError)
	}, [show])

	const handleClose = () => {
		setShowEdit(false)
	}

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault()
		if (initialDetails !== details) editAthleteActivity(id, details, current)
		handleClose()
	}

	return (
		<StyledModal show={show} onHide={handleClose} centered data-bs-theme={theme.bootstrap.background}>
			<Modal.Header closeButton>
				<Modal.Title>Edit Item</Modal.Title>
			</Modal.Header>
			{error ? (
				<Modal.Body>{error}</Modal.Body>
			) : (
				<Modal.Body>
					<Form onSubmit={handleSubmit}>
						<Form.Group controlId="formName" className="mb-3">
							<Form.Label>Name</Form.Label>
							{loading ? (
								<FieldPlaceholder height="2rem" />
							) : (
								<Form.Control
									type="text"
									placeholder="Enter name"
									value={details.name}
									onChange={(e) => setDetails({ ...details, name: e.target.value })}
								/>
							)}
						</Form.Group>
						<Form.Group controlId="formDescription" className="mb-3">
							<Form.Label>Description</Form.Label>
							{loading ? (
								<FieldPlaceholder height="5.5rem" />
							) : (
								<Form.Control
									as="textarea"
									rows={3}
									placeholder="Enter description"
									value={details.description}
									onChange={(e) => setDetails({ ...details, description: e.target.value })}
								/>
							)}
						</Form.Group>
						<Form.Group controlId="formMute" className="mb-3">
							{loading ? (
								<LoadingCheckboxContainer>
									<CheckboxPlaceholder />
									<div>Mute from home feed</div>
								</LoadingCheckboxContainer>
							) : (
								<Form.Check
									type="checkbox"
									label="Mute from home feed"
									checked={details.muted}
									onChange={(e) => setDetails({ ...details, muted: e.target.checked })}
								/>
							)}
						</Form.Group>
						<Button variant="primary" type="submit" disabled={loading}>
							Save Changes
						</Button>
					</Form>
				</Modal.Body>
			)}
		</StyledModal>
	)
}

export default connect(EditModal)
