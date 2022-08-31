import React from 'react';
import styles from './App.module.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from './components/Header';
import { WatchesPages } from './pages/WatchesPages';
import { CrudPages } from './pages/CrudPages';

const menu = [
		{
			path: "/",
			name: "Домой",
			element: (<p>Выберите задание в меню выше</p>)
		},
		{
			path: "/watches",
			name: "Мировые часы",
			element: (<WatchesPages />)
		},
		{
			path: "/crud",
			name: "CRUD",
			element: (<CrudPages />)
		},
		{
			path: "/chat",
			name: "Чат",
			element: (<p>Выберите задание в меню выше</p>)
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