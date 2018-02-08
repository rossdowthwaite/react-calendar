import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import moment from 'moment'
import DayTitles from './DayTitles'
import SelectMonth from './SelectMonth'
import SelectYear from './SelectYear'
import Week from './Week'
import styled from 'styled-components';

const CalendarWrapper = styled.div`
  width: 60%;
  min-width: 430px;
  margin: auto;
  background-color: #E5E8E8;
  border: Solid 4px #FFF;
  margin-top: 50px;
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #E5E8E8;
  box-sizing: border-box;
  border: Solid 1px white;
`

const SelectionWrapper = styled.div`
  padding: 20px;
  display: flex;
`
const Navigation = styled.div`
  padding: 20px 20px 14px 20px;
  cursor: pointer;
  font-size: 25px;
`;

class Calendar extends Component {
  state = {
    currentDate: moment()
  }

  componentWillMount() {
    const url = this.props.match.url
    const currentDate = url === '/' ? moment() : moment().month( url.substr(1) )

    this.setState( () => ({
      currentDate,
    }))

    this.updateURL( currentDate )
  }


  handleMonthSelect = (evt) => {
    console.log(evt.target);
    const { currentDate } = this.state
    const newDate = currentDate.clone().month(evt.target.value)

    this.setState({
      currentDate: newDate,
    })

    this.updateURL( newDate )
  }

  handleYearSelect = (evt) => {
    const { currentDate } = this.state
    const newDate = currentDate.clone().year(evt.target.value)

    this.setState({
      currentDate: newDate,
    })
  }

  next = () => {
    const { currentDate } = this.state
    const newDate = currentDate.clone().add(1,'month')

    this.setState({
      currentDate: newDate
    })
    this.updateURL( currentDate )
  }

  previous = () => {
    const { currentDate } = this.state
    const newDate = currentDate.clone().subtract(1,'month')

    this.setState({
      currentDate: newDate
    })
    this.updateURL( currentDate )
  }

  updateURL = ( date ) => {
    this.props.history.push('/' + date.format('MMMM'))
  }

  renderWeeks() {
    const { currentDate } = this.state
    let completeMonth = false;
    let weeks = [];
    let weekStart = currentDate.clone().startOf("month").add("week" -1).day("Sunday");
    let nextMonth = currentDate.clone().add(1, "month").month()

    while(!completeMonth) {
      weeks.push(<Week key={ weekStart } date={ weekStart.clone() } currentDate={ currentDate } />)
      weekStart.add(1, 'week');

      const currentMonth = weekStart.month()
      completeMonth = currentMonth === nextMonth
    }

    return weeks;
  }

  render() {
    const { currentDate } = this.state
    return (
      <CalendarWrapper>
        <CalendarHeader>
          <Navigation className="icon-chevron-left" onClick={this.previous} />
          <SelectionWrapper>
            <SelectMonth onChange={ this.handleMonthSelect } currentMonth={ currentDate } />
            <SelectYear onChange={ this.handleYearSelect } currentYear={ currentDate } />
          </SelectionWrapper>
          <Navigation className="icon-chevron-right" onClick={this.next} />
        </CalendarHeader>
        <DayTitles />
        { this.renderWeeks() }
      </CalendarWrapper>
    )
  }
}

export default withRouter(Calendar)
