import React from 'react';

class Communication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      additionalDocuments: '',
      message: ''
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onCommunication(this.state.message);
    this.props.onNextStep();
  };

  render() {
    const { additionalDocuments, message } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Communication</h2>
        <div>
          <label>Additional Documents Required:</label>
          <input type="text" name="additionalDocuments" value={additionalDocuments} onChange={this.handleChange} />
        </div>
        <div>
          <label>Message:</label>
          <textarea name="message" value={message} onChange={this.handleChange} />
        </div>
        <button type="submit">Send</button>
      </form>
    );
  }
}

export default Communication;
