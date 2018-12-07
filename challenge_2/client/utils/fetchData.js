import instance from './axios/coindesk';

export default function fetchData(startDate, endDate) {
  let getData;
  if (startDate.length !== 0 && endDate.length !== 0) {
    getData = instance.request({
      params: {
        start: startDate,
        end: endDate,
      },
    });
  } else {
    getData = instance.request();
  }
  return getData;
}
