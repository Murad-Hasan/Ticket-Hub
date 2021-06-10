import React from "react";
import { Container } from "react-bootstrap";
import Tickets from "../../components/Tickets/Tickets";

const Home = () => {
  const maindivstyle ={
    background: "linear-gradient(to top,rgba(0,0,0, 0.9),rgba(0,0,0,0.7)),url('https://cdn.wallpapersafari.com/32/12/1RpumK.jpg') no-repeat center center",
    backgroundSize: 'cover',
    minHeight:'94vh'
}
  return (
    <main  style={maindivstyle}>
    <Container>
            <Tickets />
    </Container>
    </main>
  );
};

export default Home;
