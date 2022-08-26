import React from 'react'
import style from './index.module.css'
import {Сard} from '../../components/Сard';


const cards = [
	{
		img: {
			img_url: "https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg", 
			img_alt: "multfilm_lyagushka_32117", 
		},
		heder: "Заговок",
		text: "Текст с широкой картинкой. Текст с широкой картинкой. Текст с широкой картинкой."
	},
	{
		img: {
			img_url: "https://avatars.mds.yandex.net/i?id=55afc07d7a099d35b211e9e59c040af7_l-5233442-images-thumbs&n=13", 
			img_alt: "5233442-images", 
		},
		text: "Текст с вытянутой картинкой и без заголовка"
	},
	{
		heder: "Только заголовок"
	},
	{
		text: "Только текст"
	},
	{
		
	}

]


export const CardsPages = () => {
	return (
		<div className={style.body}>
			{cards.map(
				(item, i) => (
					<Сard key={i} {...item.img}>
						{item.heder && <h5 className="card-title">{item.heder}</h5>}
						{item.text && <p className="card-text">{item.text}</p>}
					</Сard>
				)
			)}
		</div>
	)
}