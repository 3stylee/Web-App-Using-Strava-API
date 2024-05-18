import processData from "."

const mockData = [
	["2024-02-16T12:43:26Z", 2835, 9881.5, 3.486, 32, "Run", 153.9],
	["2024-02-15T18:57:48Z", 880, 3172.4, 3.605, 10, "Run", 154.2],
	["2024-02-15T18:30:04Z", 1203, 5669.6, 4.713, 32, "Run", 165.9],
	["2024-02-15T17:18:00Z", 586, 2036.6, 3.475, 12, "Run", 146],
]

describe("processData", () => {
	it("should return an array of processed data", () => {
		const processedData = processData(mockData)
		expect(processedData).toEqual([
			[
				0.8333333333333334, 0.5764971287940935, 0.42206266764620454, 0.38958426464014306, 0.0749063670411985, 0,
				0.7471910112359551,
			],
			[
				0.6666666666666666, 0.17555373256767842, 0.1355008457056944, 0.40288332588287884, 0.023408239700374533,
				0, 0.749063670411985,
			],
			[
				0.6666666666666666, 0.2417965545529122, 0.24216227298354717, 0.5267098793026375, 0.0749063670411985, 0,
				0.8220973782771536,
			],
			[
				0.6666666666666666, 0.11525840853158327, 0.08698809178042403, 0.38835493965131873, 0.028089887640449437,
				0, 0.6978776529338327,
			],
		])
	})
})
