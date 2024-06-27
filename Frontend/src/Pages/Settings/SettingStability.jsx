import React from 'react'
import MyCalendar from '../../components/Calender/Calender'

const SettingStability = () => {
  return (
    <div className='m-5 mt-3'>
       <div className="main-head">
          <h4>Stability Calender</h4>
        </div>
      <div className='bg-light p-3 mt-5 mb-3 rounded'>
        <MyCalendar/>
      </div>
    </div>
  )
}

export default SettingStability

