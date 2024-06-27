import FeatherIcon from "feather-icons-react"
import React from "react"
import { IconContainer, SearchbarContainer } from "./components"

export interface searchbarProps {
	searchText: string
	setSearchText: (text: string) => void
}

export const Searchbar = ({ searchText, setSearchText }: searchbarProps) => {
	return (
		<SearchbarContainer className="input-group mb-3">
			<input
				type="text"
				className="form-control"
				placeholder="Search"
				aria-label="Search"
				onChange={({ target }) => setSearchText(target.value)}
				value={searchText}
			/>
			<div className="input-group-prepend">
				<IconContainer className="input-group-text">
					<FeatherIcon icon="search" size={20} />
				</IconContainer>
			</div>
		</SearchbarContainer>
	)
}
