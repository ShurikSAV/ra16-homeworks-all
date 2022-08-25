import React from 'react';
import styles from './App.module.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from './components/Header';
import { CardsPages } from './pages/CardsPages';
import { CollapsePages } from './pages/CollapsePages';
import { DecompositionPages } from './pages/DecompositionPages';

const menu = [
		{
			path: "/",
			name: "Домой",
			element: (<p>Выберите задание в меню выше</p>)
		},
		{
			path: "CardsPages/",
			name: "Карточки",
			element: (<CardsPages/>)
		},
		{
			path: "DecompositionPages/",
			name: "Декомпозиция",
			element: (<DecompositionPages />)
		},
		{
			path: "CollapsePages/",
			name: "Collapse",
			element: (<CollapsePages />)
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