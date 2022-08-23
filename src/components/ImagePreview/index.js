import React from 'react'
//import PropTypes from 'prop-types';
import style from './index.module.css'

export const ImagePreview = () => {
	return (
		<div className={style.body}>
			<button className={style.buttonClose}>X</button>
			<img className= {style.image} alt='картинка'/>
		</div>
	)
}

/*
ImagePreview.propTypes = {
	count: PropTypes.number
	}
*/