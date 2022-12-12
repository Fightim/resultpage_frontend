import {useNavigate, useParams } from "react-router-dom"
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

export default function Loading() {
    const navigate = useNavigate();
    const params = useParams();
    const tokenkey = params.token;
    const setIP=useState("");

    useEffect(()=>{
            axios.get(`https://dev.cloud-gui.com/instances/backend`, {
            headers: {
                Authorization: `Bearer ${tokenkey}`}
            })
            .then((response)=>{
                console.log(response);
                
                //nullable:true이면 ip 있는것(back이 있는 것), back 검사 후 rds검사하기 state로 reloading해주기
                if (response.data.publicIp!==null){
                    const publicIp = response.data.publicIp;
                    axios.get(`http://${response.data.publicIp}/db`, {
                        headers: {
                            Authorization: `Bearer ${tokenkey}`
                        }
                        }).then((response)=>{
                            console.log(response);
                            if (response.status===200){
                                navigate("/PlusDB/" + tokenkey, { state: publicIp });
                                //여기도 :token 이렇게해야하낭
                            }
                            else if(response.status===404){
                                navigate("/PlusBackend/" + tokenkey, { state: publicIp });
                                 //여기에 rds 검사
                            }
                        }
                        )
                        .catch((error)=>{
                            if(error.request){
                                console.log(error.request);
                                navigate("/PlusBackend/" + tokenkey, { state: publicIp });
                            }
                            else if(error.response){
                                console.log(error.response.data);
                                console.log(error.response.status);
                                navigate("/PlusBackend/" + tokenkey, { state: publicIp });
                            }
                        })
                }
              
                else{
                    navigate("/FrontEnd/" + tokenkey);
            }
            const setIP=response.data.publicIp;
        })
        .catch((error)=> {
            if(error.request){
                console.log(error.request);
                navigate("/FrontEnd/" + tokenkey);
            }
            else if(error.response){
                console.log(error.response.data);
                console.log(error.response.status);
                navigate("/FrontEnd/" + tokenkey);
            }
        });
    },[]); 
    

   


    return <div>Loading... <br/>{tokenkey}</div>
}

