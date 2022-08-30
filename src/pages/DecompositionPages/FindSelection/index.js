import React from 'react'
import { LineLink } from '../../../components/LineLink'
import { Menu } from '../../../components/Menu'
import style from './index.module.css'

/**Модуль поиска */
export const FindSelection = ({menu, phrase}) => {
	return (
		<div className={style.body}>
			<img className={style.bodyLogo} src="https://img.artlebedev.ru/everything/yandex/identity3/yandex2008.gif" />
			<div className={style.inputDiv}>
				<Menu menu={menu} />
				<input  className={style.inputFind}  type='text' />
				<button>Найти</button>
				<LineLink {...phrase} />
			</div>
		</div>
	)
}