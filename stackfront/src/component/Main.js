import React, { useContext, useEffect, useState } from 'react'
import Question from './Question'
import { Link } from 'react-router-dom'
import QuestionContext from './QuestionContext/QuestionContext'

export default function Main() {
    const context = useContext(QuestionContext)
    const { question, fetchallQuestion,questionToPass,fetchQuestionAll } = context
    const [newest, setnewest] = useState(false)



    useEffect(() => {
        fetchallQuestion()
    }, [])

    const handleonclick = (e) => {
        e.preventDefault();
        question.reverse();
        setnewest(!newest);
    }
    // console.log(question);
   const handleQuestion=()=>{
    fetchQuestionAll()

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
                            <a href="" className='lll'>Active</a>
                        </div>
                        <div className="tab">
                            <a href="" className='lll'>More</a>
                        </div>
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
