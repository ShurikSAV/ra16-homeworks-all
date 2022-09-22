import React from 'react'
import { ButtonRound } from '../ButtonRound'
import style from './index.module.css'

export const NoteNew = () => {
	return (
		<div className={style.body}>
			<p>New Note</p>
			<input type='text' />
			<ButtonRound> >> </ButtonRound>
		</div>
	)
}
