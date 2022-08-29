import React from 'react'
import style from './index.module.css'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { NewsLink } from './NewsLink'


export const NewsSelection = ({menu, date, news, banerUrl}) => {
	const onMenuClick = () => {}
	
	return (
		<div className={style.body}>
			<div className={style.menuBody}>
				<div className={style.menuHeader}>
					{menu.map(
						(item, i) => <a className={style.menuLink} key={i} onClick={onMenuClick}>{item}</a>
					)}
					<span className={style.menuDate} >{format(date,"dd MMMM, EEEE HH mm", {locale: ru})}</span>
				</div>
				<div>
					{news.map(
						(item, i) => <NewsLink key={i} {...item}/>
					)}
				</div>
				<div>Курс валют</div>
			</div>
			<img className={style.menuBaner} alt="Банер" src={banerUrl} />
		</div>
	)
}