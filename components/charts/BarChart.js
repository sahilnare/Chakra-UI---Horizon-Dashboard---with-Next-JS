
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
import { Component, Fragment } from "react";

class ColumnChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: [],
      chartOptions: {},
    };
  }

  componentDidMount() {
    this.setState({
      chartData: this.props.chartData,
      chartOptions: this.props.chartOptions,
    });
  }

  render() {
    return (
		<Fragment>
			{(typeof window !== 'undefined') &&
				<Chart
				options={this.state.chartOptions}
				series={this.state.chartData}
				type='bar'
				width='100%'
				height='100%'
				/>
			}
		</Fragment>
     
    );
  }
}

export default ColumnChart;
