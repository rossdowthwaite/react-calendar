import React from 'react'
import PropTypes from 'prop-types'
import rangeInclusive from 'range-inclusive'

export default function SelectYear ({onChange, currentYear}) {
  const years = rangeInclusive(1990, 2050);
  return (
    <div>
      <select
        name="level"
        className="input"
        value={ currentYear.format('YYYY') }
        onChange={ onChange }>
        {
          years.map( (year) => {
            return (
              <option key={year} value={year}>{year}</option>
            )
          })
        }
      </select>
    </div>
  )
}

SelectYear.propTypes = {
  onChange: PropTypes.func.isRequired,
}
