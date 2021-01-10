import React, { Component } from 'react';
import classes from './ElevenIterationClass.module.css';

class ElevenIterationClass extends Component{
   state = {
       timer: 0,
       countTimer: true,
   }

   componentDidMount() {
        const localTimer = localStorage.getItem('timer');
        if(localTimer) {
            this.setState({
                timer: +localTimer,
            })
        }
   }

   componentDidUpdate() {
        localStorage.setItem('timer', this.state.timer)
   }

   componentWillUnmount() {
        clearInterval(this.timerID)
   }

   startTimer = () => {
       this.setState({countTimer: false})
       this.timerID = setInterval(() => {
           this.setState({
               timer: this.state.timer + 1,
           })
       }, 100)
   }

   stopTimer = () => {
       clearInterval(this.timerID)
       this.setState({
           countTimer: true
       })
   }

   resetTimer = () => {
       clearInterval(this.timerID)
       this.setState({
           timer: 0,
           countTimer: true,
       })
   }

    render() {
        return (
            <div>
                <div className={classes.ElevenIteration}>
                    <p>{ this.state.timer }</p>
                </div>
                <div className={classes.Buttons}>
                    { this.state.countTimer ?  <button onClick={this.startTimer}>Start</button> : <button onClick={this.stopTimer}>Stop</button>}
                    <button onClick={this.resetTimer}>Reset</button>
                </div>
            </div>
        )
    }
}

export default ElevenIterationClass
