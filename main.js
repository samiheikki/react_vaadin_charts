// main.js
var chartsReact = require('./bower_components/vaadin-charts/directives/react');
var React = require('react');
var ReactDOM = require('react-dom');

var MyChart = React.createClass({
  getInitialState: function() {
    return {
      data1: [1,2,3,4,5],
      data2: [4, 6, 8, 10],
      data3: [
        ["Aerospace", 90.0],
        ["Medical", 53.6],
        ["Agriculture", 25.6],
        ["Automotive", 17.0],
        ["Consumers", 12.4],
        ["Subsidies", 1.4]
      ],
      inputNumber: ''
    };
  },
  chartLoaded: function(event) {
    console.log("loaded");
  },
  serieClick: function(event) {
    console.log("click");
  },
  pushNumber: function() {
    var newData1 = this.state.data1;
    newData1.push(parseInt(this.state.inputNumber));
    this.setState({data1: newData1});
    this.setState({inputNumber: ''});
  },
  handleinputNumberChange: function(event) {
    this.setState({inputNumber: event.target.value});
  },
  render: function() {
    return (
      <div><input type="number" placeholder="number" value={this.state.inputNumber} onChange={this.handleinputNumberChange}/><button onClick={this.pushNumber}>Push that number</button>
      <vaadin-line-chart on-chart-loaded={this.chartLoaded} on-series-click={this.serieClick}>
        <chart-title>Fibonacci4</chart-title>
        <x-axis><title>Index</title></x-axis>
        <y-axis><title>Value</title></y-axis>
        <data-series>
          <data>{this.state.data1.map(JSON.stringify).join(',')}</data>
        </data-series>
        <data-series data={this.state.data2}>
        </data-series>
      </vaadin-line-chart><vaadin-column-chart class="chart">
    <title>Browser market shares at a specific website, March 2015</title>
    <subtitle>Source: statcounter.com</subtitle>
    <x-axis type="category"></x-axis>
    <y-axis>
        <title>Total percent market share</title>
    </y-axis>
    <legend enabled="false"></legend>
    <plot-options>
        <series>
            <data-labels enabled="true" format="{point.y:.1f}%">
            </data-labels>
        </series>
    </plot-options>
    <data-series>
        <name>Vendors</name>
        <color-by-point>true</color-by-point>
        <data>
            <point>
                <name>Microsoft Internet Explorer</name>
                <y>56.33</y>
                <drilldown>Microsoft Internet Explorer</drilldown>
            </point>
            <point>
                <name>Chrome</name>
                <y>24.03</y>
                <drilldown>Chrome</drilldown>
            </point>
            <point>
                <name>Firefox</name>
                <y>10.38</y>
                <drilldown>Firefox</drilldown>
            </point>
            <point>
                <name>Safari</name>
                <y>4.77</y>
                <drilldown>Safari</drilldown>
            </point>
            <point>
                <name>Opera</name>
                <y>0.91</y>
                <drilldown>Opera</drilldown>
            </point>
            <point>
                <name>Proprietary or Undetectable</name>
                <y>0.2</y>
            </point>
        </data>
    </data-series>
    <data-series id="Microsoft Internet Explorer" drilldown="true">
        <name>Microsoft Internet Explorer</name>
        <data>
            [ "v11.0", 24.13 ], [ "v8.0", 17.2 ], [ "v9.0", 8.11 ], [ "v10.0", 5.33 ], [ "v6.0",
            1.06 ], [ "v7.0", 0.5 ]
        </data>
    </data-series>
    <data-series id="Chrome" drilldown="true">
        <name>Chrome</name>
        <data>
            [ "v40.0", 5 ], [ "v41.0", 4.32 ], [ "v42.0", 3.68 ], [ "v39.0", 2.96 ], [ "v36.0", 2.53
            ], [ "v43.0", 1.45 ], [ "v31.0", 1.24 ], [ "v35.0", 0.85 ], [ "v38.0", 0.6 ], [ "v32.0",
            0.55 ], [ "v37.0", 0.38 ], [ "v33.0", 0.19 ], [ "v34.0", 0.14 ], [ "v30.0",
            0.14 ]
        </data>
    </data-series>
    <data-series id="Firefox" drilldown="true">
        <name>Firefox</name>
        <data>
            [ "v35", 2.76 ], [ "v36", 2.32 ], [ "v37", 2.31 ], [ "v34", 1.27 ], [ "v38", 1.02 ], [
            "v31", 0.33 ], [ "v33", 0.22 ], [ "v32", 0.15 ]
        </data>
    </data-series>
    <data-series id="Safari" drilldown="true">
        <name>Safari</name>
        <data>
            [ "v8.0", 2.56 ], [ "v7.1", 0.77 ], [ "v5.1", 0.42 ], [ "v5.0", 0.3 ], [ "v6.1", 0.29 ],
            [ "v7.0", 0.26 ], [ "v6.2", 0.17 ]
        </data>
    </data-series>
    <data-series id="Opera" drilldown="true">
        <name>Opera</name>
        <data>
            [ "v12.x", 0.34 ], [ "v28", 0.24 ], [ "v27", 0.17 ], [ "v29", 0.16 ]
        </data>
    </data-series>
</vaadin-column-chart>
<vaadin-pie-chart id="pie-with-legend">
    <title>Revenue by industry</title>
    <subtitle>2015</subtitle>
    <tooltip point-format="<b>{point.percentage:.1f}%</b>">
    </tooltip>
    <plot-options>
      <pie allow-point-select="true" show-in-legend="true"
             cursor="pointer">
        <data-labels enabled="true"
             format="{point.name}: {point.y:.1f} M€">
        </data-labels>
      </pie>
    </plot-options>
    <data-series>
      <data>{this.state.data3.map(JSON.stringify).join(',')}</data>
    </data-series>
  </vaadin-pie-chart></div>

    );
  }
});



ReactDOM.render(
  <MyChart />,
  document.getElementById('example')
);
