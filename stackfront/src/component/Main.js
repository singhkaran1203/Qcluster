import React, { useContext, useEffect, useState } from 'react'
import Question from './Question'
import { Link } from 'react-router-dom'
import QuestionContext from './QuestionContext/QuestionContext'

export default function Main() {
    const context = useContext(QuestionContext)
    const { question, fetchallQuestion,questionToPass,fetchQuestionAll,User ,fetchUser} = context
    const [newest, setnewest] = useState(false)
    // const [user_arr,setuser_arr]=useState([]);
//     console.log("this user", User)

// console.log("ddj",User)
//  let User_arr=[]
    useEffect(() => {
        fetchallQuestion()
    }, [])

    const handleonclick = async(e) => {
        e.preventDefault();
        question.reverse();
       
       
        setnewest(!newest);
    }
    // console.log(question);
   const handleQuestion=()=>{
    fetchQuestionAll()

   }

   const handleActive=(e)=>{
    // e.preventDefault()
    
    fetchUser()
    // for (let i = 0; i < User.user.length; i++) {
    //   User_arr[i]= User.user[i].name
        
    // }
//    console.log( User.user.length)
  
 


   }


    // const utag=new Set();
    // question.map((ques)=>{
    //     ques.tags.map((tag)=>{
    //         utag.add(tag);
    //     })
    // })
    // console.log(utag);



    return (
        <div className="main">
         
{/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button> */}


<div class="modal fade" id="exampleModale" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Active User</h5>
        {/* <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button> */}
      </div>
      <div class="modal-body">
            {
             
               User && User.user.map(ele=>(
                    <span className='badge'>{ele.name}</span>
                ))


             }
              
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        {/* <button type="button" class="btn btn-primary">Save changes</button> */}
      </div>
    </div>
  </div>
</div>
            <div className="container">
                <div className="top">
                    <h2>All Question</h2>
                    <Link to="/askquestion"><button className='btn btn-primary'>Ask Question</button></Link>
                </div>
                <div className="filter">
                    <div className="desc">
                        <p>No of question : <strong>{questionToPass.length}</strong></p>
                    </div>

                    <div className="tabs">
                        <div className="tab">
                            <a onClick={handleonclick} className='lll'>{newest ? "Oldest" : "Newest"}</a>
                        </div>
                        <div className="tab">
                            <a href="" className='lll' onClick={handleActive} data-toggle="modal" data-target="#exampleModale" >Active</a>
                        </div>
                        {/* <div className="tab">
                            <a href="" className='lll'>More</a>
                        </div> */}
                        <div className="filter-icon">
                            <div className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa-sharp fa-solid fa-filter"></i>Filter</a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item d-flex justify-content-around" href="/">User <i className="fa-solid fa-user"></i></a>
                                    <a className="dropdown-item d-flex justify-content-around" data-toggle="modal" data-target="#exampleModal" href="/">Tags<i className="fa-solid fa-tags"></i></a>
                                    <a className="dropdown-item d-flex justify-content-around" onClick={handleQuestion}>All Question<i class="fas fa-question"></i></a>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                {questionToPass.map(question => (
                    <div className="questions">
                        <Question detail={question} />
                    </div>

                ))}



            </div>
        </div>
    )
}
