import React from 'react'
import { LineLink } from '../LineLink'
import { Menu } from '../Menu'
import style from './index.module.css'

/**информационный блок */
export const InformationBlock = ({menu, list}) => {
	console.log(menu,list);
	return (
		<div className={style.body}>
			<Menu menu = {menu} />
			{list.map(
				(item, i) => <LineLink key={i} {...item} />
			)}
		</div>
	)
}