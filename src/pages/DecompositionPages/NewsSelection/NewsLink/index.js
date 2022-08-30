import React from 'react'
import style from './index.module.css'

/**Ссылка на новость */
export const NewsLink = ({icon, text, url}) => {
	return (
		<div className={style.body}>
			<img className={style.image} src={icon} alt="ИконкаНовости"/>
			<a href={url}>{text}</a>
		</div>
	)
}