import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import DayTitles from './DayTitles'
import SelectMonth from './SelectMonth'
import SelectYear from './SelectYear'
import Week from './Week'
import moment from 'moment'

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
      <section className="calendar">
        <header className="calendar__header  border">
          <i className="navigation icon-chevron-left" onClick={this.previous} />
          <div className="select-wrapper">
            <SelectMonth onChange={ this.handleMonthSelect } currentMonth={ currentDate } />
            <SelectYear onChange={ this.handleYearSelect } currentYear={ currentDate } />
          </div>
          <i className="navigation icon-chevron-right" onClick={this.next} />
        </header>
        <DayTitles />
        { this.renderWeeks() }
      </section>
    )
  }
}

export default withRouter(Calendar)
