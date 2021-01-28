import React from "react";

class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      "count": 0,
      "step": 1
    }
  }

  incHandler = (e) => {
    this.setState({
        count: this.state.count + this.state.step
    })
  };
  
  decHandler = (e) => {
    this.setState({
        count: this.state.count - this.state.step
      })
  };
  
  resetHandler = (e) => {
    this.setState({
      count: 0
    })
  }

  stepHandler = (e) => {
    if (e.target.tagName === "BUTTON") {
      this.setState({
        step: Number(e.target.textContent)
      })
    }
  }

	render() {
		return (
			<>
        <h1 className="counter">{ this.state.count }</h1>
				<div className="steps">
					<h3 className="center">Steps</h3>
					<div className="step-selections flex justify-space-between mtb-2" onClick={ this.stepHandler }>
            <button className="step">5</button>
            <button className="step">10</button>
            <button className="step">15</button>
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

export default Counter;