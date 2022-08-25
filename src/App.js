import React from 'react';
import styles from './App.module.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from './components/Header';

const menu = [
		{
			path: "/",
			name: "Домой",
			element: (<p>Выберите задание в меню выше</p>)
		},
		{
			path: "/",
			name: "Карточки",
			element: (<p>Карточки</p>)
		},
		{
			path: "/",
			name: "Декомпозиция",
			element: (<p>Декомпозиция</p>)
		},
		{
			path: "/",
			name: "Collapse",
			element: (<p>Collapse</p>)
		},
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