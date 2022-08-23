import React from 'react'
import { convertDateToString } from '../../../util/ConverterUtil'
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
					({date, distance}, i) => (
						<tr key={i}>
							<td>{convertDateToString(date)}</td>
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