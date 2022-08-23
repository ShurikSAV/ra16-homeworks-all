import React from 'react'
import { ImagePreview } from '../../components/ImagePreview';
//import PropTypes from 'prop-types';
import style from './index.module.css'

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
    const files = [...evt.target.files];
    const urls = await Promise.all(files.map(o => fileToDataUrl(o)));
    // У вас в массиве - dataUrl, можете использовать в качестве значения атрибута src тега img
}


export const PagePhoto = () => {
	return (
		<div className={style.body}>
			<div className={style.cellsBig}>
				<div className={style.fileInput}>
					<div className={style.fileText}>
						<p>Click to select</p>
						<input type="file" id="image" accept="image/*" multiple/>
					</div>
				</div>
				<div className={style.gallery}>
					<ImagePreview />
					<ImagePreview />
					<ImagePreview />
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