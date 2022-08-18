import React from 'react'
//import PropTypes from 'prop-types';
import style from './index.module.css'

export const GridSteps = ({data, header, edit, del}) => {
	return (
		<table className={style.body}>
			<thead>
				<tr>
					{header.map(
						(item, i) => (<th key={i}>{item}</th>)
					)}
				</tr>
			</thead>
			<tbody>
				{data.map(
					({data, distance}, i) => (
						<tr key={i}>
							<td>{data}</td>
							<td>{distance}</td>
							<td>
								<button onClick={() => {edit(i)}}>✎</button>
								<button onClick={() => {del(i)}}>×</button>
							</td>
						</tr>)
					)}
			</tbody>
		</table>
	)
}

/*
GridSteps.propTypes = {
	count: PropTypes.number
	}
*/