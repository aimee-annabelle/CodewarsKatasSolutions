import React from "react";

export class States extends React.Component {
  constructor() {
    super();
    this.state = {
      united: false,
    };
    this.unite = this.unite.bind(this);
  }
  unite() {
    this.setState({ united: true });
  }

  render() {
    const paragraph = this.state.united
      ? "Code for everyone"
      : "Make America code again";
    return (
      <div className="status">
        <p>{paragraph}</p>
      </div>
    );
  }
}
