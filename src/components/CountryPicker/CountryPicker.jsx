import React, {useState, useEffect} from 'react';
import { InputLabel ,makeStyles ,Select,NativeSelect, FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

const CountryPicker = ({handleCountryChange}) => {

    const classes = useStyles();
    const [fetchedCountries, setFetchedCountries] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }
        
        fetchAPI();
    },[setFetchedCountries])
    return (
        <FormControl className={styles.formControl}>
            <InputLabel htmlFor="age-native-simple">Country</InputLabel>
            <Select native defaultValue="" onChange={(e)=> handleCountryChange(e.target.value)}> 
                <option value=""></option>
                    {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option> )}
            </Select>
        </FormControl>
    )
}

export default CountryPicker;