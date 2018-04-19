import React, { Component } from 'react';
import './App.css'


class Clock extends Component {
    constructor(props){
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }

    componentWillMount(nextProps){
        this.getTimeUntil(this.props.deadline)
    }

    componentDidMount(){
        setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
    }

    timeStamp(num){
        return num < 10 ? '0' + num : num;
        // if(num < 10){
        //     return '0' + num;
        // }
        // return num;
    }
    getTimeUntil = (deadline) => {
        const time = Date.parse(deadline) - Date.parse(new Date());

        const seconds = Math.floor((time/(1000))%60);
        const minutes = Math.floor((time/(1000/60))%60);
        const hours = Math.floor(time/(1000*60*60)% 24)
        const days = Math.floor(time/(1000*60*60*24));

        this.setState({
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        })
    }
    render() {
        return (
            <div>
                <div className="Clock-days">{this.timeStamp(this.state.days)} days</div>
                <div className="Clock-hours">{this.timeStamp(this.state.hours)} hours</div>
                <div className="Clock-minutes">{this.timeStamp(this.state.minutes)} minutes</div>
                <div className="Clock-seconds">{this.timeStamp(this.state.seconds)} seconds</div>
            </div>
        )
    }
}

export default Clock