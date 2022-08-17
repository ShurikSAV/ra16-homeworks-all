import React from 'react'
//import PropTypes from 'prop-types';
import style from './index.module.css'

//{ data, distance }

export const FormSteps = ({add, dataEdit, setDataEdit}) => {
	const {index, data}  = dataEdit
	

	return (
		<div className={style.body}>
			<p>{index}</p>
			<p>{data.data}</p>
			<p>{data.distance}</p>
			<button onClick={add}>OK</button>
		</div>
	)
}

/*
FormSteps.propTypes = {
	count: PropTypes.number
	}
*/