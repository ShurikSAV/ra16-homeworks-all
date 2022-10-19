import React from 'react'
import style from './index.module.css'
import { Note } from './Note'

export const Notes = () => {
	return (
		<div className={style.body}>
			<Note>
				Текст заметки 1
				Текст заметки 2
				Текст заметки 3
				Текст заметки 4
				Текст заметки 4
				Текст заметки 4
				Текст заметки 4
				Текст заметки 4
			</Note>
			<Note>Текст заметки 2</Note>
			<Note>Текст заметки 3</Note>
		</div>
	)
}
