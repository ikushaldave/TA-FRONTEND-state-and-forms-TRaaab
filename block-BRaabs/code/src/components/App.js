import React from "react";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			postalCode: "",
			city: "",
			country: "",
			address: "",
			isBillingAddressSame: false,
			billingPostalCode: "",
			billingCity: "",
			billingCountry: "",
			billingAddress: "",
		};
	}

	changeHandler = ({ target }) => {
		const { name, value } = target;
		this.setState({
			[name]: value,
		});
	};

	toggleHandler = ({target}) => {
		this.setState({
				isBillingAddressSame: target.checked,
			});
	};

	render() {
		return (
			<div className="max-w-screen-xl mx-auto p-8">
				<h1 className="text-center text-3xl font-black text-gray-800">Controlled Component</h1>
				<div className="flex justify-around m-4">
					<div className="col-48 border-2 border-red-400 rounded-md p-4 my-4">
						<h3 className="text-2xl font-bold text-green-600">Shipping Address</h3>
						<div className="input-field">
							<label htmlFor="address">Address</label>
							<input type="text" name="address" id="address" minLength="10" placeholder="e.g New Delhi, Vasant Vihar" value={this.state.address} onChange={this.changeHandler} />
						</div>
						<div className="input-field">
							<label htmlFor="postalCode">Zip/Postal Code</label>
							<input type="text" name="postalCode" id="postalCode" minLength="6" placeholder="e.g 132103" value={this.state.postalCode} onChange={this.changeHandler} />
						</div>
						<div className="input-field">
							<label htmlFor="city">City</label>
							<input type="text" name="city" id="city" minLength="3" placeholder="e.g Panipat" value={this.state.city} onChange={this.changeHandler} />
						</div>
						<div className="input-field">
							<label htmlFor="country">Country</label>
							<input type="text" name="country" id="country" minLength="3" placeholder="e.g India" value={this.state.country} onChange={this.changeHandler} />
						</div>
					</div>
					<div className="col-48 border-2 border-red-400 rounded-md p-4 my-4">
						<h3 className="text-2xl font-bold text-green-600">Billing Address</h3>
						<input type="checkbox" name="isBillingAddressSame" id="isBillingAddressSame" className="inline-block mr-2 mt-2" checked={this.state.isBillingAddressSame} onChange={this.toggleHandler} />
						<label htmlFor="isBillingAddressSame">Same as the Shipping Address?</label>
						<div className="input-field">
							<label htmlFor="billingAddress">Address</label>
							<input type="text" name="billingAddress" id="billingAddress" minLength="10" placeholder="e.g New Delhi, Vasant Vihar" value={this.state.isBillingAddressSame ? this.state.address : this.state.billingAddress} onChange={this.changeHandler} />
						</div>
						<div className="input-field">
							<label htmlFor="BillingPostalCode">Zip/Postal Code</label>
							<input type="text" name="BillingPostalCode" id="BillingPostalCode" minLength="6" placeholder="e.g 132103" value={this.state.isBillingAddressSame ? this.state.postalCode : this.state.billingPostalCode} onChange={this.changeHandler} />
						</div>
						<div className="input-field">
							<label htmlFor="billingCity">City</label>
							<input type="text" name="billingCity" id="billingCity" minLength="3" placeholder="e.g Panipat" value={this.state.isBillingAddressSame ? this.state.city : this.state.billingCity} onChange={this.changeHandler} />
						</div>
						<div className="input-field">
							<label htmlFor="billingCountry">Country</label>
							<input type="text" name="billingCountry" id="billingCountry" minLength="3" placeholder="e.g India" value={this.state.isBillingAddressSame ? this.state.country : this.state.billingCountry} onChange={this.changeHandler} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;