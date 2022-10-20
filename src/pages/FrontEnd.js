import React from "react";
import styled from "styled-components";
import {Box, Grommet,Button, Button as GrommetButton,Card,CardBody,CardFooter,CardHeader} from 'grommet';
import "./FrontEnd.css"

const StyledInput=styled.input`
height: 36px;
width: 806px;
border-radius: 5px;
font-size: 15px;
border: 2px solid gray;
alignItems: 'center'
justifyContent: 'center',
padding:10px;
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

const StyledButton4 = styled.button`
  height: 100px;
  width: 100px;
  background-color: #ffffff;
  font-size: 16px;
  font-color: #FFFFFF;
  border-radius: 5px;
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

const AppBar2=(props)=>(
  <Box
  tag='header'
  direction='row'
  // align='center'
  justify='between'
  background='white'
  // pad={{vertical:'small',horizontal:'medium'}}
  elevation='medium'
  width='100px'
  height='100px'
  {...props}
  />
);

function FrontEnd() {


  return (
    <center>
    <div>
<br/>
<br/>
<br/>

{/* <div style={{display:"flex", alignContent:"center"}}> */}
 {/* <div className="out">
  <div className="in">
<Card height="100px" width="100px" background="light-1">
  <CardHeader pad="14px" height="35px" background="#124271">Front-end</CardHeader>
  <CardBody background="light-2">Body</CardBody>
</Card>
  </div>

  &emsp;&emsp;&emsp;&emsp;
&emsp;&emsp;&emsp;&emsp;

  <div className="in">
<Card  height="100px" width="100px" background="light-1">
  <CardHeader pad="17px" height="35px" background="#124271">Back-end</CardHeader>
  <CardBody background="light-2">Body</CardBody>
</Card>
  </div>

  &emsp;&emsp;&emsp;&emsp;
&emsp;&emsp;&emsp;&emsp;

  <div className="in">
<Card  height="100px" width="100px" background="light-1">
  <CardHeader pad="19px" height="35px" background="#124271">DB</CardHeader>
  <CardBody background="light-2">Body</CardBody>
</Card>
  </div>
</div> */}

<div className="out">

<ShadowedBox>
  <StyledButton5>
    Front-end
  </StyledButton5>

<div className="check" style={{margin:6}}>
<img className="checkimg"
src="img/pngwing 3.png"
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
src="img/pngwing 1.png"
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
src="img/pngwing 1.png"
width="50"
height="50"
/> 
</div>
</ShadowedBox>
</div>
<br/>
<br/>
<a>당신의 이름</a> 
&nbsp;&nbsp;
<StyledInput placeholder={`이름을 입력해주세요.`}/>
&nbsp;&nbsp;
<StyledButton>이름 확인</StyledButton>

<br/>
<br/>
<a>텍스트 입력</a>
&nbsp;&nbsp;
<StyledInput placeholder={`아무 텍스트나 입력해주세요.`}/>
&nbsp;&nbsp;
<StyledButton2>추가 버튼</StyledButton2>

<br/>
<br/>
<br/>
<Grommet theme={theme}></Grommet>
<AppBar>

 <Box direction='row'>

 <StyledButton3>결과</StyledButton3>
</Box>

</AppBar>
<br/>
<br/>
<br/>
    </div>
    </center>
  );
}

export default FrontEnd;
