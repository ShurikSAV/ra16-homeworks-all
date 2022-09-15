import React, { useEffect, useState } from 'react'
import { Watches } from '../../components/Watches'
import { FormWatches } from './FormWatches'
import style from './index.module.css'

export const WatchesPages = () => {
	const [watches, setWatches] = useState([
		{
			name: '1',
			timeZone: 0
		},
	])

	const addWatch = (name,timeZone) => {
		setWatches([...watches, {name,timeZone}])
	}

	return (
		<div className={style.body}>
			<FormWatches addWatch={addWatch}/>

			{watches.map( (item, i) => (
				<Watches key={i} {...item}/>
			))}
			
		</div>
	)
}
