import React, { useRef } from "react";
import styled from "styled-components";
import { Box, Grommet } from "grommet";
import "./FrontEnd.css";
import ModalDB from "./ModalDB";
import { useState } from "react";
import axios from "axios";
import checkimg from "../images/pngwing 3.png";
import applyimg from "../images/apply.png";
import { useLocation } from "react-router-dom";
import "./textarea.css";

const StyledInput = styled.input`
  height: 36px;
  width: 806px;
  border-radius: 5px;
  font-size: 20px;
  border: 2px solid gray;
  padding: 0 0 0 12px;
`;

const StyledButton = styled.button`
  height: 36px;
  width: 128px;
  background-color: #eb5757;
  border-color: #eb5757;
  font-color: #ffffff;
  border-radius: 5px;
  font-size: 16px;
  color: white;
`;

const StyledButton2 = styled.button`
  height: 36px;
  width: 128px;
  background-color: #34b755;
  font-color: #ffffff;
  border-radius: 5px;
  border-color: #34b755;
  font-size: 16px;
  color: white;
`;

const StyledButton3 = styled.button`
  height: 35px;
  width: 964px;
  background-color: #ff9a3e;
  font-size: 20px;
  font-color: #ffffff;
  border-radius: 5px;
  color: white;
  border-color: #ff9a3e;
`;

const StyledButton5 = styled.button`
  height: 35px;
  width: 100px;
  background-color: #124271;
  font-size: 16px;
  color: white;
  border-radius: 5px;
  border-color: #124271;
`;

const ShadowedBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: #dfdfdf;
  border-radius: 5px;
`;

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px",
    },
  },
};

const AppBar = (props) => (
  <Box
    tag="header"
    direction="row"
    // align='center'
    justify="between"
    background="white"
    // pad={{vertical:'small',horizontal:'medium'}}
    elevation="medium"
    width="964px"
    height="362px"
    {...props}
  />
);

const ResultAreaText = styled.button`
  height: 100px;
  width: 964px;
  background-color: white;
  border-radius: 5px;
  border: 0;
  font-size: 15px;
  padding: 0;
  margin: 0;
  overflow: scroll;
`;

function PlusDB() {
  const { state: publicIp } = useLocation();
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const [text, setText] = useState(null);
  const nameRef = useRef(null);
  const textRef = useRef(null);
  const [data, setData] = useState([]);
  const [myname, setMyname] = useState("");
  const [mytext, setMytext] = useState("");

  //?????? ??????
  const onClick = () => {
    axios
      .post(`http://${publicIp}/text`, {
        name: nameRef.current.value,
        text: textRef.current.value,
      })
      .then((response) => {
        setText(JSON.stringify(response.data));

        console.log("responseasdadasda : ", response);

        onReset();
      });
  };

  //?????? ??????
  const onClickNamecheck = () => {
    closeModal();
    axios
      .get(`http://${publicIp}/text/${nameRef.current.value}`)
      .then((response) => {
        setData(response.data);
        console.log("???????????? ??????:", response.data);
      });
  };

  const onChange = (event) => {
    setMyname(event.target.value);
  };

  const onChange2 = (event) => {
    setMytext(event.target.value);
  };

  const onReset = (event) => {
    setMytext("");
    setMyname("");
  };

  return (
    <center>
      <div>
        <br />
        <br />
        <br />
        <div className="out">
          <ShadowedBox>
            <StyledButton5>Front-end</StyledButton5>

            <div className="check" style={{ margin: 6 }}>
              <img
                className="checkimg"
                alt="check"
                src={checkimg}
                width="50"
                height="50"
              />
            </div>
          </ShadowedBox>
          &emsp;&emsp;&emsp;&emsp; &emsp;&emsp;&emsp;&emsp;
          <ShadowedBox>
            <StyledButton5>Back-end</StyledButton5>
            <div className="check" style={{ margin: 6 }}>
              <img
                className="checkimg"
                alt="check"
                src={checkimg}
                width="50"
                height="50"
              />
            </div>
          </ShadowedBox>
          &emsp;&emsp;&emsp;&emsp; &emsp;&emsp;&emsp;&emsp;
          <ShadowedBox>
            <StyledButton5>DB</StyledButton5>
            <div className="check" style={{ margin: 6 }}>
              <img
                className="checkimg"
                alt="check"
                src={checkimg}
                width="50"
                height="50"
              />
            </div>
          </ShadowedBox>
        </div>
        <br />
        <br />
        <a>????????? ??????</a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <StyledInput
          onChange={onChange}
          placeholder={`????????? ??????????????????.`}
          type="text"
          ref={nameRef}
          value={myname}
        />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <StyledButton onClick={openModal}>
          <div className="apply">
            <img
              className="checkimg"
              src={applyimg}
              width="16px"
              height="16px"
            />{" "}
            ?????? ??????
          </div>
        </StyledButton>
        <ModalDB open={modalOpen} close={onClickNamecheck} header="?????? ??????">
          ???????????????.
          <br />
          {myname}???.
        </ModalDB>
        <br />
        <br />
        <a>????????? ??????</a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <StyledInput
          onChange={onChange2}
          placeholder={`?????? ???????????? ??????????????????.`}
          type="text"
          ref={textRef}
          value={mytext}
        />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <StyledButton2 onClick={onClick}>?????? ??????</StyledButton2>
        <br />
        <br />
        <br />
        <Grommet theme={theme}></Grommet>
        <AppBar>
          <Box direction="column">
            <StyledButton3>??????</StyledButton3>

            {/* <ResultAreaText className="inputText">?????? ????????? <br/>{text} </ResultAreaText>
 <br/>
 <ResultAreaText className="savedText"> ????????? ?????????<br/>{data}</ResultAreaText> */}
            <br />

            <p className="input-text">
              ???? ?????? ????????? ????
              <br />
              <br />
              {text}
            </p>
            <br />
            <br />

            <p className="saved-text">
              ???? ????????? ????????? ????
              <br />
              <br />
              {data &&
                data.map((oneData) => (
                  <React.Fragment key={oneData.id}>
                    <div key={oneData.id}>
                      ???? {oneData.input_date} :: {oneData.input_text}
                    </div>
                    <br />
                  </React.Fragment>
                ))}
            </p>

            <br />
          </Box>
        </AppBar>
        <br />
        <br />
        <br />
      </div>
    </center>
  );
}

export default PlusDB;
