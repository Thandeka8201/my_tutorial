import React from 'react'
import { Link } from 'react-router-dom'

export default function Products(){
    return(
        <div>
            This is products page <Link to="/" className='underline'>goes to Dashboard</Link>
        </div>
    )
}