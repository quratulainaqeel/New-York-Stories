import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

export default function Cards() {
    const [stories, setstories] = useState([])
    
    useEffect(() => {
        axios.get('http://localhost:3000/api/get-stories').then((json) => setstories(json.data.Stories_data.results)).catch((err) => console.log(err))
    }, [])

    return (
        <>
            <div className="container">
                <h1 className='text-center text-danger fw-bold my-3'>STORIES</h1>
                <div className="row">
                    {stories.map((product, key) => (
                        <div className="col-md-3 mb-3" key={key}>
                            <div className="card" style={{ height: '100%' }}>
                                <img src={product.multimedia[0].url} height="170px" className="card-img-top object-fit-cover border rounded" alt={product.caption} />
                                <Link to={product.url} className='text-decoration-none text-dark'>
                                    <div className="card-body">
                                        <div className="card-text">
                                            <p className='fw-bold text-center'>{product.title}</p>
                                            <small>{product.abstract}</small>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </>
    )
}
