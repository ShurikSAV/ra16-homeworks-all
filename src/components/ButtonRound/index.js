import React from 'react'
import style from './index.module.css'

export const ButtonRound = ({onClick, children}) => {
	return (
		<button className={style.body} onClick={onClick}>
			{children}
		</button>
	)
}
