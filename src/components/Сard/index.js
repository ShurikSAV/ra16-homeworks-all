import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './index.module.css'

export const Сard = ({img_url, img_alt, children}) => {
	const imges = img_url && <img className={`${style.card_img_top} card-img-top`} src={img_url} alt={img_alt} />
	
	return (
		<div className={style.card}>
			{imges}
			<div className={`${style.card_body} card-body`}>
				{children}
				<a href="#" className="btn btn-primary">Go somewhere</a>
			</div>
		</div>
	)
}