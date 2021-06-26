import React, { useEffect, useState } from "react";
import s from "./App.module.css";

import NotesContainer from "./components/NotesContainer/NotesContainer";

function App() {
	const [darkTheme, setDarkTheme] = useState(true);
	useEffect(() => {
		if (darkTheme) document.body.classList.add("dark");
		else document.body.classList.remove("dark");
		return () => document.body.classList.remove("dark");
	}, [darkTheme]);
	return (
		<>
			<button
				className={s.themeToggler}
				onClick={() => setDarkTheme(!darkTheme)}
			>
				<img src="./theme-icon.svg" aria-hidden={true} />
			</button>
			<h1 className={darkTheme ? s.h1Dark : s.h1}>S L A T E</h1>
			<NotesContainer darkTheme={darkTheme} />
			<a href="https://github.com/nikhilmwarrier" className={s.link}>
				Created by nikhilmwarrier
			</a>
		</>
	);
}

export default App;
