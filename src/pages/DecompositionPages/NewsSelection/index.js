import React from 'react'
import style from './index.module.css'

import { LineLink } from '../../../components/LineLink'
import { ExchangeRates } from '../../../components/ExchangeRates'
import { Menu } from '../../../components/Menu'

/**Новостной блок */
export const NewsSelection = ({menu, date, news, banerUrl, currency}) => {
	const activIndexMenu = 0
	return (
		<div className={style.body}>
			<div className={style.menuBody}>
				<Menu date={date} menu={menu} activIndexMenu={activIndexMenu} /> 
				<div className={style.newsLink}>
					{news.map(
						(item, i) => <LineLink key={i} {...item}/>
					)}
				</div>
				<ExchangeRates currency={currency}/>
			</div>
			<img className={style.menuBaner} alt="Банер" src={banerUrl} />
		</div>
	)
}