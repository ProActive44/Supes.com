import React from 'react';
import axios from 'axios';

const senddata = (data)=>{
    axios.post(`https://supes-json-server.onrender.com/users`, data)
    .then((res)=>console.log(res))
    .catch((error)=>console.log(error))
}


const Reducer = (state, action) => {
    switch(action.type){
        case "new_User" : {
            senddata(action.payload)
        }
    }
};



export default Reducer;

