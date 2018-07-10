import axios from 'axios'

const ROOT_URL = 'http://localhost:9000/';

export const FETCH_EVENTS = 'FETCH_EVENTS';

export function fetchEvents() {
  const url = `${ROOT_URL}events`;
  const request = axios.get(url);
  console.log(request);
  return {
    type: FETCH_EVENTS,
    payload: request
  };
}