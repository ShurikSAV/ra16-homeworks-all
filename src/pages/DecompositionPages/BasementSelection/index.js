import React from 'react'
import { InformationBlock } from '../../../components/InformationBlock'
import style from './index.module.css'
import { Weather } from './Weather'

/**подвал */
export const BasementSelection = ({weather, visited, map, tvProgram, broadcastVideo}) => {
	return (
		<div className={style.body}>
			<div>
				<Weather weather={weather}/>
				<InformationBlock {...visited}/>
			</div>
			<div>
				<InformationBlock {...map}/>
				<InformationBlock {...tvProgram}/>
			</div>
			<div>
				<InformationBlock {...broadcastVideo}/>
			</div>
		</div>
	)
}