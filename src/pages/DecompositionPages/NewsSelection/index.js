import React from 'react'
import style from './index.module.css'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { NewsLink } from './NewsLink'
import { ExchangeRates } from '../../../components/ExchangeRates'

/**Новостной блок */
export const NewsSelection = ({menu, date, news, banerUrl, currency}) => {
	return (
		<div className={style.body}>
			<div className={style.menuBody}>
				<div className={style.menuHeader}>
					{menu.map(
						(item, i) => <a className={style.menuLink} key={i} href=''>{item}</a>
					)}
					<span className={style.menuDate}>{format(date,"dd MMMM, EEEE HH mm", {locale: ru})}</span>
				</div>
				<div className={style.newsLink}>
					{news.map(
						(item, i) => <NewsLink key={i} {...item}/>
					)}
				</div>
				<ExchangeRates currency={currency}/>
			</div>
			<img className={style.menuBaner} alt="Банер" src={banerUrl} />
		</div>
	)
}