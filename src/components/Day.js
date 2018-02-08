import React from 'react'
import PropTypes from 'prop-types'

export default function Day ({day, inCurrentMonth}) {
  let classes = 'calendar__day border'
  if(!inCurrentMonth){
    classes += ' calendar__day--dulled'
  }
  return (
    <div className={classes}>
      { day.date() }
    </div>
  )
}

Day.propTypes = {
  day: PropTypes.object.isRequired
}
