

export function selectBook(book) {
  return {
    type: 'SELECT_BOOK',
    payLoad: book,
  };
}

export const BOOKS_REQUESTED = 'BOOKS_REQUESTED';
export const booksRequested = (data) => {
  return {
    type: BOOKS_REQUESTED,
    books: data,
  };
};

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const FETCH_WEATHER_FAILED = 'FETCH_WEATHER_FAILED';
export const FETCH_WEATHER_SUCCEEDED = 'FETCH_WEATHER_SUCCEEDED';
export const FETCH_WEATHER_REQUESTED = 'FETCH_WEATHER_REQUESTED';

export const fetchWeatherRequested = () => ({
  type: FETCH_WEATHER_REQUESTED,
});

export const fetchWeatherSucceeded = (data) => {
  console.log('success');
  return {
    type: FETCH_WEATHER_SUCCEEDED,
    data,
  };
};

export const fetchWeatherFailed = (data) => {
  console.log('failed', data);
  return {
    type: FETCH_WEATHER_FAILED,
    data,
  };
};
