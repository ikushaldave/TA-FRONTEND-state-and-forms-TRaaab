import React from "react";

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toggle: false
    }
  }

  toggleHandler = (e) => {
    this.setState((previous) => {
      return {
        toggle: !previous.toggle
      }
    })
  }

  render () {
    return (
		<div className="w-1/4 absolute top-0 bottom-0 left-0 right-40">
			<i className="far fa-bars absolute top-10 left-8 text-3xl text-blue-500 animate-scale" onClick={this.toggleHandler}></i>
			<nav className={this.state.toggle ? "nav slide-l-r": "nav slide-r-l"}>
				<div className="px-8 text-2xl flex justify-between items-center">
					<h1 className="text-shadow-xl">
						Coding <span className="text-blue-500 text-shadow-xl">Addict</span>
					</h1>
					<i className="far fa-times text-red-700 text-3xl cursor-pointer" onClick={this.toggleHandler}></i>
				</div>
				<div>
					<a href="##" className="my-4 p-4 text-xl text-gray-600 block hover:bg-blue-50">
						<i className="fas fa-home mr-3 text-gray-500"></i> Home
					</a>
					<a href="##" className="my-4 p-4 text-xl text-gray-600 block hover:bg-blue-50">
						<i className="fas fa-user-friends mr-3 text-gray-500"></i> Team
					</a>
					<a href="##" className="my-4 p-4 text-xl text-gray-600 block hover:bg-blue-50">
						<i className="fas fa-folder-open mr-3 text-gray-500"></i> Projects
					</a>
					<a href="##" className="my-4 p-4 text-xl text-gray-600 block hover:bg-blue-50">
						<i className="fas fa-calendar-week mr-3 text-gray-500"></i> Calender
					</a>
					<a href="##" className="my-4 p-4 text-xl text-gray-600 block hover:bg-blue-50">
						<i className="fas fa-file-alt mr-3 text-gray-500"></i> Documents
					</a>
				</div>
				<div className="flex-class py-2">
					<a href="##" className="mx-2 text-blue-300 text-xl">
						<i className="fab fa-facebook"></i>
					</a>
					<a href="##" className="mx-2 text-blue-300 text-xl">
						<i className="fab fa-twitter"></i>
					</a>
					<a href="##" className="mx-2 text-blue-300 text-xl">
						<i className="fab fa-linkedin"></i>
					</a>
					<a href="##" className="mx-2 text-blue-300 text-xl">
						<i className="fab fa-behance"></i>
					</a>
					<a href="##" className="mx-2 text-blue-300 text-xl">
						<i className="fab fa-sketch"></i>
					</a>
				</div>
			</nav>
		</div>
	);
  }
}

export default Navigation;