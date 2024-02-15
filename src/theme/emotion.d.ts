import "@emotion/react"

declare module "@emotion/react" {
	export interface Theme {
		name: string
		background: string
		text: string
		bootstrap: {
			background: string
			textColor: string
		}
		sidebar: {
			iconHover: string
		}
		calendar: {
			gridColor: string
		}
		spinnerBackground: string
	}
}
