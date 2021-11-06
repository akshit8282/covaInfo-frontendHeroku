import React from 'react'
import issueimg from '../../images/download.svg'
import './FeedBack.css'

export default function FeedBack() {
    return (
        <div className="container-fluid feedback">
            <div >
            <h2>Raise An Issue</h2>
            <p>Raise an issue or get solutions to<br></br> your CovaInfo account and Information provided by us  related issues instantly..</p>
            <p id="mail"><a href="mailto:akshitbatra222@gmail.com">Send email</a></p>
</div>
            <img src={issueimg}/>
        </div>
    )
}
