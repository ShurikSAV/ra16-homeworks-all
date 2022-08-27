import React from 'react'
import style from './index.module.css'

export const NewsSelection = ({menu, date}) => {
	return (
		<div className={style.body}>
			<div>
				<div>
					{menu.map(
						(item, i) => <a key={i} href='item'>{item}</a>
					)}
					<span>{date.toISOString()}</span>
				</div>
				<div>
					<div>иконка + новость</div>
					<div>иконка + новость</div>
					<div>иконка + новость</div>
				</div>
				<div>Курс валют</div>
			</div>
			<div>
				Банер
			</div>
		</div>
	)
}