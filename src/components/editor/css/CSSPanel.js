import React from "react";
import { render } from "react-dom";
import brace from "brace";
import AceEditor from "react-ace";
import "brace/mode/css";
import "brace/theme/twilight";

function onChange(newValue) {
	console.log("change", newValue);
}

export default class CSSPanel extends React.Component {
	componentDidMount() {
		var undo_manager = this.refs.ace.editor.getSession().getUndoManager();
		undo_manager.reset();
		this.refs.ace.editor.getSession().setUndoManager(undo_manager);
		this.refs.ace.editor.setAutoScrollEditorIntoView(true);
	}

	render() {
		return (
			<AceEditor
				mode="css"
				theme="twilight"
				onChange={onChange}
				name="aceEditor"
				editorProps={{ $blockScrolling: Infinity }}
				ref="ace"
				width="100%"
				value={this.props.css}
				onLoad={editor => {
					editor.focus();
					editor.getSession().setUseWrapMode(false);
				}}
			/>
		);
	}
}