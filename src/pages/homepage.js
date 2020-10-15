import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div id="base">
        <Card body>{this.state.count}</Card>
        <Button
          variant="primary"
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Click Me
        </Button>{" "}
      </div>
    );
  }
}

export default Homepage;
