import React from 'react'
import style from './index.module.css'

export const InputBlock = ({value, setValue, valueType, text}) => {
	const onChange = (e) => {
		setValue(e.target.value)
	}
	
	return (
		<div className={style.body}>
			<p>{text}</p>
			<input type={valueType} value={value} onChange={onChange}/>
		</div>
	)
}