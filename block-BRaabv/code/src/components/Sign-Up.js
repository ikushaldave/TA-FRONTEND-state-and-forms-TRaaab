import FormStatus from "./Form-Status";
import Button from "./Button";

function SignUp (props) {
  return (
		<form className={props.input.current === 0 ? "flex flex-wrap relative" : "hidden"} onSubmit={props.submitHandler} >
			<div className="w-1/3">
				<img src="/images/76.jpg" alt="sign-up" className="rounded-tl-2xl rounded-bl-2xl object-cover image" />
			</div>
			<div className="sign-up w-2/3 p-14 pr-28 text-gray-700">
				<FormStatus current={props.input.current} />
				<div className="my-6">
					<span className="text-sm my-2">Step 1/3</span>
					<h2 className="text-blue-900 font-extrabold text-2xl uppercase">Sign Up</h2>
				</div>
				<div className="sign-up-form flex justify-between flex-wrap">
					<div className="input-field">
						<label htmlFor="firstName">First Name</label>
						<input type="text" name="firstName" id="firstName" className={props.input.error.firstName && "error"} required value={props.input.firstName} placeholder="Kushal" onChange={props.changeHandler} />
						<span className={props.input.error.firstName ? "error-msg" : "hidden"}>{props.input.error.firstName}</span>
					</div>
					<div className="input-field">
						<label htmlFor="lastName">Last Name</label>
						<input type="text" name="lastName" id="lastName" className={props.input.error.lastName && "error"} required value={props.input.lastName} placeholder="Dave" onChange={props.changeHandler} />
						<span className={props.input.error.lastName ? "error-msg" : "hidden"}>{props.input.error.lastName}</span>
					</div>
					<div className="input-field">
						<label htmlFor="dob">Date of Birth</label>
						<input type="date" name="dob" id="dob" required onChange={props.changeHandler} />
					</div>
					<div className="input-field">
						<label htmlFor="email">Email Address</label>
						<input type="email" name="email" id="email" className={props.input.error.email && "error"} required value={props.input.email} placeholder="youremail@xyz.com" onChange={props.changeHandler} />
						<span className={props.input.error.email ? "error-msg" : "hidden"}>{props.input.error.email}</span>
					</div>
					<div className="input-field">
						<label htmlFor="address">Address</label>
						<input type="text" name="address" id="address" className={props.input.error.address && "error"} required value={props.input.address} placeholder="New RK Puram, Panipat, Haryana" onChange={props.changeHandler} />
						<span className={props.input.error.address ? "error-msg" : "hidden"}>{props.input.error.address}</span>
					</div>
				</div>
				<Button current={props.input.current} nextHandler={props.nextHandler} prevHandler={props.prevHandler} />
			</div>
		</form>
  );
}

export default SignUp;