import { useLocation, useParams } from "react-router-dom"
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";


export default function Loading() {
    const params = useParams();
    const tokenkey = params.token;
    //location.search가 token임 (localstorage로 저장하기)이거를 주함오빠가 링크뒤에 http://localhost:3000/loading?zxczdfsfgdhggcghcj 이런식으로 보내주면 뒤에 저게 토큰이에욤


    axios.get(`${process.env.REACT_APP_URL}/instances/backend`, {
    headers: {
        Authorization: `Bearer ${tokenkey}`}
    })
    .then((response)=>{
        console.log(response);
        //nullable:true이면 ip 있는것(back이 있는 것), back 검사 후 rds검사하기 state로 reloading해주기
        if (response.data['nullable']===true){
            axios.get(`http://52.78.76.251/db`, {
                headers: {
                    Authorization: `Bearer ${tokenkey}`
                }
                }).then((response)=>{
                    console.log(response);
                    if (response.data.code===200){
                        <Link to={"/PlusDB/" + tokenkey} ></Link> //여기도 :token 이렇게해야하낭
                    }
                    else{
                        <Link to={"/PlusBackend/" + tokenkey}></Link> //여기에 rds 검사
                    }
                }
                )
       
 
        }
      
        else{
            <Link to={"/Frontend/" + tokenkey}></Link>
        }
    })
    

   


    return <div>Loading {tokenkey}</div>
}

