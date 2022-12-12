import React from "react";
import styled from "styled-components";
import { Box, Grommet } from "grommet";
import "./FrontEnd.css";
import ModalFront from "./ModalFront";
import { useState } from "react";
import checkimg from "../images/pngwing 3.png";
import ximg from "../images/pngwing 1.png";
import applyimg from "../images/apply.png";

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

const StyledButton4 = styled.button`
  height: 100px;
  width: 100px;
  background-color: #ffffff;
  font-size: 16px;
  font-color: #ffffff;
  border-radius: 5px;
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

const AppBar2 = (props) => (
  <Box
    tag="header"
    direction="row"
    // align='center'
    justify="between"
    background="white"
    // pad={{vertical:'small',horizontal:'medium'}}
    elevation="medium"
    width="100px"
    height="100px"
    {...props}
  />
);

function FrontEnd() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
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
                src={ximg}
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
                alt="x"
                src={ximg}
                width="50"
                height="50"
              />
            </div>
          </ShadowedBox>
        </div>
        <br />
        <br />
        <a>당신의 이름</a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <StyledInput placeholder={`이름을 입력해주세요.`} />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <StyledButton onClick={openModal}>
          <div className="apply">
            <img
              className="checkimg"
              alt="apply"
              src={applyimg}
              width="16px"
              height="16px"
            />{" "}
            이름 확인
          </div>
        </StyledButton>
        <ModalFront open={modalOpen} close={closeModal} header="이름 확인">
          Back-end가 없습니다. <br />
          API를 호출할 수 없습니다.
        </ModalFront>
        <br />
        <br />
        <a>텍스트 입력</a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <StyledInput placeholder={`아무 텍스트나 입력해주세요.`} />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <StyledButton2 onClick={openModal}>추가 버튼</StyledButton2>
        <ModalFront open={modalOpen} close={closeModal} header="텍스트 추가">
          Back-end가 없습니다. <br />
          텍스트를 추가할 수 없습니다.
        </ModalFront>
        <br />
        <br />
        <br />
        <Grommet theme={theme}></Grommet>
        <AppBar>
          <Box direction="column">
            <StyledButton3>결과</StyledButton3>
          </Box>
        </AppBar>
        <br />
        <br />
        <br />
      </div>
    </center>
  );
}

export default FrontEnd;
