import React, { PropTypes } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const Chart = ({ data, type, units, svgWidth, svgHeight, color }) => {
  const average = Math.round(data.reduce((prev, current) => (prev + current), 0) / data.length);

  return (
    <div>
      <Sparklines data={data} svgWidth={svgWidth} svgHeight={svgHeight}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type={type} />
      </Sparklines>
      average: {`${average} ${units}`}
    </div>
  );
};

Chart.propTypes = {
  data: PropTypes.array.isRequired,
  type: PropTypes.string,
  units: PropTypes.string.isRequired,
  svgWidth: PropTypes.number,
  svgHeight: PropTypes.number,
  color: PropTypes.string,
};

Chart.defaultProps = {
  type: 'avg',
  svgWidth: 180,
  svgHeight: 120,
};

export default Chart;
