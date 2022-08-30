import React from 'react'
import style from './index.module.css'

/**Строчка со ссылкой */
export const LineLink = ({icon, time, header , text, url, comment}) => {
	return (
		<div className={style.body}>
			{icon && <img className={style.image} src={icon} alt="ИконкаНовости"/>}
			<a href={url}>
				{time && <span>{time} </span>}
				{header && (<><b>{header}  </b><span> — </span></>)}
				{text}
				{comment && <span className={style.comment}>{comment} </span>}
			</a>
		</div>
	)
}