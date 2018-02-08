import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import rangeInclusive from 'range-inclusive'
import img from '../assets/images/select-arrow.png';

const MonthSelector = styled.select`
  font-size: 20px;
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: block;
  margin: auto;
  border: none;
  padding-right: 15px;
  margin-right: 15px;
  background: url(${img}) no-repeat scroll 0 0 transparent;
  background-position: center right;
  background-size: auto;
`

export default function SelectYear ({onChange, currentYear}) {
  const years = rangeInclusive(1990, 2050);
  return (
    <div>
      <MonthSelector
        name="Year"
        value={ currentYear.format('YYYY') }
        onChange={ onChange }>
        {
          years.map( (year) => {
            return (
              <option key={year} value={year}>{year}</option>
            )
          })
        }
      </MonthSelector>
    </div>
  )
}

SelectYear.propTypes = {
  onChange: PropTypes.func.isRequired,
}
