import React, { useEffect, useState } from 'react'
import { Watches } from '../../components/Watches'
import { FormWatches } from './FormWatches'
import style from './index.module.css'

export const WatchesPages = () => {
	const [watches, setWatches] = useState([
		{
			name: 'Москва',
			timeZone: 4
		},
		{
			name: 'Новосибирск',
			timeZone: 7
		},
	])

	const addWatch = (name,timeZone) => {
		setWatches([...watches, {name,timeZone}])
	}

	const delWatch = (indexDel) => {
		setWatches(
			[ ...watches.filter( (_, index) => index != indexDel) ]
			)
	}


	return (
		<div className={style.body}>
			<FormWatches addWatch={addWatch}/>
			<div className={style.clocks}>
				{watches.map( (item, i) => (
					<Watches key={i} {...item} onClose={ () => delWatch(i) }/>
					))}
			</div>
			
		</div>
	)
}
