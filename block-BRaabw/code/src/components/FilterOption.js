function FilterOption (props) {
  const uniqueSizes = ["XS", "S", "M", "ML", "L", "XL", "XXL"]
  return (
    <>
      { uniqueSizes.map((size) => (<button className={ props.shop.filterBySizes.includes(size) ? "size-btn active" : "size-btn" } key={size} onClick={ props.btnHandler } >{ size }</button>)) }
    </>
  )
}

export default FilterOption;