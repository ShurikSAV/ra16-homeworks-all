import React from 'react';
import styles from './App.module.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from './components/Header';
import { PagesHex2rgb } from './pages/PagesHex2rgb';
import { PageSteps } from './pages/PageSteps';
import { PagePhoto } from './pages/PagePhoto';

const menu = [
	{
		path: "/",
		name: "Домой",
		element: (<p>Выберите задание в меню выше</p>)
	},
	{
		path: "/hex2rgb/",
		name: "Конвертер цветов",
		element: (<PagesHex2rgb />)
	},
	{
		path: "/steps/",
		name: "Учёт тренировок",
		element: (<PageSteps />)
	},
	{
		path: "/photo/",
		name: "Менеджер фото",
		element: (<PagePhoto />)
	}
]

function App() {
	return (
		<BrowserRouter>
			<div className={styles.app}>
				<div className={styles.header}>
					<Header menu={menu}/>
				</div>
				<div className={styles.content}>
					<Routes>
						{menu.map(
							(item,index) => <Route key={index} {...item}></Route>
							)}
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App