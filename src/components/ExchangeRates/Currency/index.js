import React from 'react'
import style from './index.module.css'

export const Currency = ({name, price, delta}) => {
	return (
		<span className={style.body}>
			<span className={style.name}>{name}</span>
			<span className={style.price}>{price}</span>
			<span className={style.delta}>{delta}</span>
		</span>
	)
}