import { isDate } from 'date-fns'
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

	const addFormStep = (date, distance) => {
		if(!isDate(date)) {
			alert('В ведите дату в поле "Дата (ДД.ММ.ГГ)"')
			return
		}
		setDataGrid(
			[
				...dataGrid,
				dataStepsCreate(date, distance)
			])
		setIndexEdit(undefined)
	}
	
	const updateFormStep = (index, date, distance) => {
		if(!isDate(date)) {
			alert('В ведите дату в поле "Дата (ДД.ММ.ГГ)"')
			return
		}
		setDataGrid(
			[
				...dataGrid.map(
					(item, i) => {
						return i === index ? dataStepsCreate(date, distance) : item
					}
				)
			]
		)
		setIndexEdit(undefined)
	}
	const delGridStep = (index) => {
		setDataGrid(dataGrid.filter((_, i) => i !== index))
	}
	
	const stepEdit = indexEdit ? {...dataGrid[indexEdit]} : dataStepsCreate()

	return (
		<div className={style.body}>
			<FormSteps 
				header={dataHeader} 
				stepEdit={stepEdit}
				updateSteps={(date, distance) => {
					indexEdit 
						? updateFormStep(indexEdit, date, distance)
						: addFormStep(date, distance)
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