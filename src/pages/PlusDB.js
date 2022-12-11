import React, { useRef } from "react";
import styled from "styled-components";
import {Box, Grommet} from 'grommet';
import "./FrontEnd.css"
import ModalDB from "./ModalDB"
import { useState } from "react";
import axios from "axios";
import checkimg from '../images/pngwing 3.png'
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


function PlusDB() {
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
  const [data,setData]=useState("");
  const [myname,setMyname]=useState("");
  const [mytext,setMytext]=useState("");


  //추가 버튼 
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
      
      onReset();
    })
    
    }
  
  //이름 확인
  const onClickNamecheck=()=>{
    closeModal();
    axios.get(`http://${publicIp}/text/${nameRef.current.value}`)
    .then((response)=>{
      setData(JSON.stringify(response.data));
      console.log("불러오기 성공:",response);
    })

  }

  
  const onChange=(event)=>{
    setMyname(event.target.value);
  }

  const onChange2=(event)=>{
    setMytext(event.target.value);
  }

  const onReset=(event)=>{
    setMytext("");
    setMyname("");
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
alt="check"
src={checkimg}
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
value={myname}
/>

&nbsp;&nbsp;&nbsp;&nbsp;
<StyledButton onClick={openModal}><div className="apply">
<img className="checkimg"
src={applyimg}
width="16px"
height="16px"
/> 이름 확인
</div></StyledButton> 
<ModalDB open={modalOpen} close={onClickNamecheck} header="이름 확인">
        환영합니다.<br/>
        {myname}님.
      </ModalDB>

<br/>
<br/>
<a>텍스트 입력</a>
&nbsp;&nbsp;&nbsp;&nbsp;
<StyledInput onChange={onChange2}
placeholder={`아무 텍스트나 입력해주세요.`}
type="text"
ref={textRef}
value={mytext}
/>


&nbsp;&nbsp;&nbsp;&nbsp;
<StyledButton2 
onClick={onClick}>추가 버튼</StyledButton2>



<br/>
<br/>
<br/>
<Grommet theme={theme}></Grommet>
<AppBar>
 <Box direction='column'>
 <StyledButton3>결과</StyledButton3>


 {/* <ResultAreaText className="inputText">입력 텍스트 <br/>{text} </ResultAreaText>
 <br/>
 <ResultAreaText className="savedText"> 저장된 텍스트<br/>{data}</ResultAreaText> */}
<br/>

<p className="input-text">
입력 텍스트 <br/>{text}

</p>
<br/>
<br/>

<p className="saved-text">
저장된 텍스트<br/>{data}
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

export default PlusDB;
