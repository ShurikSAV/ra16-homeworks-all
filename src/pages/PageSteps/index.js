import React, { useState } from 'react'
import { FormSteps } from './FormSteps'
import { GridSteps } from './GridSteps'
//import PropTypes from 'prop-types';
import style from './index.module.css'

const dataStepsNew = (data = '', distance = 0.0) => {return { data, distance }}

const dataHeader = ["Дата (ДД.ММ.ГГ)", "Пройдено км", "Действия"]

const dataSteps = [
	dataStepsNew("20.07.2019", 5.7),
	dataStepsNew("19.07.2019", 14.2),
	dataStepsNew("18.07.2019", 3.4),
]

const dataValid = (dataEdit) => {
	return dataEdit.data !== '' && dataEdit.distance > 0
}

const dataEditStepsNew = (index = undefined, data = dataStepsNew()) => {return {index, data}}

export const PageSteps = () => {
	const [ dataGrid, setDataGrid] = useState(dataSteps)
	const [ dataEdit, setDataEdit] = useState(dataEditStepsNew())

	const addFormStep = () => {
		console.log('addFormStep',dataEdit);
		//TODO валидация значений
		if(dataEdit.index) {
			setDataGrid(
				[
					...dataGrid.map(
						(item, i) => {
							return i == dataEdit.index ? dataEdit.data : item
						}
					)
					
				]
			)
		} else if(dataValid(dataEdit)) {
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
			<FormSteps add={addFormStep} dataEdit={dataEdit} setDataEdit={setDataEdit}/>
			<GridSteps data={dataGrid} header={dataHeader} edit={editGridStep} del={delGridStep}/>
		</div>
	)
}

/*
PageSteps.propTypes = {
	count: PropTypes.number
	}
*/