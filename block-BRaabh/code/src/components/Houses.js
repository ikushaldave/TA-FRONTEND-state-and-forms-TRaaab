import React from "react";
import data from "./data.json";
import Persons from "./Persons";
import Result from "./Result";

class Houses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      houseSelected: "",
      personSelected: ""
    }
  }

  clickHandler = (e) => {
    console.log(e.target.dataset.selected);
    if (e.target.tagName === "BUTTON") {
      if (e.currentTarget.classList.contains("houses")) {
        this.setState({
          houseSelected: e.target.dataset.selected,
        });
      } else {
        this.setState({
          personSelected: e.target.dataset.selected,
        });
      }
    } 
  }

  resetHandler = () => {
    this.setState({
      houseSelected: "",
      personSelected: "",
	});
  }

  render () {
    return (
		<>
			<div className="grid">
        <div className="selection">
            
					<div className="houses" onClick={this.clickHandler}>
						<h2>Select One House</h2>
						{data.map((house) => (
							<button className={house.name === this.state.houseSelected ? "btn selected" : "btn"} key={house.name} data-selected={house.name}>
								{house.name}
							</button>
						))}
            </div>
            
            <Persons personHandler={this.clickHandler} personSelected={this.state.personSelected} />
            
            <button className="reset-btn" onClick={() => this.resetHandler.call(this)}>
              Reset
            </button>
        </div>
          
				<div className="result">
            <Result house={this.state.houseSelected} person={ this.state.personSelected }/>
				</div>
			</div>
		</>
	);
  }
}

export default Houses;