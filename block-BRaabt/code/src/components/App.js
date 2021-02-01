import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      default: false,
      success: false,
      error: false,
      warning: false,
      info: false
    }
  }

  notification = (...args) => {
    for (const btn of args) {
      switch (btn) {
        case "default":
          return (
            <div className="notify" key={btn}>
              <p>Default Notification</p>
              <i className="far fa-times cursor-pointer" data-btn={btn} onClick={this.clickHandler}></i>
            </div>
          );
        case "success":
          return (
            <div className="notify bg-green-500 text-white" key={btn}>
              <i className="far fa-check-circle"></i>
              <p>Success Notification</p>
              <i className="far fa-times cursor-pointer" data-btn={btn} onClick={this.clickHandler}></i>
            </div>
          );
        case "error":
          return (
            <div className="notify bg-red-600 text-white" key={btn}>
              <i className="fas fa-times-circle"></i>
              <p>Error Notification</p>
              <i className="far fa-times cursor-pointer" data-btn={btn} onClick={this.clickHandler}></i>
            </div>
          );
        case "warning":
            return (
              <div className="notify bg-yellow-400 text-white" key={btn}>
                <i className="fas fa-exclamation-triangle"></i>
                <p>Warning Notification</p>
                <i className="far fa-times cursor-pointer" data-btn={btn} onClick={this.clickHandler}></i>
              </div>
            );
        case "info":
          return (
            <div className="notify bg-blue-800 text-white" key={btn}>
              <i className="fas fa-exclamation"></i>
              <p>Info Notification</p>
              <i className="far fa-times cursor-pointer" data-btn={btn} onClick={this.clickHandler}></i>
            </div>
          );
        default:
          break;
      }
    }
  }

  clickHandler = ({ target }) => {
    const btn = target.dataset.btn;
    this.setState({
      [btn]: !this.state[btn]
    })
  }

  render () {
    return (
		<div>
			<div className="flex justify-center items-center m-4">
				{["default", "success", "error", "warning", "info"].map((btn) => (
					<button className={this.state[btn] ? "btn active" : "btn"} key={btn} data-btn={btn} onClick={this.clickHandler}>
						{this.state[btn] ? `HIDE ${btn.toUpperCase()}` : `SHOW ${btn.toUpperCase()}`}
					</button>
				))}
			</div>
			<div className="absolute bottom-2 right-4">{["default", "success", "error", "warning", "info"].filter((btn) => this.state[btn]).map((notify) => this.notification(notify))}</div>
		</div>
	);
  }
}

export default App;