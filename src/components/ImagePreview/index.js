import React from 'react'
//import PropTypes from 'prop-types';
import style from './index.module.css'

export const ImagePreview = ({name, dataImage, onClose}) => {
	return (
		<div className={style.body}>
			<img src={dataImage} className={style.image} alt={name}/>
			<button onClick={onClose} className={style.buttonClose}>X</button>
		</div>
	)
}

/*
ImagePreview.propTypes = {
	count: PropTypes.number
	}
*/