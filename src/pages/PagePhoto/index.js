import React, { useState } from 'react'
import { FileInput } from '../../components/FileInput';
import { ImagePreview } from '../../components/ImagePreview';
//import PropTypes from 'prop-types';
import style from './index.module.css'

export const PagePhoto = () => {
	const [filesImag, setFilesImag] = useState([])

	const addFileImag = (imagesArray) => {
		setFilesImag([
			...filesImag,
			...imagesArray
		])
	}

	const delFileImag = (indexDel) => {
		setFilesImag(
			filesImag.filter( (_, i) => i !== indexDel)
		)
	}

	return (
		<div className={style.body}>
			<div className={style.cellsBig}>
				<FileInput addFileImag={addFileImag} />
				<div className={style.gallery}>
					{filesImag.map((item, i) => <ImagePreview key={i} {...item} onClose={ () => delFileImag(i)} />)}
				</div>
			</div>
		</div>
	)
}

/*
PagePhoto.propTypes = {
	count: PropTypes.number
	}
*/