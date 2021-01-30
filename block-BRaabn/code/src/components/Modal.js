import React from "react";

class Modal extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  modelHandler = (e) => {
    this.setState((previous) => {
      return {
        isOpen: !previous.isOpen
      }
    })
  }

  render () {
    return (
		<div className="modal">
			<div className="px-4 py-1 bg-black text-white border-2 rounded-md uppercase tracking-wider border-transparent cursor-pointer hover:bg-white hover:text-black hover:border-black" onClick={this.modelHandler}>
				Show Modal
			</div>
			<div className={this.state.isOpen ? "overlay flex-class" : "hidden"}>
				<div className="bg-white rounded-md w-1/2 h-1/3 flex-class relative">
					<i className="far fa-times absolute top-5 right-10 text-red-700 text-3xl cursor-pointer" onClick={this.modelHandler}></i>
					<h2 className="text-center font-bold tracking-wide text-2xl text-gray-700">Modal Content</h2>
				</div>
			</div>
		</div>
	);
  }
}

export default Modal;