import axios from 'axios';
import transformToTimeSeries from '../transformToTimeSeries';

const instance = axios.create({
  baseURL: 'https://api.coindesk.com/v1/bpi/historical/close.json',
  transformResponse: (data) => {
    // convert string to JSON
    const json = JSON.parse(data);
    // add transformed timeseries to JSON object
    const timeSeries = transformToTimeSeries(json.bpi);
    // return to client
    return timeSeries;
  },
});

export default instance;
