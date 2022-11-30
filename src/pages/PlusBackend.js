import React,{useRef} from "react";
import styled from "styled-components";
import {Box, Grommet} from 'grommet';
import "./FrontEnd.css"
import ModalFront from './ModalFront'
import { useState } from "react";
import axios from "axios";
import checkimg from '../images/pngwing 3.png'
import ximg from '../images/pngwing 1.png'
import applyimg from '../images/apply.png'
import { useLocation } from "react-router-dom";
import './textarea.css';

const StyledInput=styled.input`
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
  background-color: #EB5757;
  border-color: #EB5757;
  font-color: #FFFFFF;
  border-radius: 5px;
  font-size:16px;
  color:white;
`;

const StyledButton2 = styled.button`
  height: 36px;
  width: 128px;
  background-color: #34B755;
  font-color: #FFFFFF;
  border-radius: 5px;
  border-color:#34B755;
  font-size:16px;
  color:white;
`;

const StyledButton3 = styled.button`
  height: 35px;
  width: 964px;
  background-color: #FF9A3E;
  font-size: 20px;
  font-color: #FFFFFF;
  border-radius: 5px;
  color:white;
  border-color:#FF9A3E;
`;


const StyledButton5 = styled.button`
  height: 35px;
  width: 100px;
  background-color: #124271;
  font-size: 16px;
  color: white;
  border-radius: 5px;
  border-color:#124271;
`;

const ShadowedBox = styled.div`
    width: 100px;
    height:100px;
    background-color: #DFDFDF;
    border-radius: 5px;
`;

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};


const AppBar=(props)=>(
  <Box
  tag='header'
  direction='row'
  // align='center'
  justify='between'
  background='white'
  // pad={{vertical:'small',horizontal:'medium'}}
  elevation='medium'
  width='964px'
  height='362px'
  {...props}
  />
);

const ResultAreaText= styled.button`
height: 100px;
width: 964px;
background-color: white;
border-radius: 5px;
border:0;
font-size:15px;
padding:0;
margin:0;
overflow:scroll;
`;



function PlusBackend() {
  const { state: publicIp } = useLocation();
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const [name,setName]=useState(null);
  const [text,setText]=useState(null);
  const nameRef = useRef(null);
  const textRef = useRef(null);
  const [myname,setMyname]=useState("");

  const onClick=()=>{
    axios.post(`http://${publicIp}/text`,
      {
      name:nameRef.current.value,
      text:textRef.current.value
    })
    .then((response)=>{
      setText(JSON.stringify(response.data));
      setName(JSON.stringify(response.data));
      
      console.log("responseasdadasda : ",response);
    })
    
    }

    const onChange=(event)=>{
      setMyname(event.target.value);
    }
  
  

  return (
    <center>
    <div>
<br/>
<br/>
<br/>

<div className="out">

<ShadowedBox>
  <StyledButton5>
    Front-end
  </StyledButton5>

<div className="check" style={{margin:6}}>
<img className="checkimg"
alt="check"
src={checkimg}
width="50"
height="50"
/> 
</div>
</ShadowedBox>


&emsp;&emsp;&emsp;&emsp;
&emsp;&emsp;&emsp;&emsp;

<ShadowedBox>
  <StyledButton5>
    Back-end
  </StyledButton5>
  <div className="check" style={{margin:6}}>
<img className="checkimg"
alt="check"
src={checkimg}
width="50"
height="50"
/> 
</div>
</ShadowedBox>
&emsp;&emsp;&emsp;&emsp;
&emsp;&emsp;&emsp;&emsp;
<ShadowedBox>
  <StyledButton5>
    DB
  </StyledButton5>
  <div className="check" style={{margin:6}}>
<img className="checkimg"
alt="x"
src={ximg}
width="50"
height="50"
/> 
</div>
</ShadowedBox>
</div>
<br/>
<br/>
<a>당신의 이름</a> 
&nbsp;&nbsp;&nbsp;&nbsp;
<StyledInput onChange={onChange}
placeholder={`이름을 입력해주세요.`}
type="text"
ref={nameRef}
/>
&nbsp;&nbsp;&nbsp;&nbsp;
<StyledButton onClick={openModal}><div className="apply">
<img className="checkimg"
alt="apply"
src={applyimg}
width="16px"
height="16px"
/> 이름 확인
</div></StyledButton> 
<ModalFront open={modalOpen} close={closeModal} header="이름 확인">
        Database가 없습니다. <br/>
        결과를 저장할 수 없습니다.
      </ModalFront>

<br/>
<br/>
<a>텍스트 입력</a>
&nbsp;&nbsp;&nbsp;&nbsp;
<StyledInput 
placeholder={`아무 텍스트나 입력해주세요.`}
type="text"
ref={textRef}
/>
&nbsp;&nbsp;&nbsp;&nbsp;
<StyledButton2 onClick={onClick}>추가 버튼</StyledButton2>

<br/>
<br/>
<br/>
<Grommet theme={theme}></Grommet>
<AppBar>

 <Box direction='column'>

 <StyledButton3>결과</StyledButton3>

 <br/>

<p className="input-text">
입력 텍스트 <br/>{text}

</p>
<br/>
</Box>

</AppBar>
<br/>
<br/>
<br/>
    </div>
    </center>
  );
}

export default PlusBackend;
