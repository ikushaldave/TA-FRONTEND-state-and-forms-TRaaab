function Cart (props) {
  return (
		<div className="cart fixed top-0 right-0 w-100">
			<div className="flex">
				<input type="checkbox" name="toggle" id="toggle" />
				<label htmlFor="toggle" className="bg-black text-white p-4 text-4xl self-start cursor-pointer">
					<i className="far fa-shopping-cart"></i>
					<span className={props.shop.cart.length ? "absolute top-10 right-3 text-sm bg-yellow-400 rounded-full w-5 h-5 text-center text-black font-semibold" : "hidden"}>{props.shop.cart.length}</span>
				</label>
				<nav className="cart-nav min-h-screen text-white flex-grow">
					<h2 className="text-center my-12 text-3xl">
						<i className="far fa-shopping-cart mx-4"></i>
						Cart
					</h2>
					<CartItem shop={props.shop} cartIncHandler={props.cartIncHandler} cartDescHandler={props.cartDescHandler} removeItemFromCartHandler={props.removeItemFromCartHandler} />
					<div className="checkout m-4 p-4 shadow-2xl rounded-2xl">
						<div className="total-amount flex justify-between">
							<h3 className="text-gray-500">SUBTOTAL</h3>
							<h2 className="text-yellow-400 text-2xl">
								${ props.shop.cart.reduce((acc, cv) => {
									return acc + cv.total;
								}, 0) }
							</h2>
						</div>
						<button className="w-full py-2 px-4 bg-gray-900 my-6">CHECKOUT</button>
					</div>
				</nav>
			</div>
		</div>
  );
}

function CartItem (props) {
  return (
		<ul className="cart-items list-none overflow-y-auto h-96">
			{props.shop.cart.length ? "" : <h3 className="text-gray-500 text-lg uppercase text-center">Add Some Product in the Cart </h3>}
			{props.shop.cart.map((cloth) => (
				<li className="cart-item flex justify-between m-4 p-2 border-t-2 border-gray-700 relative" key={cloth.id}>
					<div className="flex items-center">
						<img src={`/static/products/${cloth.sku}_1.jpg`} alt={cloth.title} className="inline-block h-24 mr-3" />
						<div className="item-info">
							<h3>{cloth.title}</h3>
							<p className="text-gray-500">Quantity: {cloth.qty}</p>
							<select name="size" id="size" required className="text-white bg-gray-800 my-1 p-1 rounded-md focus:outline-none ">
								<option value="XS" defaultChecked>
									XS
								</option>
								<option value="S">S</option>
								<option value="M">M</option>
								<option value="ML">ML</option>
								<option value="L">L</option>
								<option value="XL">XL</option>
								<option value="XXL">XXL</option>
							</select>
						</div>
					</div>
					<div className="self-center text-right">
						<button className="text-2xl text-black text-right" data-id={cloth.id} onClick={props.removeItemFromCartHandler}>
							&times;
						</button>
						<h3 className="text-yellow-400 text-lg">$ {cloth.total}</h3>
						<button className="my-2 w-6 h-6 bg-gray-800 text-white mr-1 rounded" data-id={cloth.id} onClick={props.cartDescHandler}>
							-
						</button>
						<button className="my-2 w-6 h-6 bg-gray-800 text-white ml-1 rounded" data-id={cloth.id} onClick={props.cartIncHandler}>
							+
						</button>
					</div>
				</li>
			))}
		</ul>
  );
}

export default Cart;