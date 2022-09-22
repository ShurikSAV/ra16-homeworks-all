import React from 'react'
import { ButtonRound } from '../../ButtonRound'
import style from './index.module.css'

export const Note = () => {
	return (
		<div className={style.body}>
			<ButtonRound>X</ButtonRound>
			<p>
				Текст заметки
			</p>
		</div>
	)
}
