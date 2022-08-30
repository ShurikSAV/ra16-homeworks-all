import React from 'react'
import { Menu } from '../../../../components/Menu';
import style from './index.module.css'

/**Погода */
export const Weather = ({weather}) => {
	const {icon, temperature, morning, evening} = weather
	
	console.log(icon, temperature, morning, evening);
	return (
		<div className={style.body}>
			<Menu menu = {['Погода']} />
			<div className={style.weather}>
				<img src={icon} alt='погода' />
				<div className={style.temperature}>{temperature}</div>
				<div className={style.temperatureDay}>
					<div>Утром {morning},</div>
					<div>днём {evening}</div>
				</div>
			</div>
		</div>
	)
}