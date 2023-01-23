import React, { useContext, useEffect,useState } from 'react'
import Question from './Question'
import { Link } from 'react-router-dom'
import QuestionContext from './QuestionContext/QuestionContext'

export default function Main() {
    const context=useContext(QuestionContext)
    const {question,fetchallQuestion}=context
    const [newest, setnewest] = useState(false)



    useEffect(()=>{
        fetchallQuestion()
        
    },[])

    const handleonclick =(e)=>{
        e.preventDefault();
        question.reverse();
        setnewest(!newest);
    }
    console.log(question);



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
            <p>No of question : <strong>{question.length}</strong></p>
        </div>

            <div className="tabs">
                <div className="tab">
                    <a onClick={handleonclick} className='lll'>{newest?"Oldest":"Newest"}</a>
                </div>
                <div className="tab">
                    <a href=""className='lll'>Active</a>
                </div>
                <div className="tab">
                    <a href="" className='lll'>More</a>
                </div>
                <div className="filter-icon">
                <i className="fa-sharp fa-solid fa-filter">Filter</i>
                </div>

            </div>
        </div>
        {question.map(question=>(
            <div className="questions">
                <Question detail={question}/>
           </div>
            

        ))}
                
                    
               
    </div>
</div>
  )
}
