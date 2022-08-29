import React from 'react'
import style from './index.module.css'

export const FindSelection = () => {
	return (
		<div className={style.body}>
			<img className={style.bodyLogo} src="https://img.artlebedev.ru/everything/yandex/identity3/yandex2008.gif" />
			<div>
				<div>Меню поиска</div>
				<input type='text' />
				<button>кнопка поиска</button>
				<div>фраза</div>
			</div>
		</div>
	)
}