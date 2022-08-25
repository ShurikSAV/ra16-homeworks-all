import React from 'react'
//import PropTypes from 'prop-types';
import style from './index.module.css'


export const FileInput = ({addFileImag}) => {
	const fileToDataUrl = file => {
		return new Promise((resolve, reject) => {
			const fileReader = new FileReader();
		
			fileReader.addEventListener('load', evt => {
				resolve(evt.currentTarget.result);
			});
			fileReader.addEventListener('error', evt => {
				reject(new Error(evt.currentTarget.error));
			});
			fileReader.readAsDataURL(file);
		});
	}
	
	const handleSelect = async (evt) => {
		const files = [...evt.target.files]
		const urls = await Promise.all(files.map(o => fileToDataUrl(o)))

		addFileImag(files.map(
			(item, i) => { return {name:item.name, dataImage: urls[i]} }
		))
	}

	return (
		<div className={style.fileInput}>
			<div className={style.fileText}>Click to select</div>
			<input onChange={handleSelect} type="file" accept="image/*" multiple value=''/>
		</div>
	)
}

/*
FileInput.propTypes = {
	count: PropTypes.number
	}
*/