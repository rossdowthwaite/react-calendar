import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

export default function SelectMonth ({onChange, currentMonth }) {
  const months = moment.months();
  return (
    <div>
      <select
        name="level"
        className="input icon-caret-down"
        value={ currentMonth.format('MMMM') }
        onChange={ onChange }>
        {
          months.map( (month) => {
            return (
              <option key={month} value={month}>{month}</option>
            )
          })
        }
      </select>
    </div>
  )
}

SelectMonth.propTypes = {
  onChange: PropTypes.func.isRequired,
}
