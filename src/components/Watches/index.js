import React from 'react'
import style from './index.module.css'
import styled, { keyframes } from "styled-components";


export const Watches = ({name,timeZone}) => {

	//TODO Кнопка закрытия часов

	const time = new Date()

	console.log(timeZone, 1, time ,time.getTimezoneOffset());
	
	time.setMinutes(time.getMinutes() - time.getTimezoneOffset() + timeZone * 60)
	
	console.log(timeZone, 2, time ,time.getTimezoneOffset());

	/**Первоначальный угол поворота стрелки */
	const startCornerHour = time.getHours() >= 12 ? ((time.getHours() - 12) * 360 / 12 ) : (time.getHours() * 360 / 12 );
	const startCornerMinutes = (time.getMinutes() * 360 / 60 );;
	const startCornerSecond = (time.getSeconds() * 360 / 60 );;
	

	const keyframesSecond = keyframes`
	from {transform: rotate(${startCornerSecond}deg)}
	to {transform: rotate(${startCornerSecond + 360}deg)}`;
	const SecondHandAnimated = styled.span`animation: ${keyframesSecond} 60s linear infinite;`;
	
	const keyframesMinutes = keyframes`
	from {transform: rotate(${startCornerMinutes}deg)}
	to {transform: rotate(${startCornerMinutes + 360}deg)}`;
	const MinutesHandAnimated = styled.span`animation: ${keyframesMinutes} 3600s linear infinite;`;
	
	const keyframesHour = keyframes`
	from {transform: rotate(${startCornerHour}deg)}
	to {transform: rotate(${startCornerHour + 360}deg)}`;
	const HourHandAnimated = styled.span`animation: ${keyframesHour} 43200s linear infinite;`;
	
	return (
		<div className={style.body}>
			<h1>{name}</h1>
			<time className={style.clock}>
				<span className={`${style.clock__stroke} ${style.clock__stroke__small} ${style.clock__stroke__1}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__small} ${style.clock__stroke__2}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__small} ${style.clock__stroke__3}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__small} ${style.clock__stroke__4}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__5}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__small} ${style.clock__stroke__6}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__small} ${style.clock__stroke__7}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__small} ${style.clock__stroke__8}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__small} ${style.clock__stroke__9}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__10}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__small} ${style.clock__stroke__11}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__small} ${style.clock__stroke__12}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__small} ${style.clock__stroke__13}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__small} ${style.clock__stroke__14}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__15}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__small} ${style.clock__stroke__16}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__small} ${style.clock__stroke__17}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__small} ${style.clock__stroke__18}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__small} ${style.clock__stroke__19}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__20}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__small} ${style.clock__stroke__21}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__small} ${style.clock__stroke__22}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__small} ${style.clock__stroke__23}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__small} ${style.clock__stroke__24}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__25}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__small} ${style.clock__stroke__26}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__small} ${style.clock__stroke__27}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__small} ${style.clock__stroke__28}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__small} ${style.clock__stroke__29}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__30}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__small} ${style.clock__stroke__31}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__small} ${style.clock__stroke__32}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__small} ${style.clock__stroke__33}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__small} ${style.clock__stroke__34}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__35}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__small} ${style.clock__stroke__36}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__small} ${style.clock__stroke__37}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__small} ${style.clock__stroke__38}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__small} ${style.clock__stroke__39}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__40}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__small} ${style.clock__stroke__41}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__small} ${style.clock__stroke__42}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__small} ${style.clock__stroke__43}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__small} ${style.clock__stroke__44}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__45}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__small} ${style.clock__stroke__46}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__small} ${style.clock__stroke__47}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__small} ${style.clock__stroke__48}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__small} ${style.clock__stroke__49}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__50}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__small} ${style.clock__stroke__51}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__small} ${style.clock__stroke__52}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__small} ${style.clock__stroke__53}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__small} ${style.clock__stroke__54}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__55}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__small} ${style.clock__stroke__56}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__small} ${style.clock__stroke__57}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__small} ${style.clock__stroke__58}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__small} ${style.clock__stroke__59}`}></span>
				<span className={`${style.clock__stroke} ${style.clock__stroke__60}`}></span>

				<HourHandAnimated className={`${style.clock__hand} ${style.clock__hand__hour}`}></HourHandAnimated>
				<MinutesHandAnimated className={`${style.clock__hand} ${style.clock__hand__minute}`}></MinutesHandAnimated>
				<SecondHandAnimated className={`${style.clock__hand} ${style.clock__hand__second}`}></SecondHandAnimated>
			</time>

		</div>
	)
}
