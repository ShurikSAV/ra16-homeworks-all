import React from 'react'
import { Watches } from '../../components/Watches'
import { FormWatches } from './FormWatches'
import style from './index.module.css'

export const WatchesPages = () => {
	return (
		<div className={style.body}>
			<FormWatches />

			<Watches />
			<Watches />
		</div>
	)
}
