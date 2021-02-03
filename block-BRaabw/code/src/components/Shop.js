import React from "react";
import clothesList from "../data/data.json"
import Filter from './FilterOption';
import Clothes from "./Clothes";
import Cart from "./Cart";

class Shop extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filterBySizes: [],
			cart: [],
			filterClothes: [],
			clothesList: clothesList.products,
			orderBy: "default",
		};
	}

	cartIncHandler = ({ target }) => {
		const { cart, clothesList } = this.state;
		if (target.tagName === "BUTTON") {
			const cloth = clothesList.find((cloth) => cloth.id === Number(target.dataset.id));
			const isIncludeInCart = cart.some((cloth) => cloth.id === Number(target.dataset.id));

			if (isIncludeInCart) {
				cloth.qty += 1;
				cloth.total = cloth.qty * cloth.price;
			} else {
				cloth.qty = 1;
				cloth.total = cloth.qty * cloth.price;
				cart.push(cloth);
			}

			this.setState({
				cart
			})
		}
	};

	cartDescHandler = ({ target }) => {
		const { cart } = this.state;
		if (target.tagName === "BUTTON") {
			const cloth = cart.find((cloth) => cloth.id === Number(target.dataset.id));
			const index = cart.indexOf(cloth);
			const modifiedCart = [...cart];

			if (cloth.qty > 1) {
				cloth.qty -= 1;
				cloth.total = cloth.qty * cloth.price;
			} else {
				cloth.qty = 0;
				cloth.total = cloth.qty * cloth.price;
				modifiedCart.splice(index, 1);
			}

			this.setState({
				cart: cloth.qty > 0 ? cart : modifiedCart,
			});
		}
	};

	removeItemFromCartHandler = ({ target }) => {
		const cart = this.state.cart.filter((cloth) => cloth.id !== Number(target.dataset.id));

		this.setState({
			cart
		})
	}

	btnHandler = ({ target }) => {
		const { filterBySizes } = this.state;
		const value = target.innerText;

		if (filterBySizes.includes(value)) {
			filterBySizes.splice(filterBySizes.indexOf(value), 1);
		} else {
			filterBySizes.push(value);
		}

		this.setState({
			filterBySizes,
			filterClothes: this.filterCloth(),
		});
	};

	orderByHandler = ({ target }) => {
		this.setState({
			orderBy: target.value
		})
	}

	filterCloth = (cart = this.state.cart) => {
		const { filterBySizes, clothesList } = this.state;
		return filterBySizes.reduce((acc, cv) => {
			for (const cloth of clothesList) {
				if (cloth.availableSizes.includes(cv)) {
					acc.push(cloth);
				}
			}
			return acc;
		}, []);
	};

	render() {
		const { clothesList, filterBySizes, filterClothes } = this.state;

		return (
			<main className="shop p-12">
				<h1 className="text-center text-2xl font-bold uppercase text-gray-700 my-4">Shopping App Using React</h1>
				<div className=" max-w-screen-xl mx-auto p-8 flex flex-wrap justify-between">
					<section className="sizes w-1/5">
						<Filter shop={this.state} btnHandler={this.btnHandler} orderByHandler={this.orderByHandler} />
					</section>
					<section className="clothes w-3/4">
						<h6>{filterBySizes.length > 0 ? filterClothes.length : clothesList.length} Product(s) Found.</h6>
						<Clothes shop={this.state} clothesList={filterBySizes.length > 0 ? filterClothes : clothesList} cartIncHandler={this.cartIncHandler} />
					</section>
				</div>
				<Cart shop={this.state} cartIncHandler={this.cartIncHandler} cartDescHandler={this.cartDescHandler} removeItemFromCartHandler={this.removeItemFromCartHandler}/>
			</main>
		);
	}
}


export default Shop;