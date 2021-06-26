import React, { useState, useEffect } from "react";
import Marked from "marked";
import s from "./NotesContainer.module.css";

import Note from "../Note/Note";
import NoteEditor from "../NoteEditor/NoteEditor";

function NotesContainer({ darkTheme }) {
	useEffect(() => {
		window.addEventListener("keydown", handleKeydown);
		return () => window.removeEventListener("keydown");
	}, []);

	const defaultValue = localStorage.getItem("noteValue")
		? localStorage.getItem("noteValue")
		: "";
	const [noteValue, setNoteValue] = useState(defaultValue);
	const [showNotePreview, setShowNotePreview] = useState(false);

	useEffect(() => {
		localStorage.setItem("noteValue", noteValue);
	}, [noteValue]);

	function handleChange(e) {
		setNoteValue(e.target.value);
	}
	function handleKeydown(e) {
		if (e.key === "Escape") {
			setShowNotePreview(!showNotePreview);
		}
	}
	return (
		<div className={s.container}>
			<NoteEditor
				show={!showNotePreview}
				onBlur={() => setShowNotePreview(true)}
				onChange={handleChange}
				onKeyDown={handleKeydown}
				darkTheme={darkTheme}
			>
				{noteValue}
			</NoteEditor>

			<Note
				darkTheme={darkTheme}
				onClick={() => setShowNotePreview(false)}
				show={showNotePreview}
			>
				{Marked(noteValue)}
			</Note>
		</div>
	);
}

export default NotesContainer;
