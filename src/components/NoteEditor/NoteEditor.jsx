import React, { useRef, useEffect } from "react";
import s from "./NoteEditor.module.css";

function moveCursorToEnd(el) {
	if (typeof el.selectionStart == "number") {
		el.selectionStart = el.selectionEnd = el.value.length;
	} else if (typeof el.createTextRange != "undefined") {
		el.focus();
		var range = el.createTextRange();
		range.collapse(false);
		range.select();
	}
}

function NoteEditor({
	children,
	onBlur,
	onChange,
	onKeyDown,
	show,
	darkTheme,
}) {
	const textareaRef = useRef();
	useEffect(() => {
		if (textareaRef.current && show) {
			moveCursorToEnd(textareaRef.current);
			textareaRef.current.focus();
		}
		return () => {
			if (textareaRef.current && show) {
				textareaRef.current.blur();
			}
		};
	}, [show]);
	return (
		<>
			{show && (
				<textarea
					className={darkTheme ? s.noteEditorDark : s.noteEditor}
					onBlur={onBlur}
					onChange={onChange}
					onKeyDown={onKeyDown}
					ref={textareaRef}
					defaultValue={children}
				></textarea>
			)}
		</>
	);
}

export default NoteEditor;
