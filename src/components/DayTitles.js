import React from 'react'
import styled from 'styled-components';

const DayTitlesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #2471A3;
`;

const DayTitle = styled.span`
  text-align: center;
  color: #FFF;
  flex-grow: 1;
  flex-basis: 0;
  padding: 10px;
  min-width: 60px;
  box-sizing: border-box;
  border: Solid 1px white;
`;

export default function DayTitles (props) {
  const days = ['SUN','MON','TUE', 'WED', 'THU', 'FRI', 'SAT']
  return (
    <DayTitlesWrapper>
      {
        days.map( (day) => (
          <DayTitle key={day}>{day}</DayTitle>
        ))
      }
    </DayTitlesWrapper>
  )
}
