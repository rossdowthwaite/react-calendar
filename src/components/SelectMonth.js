import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import moment from 'moment'
import img from '../assets/images/select-arrow.png';

const YearSelector = styled.select`
  font-size: 20px;
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: block;
  margin: auto;
  border: none;
  padding-right: 12px;
  margin-right: 15px;
  background: url(${img}) no-repeat scroll 0 0 transparent;
  background-position: center right;
  background-size: auto;
  cursor: pointer;
`

SelectMonth.propTypes = {
  onChange: PropTypes.func.isRequired,
  currentMonth: PropTypes.object.isRequired,
}

export default function SelectMonth ({onChange, currentMonth }) {
  const months = moment.months();
  return (
    <div>
      <YearSelector
        name="Month"
        value={ currentMonth.format('MMMM') }
        onChange={ onChange }>
        {
          months.map( (month) => {
            return (
              <option key={month} value={month}>{month}</option>
            )
          })
        }
      </YearSelector>
    </div>
  )
}
