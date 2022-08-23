import { isDate } from 'date-fns'
import React, { useState } from 'react'
import { FormSteps } from './FormSteps'
import { GridSteps } from './GridSteps'
//import PropTypes from 'prop-types';
import style from './index.module.css'

const dataStepsNew = (date = new Date(), distance = 0.0) => {return { date, distance }}

const dataHeader = ["Дата (ДД.ММ.ГГ)", "Пройдено км", "Действия"]

const dataSteps = [
	dataStepsNew( new Date(2019,7,20), 5.7),
	dataStepsNew( new Date(2019,7,19), 14.2),
	dataStepsNew( new Date(2019,7,18), 3.4),
]

const dataEditStepsNew = (index = undefined, data = dataStepsNew()) => {return {index, data}}

export const PageSteps = () => {
	const [ dataGrid, setDataGrid] = useState(dataSteps)
	const [ dataEdit, setDataEdit] = useState(dataEditStepsNew())

	const addFormStep = () => {
		if(!isDate(dataEdit.data.date)) {
			alert('В ведите дату в поле "Дата (ДД.ММ.ГГ)"')
			return
		}

		if(dataEdit.index) {
			setDataGrid(
				[
					...dataGrid.map(
						(item, i) => {
							return i === dataEdit.index ? dataEdit.data : item
						}
					)
				]
			)
		} else {
			setDataGrid(
				[
					...dataGrid,
					dataEdit.data
				]
			)
		}
		setDataEdit(dataEditStepsNew())
	}
	const delGridStep = (index) => {
		
		
		let dataNew = dataGrid.filter(
			(_, i) => i !== index
			)
			
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