import React from "react";
import Food from "./Food"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: "All"
    }
  }

  clickHandler = (e) => {
    if (e.target.tagName === "LI") {
      this.setState({
        active: e.target.textContent
      })
    }
  }

  render () {
    return (
    <>
      <header>
        <div className="container">
          <h1 className="text-center font-bold text-3xl">Our Menu</h1>
        <nav>
            <ul className="list-none flex justify-center my-8" onClick={this.clickHandler}>
              {["All", "Breakfast", "Lunch", "Shakes"].map((category) => (
                <li className={(category === this.state.active ) ? "list-item active" : "list-item"} key={category.toLowerCase()}>{ category }</li>
              ))}
          </ul>
        </nav>
        </div>
      </header>
      <main>
        <Food selected={this.state.active.toLowerCase()} />
      </main>
    </>
	);
  }
}

export default Header;