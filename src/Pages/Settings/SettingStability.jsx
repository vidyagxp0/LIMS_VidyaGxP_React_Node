import React from 'react'
import MyCalendar from '../../components/Calender/Calender'

const SettingStability = () => {
  return (
    <div className='m-5'>
      <div className="my-5 fw-medium fs-5">Stability Calender</div>
      <div className='bg-light p-3 rounded'>
        <MyCalendar/>
      </div>
    </div>
  )
}

export default SettingStability

