import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Day from './Day'
import styled from 'styled-components';

const WeekWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

class Week extends Component {

  static propTypes = {
    date: PropTypes.object.isRequired,
    currentDate: PropTypes.object.isRequired
  }

  render() {
    let days = []
    let { date } = this.props;
    const { currentDate } = this.props;

    while (days.length < 7) {
      let inCurrentMonth = date.month() === currentDate.month()

      days.push(<Day key={date + days.length} day={ date } inCurrentMonth={ inCurrentMonth }/>)

      date = date.clone();
      date.add(1, "day");
    }
    return(
      <WeekWrapper>
        { days }
      </WeekWrapper>
    )
  }
}

export default Week
