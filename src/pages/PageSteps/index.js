import React, { useState } from 'react'
import { validData } from '../../util/ValidatorUtil'
import { FormSteps } from './FormSteps'
import { GridSteps } from './GridSteps'
//import PropTypes from 'prop-types';
import style from './index.module.css'

const dataStepsNew = (data = new Date(), distance = 0.0) => {return { data, distance: distance + 0 }}

const dataHeader = ["Дата (ДД.ММ.ГГ)", "Пройдено км", "Действия"]

const dataSteps = [
	dataStepsNew( new Date(2019,7,20), 5.7),
	dataStepsNew( new Date(2019,7,19), 14.2),
	dataStepsNew(new Date(2019,7,18), 3.4),
]

const dataValid = (dataEdit) => {

	return validData(dataEdit.data) && dataEdit.distance >= 0
}

const dataEditStepsNew = (index = undefined, data = dataStepsNew()) => {return {index, data}}

export const PageSteps = () => {
	const [ dataGrid, setDataGrid] = useState(dataSteps)
	const [ dataEdit, setDataEdit] = useState(dataEditStepsNew())

	const addFormStep = () => {
		//TODO валидация значений
		
		console.log('addFormStep0',dataEdit,dataValid(dataEdit));
		if(!dataValid(dataEdit.data)) return

		if(dataEdit.index) {
			console.log('addFormStep1',dataEdit);
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
			console.log('addFormStep2',dataEdit);
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