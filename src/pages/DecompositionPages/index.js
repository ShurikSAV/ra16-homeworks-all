import React from 'react'
import style from './index.module.css'
import { NewsSelection } from './NewsSelection'
import { FindSelection } from './FindSelection'
import { Banner } from '../../components/Banner'

const content = {
	newsSelection: {
		menu: [ 'Сейчас в СМИ', 'в Германии', 'Рекомендуем'],
		date: new Date(),
		news: [
			{
				icon: "https://cdnn21.img.ria.ru/i/favicons/favicon.svg",
				text: "Название новости 01",
				url: "https://cdnn21.img.ria.ru/i/favicons/favicon.svg"

			},
			{
				icon: "https://cdnn21.img.ria.ru/i/favicons/favicon.svg",
				text: "Название новости 02",
				url: "https://cdnn21.img.ria.ru/i/favicons/favicon.svg"
			}
		],
		banerUrl: "http://promoatlas.ru/wp-content/uploads/2015/08/reklamnoe-mesto.jpg",
		currency: [
			{
				name: "USD MOEX",
				price: 63.52, 
				delta: '+0.09'
			},
			{
				name: "EUR MOEX",
				price: 70.86, 
				delta: '-0.14'
			},
			{
				name: "НЕФТЬ",
				price: 64.90, 
				delta: '1,63%'
			}
		]
	}
}

export const DecompositionPages = () => {
	return (
		<div className={style.body}>
			<NewsSelection {...content.newsSelection}/>
			<FindSelection />
			<Banner />
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