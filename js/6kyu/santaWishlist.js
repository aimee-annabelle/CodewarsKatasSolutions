const React = require("react");

class WishlistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      wish: "",
      priority: 1,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.send(this.state);
  }

  handleChange(event) {
    console.log(event);
    const target = event.target;
    const value = target.value;
    const name = target.id === "select" ? "priority" : target.id;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          id="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <textarea
          id="wish"
          value={this.state.wish}
          onChange={this.handleChange}
        />
        <select
          id="priority"
          value={this.state.priority}
          onChange={this.handleChange}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
