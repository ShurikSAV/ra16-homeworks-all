import React, { useState } from 'react'
import { Label } from '../../../components/Label'
//import PropTypes from 'prop-types';
import style from './index.module.css'

//{ data, distance }

export const FormSteps = ({add, dataEdit, setDataEdit, header}) => {
	const {index, data}  = dataEdit
	const [labelData, labelStep] = header

	const setData = (d) => {
		//TODO Valid data
		
		const dataEditNew = {
			...dataEdit,
			data: {
				...dataEdit.data,
				data: d
			}
		}
		
		setDataEdit(dataEditNew)
	}
	
	const setDistance = (d) => {
		const dataEditNew = {
			...dataEdit,
			data: {
				...dataEdit.data,
				distance: Number(d)
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
							<Label inputType="text" value={data.data} onSetValue={setData}>{labelData}</Label>
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