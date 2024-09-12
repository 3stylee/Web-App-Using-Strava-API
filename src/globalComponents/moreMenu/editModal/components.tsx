import { keyframes } from "@emotion/react"
import styled from "@emotion/styled"
import { Modal } from "react-bootstrap"

export const StyledModal = styled(Modal)`
	color: ${({ theme }) => theme.text};
`
const gradient = keyframes`
	from {
	  left: 0;
	}
	
	to {
	  left: calc(100% - var(--width));
	}
`
export const FieldPlaceholder = styled("div")<{ height: string }>`
	background: ${({ theme }) => theme.loading.placeholderBackground};
	height: ${({ height }) => height};
	width: 100%;
	position: relative;
	margin-bottom: 0.5rem;
	border-radius: var(--bs-border-radius);
	border: var(--bs-border-width) solid var(--bs-border-color);
	--width: 33%;

	&:after {
		content: "";
		position: absolute;
		top: 0;
		left: 0.5rem;
		height: calc(${({ height }) => height} - 0.125rem);
		width: var(--width);
		background: ${({ theme }) => theme.loading.placeholderGradient};
		border-radius: var(--bs-border-radius);
		animation: ${gradient} 1s infinite ease-in-out;
	}
`
export const LoadingCheckboxContainer = styled("div")`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`

export const CheckboxPlaceholder = styled("div")`
	background: ${({ theme }) => theme.loading.placeholderBackground};
	height: 1rem;
	width: 1rem;
	position: relative;
	border-radius: 0.25rem;
	border: var(--bs-border-width) solid var(--bs-border-color);
	--width: 0.33rem;

	&:after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 0.33rem;
		background: ${({ theme }) => theme.loading.placeholderGradient};
		border-radius: var(--bs-border-radius);
		animation: ${gradient} 1s infinite ease-in-out;
	}
`