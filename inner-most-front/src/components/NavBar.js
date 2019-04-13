import React from "react";
import { Button, Container, Header, Icon, Form } from "semantic-ui-react";

class NavBar extends React.Component {
  state = {
    username: ""
  };

  handleChange = e => {
    this.setState({ username: e.target.value });
  };

  handleSubmit = () => {
    console.log(this.state.username);
  };
  render() {
    console.log(this.state);
    return (
      <Container textAlign="center">
        <Header as="h2" icon textAlign="center">
          <Header.Content>Inner Most</Header.Content>
          <Icon name="users" circular />
        </Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            value={this.state.username}
            onChange={this.handleChange}
            placeholder="type your twitter username"
            style={{ maxWidth: "200px" }}
          />
          <Button> Submit </Button>
        </Form>
      </Container>
    );
  }
}

export default NavBar;
