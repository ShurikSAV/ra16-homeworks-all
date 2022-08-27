import React from 'react'
import style from './index.module.css'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { NewsList } from './NewsList'

export const NewsSelection = ({menu, date, news}) => {
	return (
		<div className={style.body}>
			<div>
				<div>
					{menu.map(
						(item, i) => <a key={i} href='item'>{item}</a>
					)}
					<span>{format(date,"dd MMMM, EEEE HH mm", {locale: ru})}</span>
				</div>
				<NewsList news={news}/>
				<div>Курс валют</div>
			</div>
			<div>
				Банер
			</div>
		</div>
	)
}