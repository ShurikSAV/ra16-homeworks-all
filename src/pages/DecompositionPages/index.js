import React from 'react'
import style from './index.module.css'
import { NewsSelection } from './NewsSelection'
import { FindSelection } from './FindSelection'
import { Banner } from '../../components/Banner'
import { BasementSelection } from './BasementSelection'

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
	},
	findSelection: {
		menu: ["Видео", "Картинки", "Новости", "Карты", "Маркет", "Переводчик", "Эфир", "ещё"],
		phrase: {
			text: "Найдётся всё. Например,",
			comment: "фаза луны сегодня",
			url: "фаза луны сегодня"

		}
	},
	basementSelection: {
		weather: {
			icon: "https://vestnik-belovo.ru/wp-content/uploads/2016/03/Pogoda-1024x682.jpg",
			temperature: "+17°",
			morning: "+17",
			evening: "+20"
		},
		visited: {
			menu: ["Посещаемое"],
			list: [
				{
					header: "Недвижимость",
					text: "о сталинках",
					url: "Недвижимость"
				},
				{
					header: "Маркер",
					text: "люстры и светильники",
					url: "Маркер"
				}
			]
		},
		map: {
			menu: ["Карта"],
			list: [
				{
					text: "Расписания",
					url: "Расписания"
				}
			]
		},
		tvProgram: {
			menu: ["Телепрограмма", <button>▶ Эфир</button>],
			list: [
				{
					time: "02:00",
					text: "ТНТ.Best",
					comment: "ТНТ International",
					url: "ТНТ.Best"
				},
				{
					time: "02:15",
					text: "Джинглики",
					comment: "Карусель INT",
					url: "Джинглики"
				},
			]
		},
		broadcastVideo: {
			menu: ["Эфир"],
			list: [
				{
					icon: "https://ontabs.com/uploads/images/9257/hd-video-player-256.webp",
					text: "Управление как искусство",
					comment: "Успех",
					url: "Управление как искусство"
				},
				{
					icon: "https://ontabs.com/uploads/images/9257/hd-video-player-256.webp",
					text: "Ночь. Мир в это время",
					comment: "earthTV",
					url: "Ночь. Мир в это время"
				},
				{
					icon: "https://ontabs.com/uploads/images/9257/hd-video-player-256.webp",
					text: "Андрей Возн...",
					comment: "Совершенно секретно",
					url: "Андрей Возн..."
				}
			]
		}
	}
}

export const DecompositionPages = () => {
	return (
		<div className={style.body}>
			<NewsSelection {...content.newsSelection}/>
			<FindSelection {...content.findSelection}/>
			<Banner />
			<BasementSelection {...content.basementSelection}/>
		</div>
	)
}