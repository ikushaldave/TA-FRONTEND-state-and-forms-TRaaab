import React from "react";

class MultipleInput extends React.Component {
	constructor(props) {
		super(props);
		this.file = React.createRef();
		this.state = {
			text: "",
			date: "",
			textarea: "",
		};
	}

	textHandler = (e) => {
		this.setState({
			text: e.target.value,
		});
	};

	dateHandler = (e) => {
		this.setState({
			date: e.target.value,
		});
	};

	fileHandler = (e) => {
		alert(e.target.files[0].name);
	};

	textareaHandler = (e) => {
		this.setState({
			textarea: e.target.value
		})
	}

	render() {
		return (
			<div className="multiple-input w-full min-h-screen flex flex-col justify-center items-center">
				<div className="w-1/2 m-auto p-10">
					<div className="input-field">
						<label htmlFor="input-text">Text Input</label>
						<input type="text" id="input-text" value={this.state.text} onChange={this.textHandler} />
					</div>
					<div className="input-field">
						<label htmlFor="input-date">Date Input</label>
						<input type="date" id="input-date" value={this.state.date} onChange={this.dateHandler} />
					</div>
					<div className="input-field">
						<label htmlFor="input-file">File Input</label>
						<input type="file" id="input-file" ref={this.file} onChange={this.fileHandler} />
					</div>
					<div className="input-field">
						<label htmlFor="input-readonly">Read-Only Input</label>
						<input type="text" id="input-readonly" value="This can only be copied" readOnly />
					</div>
					<div className="input-field">
						<label htmlFor="input-disabled">Disabled Input</label>
						<input type="text" id="input-disabled" disabled />
					</div>
					<div className="input-field">
						<label htmlFor="input-textarea">Textarea</label>
						<textarea id="input-textarea" cols="30" rows="3" value={this.state.textarea} onChange={this.textareaHandler} />
					</div>
					<div className="input-field">
						<label htmlFor="input-textarea-disabled">Textarea</label>
						<textarea id="input-textarea-disabled" cols="30" rows="3" disabled />
					</div>
				</div>
			</div>
		);
	}
}

export default MultipleInput;