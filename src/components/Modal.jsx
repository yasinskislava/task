import styled from "styled-components";
import cross from "../cross.svg";

const ModalBlock = styled.div`
    box-sizing: border-box; 
    padding: 30px;
    border-radius: 5px;
    width: 350px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    > div {
        height: 25px;
        align-items: center;
        display: flex;
        justify-content: space-between;
        img {
            transition: 250ms;
            cursor: pointer;
            width: 21px;
            height: 21px;
            &:hover {
                transform: scale(1.1);
            }
        }
    }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.1);  
`;

const Form = styled.form`
  ul {
    list-style: none;
    display: flex;
    gap: 10px;
    flex-direction: column;
    padding: 0;
    margin: 0;
    margin-top: 20px;
    li {
      display: flex;
      flex-direction: column;
      gap: 5px;
      input {
        font-family: inherit;
      }
    }
  }
  button {
    font-family: inherit;
    width: 100px;
    height: 35px;
    border: 1px solid transparent;
    margin-left: auto;
    margin-right: auto;
    display: block;
    cursor: pointer;
    margin-top: 20px;
    background-color: rgba(0, 0, 0, 0.1);
    transition: 250ms;
    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
      transform: scale(1.05);
    }
  }
`;

export default function Modal({obj}) {
    return <Overlay>
        <ModalBlock>
            <div>
                <h2>Modal</h2>
                <img src={cross} alt="close" onClick={() => {obj.setState({hide: true})}} />
            </div>
            <Form onSubmit={(e) => { e.preventDefault(); obj.setState({ hide: true }) }}>
                <ul>
                    <li>Name<input type="text" required/></li>
                    <li>Phone<input type="tel" pattern="[+ 0-9]{17}" placeholder="+38 XXX XXX XX XX" required/></li>
                    <li>Email<input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="example@gmail.com" required/></li>
                    <li>File<input type="file" required/></li>
                </ul>
                <button type="submit">Submit</button>
            </Form>
        </ModalBlock>
    </Overlay>
}   