import FormStatus from "./Form-Status";
import Button from "./Button";

function Message (props) {
    return (
		<form className={props.input.current === 1 ? "flex flex-wrap relative" : "hidden"}>
			<div className="w-1/3">
				<img src="/images/76.jpg" alt="sign-up" className="rounded-tl-2xl rounded-bl-2xl object-cover image" />
			</div>
			<div className="message w-2/3 p-14 pr-28 text-gray-700">
				<FormStatus current={props.input.current} />
				<div className="flex justify-between flex-wrap">
					<div className="message my-6">
						<span className="text-sm my-2">Step 2/3</span>
						<h2 className="text-blue-900 font-extrabold text-2xl uppercase">Message</h2>
					</div>
					<div className="message-form flex justify-between flex-wrap">
						<div className="input-field w-100">
							<label htmlFor="message">Message</label>
							<textarea name="message" id="message" cols="30" rows="6" value={props.input.message} placeholder="Type Message Here" onChange={props.changeHandler}></textarea>
						</div>
						<div className="input-field">
							<input type="radio" name="choice" id="choiceOne" className="radio" checked={props.input.choiceOne} onChange={props.radioHandler} />
							<label htmlFor="choiceOne" className="radio">
								The number one choice
							</label>
						</div>
						<div className="input-field">
							<input type="radio" name="choice" id="choiceTwo" className="radio" checked={props.input.choiceTwo} onChange={props.radioHandler} />
							<label htmlFor="choiceTwo" className="radio">
								The number one choice
							</label>
						</div>
					</div>
				</div>
				<Button current={props.input.current} nextHandler={props.nextHandler} prevHandler={props.prevHandler} />
			</div>
		</form>
	)
}

export default Message;