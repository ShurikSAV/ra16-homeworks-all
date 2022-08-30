import React from 'react'
import { BroadcastVideo } from './BroadcastVideo'
import style from './index.module.css'
import { Map } from './Map'
import { TVProgram } from './TVProgram'
import { Visited } from './Visited'
import { Weather } from './Weather'

/**подвал */
export const BasementSelection = ({weather, visited, map, tvProgram, broadcastVideo}) => {
	return (
		<div className={style.body}>
			<div>
				<Weather weather={weather}/>
				<Visited visited={visited}/>
			</div>
			<div>
				<Map map={map}/>
				<TVProgram tvProgram={tvProgram}/>
			</div>
			<BroadcastVideo broadcastVideo={broadcastVideo}/>
		</div>
	)
}