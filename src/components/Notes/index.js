import React from 'react'
import style from './index.module.css'
import { Note } from './Note'

export const Notes = () => {
	return (
		<div className={style.body}>
			<Note></Note>
			<Note></Note>
			<Note></Note>
		</div>
	)
}
