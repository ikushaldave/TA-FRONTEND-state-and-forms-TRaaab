import FormStatus from "./Form-Status";

function Checkbox (props) {
	return (
		<form className={props.input.current === 2 ? "flex flex-wrap relative" : "hidden"}>
			<div className="w-1/3">
				<img src="/images/76.jpg" alt="sign-up" className="rounded-tl-2xl rounded-bl-2xl object-cover image" />
			</div>
			<div className="w-2/3 p-14 pr-28 text-gray-700">
				<FormStatus current={props.input.current} />
				<div className="flex justify-between flex-wrap">
					<div className="message my-6">
						<span className="text-sm my-2">Step 3/3</span>
						<h2 className="text-blue-900 font-extrabold text-2xl uppercase">Checkbox</h2>
					</div>
					<div className="checkbox-form flex justify-between flex-wrap w-full">
						<div className="input-field sex">
							<input type="radio" name="sex" id="male" className="hidden" checked={props.input.male} onChange={props.radioHandler} />
							<label htmlFor="male" className="w-full p-2">
								<img src="/images/male.png" alt="male" className="w-46" />
							</label>
						</div>
						<div className="input-field sex">
							<input type="radio" name="sex" id="female" className="hidden" checked={props.input.female} onChange={props.radioHandler} />
							<label htmlFor="female" className="w-full p-2">
								<img src="/images/female.png" alt="female" className="w-46" />
							</label>
						</div>
						<div className="input-field w-100 checkbox">
							<input type="checkbox" name="tc" id="tc" required />
							<label htmlFor="tc">Please accept terms and condition to proceed further</label>
						</div>
						<div className="input-field w-100 checkbox">
							<input type="checkbox" name="policy" id="policy" required />
							<label htmlFor="policy">Please accept policy to proceed further</label>
						</div>
					</div>
				</div>
				<div className="text-right absolute bottom-6 right-28">
					<a href="##" className={props.input.current > 0 ? "font-extrabold text-sm mx-12" : "hidden"} onClick={props.prevHandler}>
						Back
					</a>
					<input type="submit" value="Submit" className="bg-blue-800 text-white py-2 px-4 rounded-md font-extrabold text-sm" />
				</div>
			</div>
		</form>
	);
}

export default Checkbox;
