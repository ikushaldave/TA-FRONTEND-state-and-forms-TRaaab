import React from "react";
import PropTypes from "prop-types";

const buttons = ["Basketball", "PubG", "Tiger", "Phone", "Laptop", "Cricket"];

class Button extends React.Component {
	render() {
		return (
			<button className="btn" data-uid={this.props.btnName.toLowerCase()}>
				{this.props.btnName}
			</button>
		);
	}
}

class Buttons extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			btnClicked: "basketball",
		};
	}

	clickHandler = (e) => {
		if (e.target.tagName === "BUTTON") {
			this.setState({
				btnClicked: e.target.dataset.uid,
			});
		}
	};

	render() {
		return (
			<>
				<div className="buttons" onClick={this.clickHandler}>
					{buttons.map((btn) => (
						<Button btnName={btn} key={btn} />
					))}
				</div>
				<img src={`/assets/${this.state.btnClicked}.jpg`} alt={this.state.btnClicked} />
			</>
		);
	}
}

class App extends React.Component {
  render () {
    return (
        <Buttons />
    );
  }
}

Button.propsTypes = {
	btnName: PropTypes.string.isRequired,
};

export default App;