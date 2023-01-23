import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import question from './question.png'
import QuestionContext from './QuestionContext/QuestionContext'


export default function Navbar() {
  const context = useContext(QuestionContext)
  const { utag } = context


  const navigate = useNavigate()

  const handleremove = () => {
    localStorage.removeItem('user_name')
    localStorage.removeItem('user_id2')
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
  console.log(arr)
  // }

  return (
    <div>



     


      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                  <span className='badge'>{k}</span>
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



      <nav className="navbar navbar-expand-lg ">
        <img src={question} style={{ width: '5rem', height: '3rem' }} className="img-fluid" />

        <a className="navbar-brand" href="/">Qcluster</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home </a>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item d-flex justify-content-around" href="/">User <i className="fa-solid fa-user"></i></a>
                <a className="dropdown-item d-flex justify-content-around" data-toggle="modal" data-target="#exampleModal" href="/">Tags<i className="fa-solid fa-tags"></i></a>
                <a className="dropdown-item d-flex justify-content-around" href="/">Question<i className="fa-duotone fa-question"></i></a>

                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/">Something else here</a>
              </div>
            </li>

            <input className="form-control mr-sm-2 mx-3" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-2" type="submit">Search</button>
            <button className="btn btn-outline-danger my-2 mx-3 my-sm-0" onClick={handleremove} >Logout</button>

          </ul>

        </div>
      </nav>
    </div>
  )
}
