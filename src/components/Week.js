import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Day from './Day'

class Week extends Component {
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
      <div className="calendar__week">
        { days }
      </div>
    )
  }
}

Week.propTypes = {
  date: PropTypes.object.isRequired,
  currentDate: PropTypes.object.isRequired
}

export default Week
