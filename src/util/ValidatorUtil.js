export 	const validColorHex = (colorHex) => {
	const reg = /^(#)([0-9]|[a-f]|[A-F]){6}$/

	return reg.test(colorHex)
}