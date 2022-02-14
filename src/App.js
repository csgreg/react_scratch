import React from "react";
import Container from "./componenets/Container/Container";
import Card from "./componenets/Card/Card";
import Form from "./componenets/Form/Form";

const routes = [
  { route: "/fib", id: 0 },
  { route: "/leapyear", id: 1 },
  { route: "/password", id: 2 },
];

const App = () => {
  return (
    <Container>
      <Card>
        <h2>Request</h2>
        <Form routes={routes} />
      </Card>
    </Container>
  );
};

export default App;
