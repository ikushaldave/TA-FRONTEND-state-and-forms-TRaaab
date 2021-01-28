import React from "react";
import data from "./data.json";

class Persons extends React.Component {
	render() {
		const persons = data.reduce((acc, cv) => {
			acc = acc.concat(cv.people.map((people) => people.name));
			return acc;
    }, []);

		return (
      <div className="persons" onClick={this.props.personHandler}>
				<h2>Select One Person</h2>
				{persons.map((person) => (
					<button className={person === this.props.personSelected ? "btn selected" : "btn"} key={person} data-selected={person}>
						{person}
					</button>
				))}
			</div>
		);
	}
}

export default Persons;