import React from "react";
import styled from "styled-components";
import {Box, Grommet,Button, Button as GrommetButton} from 'grommet';
import { TextField } from "material-ui";
const StyledInput=styled.input`
height: 36px;
width: 806px;
border-radius: 5px;
font-size: 15px;
border: 2px solid gray;
alignItems: 'center'
justifyContent: 'center',
`;

const StyledButton = styled.button`
  height: 36px;
  width: 128px;
  background-color: #EB5757;
  font-size: 20px;
  font-color: #FFFFFF;
  border-radius: 5px;
  font-size:15px;
`;

const StyledButton2 = styled.button`
  height: 36px;
  width: 128px;
  background-color: #34B755;
  font-size: 20px;
  font-color: #FFFFFF;
  border-radius: 5px;
  font-size:15px;
`;

const StyledButton3 = styled.button`
  height: 35px;
  width: 964px;
  background-color: #34B755;
  font-size: 20px;
  font-color: #FFFFFF;
  border-radius: 5px;
  font-size:15px;
`;

const StyledButton4 = styled.button`
  height: 100px;
  width: 100px;
  background-color: #ffffff;
  font-size: 20px;
  font-color: #FFFFFF;
  border-radius: 5px;
  font-size:15px;
`;
const StyledButton5 = styled.button`
  height: 35px;
  width: 100px;
  background-color: #124271;
  font-size: 20px;
  font-color: #FFFFFF;
  border-radius: 5px;
  font-size:15px;
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
<h1>
    Front / Back / DB
</h1>

<AppBar2>
  <StyledButton5>
    Front-end
  </StyledButton5>
</AppBar2>
&nbsp;&nbsp;&nbsp;&nbsp;
<AppBar2>
  <StyledButton5>
    Back-end
  </StyledButton5>
</AppBar2>
&nbsp;&nbsp;&nbsp;&nbsp;
<AppBar2>
  <StyledButton5>
    DB
  </StyledButton5>
</AppBar2>
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

    </div>
    </center>
  );
}

export default FrontEnd;
