import React, { useState } from 'react'
import { InputBlock } from '../../../components/InputBlock'
import style from './index.module.css'

export const FormWatches = () => {
	const [watchName, setWatchName] = useState("")
	const [timezone, setTimezone] = useState(0)

	return (
		<div className={style.body}>
			<InputBlock value={watchName} setValue={setWatchName} valueType={"text"} text={"Название"} />
			<InputBlock value={timezone} setValue={setTimezone} valueType={"number"} text={"Временная зона"} />
			
			<button> Добавить </button>
		</div>
	)
}