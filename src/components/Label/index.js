import React from 'react'
import { validData } from '../../util/ValidatorUtil'
//import PropTypes from 'prop-types';
import style from './index.module.css'

export const Label = ({inputType, value, onSetValue, children}) => {
	//const dateValue = new Date().parse(value)
	/*
	let dateValue

	if(inputType === "date") {
		let dateAr = validData(value)
		
		if(dateAr) {
			dateValue = new Date(dateAr[3], dateAr[2], dateAr[1])

		}
		else {
			dateValue = new Date()
		}
		console.log('Label', value);
		console.log(dateAr, dateValue);
	} else {
		dateValue = value
	}
*/


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