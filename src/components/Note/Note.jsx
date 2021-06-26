import React from "react";
import s from "./Note.module.css";

function Note({ children, show, onClick, darkTheme }) {
	return (
		<>
			{show && (
				<div
					onClick={onClick}
					className={darkTheme ? s.noteDark : s.note}
					dangerouslySetInnerHTML={{ __html: children }}
				></div>
			)}
		</>
	);
}

export default Note;
