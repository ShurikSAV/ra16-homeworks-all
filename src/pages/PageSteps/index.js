import { isDate, isEqual } from 'date-fns'
import React, { useState } from 'react'
import { FormSteps } from './FormSteps'
import { GridSteps } from './GridSteps'
//import PropTypes from 'prop-types';
import style from './index.module.css'

const dataHeader = ["Дата (ДД.ММ.ГГ)", "Пройдено км", "Действия"]

const dataStepsCreate = (date  = new Date(), distance = 0) => {return {date, distance}}

const dataSteps = [
	dataStepsCreate( new Date(2019,7,20), 5.7),
	dataStepsCreate( new Date(2019,7,19), 14.2),
	dataStepsCreate( new Date(2019,7,18), 3.4),
]


export const PageSteps = () => {
	const [ dataGrid, setDataGrid] = useState(dataSteps)
	const [ indexEdit, setIndexEdit] = useState()

	const validDate = (date) => {
		if(!isDate(date)) {
			alert('В ведите дату в поле "Дата (ДД.ММ.ГГ)"')
			return false
		}
		return true
	}

	const updateFormStep = (date, distance, indexEdit = -1) => {
		if(!validDate(date)) {return}
		
		if(!indexEdit) {indexEdit = -1}

		date.setHours(0,0,0,0)
		
		const equalityItemDataGrid = dataGrid.find(
			(item, i) => i != indexEdit && isEqual(item.date,date)
			)
			
		if(equalityItemDataGrid) {distance = Number(distance) + Number(equalityItemDataGrid.distance)}
		
		setDataGrid(
			[
				...dataGrid.filter((item, i) => i != indexEdit && item.date > date ),
				dataStepsCreate(date, distance),
				...dataGrid.filter((item, i) => i != indexEdit && item.date < date)
			])
		setIndexEdit(undefined)
	}
	const delGridStep = (index) => {
		setDataGrid(dataGrid.filter((_, i) => i !== index))
	}
	
	const stepEdit = indexEdit ? dataGrid[indexEdit] : dataStepsCreate()

	return (
		<div className={style.body}>
			<FormSteps 
				header={dataHeader} 
				stepEdit={stepEdit}
				updateSteps={(date, distance) => {
					updateFormStep(date, distance, indexEdit)
				}} 
				/>
			
			<GridSteps 
				data={dataGrid} 
				header={dataHeader} 
				edit={setIndexEdit} 
				del={delGridStep}/>
		</div>
	)
}

/*
PageSteps.propTypes = {
	count: PropTypes.number
	}
*/