import React from "react";

class MaxCounter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
      step: 1,
      maxVal: null
		};
	}

  incHandler = (e) => {
    let count = this.state.count + this.state.step;
    if (this.state.maxVal) {
      this.setState({
        count: (count <= this.state.maxVal) ? count : this.state.count
      });
    } else {
      this.setState({
			count: count + this.state.step,
		  });
    }
	};

	decHandler = (e) => {
		this.setState({
			count: this.state.count - this.state.step,
		});
	};

	resetHandler = (e) => {
		this.setState({
			count: 0,
		});
	};

	stepHandler = (e) => {
		if (e.target.tagName === "BUTTON") {
			this.setState({
				step: Number(e.target.textContent),
			});
		}
  };
  
  maxHandler = (e) => {
		if (e.target.tagName === "BUTTON") {
			this.setState({
				maxVal: Number(e.target.textContent),
			});
		}
  };
  
	render() {
		return (
			<>
				<h1 className="counter">{this.state.count}</h1>
				<div className="steps">
					<h3 className="center">Steps</h3>
					<div className="step-selections flex justify-space-between mtb-2" onClick={this.stepHandler}>
						<button className="step">5</button>
						<button className="step">10</button>
						<button className="step">15</button>
					</div>
        </div>
        <div className="max-val">
					<h3 className="center">Max</h3>
					<div className="step-selections flex justify-space-between mtb-2" onClick={this.maxHandler}>
						<button className="max">15</button>
						<button className="max">100</button>
						<button className="max">200</button>
					</div>
				</div>
				<div className="buttons flex justify-space-between mtb-2">
					<button className="btn" onClick={this.incHandler}>
						Increment
					</button>
					<button className="btn" onClick={this.decHandler}>
						Decrement
					</button>
					<button className="btn" onClick={this.resetHandler}>
						Reset
					</button>
				</div>
			</>
		);
	}
}

export default MaxCounter;
