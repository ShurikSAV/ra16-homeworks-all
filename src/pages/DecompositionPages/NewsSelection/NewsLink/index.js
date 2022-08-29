import React from 'react'
import style from './index.module.css'

export const NewsLink = ({icon, text, url}) => {
	console.log('NewsLink',icon, text, url);

	return (
		<div className={style.body}>
			<img className={style.image} src={icon} alt="ИконкаНовости"/>
			<a href={url}>{text}</a>
		</div>
	)
}