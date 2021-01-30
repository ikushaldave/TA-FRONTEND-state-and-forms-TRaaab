import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: true
    }
  }

  toggleHandler = (e) => {
    this.setState((previous) => {
      return {
        open: !previous.open
      }
    })
  }

  render () {
    return (
      <div className="flex">
        <div className="relative">
          <div className={this.state.open ? "toggle" : "toggle hidden"}>
            <nav className="flex flex-col items-center">
              <a href="##" className="p-4">
                HOME
              </a>
              <a href="##" className="p-4">
                CONTACT
              </a>
              <a href="##" className="p-4">
                ABOUT
              </a>
            </nav>
          </div>
          <a href="##" className={this.state.open ? "open" : "close"} onClick={this.toggleHandler}>
            <i className="fas fa-bars"></i>
          </a>
        </div>
        <div className={this.state.open ? "w-5/6" : "w-full"}>
				<h2 className="pt-8 text-center">This is main body</h2>
			</div>
		</div>
	);
  }
}

export default App;