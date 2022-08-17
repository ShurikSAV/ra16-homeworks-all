import React, { useState } from 'react'
import { ColorHexEdit } from '../../components/ColorHexEdit'
import { LabelConvertHexToRgb } from '../../components/LabelConvertHexToRgb'
//import PropTypes from 'prop-types';
import style from './index.module.css'

export const PagesHex2rgb = () => {
	const [colorHex, setColorHex] = useState("#34495e")
	const [message, setMessage] = useState()
	const styleBody = { backgroundColor: colorHex };
	return (
		<div className={style.body} style={styleBody}>
			<ColorHexEdit color={colorHex} setColor={setColorHex} setMessage={setMessage} />
			<LabelConvertHexToRgb colorHex={colorHex} message={message}/>
		</div>
	)
}