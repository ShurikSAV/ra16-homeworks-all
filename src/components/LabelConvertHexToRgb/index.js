import React from 'react'
import { validColorHex } from '../../util/ValidatorUtil';
import PropTypes from 'prop-types';
import style from './index.module.css'

export const LabelConvertHexToRgb = ({colorHex, message}) => {
	const hexToRgb = (hex) => {
		var result = validColorHex(hex);
		return result ? `rgb(${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)})` : "Error"
	  }
	
	
	return (
		<div className={style.body}>
			{message || hexToRgb(colorHex)}
		</div>
	)
}


LabelConvertHexToRgb.propTypes = {
	colorHex: PropTypes.string,
	message: PropTypes.string
	}
