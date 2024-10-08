function datesDifference({ date }: { date: string | Date }): string {
	const dateTo = new Date(date)
	const dateFrom = new Date()

	const gapMiliSeconds = dateFrom.getTime() - dateTo.getTime()

	const gapMinutes = gapMiliSeconds / (1000 * 60)
	const gapHours = gapMiliSeconds / (1000 * 60 * 60)
	const gapDays = gapMiliSeconds / (1000 * 60 * 60 * 24)
	const gapWeeks = gapMiliSeconds / (1000 * 60 * 60 * 24 * 7)
	const gapMonths = gapMiliSeconds / (1000 * 60 * 60 * 24 * 30.44)

	const timeUnits = [
		{ value: gapMinutes, unit: "m", threshold: 60 },
		{ value: gapHours, unit: "h", threshold: 24 },
		{ value: gapDays, unit: " day", threshold: 7 },
		{ value: gapWeeks, unit: " week", threshold: 4 },
		{ value: gapMonths, unit: " month", threshold: Infinity },
	]

	for (const { value, unit, threshold } of timeUnits) {
		if (value < threshold) {
			const roundedValue = Math.abs(value).toFixed(0)
			return `${roundedValue}${unit} ago`
		}
	}

	return ""
}

export { datesDifference }
