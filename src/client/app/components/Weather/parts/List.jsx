import React, { PropTypes } from 'react';

import Chart from './Chart.jsx';

const List = ({ weatherList }) => {
  const renderWeather = (cityData) => {
    const cityName = cityData.city.name;
    const cityTemperatureList = cityData.list.map(data => data.main.temp);
    const cityPressureList = cityData.list.map(data => data.main.pressure);
    const cityHumidityList = cityData.list.map(data => data.main.humidity);

    return (
      <tr key={cityName}>
        <td>
          {cityName}
        </td>
        <td>
          <Chart data={cityTemperatureList} units="K" color="red" />
        </td>
        <td>
          <Chart data={cityPressureList} units="hPa" color="green" />
        </td>
        <td>
          <Chart data={cityHumidityList} units="%" color="blue" />
        </td>
      </tr>
    );
  };

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>City</th>
          <th>Temperature</th>
          <th>Pressure</th>
          <th>Humidity</th>
        </tr>
      </thead>
      <tbody>
        {
          weatherList &&
          weatherList.map(renderWeather)
        }
      </tbody>
    </table>
  );
};

List.propTypes = {
  weatherList: PropTypes.array.isRequired,
};

export default List;
