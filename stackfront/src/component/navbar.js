import React, { useContext, useRef } from 'react'
import { useNavigate } from 'react-router'
import question from './question.png'
import QuestionContext from './QuestionContext/QuestionContext'
import axios from "axios";


export default function Navbar() {
  const context = useContext(QuestionContext)
  const { utag,fetchQuestionWithTag } = context

  const myRef=useRef()

  const navigate = useNavigate()

  const user_inactive=async (id)=>{

let headersList = {
 "Accept": "*/*",

}

let reqOptions = {
  url: `http://localhost:80/api/auth/logout/${id}`,
  method: "PUT",
  headers: headersList,
}

let response = await axios.request(reqOptions);
console.log(response.data);
  }
  const handleremove = () => {
    localStorage.removeItem('user_name')
    const p=localStorage.getItem('user_id2');
    localStorage.removeItem('user_id2')
   
    user_inactive(p);
    navigate("/")
  }

  // const handleOnClick = (e) => {
  //   e.preventDefault()
  //   console.log(utag)

  let arr=[]
  let num=0
  for (let i of utag) {
    arr[num] = i;
    num++;
    
  }


  const handleTagClick=(e)=>{
     
    fetchQuestionWithTag(e.target.innerText)
    myRef.current.click()
  }
  // console.log(arr)
  // }

  return (
    <div>


      <div class="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Sort by Tags</h5>
              {/* <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button> */}
            </div>
            <div class="modal-body">
              {
                arr.map(k =>(
                  <span className='badge'onClick={handleTagClick} style={{cursor:'pointer'}} >{k}</span>
                ))
              }
          
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal" ref={myRef}>Close</button>
              {/* <button type="button" class="btn btn-primary">Save changes</button> */}
            </div>
          </div>
        </div>
      </div>



      <nav className="navbar navbar-expand-lg ">
        <img src={question} style={{ width: '5rem', height: '3rem' }} className="img-fluid" />

        <a className="navbar-brand" href="/">Qcluster</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto text-center">
            

            
            {/* <FontAwesomeIcon icon="fa-duotone fa-user-secret" /> */}
           
            <input className="form-control mr-sm-2 mx-3 butt search" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0 butt" type="submit">Search</button>
            <button className="btn btn-outline-danger my-2 mx-3 my-sm-0  butt" onClick={handleremove} >Logout</button>
            <i style={{fontSize:'40px'}} className="fa-sharp fa-solid fa-user-secret"></i>
           <h6 className='username' >{localStorage.getItem("user_name")}</h6>
          
          </ul>

        </div>
      </nav>
    </div>
  )
}