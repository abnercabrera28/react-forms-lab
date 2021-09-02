import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    let rem = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} type="text" name="message" id="message" value={this.state.message} />
        {rem}
      </div>
    );
  }
}

export default TwitterMessage;
