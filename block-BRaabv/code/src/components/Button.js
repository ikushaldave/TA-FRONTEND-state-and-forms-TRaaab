function Button (props) {
  return (
		<div className="text-right absolute bottom-6 right-28">
			<a href="##" className={props.current > 0 ? "font-extrabold text-sm mx-12" : "hidden"} onClick={props.prevHandler}>
				Back
			</a>
			<input type="submit" value={props.current < 2 ? "Next Step" : "Submit"} className="bg-blue-800 text-white py-2 px-4 rounded-md font-extrabold text-sm" />
		</div>
  );
}

export default Button;