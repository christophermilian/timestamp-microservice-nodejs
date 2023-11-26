## Description

A Node.js timestamp microservice that returns a unix and utc timestamp.

## Available Endpoints

1. **GET**: `http://localhost:3000/`
  - App example page. 
2. **GET**: `http://localhost:3000/api/:date?`
  - Get the timestamp where date can equal:
    - undefined
    - 2023-05-10
    - 1701039296038

## Examples
1. `http://localhost:49580/api/2023-10-06`
  ```
  { "unix": 1696550400000, "utc": "Fri, 06 Oct 2023 00:00:00 GMT" }
  ```

2. `http://localhost:49580/api/1703462400000`
  ```
  { "unix":1703462400000, "utc": "Mon, 25 Dec 2023 00:00:00 GMT" }
  ```

3. `http://localhost:49580/api/`
  ```
  { "unix": 1701039296038, "utc": "Sun, 26 Nov 2023 22:54:56 GMT" }
  ```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start
```

## License
[MIT licensed](LICENSE)
