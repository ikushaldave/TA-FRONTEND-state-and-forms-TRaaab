import React from "react";
import data from "./data.json";

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: "acc-0"
    }
  }

  clickHandler = (e) => {
    this.setState({
      opened: e.currentTarget.dataset.uid
    })
  }

  render () {
    return (
		<div className="accordions">
			{data.map((ques, i) => (
				<div className="accordion" key={`a${i}`}>
					<div className="question" onClick={this.clickHandler} data-uid={`acc-${i}`}>
						<p>{ques.question}</p>
						<i className={this.state.opened === `acc-${i}` ? "far fa-hand-point-up rotate-180" : "far fa-hand-point-up"}></i>
					</div>
					<div className={this.state.opened === `acc-${i}` ? "open answer" : "answer"}>
						<p>{ques.answer}</p>
					</div>
				</div>
			))}
		</div>
	);
  }
}

export default Accordion;