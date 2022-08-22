import React, { useState } from 'react'
import { Label } from '../../../components/Label'
//import PropTypes from 'prop-types';
import style from './index.module.css'

//{ data, distance }

export const FormSteps = ({add, dataEdit, setDataEdit, header}) => {
	const data  = dataEdit.data
	const [labelData, labelStep] = header

	const setDate = (d) => {
		console.log(data.date, d.valueAsDate, dataEdit);

		const dataEditNew = {
			...dataEdit,
			data: {
				...data,
				date: d.valueAsDate
			}
		}
		
		console.log(dataEditNew);

		setDataEdit(dataEditNew)
	}
	
	const setDistance = (d) => {
		const dataEditNew = {
			...dataEdit,
			data: {
				...data,
				distance: Number(d.value)
			}
		}
		setDataEdit(dataEditNew)
	}


	return (
		<div className={style.body}>
			<table>
				<tbody>
					<tr>
						<td className={style.tdLabel}>
							<Label inputType="date" value={data.date} onSetValue={setDate}>{labelData}</Label>
						</td>
						<td className={style.tdLabel}>
							<Label inputType="number"  value={data.distance} onSetValue={setDistance}>{labelStep}</Label>
						</td>
						<td className={style.tdButton}>
							<button onClick={add}>OK</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

/*
FormSteps.propTypes = {
	count: PropTypes.number
	}
*/