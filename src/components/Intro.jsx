import React, { useState } from 'react'
import { Form } from 'react-router-dom'
import { UserPlusIcon } from '@heroicons/react/24/solid'
import illustration from "../assets/illustration.jpg"


const Intro = () => {
    const [isSubmitting, setIsSubmitting] = useState(false) ;
    const handleSubmit = () => {
        setIsSubmitting(true);
    }




  return (
    <div className='intro'>
        <div>
            <h1>
                Take Control of <span className="accent">Your Money</span>
            </h1>
            <p>
                Personal Budgeting 
            </p>
            <Form method='post'
            onSubmit={handleSubmit}
            >
                <input type="text" 
                name='userName' 
                required
                placeholder='What is Your Name?' 
                aria-label='Your Name' 
                autoComplete='given-name' />
                <input type='hidden' name='_action' value="newUser"/>

                <button type='submit' 
                className='btn btn--dark'
                disabled = {isSubmitting}
                >
                <span>Create Account</span>
                <UserPlusIcon width={20}/>

            </button>
            </Form>
            
        </div>
        <img src={illustration} alt='person with money' width={600}/>
        </div>
  )
}

export default Intro