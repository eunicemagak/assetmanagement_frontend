import React from 'react'
import { IoIosLaptop } from 'react-icons/io'
import { BsCheckCircle} from 'react-icons/bs'
import { ImCross } from 'react-icons/im'
import { RiMessage2Line } from 'react-icons/ri'

const admindash = () => {
  return (
    /**
     * * Admin dashboard on login with basic informative widgets on current system state
     * ? Do we need to add functionality to the widgets?
     * TODO: implement counter for all widgets to get information from DB
     */
        <div className='main'>
          <div className='welcome'>
            <h2>WELCOME JUMA</h2>
            <p>Use this asset management portal to manage, assign and record all company assets for better convinience</p>
          </div>
          <div className='widget'>
            <div className='data'>
              <h1>36</h1>
              <p>total assets</p>
            </div>
            <IoIosLaptop size='7vw' className='widget-img' color='rgba(255, 255, 255, .5)'/>
          </div>
          <div className='widget'>
            <div className='data'>
              <h1>24</h1>
              <p>assigned assets</p>
            </div>
            <BsCheckCircle size='5vw' className='widget-img' color='rgba(255, 255, 255, .5)' />
          </div>
          <div className='widget'>
            <div className='data'>
              <h1>12</h1>
              <p>unassigned assets</p>
            </div>
            <ImCross size='5vw' className='widget-img' color='rgba(255, 255, 255, .5)'/>
          </div>
          <div className='widget'>
            <div className='data'>
              <h1>4</h1>
              <p>new complaints</p>
            </div>
            <RiMessage2Line size='5vw' className='widget-img' color='rgba(255, 255, 255, .5)'/>
          </div>
          
        </div>
  )
}

export default admindash
