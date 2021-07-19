import React, { Component } from "react";

class CountdownClock extends Component {
  state = {
    deadline: "July, 20, 2021",
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0",
    movie: null,
    API_URL: "https://api.themoviedb.org/3/",
    API_KEY: "405186b5458e6a03edaf4627d2589da0",
  };

  getTimeCountdown(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      console.log("Date passed");
      clearInterval(this.timerID);
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));

      this.setState({
        days,
        hours,
        minutes,
        seconds,
      });
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.getTimeCountdown(this.state.deadline),
      1000
    );
    const api = `${this.state.API_URL}movie/popular?api_key=${this.state.API_KEY}&language=en-US&page=1`;
    fetch(api)
      .then((result) => result.json())
      .then((result) => console.log(result));
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div className="countdown_wrapper">
        <div className="countdown_top">Countdown to {this.state.deadline}</div>
        <div className="countdown_bottom">
          <div className="countdown_item">
            <div className="countdown_time">{this.state.days}</div>
            <div className="countdown_tag"> Days</div>
          </div>

          <div className="countdown_item">
            <div className="countdown_time">{this.state.hours}</div>
            <div className="countdown_tag"> Hours</div>
          </div>

          <div className="countdown_item">
            <div className="countdown_time">{this.state.minutes}</div>
            <div className="countdown_tag"> Mins</div>
          </div>

          <div className="countdown_item">
            <div className="countdown_time">{this.state.seconds}</div>
            <div className="countdown_tag"> Secs</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CountdownClock;
