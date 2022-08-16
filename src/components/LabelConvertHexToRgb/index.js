import React from 'react'
//import PropTypes from 'prop-types';
import style from './index.module.css'

export const LabelConvertHexToRgb = ({colorHex}) => {
	return (
		<div className={style.body}>
			{colorHex}
		</div>
	)
}

/*
LabelConvertHexToRgb.propTypes = {
	count: PropTypes.number
	}
*/