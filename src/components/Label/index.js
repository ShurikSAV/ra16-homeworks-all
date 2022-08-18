import React from 'react'
//import PropTypes from 'prop-types';
import style from './index.module.css'

export const Label = ({inputType,value, onSetValue, children}) => {
	return (
		<div className={style.body}>
			{children}
			<div>
				<input type={inputType} value={value} onChange={(e) => onSetValue(e.target.value)}/>
			</div>
		</div>
	)
}

/*
Label.propTypes = {
	count: PropTypes.number
	}
*/