import { format } from 'date-fns'
import React from 'react'
import style from './index.module.css'
import { ru } from 'date-fns/locale'

/**Меню */
export const Menu = ({date, menu, activIndexMenu}) => {
	return (
		<div className={style.body}>
			{menu.map(
				(item, i) => <a className={`${style.menuLink} ${i == activIndexMenu ? style.menuLinkActiv : ""} `} key={i} href=''>{item}</a>
			)}
			{date && <span className={style.menuDate}>{format(date,"dd MMMM, EEEE HH mm", {locale: ru})}</span>}
		</div>
	)
}