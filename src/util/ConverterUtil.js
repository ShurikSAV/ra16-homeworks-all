export 	const convertDateToString = (date) => {
	const month = date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1
	const day = date.getDate() < 10 ? "0" + (date.getDate()) : date.getDate()

	return `${day}.${month}.${date.getFullYear()}`
}