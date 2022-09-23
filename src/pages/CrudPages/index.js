import React from 'react'
import { ButtonRound } from '../../components/ButtonRound'
import { NoteNew } from '../../components/NoteNew'
import { Notes } from '../../components/Notes'
import { UpdateIco } from '../../utils/IcoCollection'
import style from './index.module.css'


//TODO Первоначальная загрузка: делается http-запрос GET на адрес http://localhost:7777/notes, полученные данные отображаются в виде карточек с возможностью удаления

//TODO Добавление:
//Вы заполняете форму и нажимаете кнопку "Добавить"
//Выполняется http-запрос POST на адрес http://localhost:7777/notes, в теле запроса передаётся следующий JSON:

//TODO После чего делается запрос на получение всех записей и происходит обновление списка (GET http://localhost:7777/notes).

//TODO Удаление:
	//Вы нажимаете на крестик на одной из карточек
	//Выполняется http-запрос DELETE на адрес http://localhost:7777/notes/{id} (где id - это идентификатор заметки)
	//После чего делается запрос на получение всех записей и происходит обновление списка (GET http://localhost:7777/notes).

//TODO Обновление:
	//Вы нажимаете на кнопку обновить (две зелёные стрелочки)
	//После чего делается запрос на получение всех записей и происходит обновление списка (GET http://localhost:7777/notes).

export const CrudPages = () => {
	const onRefresh = () => {
		console.log('CrudPages','onRefresh');
	}

	return (
		<div className={style.body}>
			<div className={style.caption}>
					<h1>Notes</h1>
					<ButtonRound className={style.buttonRefresh} onClick={onRefresh}>
						<img alt='Обновить' src={UpdateIco['60x60']}></img>
					</ButtonRound>
			</div>
			<Notes/>
			<NoteNew/>
		</div>
	)
}
