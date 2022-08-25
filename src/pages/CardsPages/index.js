import React from 'react'
import style from './index.module.css'
import {Сard} from '../../components/Сard';

export const CardsPages = () => {
	return (
		<div className={style.body}>
			<Сard />
			<Сard />
			<Сard />
		</div>
	)
}