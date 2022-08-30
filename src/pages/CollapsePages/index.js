import React from 'react'
import { Collapse } from '../../components/Collapse'
import style from './index.module.css'

const collapses = [
	{
	collapsedLabel: "+Развернуть+",
	expandedLabel: "-Свернуть-",
	children: <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</p>
	},
	{
	children: <p>Скрытый текст</p>
	},
]

export const CollapsePages = () => {
	return (
		<div className={style.body}>
			{collapses.map(
				(item, i) => <Collapse key={i} {...item}/>
			)}
		</div>
	)
}