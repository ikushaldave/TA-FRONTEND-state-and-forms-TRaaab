import React from "react";

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			email: "",
			password: "",
			retypedPassword: "",
			error: {
				username: "",
				email: "",
				password: "",
				retypedPassword: "",
			},
		};
	}

	validateEmail = (email) => {
		const regex = /\S+@\S+\.\S+/;
		return regex.test(email);
  }

	formHandler = (e) => {
		e.preventDefault();
		alert("Successful Registered");
	};

  changeHandler = ({ target }) => {

		const { name, value } = target;
		const error = this.state.error;

		switch (name) {
      case "username":
				error.username = value.trim().length > 3 ? "" : "Username must be at least 3 character";
				break;
			case "email":
        error.email = this.validateEmail(value) ? "" : "Email is invalid";
        break
      case "password":
        error.password = value.trim().length > 5 ? "" : "Password must be at least 6 characters";
        break;
      case "retypedPassword":
        error.retypedPassword = this.state.password === value ? "": "Password doesn't matched"
        break;
			default:
				break;
		}

		this.setState({
      [name]: value,
      error
		});
	};

  render () {
    const { username, email, password, retypedPassword } = this.state.error;
		return (
			<form className="flex flex-col justify-center items-center m-8" onSubmit={this.formHandler}>
				<div className="register w-1/2 m-auto bg-white shadow-2xl p-8 rounded-md">
					<h2 className="text-2xl text-center">Register With Us</h2>
					<div className="input-field">
						<label htmlFor="username">Username</label>
						<input type="text" name="username" id="username" required value={this.state.username} onChange={this.changeHandler} minLength="3" className={username ? "error" : "success"} />
						<span className="text-red-500">{username}</span>
					</div>
					<div className="input-field">
						<label htmlFor="email">Email</label>
						<input type="email" name="email" id="email" required value={this.state.email} onChange={this.changeHandler} className={email ? "error" : "success"} />
						<span className="text-red-500">{email}</span>
					</div>
					<div className="input-field">
						<label htmlFor="password">Password</label>
						<input type="password" name="password" id="password" required value={this.state.password} onChange={this.changeHandler} minLength="6" className={password ? "error" : "success"} />
						<span className="text-red-500">{password}</span>
					</div>
					<div className="input-field">
						<label htmlFor="confirm-password">Confirm Password</label>
						<input type="text" name="retypedPassword" id="confirm-password" required value={this.state.retypedPassword} onChange={this.changeHandler} minLength="6" className={retypedPassword ? "error" : "success"} />
						<span className="text-red-500">{retypedPassword}</span>
					</div>
					<input type="submit" value="Submit" className="bg-blue-500 text-white border border-blue-800" />
				</div>
			</form>
		);
	}
}

export default Form;