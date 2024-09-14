import { Component } from "react";
import Modal from "./components/Modal";
import styled from "styled-components";

const OpenButton = styled.button`
  font-family: inherit;
  width: 100px;
  height: 35px;
  border: 1px solid transparent;
  margin-left: auto;
  margin-right: auto;
  display: block;
  margin-top: 50px;
  cursor: pointer;
  background-color: rgba(0,0,0,0.1);
  transition: 250ms;
  &:hover {
    background-color: rgba(0,0,0,0.3);
    transform: scale(1.05);
  }
`;

class App extends Component{
  state = {
    hide: true
  }
  componentDidMount(){
    document.addEventListener("keydown", (e) => {if(e.key === "Escape"){this.setState({ hide: true });}});
  }
  render() {
    return (
      <>
        <OpenButton onClick={() => {this.setState({hide: false})}}>Open Modal</OpenButton>
        {this.state.hide ? <></> : <Modal obj={this} />}
      </>
    );
  }
}

export default App;
