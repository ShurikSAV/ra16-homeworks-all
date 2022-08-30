import React, { useState } from 'react'
import style from './index.module.css'

export const Collapse = ({collapsedLabel = "Развернуть", expandedLabel = "Свернуть", children}) => {
	const [open, setOpen] = useState(false)
	
	const textBlock = () => {
		return (
			<div class={`card card-body ${style.card} ${open ? style.visible : style.hidden}`}>
				{children}
			</div>
		)
	}

	const onClick = () => {
		setOpen( prev => !prev )
	}

	return (
		<div className={style.body}>
			<button onClick={onClick} class="btn btn-primary">
				{open ? expandedLabel : collapsedLabel}
			</button>
			{textBlock()}
		</div>
	)
}