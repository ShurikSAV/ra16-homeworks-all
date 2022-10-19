import React from 'react'
import { ButtonRound } from '../../ButtonRound'
import style from './index.module.css'

export const Note = ({children}) => {
	return (
		<div className={style.body}>
			<div className={style.buttonClose}>
				<ButtonRound>X</ButtonRound>
			</div>
			<p className={style.text}>
				{children}
			</p>
		</div>
	)
}
