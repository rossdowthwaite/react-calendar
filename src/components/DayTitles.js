import React from 'react'

export default function DayTitles (props) {
  const days = ['SUN','MON','TUE', 'WED', 'THU', 'FRI', 'SAT']
  return (
    <div className="calendar__day-titles">
      {
        days.map( (day) => (
          <span key={day} className='border'>{day}</span>
        ))
      }
    </div>
  )
}
