import React from 'react'
import style from './index.module.css'
import { NewsSelection } from './NewsSelection'

const content = {
	newsSelection: {
		menu: [ 'Сейчас в СМИ', 'в Германии', 'Рекомендуем'],
		date: new Date(),
		news: [
			{
				icon: "https://cdnn21.img.ria.ru/i/favicons/favicon.svg",
				header: "Название новости 01"
			},
			{
				icon: "https://cdnn21.img.ria.ru/i/favicons/favicon.svg",
				header: "Название новости 02"
			}
		]
	}
}




export const DecompositionPages = () => {
	return (
		<div className={style.body}>
			<NewsSelection {...content.newsSelection}/>
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