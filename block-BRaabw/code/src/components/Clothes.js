function orderBy (clothesList, order) {
	console.log(clothesList, "coming data");
	switch (order) {
		case "highToLow":
			return clothesList.sort((a, b) => b.price - a.price);
		case "lowToHigh":
			return clothesList.sort((a, b) => a.price - b.price);
		default:
			return clothesList;
	}
}

function Clothes (props) {
	const clothesList = orderBy(props.clothesList, props.shop.orderBy);
	console.log(clothesList);
  return (
		<div className="cloth-list flex flex-wrap gap-x-4 gay-y-2" onClick={props.cartIncHandler}>
			{clothesList.map((cloth) => (
				<ClothCard cloth={cloth} key={cloth.id} />
			))}
		</div>
  );
}

function ClothCard (props) {
  const [dollar, cent] = props.cloth.price.toFixed(2).toString().split(".");

  return (
		<div className="cloth-card w-56 p-6 border border-gray-100 my-2 text-center text-gray-400 relative hover:border-gray-300">
			<img src={`/static/products/${props.cloth.sku}_1.jpg`} alt={props.cloth.title} className="inline-block h-56" />
			<div className="cloth-title my-2">
				<h3 className="text-lg capitalize text-gray-800">{props.cloth.title}</h3>
			</div>
			<hr className="w-8 m-auto border-2 border-yellow-400" />
			<div className="price my-2">
				<span className="text-2xl">${dollar}</span>
				<span>.{cent}</span>
			</div>
			<div className="my-2">
				<p>
					EMI: {props.cloth.installments} <i className="far fa-times"></i> ${Math.fround(props.cloth.price / props.cloth.installments).toFixed(2)}
				</p>
      </div>
      <span className={props.cloth.isFreeShipping ? "shipping" : "hidden"}>Free Shipping</span>
			<button className="add-to-cart px-4 py-2 bg-gray-900 text-white w-full text-base hover:bg-yellow-400" data-id={props.cloth.id}>ADD TO CART</button>
		</div>
  );
}

export default Clothes