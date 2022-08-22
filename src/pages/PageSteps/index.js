import React, { useState } from 'react'
import { FormSteps } from './FormSteps'
import { GridSteps } from './GridSteps'
//import PropTypes from 'prop-types';
import style from './index.module.css'

const dataStepsNew = (date = new Date(), distance = 0.0) => {return { date: date, distance: distance }}

const dataHeader = ["Дата (ДД.ММ.ГГ)", "Пройдено км", "Действия"]

const dataSteps = [
	dataStepsNew( new Date(2019,7,20), 5.7),
	dataStepsNew( new Date(2019,7,19), 14.2),
	dataStepsNew( new Date(2019,7,18), 3.4),
]

const dateValid = (dateEdit) => {
	return dateEdit instanceof Date && !isNaN(dateEdit)
}

const dataEditStepsNew = (index = undefined, date, distance) => {return {index, data: dataStepsNew(date, distance)}}

export const PageSteps = () => {
	const [ dataGrid, setDataGrid] = useState(dataSteps)
	const [ dataEdit, setDataEdit] = useState(dataEditStepsNew())

	const addFormStep = () => {
		console.log('addFormStep',dataEdit);
		if(!dateValid(dataEdit.date)) return
		console.log('addFormStep0',dataEdit.date);

		if(dataEdit.index) {
			console.log('addFormStep1',dataEdit);
			setDataGrid(
				[
					...dataGrid.map(
						(item, i) => {
							return i === dataEdit.index ? dataEdit.date : item
						}
					)
				]
			)
		} else {
			console.log('addFormStep2',dataEdit);
			setDataGrid(
				[
					...dataGrid,
					dataEdit.date
				]
			)
		}
		setDataEdit(dataEditStepsNew())
	}
	const delGridStep = (index) => {
		
		
		let dataNew = dataGrid.filter(
			(_, i) => i !== index
			)
			
		console.log('delGridStep', dataGrid,dataNew)
		setDataGrid([...dataNew])
	}

	const editGridStep = (index) => {
		
		setDataEdit(dataEditStepsNew(index, dataGrid[index]))
	}

	return (
		<div className={style.body}>
			<FormSteps add={addFormStep} header={dataHeader} dataEdit={dataEdit} setDataEdit={setDataEdit}/>
			<GridSteps data={dataGrid} header={dataHeader} edit={editGridStep} del={delGridStep}/>
		</div>
	)
}

/*
PageSteps.propTypes = {
	count: PropTypes.number
	}
*/