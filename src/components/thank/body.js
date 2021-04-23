import React from 'react'
import { Link } from 'react-router-dom'
import './body.css'

export default function Body() {
    return (
        <div className = 't-container'>
            <div className = 'thank'>
                <h2>Thank you for your submission!</h2>
                <Link to = '/'>Home</Link>
            </div>
        </div>
    )
}