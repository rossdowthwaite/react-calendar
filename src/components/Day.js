import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

const DayWrapper = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  padding: 10px;
  min-width: 60px;
  height: 80px;
  box-sizing: border-box;
  border: Solid 1px white;
  color: ${props => props.current ? '#606268' : '#707B7C' };
  background-color: ${props => props.current ? '#D5DBDB' : '#99A3A4' };
`;

Day.propTypes = {
  day: PropTypes.object.isRequired,
  inCurrentMonth: PropTypes.bool.isRequired
}

export default function Day ({day, inCurrentMonth}) {
  return (
    <DayWrapper current={inCurrentMonth}>
      { day.date() }
    </DayWrapper>
  )
}
