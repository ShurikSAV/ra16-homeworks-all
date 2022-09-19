import React from 'react'
import style from './index.module.css'
import styled, { keyframes } from "styled-components";


export const Watches = ({name,timeZone}) => {

	const keyframesSecond = keyframes`
    from {
        transform: rotate(0deg)
    }
    to {
        transform: rotate(360deg)
    }
`;

/*
  var styles = {
    border: "16px solid #eee",
    borderTop: "16px solid #3ae",
    borderRadius: "50%",
    width: "1cm",
    height: "1cm",
    animation: `${spin} 2s linear infinite`
  };
*/
  const ClockSecond = styled.span`
	&:after {
		content: '';
		border-radius: 0.01em 0.01em 0.005em 0.005em;
		background-color: #f00;
		margin-bottom: -0.02em;
		margin-left: -0.005em;
		font-size: inherit;
		position: absolute;
		display: block;
		height: 0.46em;
		width: 0.01em;
		bottom: 50%;
		left: 50%;
	}`;
	/* animation: ${spin} 2s linear infinite */
	const ClockSecondAnimated = styled(ClockSecond)`
		-webkit-animation: ${keyframesSecond} 60s linear infinite;
		animation: ${keyframesSecond} 60s linear infinite;
  	`;

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

				<span className={`${style.clock__hand} ${style.clock__hand__hour}`}></span>
				<span className={`${style.clock__hand} ${style.clock__hand__minute}`}></span>
				{/* <span className={`${style.clock__hand} ${style.clock__hand__second}`}></span> */}
				<ClockSecondAnimated></ClockSecondAnimated>
			</time>

		</div>
	)
}
