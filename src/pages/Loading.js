import {useNavigate, useParams } from "react-router-dom"
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";


export default function Loading() {
    const navigate = useNavigate();
    const params = useParams();
    const tokenkey = params.token;
    

    axios.get(`${process.env.REACT_APP_URL}/instances/backend`, {
    headers: {
        Authorization: `Bearer ${tokenkey}`}
    })
    .then((response)=>{
        console.log(response);
        //nullable:true이면 ip 있는것(back이 있는 것), back 검사 후 rds검사하기 state로 reloading해주기
        if (response.data!==""){
            axios.get(`http://52.78.76.251/db`, {
                headers: {
                    Authorization: `Bearer ${tokenkey}`
                }
                }).then((response)=>{
                    console.log(response);
                    if (response.status===200){
                        navigate("/PlusDB/" + tokenkey);
                        //여기도 :token 이렇게해야하낭
                    }
                    else{
                        navigate("/PlusBackend/" + tokenkey);
                         //여기에 rds 검사
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

