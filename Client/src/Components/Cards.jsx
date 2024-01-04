import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Cards() {
    const [stories, setstories] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/api/get-stories').then((json) => console.log(json.data)).catch((err) => console.log(err))
    },[])
    return (
        <>
            <h1 className='text-center text-danger fw-bold my-3'>STORIES</h1>
            <div className="container">
                <div className="row ">
                    <div className="col-lg-2 col-md-2 col-sm-3 mb-3">
                        <div className="card" >
                            <img src="https://medicarehospital.pk/wp-content/uploads/2022/10/09-1.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">
                                    <p className='fw-bold text-center'>Anesthesia</p>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
