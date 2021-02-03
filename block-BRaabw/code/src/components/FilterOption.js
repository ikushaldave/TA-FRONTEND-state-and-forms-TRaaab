function FilterOption (props) {
  const uniqueSizes = ["XS", "S", "M", "ML", "L", "XL", "XXL"]
  return (
		<>
			<h3 className="font-medium">Sizes:</h3>
			{uniqueSizes.map((size) => (
				<button className={props.shop.filterBySizes.includes(size) ? "size-btn active" : "size-btn"} key={size} onClick={props.btnHandler}>
					{size}
				</button>
			))}
			<h3 className="font-medium my-4">Order By</h3>
			<select name="orderBy" id="orderBy" className="p-2 text-gray-600 bg-gray-200 focus:outline-none cursor-pointer hover:border-gray-600" onChange={props.orderByHandler}>
				<option value="default">Default</option>
				<option value="highToLow">High to Low</option>
				<option value="lowToHigh">Low to High</option>
			</select>
		</>
  );
}

export default FilterOption;