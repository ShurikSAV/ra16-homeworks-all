import React from 'react'
import style from './index.module.css'

export const Watches = ({name,timeZone}) => {
	return (
		<div className={style.body}>
			<h1>Watches</h1>
			<p>name = {name}</p>
			<p>timeZone = {timeZone}</p>
		</div>
	)
}
