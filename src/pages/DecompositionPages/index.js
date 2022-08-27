import React from 'react'
import style from './index.module.css'
import { NewsSelection } from './NewsSelection'

const content = {
	news: {
		menu: [ 'Сейчас в СМИ', 'в Германии', 'Рекомендуем'],
		date: new Date()

	}
}




export const DecompositionPages = () => {
	return (
		<div className={style.body}>
			<NewsSelection {...content.news}/>
			<div>
				<div>банер</div>
				<div>
					<div>Меню поиска</div>
					<div>поле ввода</div>
					<div>фраза</div>
					<div>Банер</div>
				</div>
				<div>кнопка поиска</div>
			</div>
			<div>
				<div>
					<div>Погода</div>
					<div>Посещаемое</div>
				</div>
				<div>
					<div>Карта</div>
					<div>Телепрограмма</div>
				</div>
				<div>
					Эфир
				</div>
			</div>
		</div>
	)
}