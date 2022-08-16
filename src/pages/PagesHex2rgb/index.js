import React, { useState } from 'react'
import { ColorHexEdit } from '../../components/ColorHexEdit'
import { LabelConvertHexToRgb } from '../../components/LabelConvertHexToRgb'
//import PropTypes from 'prop-types';
import style from './index.module.css'

export const PagesHex2rgb = () => {
	const [colorHex, setColorHex] = useState("#34495e")

	const setBackground = (color) => {}

	return (
		<div className={style.body}>
			<ColorHexEdit color={colorHex} setColor={setColorHex} setBackground={setBackground} />
			<LabelConvertHexToRgb colorHex={colorHex} />
		</div>
	)
}