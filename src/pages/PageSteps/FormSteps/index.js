import React, { useState } from 'react'
import { Label } from '../../../components/Label'
import { format, isDate, toDate } from 'date-fns'
//import PropTypes from 'prop-types';
import style from './index.module.css'

export const FormSteps = ({header, updateSteps, stepEdit}) => {
	const [labelData, labelStep] = header
	const {date,distance} = stepEdit

	console.log('FormSteps1', stepEdit, date,distance)

	const [dateEdit, setDateEdit] = useState(date)

	const [distanceEdit, setDistanceEdit] = useState(distance)
	
	console.log('FormSteps2',dateEdit, distanceEdit);
	
	return (
		<div className={style.body}>
			<table>
				<tbody>
					<tr>
						<td className={style.tdLabel}>
							<Label inputType="date" value={format(dateEdit, 'yyyy-MM-dd')} onSetValue={(e) => setDateEdit(e.valueAsDate)}>{labelData}</Label>
						</td>
						<td className={style.tdLabel}>
							<Label inputType="number" value={distanceEdit} onSetValue={(e) => setDistanceEdit(e.value)}>{labelStep}</Label>
						</td>
						<td className={style.tdButton}>
							<button onClick={() => updateSteps(dateEdit, distanceEdit)}>OK</button>
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