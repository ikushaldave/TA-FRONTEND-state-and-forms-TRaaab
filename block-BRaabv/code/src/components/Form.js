import React from "react";
import SignUp from "./Sign-Up";
import Message from "./Message";
import Checkbox from "./Checkbox";

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: "",
			lastName: "",
			dob: "",
			email: "",
			address: "",
			message: "",
			choiceOne: true,
			choiceTwo: false,
			female: false,
			male: true,
			current: 0,
			error: {
				firstName: "",
				lastName: "",
				dob: "",
				email: "",
				address: "",
			},
		};
	}

	validateEmail = (email) => {
		var regex = /\S+@\S+\.\S+/;
		return regex.test(email);
	}

	changeHandler = ({ target }) => {
		const { name, value } = target;
		const { error } = this.state;

		switch (name) {
			case "firstName":
				error.firstName = value.trim().length > 2 ? "" : "First name should be more than 3 letter";
				break;
			case "lastName":
				error.lastName = value.trim().length > 2 ? "" : "Last name should be more than 3 letter";
				break;
			case "email":
				error.email = this.validateEmail(value) ? "" : "Email Should be Valid";
				break;
			case "address":
				error.address = value.trim().length > 9 ? "" : "Address should be valid and more than 10 letter";
				break;
			default:
				break;
		}

		this.setState({
			[name]: value,
		});

	};

	radioHandler = ({ target }) => {
		if (target.id === "choiceOne") {
			this.setState({
				choiceOne: true,
				choiceTwo: false,
			});
		} else if (target.id === "choiceTwo") {
			this.setState({
				choiceOne: false,
				choiceTwo: true,
			});
		} else if (target.id === "male") {
			this.setState({
				male: true,
				female: false,
			});
		} else {
			this.setState({
				male: false,
				female: true,
			});
		}
	};

	prevHandler = () => {
		this.setState({
			current: this.state.current - 1,
		});
	};

	submitHandler = (e) => {
		e.preventDefault();
		var { current } = this.state;
		console.log(current);
		const { firstName, lastName, email, dob, address } = this.state;
		if (firstName && lastName && email && dob && address) {
			current += 1;
			if (current > 2) {
				alert("Form Submitted");
				return;
			}

			this.setState({
				current,
			});
		} else {
			this.setState({
				current: 0,
			});
		}
	};

	render() {
		return (
			<div onSubmit={this.submitHandler}>
				<SignUp input={this.state} changeHandler={this.changeHandler} prevHandler={this.prevHandler} submitHandler={this.submitHandler} />
				<Message input={this.state} changeHandler={this.changeHandler} prevHandler={this.prevHandler} radioHandler={this.radioHandler} submitHandler={this.submitHandler} />
				<Checkbox input={this.state} changeHandler={this.changeHandler} prevHandler={this.prevHandler} radioHandler={this.radioHandler} submitHandler={this.submitHandler} />
			</div>
		);
	}
}

export default Form;


