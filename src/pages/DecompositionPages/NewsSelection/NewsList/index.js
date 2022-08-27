import React from 'react'
import style from './index.module.css'

export const NewsList = ({news}) => {
	console.log(news);

	return (
		<div className={style.body}>
			NewsList
			
			{news.map(
				(item, i) => {
					<div key={i}>
						<img src={item.icon}  />
						{/* <span>{item.header}</span> */}
					</div>
				}
			)}
		</div>
	)
}