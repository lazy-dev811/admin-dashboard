import React, { PropTypes } from 'react';

import './Greet.scss';

class Greet extends React.Component {
  componentDidMount() {
    // this.props.getWeather();
  }

  render() {
    return (
      <div className="greet">
        <h1 className="greet__title">
          Hi {this.props.person.name}
        </h1>
        <div>
          {this.props.date}
        </div>
        {
          this.props.weatherData &&
          <div className="weather">
            <div className="weather__average">
              {this.props.weatherData.temperature}&#xb0;
            </div>

            <this.props.weatherData.icon />

            <ul className="weather__details">
              <li className="weather__details__item">Wind
                <span className="weather__details__item__detail">{this.props.weatherData.windSpeed}</span>
              </li>
            </ul>
          </div>
        }
      </div>
    );
  }
}

Greet.propTypes = {
  person: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
  weatherData: PropTypes.object,
  // getWeather: PropTypes.func,
};

export default Greet;
