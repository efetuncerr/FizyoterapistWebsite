import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Posts = () => {

  const [userData, setUserData] = useState([]);

  useEffect(() =>{
    const getUserData = async()=>{
      const reqData = await fetch("/posts");
      const resData = await reqData.json();
      setUserData(resData);
      console.log(resData)
    }
    getUserData();
  },[])
 

  return (

<div className="container-fluid mt-5">
  <div className="row d-flex justify-content-center align-items-center">
    <div className="col col-sm-12 col-lg-9">
    <table className="table table-hover table-responsive">
  <thead className='thead table-dark' >
    <tr>
      <th scope="col">#</th>
      <th scope="col">NO</th>
      <th scope="col">BASLIK</th>
      <th scope="col">ACIKLAMA</th>
      <th scope="col">TARIH</th>
      <th scope="col">KULLANICI ID</th>
      <th scope="col">KATEGORİ</th>
      <th scope="col">AKSIYON</th>
    </tr>
  </thead> 
  <tbody>
    {userData.map((userData, index)=> ( 
    <tr key={index}>
      <th scope="row">{index+1}</th>
      <td>{userData.id}</td>
      <td>{userData.title}</td>
      <td>{userData.desc}</td>
      <td>{userData.date}</td>
      <td>{userData.uid}</td>
      <td>{userData.cat}</td>
      <td><button className='btn btn-dark mx-2 text-center'>Düzenle</button>
      <button className='btn btn-dark'>Sil</button></td>
    </tr>
    ))
}
   
  </tbody>
</table> 
    </div>
  </div>
 
</div>





)
}

export default Posts