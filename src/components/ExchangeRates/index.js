import React from 'react'
import { Currency } from './Currency'
import style from './index.module.css'

/**Курсы валют */
export const ExchangeRates = ({currency}) => {

	return (
		<div className={style.body}>
			{currency.map(
				(item, i) => <Currency key={i} {...item} />
			)}
			
		</div>
	)
}