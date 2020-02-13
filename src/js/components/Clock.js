import React from 'react';
import './../../scss/clock.scss';

//gets current time and changes html to reflect it
function time() {
  let date = new Date(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds();

  //make clock a 12 hour clock instead of 24 hour clock
  hours = hours > 12 ? hours - 12 : hours;
  hours = hours === 0 ? 12 : hours;

  //invokes function to make sure number has at least two digits
  hours = addZero(hours);
  minutes = addZero(minutes);
  seconds = addZero(seconds);

  //changes the html to match results
  document.getElementsByClassName('hours')[0].innerHTML = hours;
  document.getElementsByClassName('minutes')[0].innerHTML = minutes;
  document.getElementsByClassName('seconds')[0].innerHTML = seconds;
}

//turns single digit numbers to two digit numbers by placing a zero in front
function addZero(val) {
  return val <= 9 ? '0' + val : val;
}

//lights up either am or pm on clock
function ampm() {
  let date = new Date(),
    hours = date.getHours(),
    am = document.getElementsByClassName('am')[0].classList,
    pm = document.getElementsByClassName('pm')[0].classList;

  hours >= 12 ? pm.add('light-on') : am.add('light-on');
  hours >= 12 ? am.remove('light-on') : pm.remove('light-on');
}

//lights up what day of the week it is
function whatDay() {
  let date = new Date(),
    currentDay = date.getDay(),
    days = document.getElementsByClassName('day');

  //iterates through all divs with a class of "day"
  for (let x in days) {
    //list of classes in current div
    let classArr = days[x].classList;

    classArr !== undefined &&
      (x == currentDay
        ? classArr.add('light-on')
        : classArr.remove('light-on'));
  }
}

class Clock extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    time();
    ampm();
    whatDay();

    setInterval(function() {
      time();
      ampm();
      whatDay();
    }, 1000);
  }

  render() {
    return (
      <div className="main">
        <div className="days">
          <div className="day">
            <p className="monday">monday</p>
          </div>

          <div className="day">
            <p className="tuesday">tuesday</p>
          </div>

          <div className="day">
            <p className="wednesday">wednesday</p>
          </div>

          <div className="day">
            <p className="thursday">thursday</p>
          </div>

          <div className="day">
            <p className="friday">friday</p>
          </div>

          <div className="day">
            <p className="saturday">saturday</p>
          </div>

          <div className="day">
            <p className="sunday">sunday</p>
          </div>
        </div>
        <div className="clock">
          <div className="numbers">
            <p className="hours"></p>

            <p className="placeholder">88</p>
          </div>

          <div className="colon">
            <p>:</p>
          </div>

          <div className="numbers">
            <p className="minutes"></p>

            <p className="placeholder">88</p>
          </div>

          <div className="colon">
            <p>:</p>
          </div>

          <div className="numbers">
            <p className="seconds"></p>

            <p className="placeholder">88</p>
          </div>

          <div className="am-pm">
            <div>
              <p className="am">am</p>
            </div>

            <div>
              <p className="pm">pm</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { Clock };
