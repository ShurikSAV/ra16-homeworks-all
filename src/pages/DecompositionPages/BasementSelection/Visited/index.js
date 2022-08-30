import React from 'react'
import { Menu } from '../../../../components/Menu'
import style from './index.module.css'

/**Посещаемое */
export const Visited = () => {
	return (
		<div className={style.body}>
			<Menu menu = {['Посещаемое']} />
		</div>
	)
}