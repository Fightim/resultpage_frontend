import React from "react";
import styled from "styled-components";

const StyledInput=styled.input`
height: 20px;
width: 250px;
border-radius: 5px;
font-size: 15px;
border: 2px solid gray;
alignItems: 'center'
justifyContent: 'center',
`;


function FrontEnd() {


  return (
    <center>
    <div>
<h1>
    Front / Back / DB
</h1>
<a>당신의 이름</a>
&nbsp;&nbsp;
<StyledInput placeholder={`이름을 입력해주세요.`}/>
&nbsp;&nbsp;
<button>이름 확인</button>

<br/>
<br/>
<a>텍스트 입력</a>
&nbsp;&nbsp;
<StyledInput placeholder={`아무 텍스트나 입력해주세요.`}/>
&nbsp;&nbsp;
<button>추가 버튼</button>

<p>결과 화면</p>

    </div>
    </center>
  );
}

export default FrontEnd;
