import { useLocation, useParams } from "react-router-dom"
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";


export default function Loading() {
    const location = useLocation();
    console.log(location.search);
    //location.search가 token임 (localstorage로 저장하기)이거를 주함오빠가 링크뒤에 http://localhost:3000/loading?zxczdfsfgdhggcghcj 이런식으로 보내주면 뒤에 저게 토큰이에욤
    window.localStorage.setItem('token',location.search);

    const tokenkey=window.localStorage.getItem('token');

    axios.get(`${process.env.REACT_APP_URL}/instances/backend`, {
    headers: {
        Authorization: `Bearer ${tokenkey}`}
    })
    .then((response)=>{
        console.log(response);
        //nullable:true이면 ip 있는것(back이 있는 것), back 검사 후 rds검사하기 state로 reloading해주기
        if (response.data.nullable==='true'){
            <Link to="/PlusBackend"></Link> //여기에 rds 검사
        }
        else{
            <Link to="/Frontend"></Link>
        }
    })
    

    // axios.get(`http://52.78.76.251/db`, {
    //     headers: {
    //         Authorization: `Bearer ${tokenkey}`
    //     }
    //     })
    


    return <div>Loading</div>
}

