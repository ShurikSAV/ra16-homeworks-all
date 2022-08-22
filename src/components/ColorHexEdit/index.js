import React, { useState } from 'react'
import { validColorHex } from '../../util/ValidatorUtil';
import PropTypes from 'prop-types';
import style from './index.module.css'


export const ColorHexEdit = ({color, setColor, setMessage}) => {
	const [inputValue, setInputValue] = useState(color)

	const errorSettings = {
		color: "#FF0000",
		mesage: "Ошибка!"
	}

	const onChange = (e) => {
		const colorNew = e.target.value

		setInputValue(colorNew)

		if(colorNew.length < 7 ) return

		if(validColorHex(colorNew)) {
			setMessage()
			setColor(colorNew)
			return;
		}

		setMessage(errorSettings.mesage)
		setColor(errorSettings.color)
	}

	return (
		<div className={style.body}>
			<input type="text" name="colorHex" value={inputValue} onChange={onChange}/>
		</div>
	)
}

ColorHexEdit.propTypes = {
	color: PropTypes.string,
	setColor: PropTypes.func,
	setMessage: PropTypes.func,
}