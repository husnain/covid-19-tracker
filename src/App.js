import React from 'react';
import styles from './App.module.css';
import {Cards, Chart, CountryPicker} from './components';
import { fetchData } from './api';
import { Divider } from '@material-ui/core';
import image from './images/covid-19-corona-virus-logo.jpg';

class App extends React.Component {

  state = {
    data: {},
    country: '',
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({data: fetchedData});
    // console.log(data);
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    console.log(country);
    this.setState({ data:fetchedData, country: country });
  };

  render(){
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Divider />
        <Cards data={data}/>
        <Divider />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Divider />
        <Chart data={data} country= { country }/>
      </div>
    );
  }
}


export default App;
