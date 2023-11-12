import axios from "axios";

export  function getperson() {
  return axios.get('http://127.0.0.1:8000/api/person/')
  .then(res => {
    return res.data
})}


export  function getpersonByID(id) {
    return axios.get('http://127.0.0.1:8000/api/person/'+id.toString()+'/')
    .then(res => {
      return res.data
  })}

export function getUser(){
  
  return axios.get('http://127.0.0.1:8000/api/user/').then(res=>{
    return res.data
  }).catch(function(error){
    console.log("err",error)
  });
}