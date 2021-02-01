import React from "react";
import Cards from "./Card"

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "text": "",
      "size": "48"
    }
  }

  textHandler = (e) => {
    this.setState({
      "text": e.target.value
    })
  }

  sizeHandler = (e) => {
    this.setState({
      "size": e.target.value
    })
  }

  reset = () => {
    this.setState({
      "text": "",
      "size": "48"
    })
  }

  render () {
    return (
    <>
      <nav className="my-4">
        <div className="flex flex-wrap justify-between items-center border border-gray-400 rounded-3xl px-4">
          <div className=" w-2/4 flex justify-between items-center py-2 px-6">
            <p className="text-gray-600 text-sm">
              Custom <i className="fas fa-sort-down align-text-top text-blue-400 mx-2"></i>
            </p>
              <input type="text" value={this.state.text} placeholder="Type something" className="block py-1 flex-grow focus:outline-none" onChange={this.textHandler} />
          </div>
          <div className="w-2/5 flex justify-between items-center border-r border-l border-gray-400 py-2 px-6">
            <p className="text-gray-600 text-sm">
              {this.state.size}px <i className="fas fa-sort-down align-text-top text-blue-400 mx-2"></i>
            </p>
              <input type="range" value={this.state.size} min="10" max="100" step="1" className="flex-grow" onChange={this.sizeHandler}/>
          </div>
          <div className="w-10 self-center">
            <i className="far fa-redo-alt inline-block rounded-full p-2 cursor-pointer" onClick={this.reset}></i>
          </div>
        </div>
      </nav>
      <section className="flex justify-between flex-wrap">
          <Cards renderInfo={this.state}/>
      </section>
    </>
	);
  }
}

export default Navigation;