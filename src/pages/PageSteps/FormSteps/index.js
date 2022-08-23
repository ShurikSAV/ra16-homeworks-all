import React from 'react'
import { Label } from '../../../components/Label'
import { format, isDate } from 'date-fns'
//import PropTypes from 'prop-types';
import style from './index.module.css'

//{ data, distance }

export const FormSteps = ({add, dataEdit, setDataEdit, header}) => {
	const distanceEdit  = dataEdit.data.distance
	const dateEdit = isDate(dataEdit.data.date) ? format(dataEdit.data.date, 'yyyy-MM-dd') : ""
	const [labelData, labelStep] = header

	const setDate = (d) => {
		const dataEditNew = {
			...dataEdit,
			data: {
				...dataEdit.data,
				date: d.valueAsDate
			}
		}
		setDataEdit(dataEditNew)
	}
	
	const setDistance = (d) => {
		const dataEditNew = {
			...dataEdit,
			data: {
				...dataEdit.data,
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
							<Label inputType="date" value={dateEdit} onSetValue={setDate}>{labelData}</Label>
						</td>
						<td className={style.tdLabel}>
							<Label inputType="number"  value={distanceEdit} onSetValue={setDistance}>{labelStep}</Label>
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