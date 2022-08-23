export const validColorHex = (colorHex) => {
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(colorHex)
	return result
}

export const validDateString = (date) => {
	var result = /^([0-2][0-9]|3[0-1]).(0[0-9]|1[0-2]).([0-9]{4})$/i.exec(date)
	return result
}