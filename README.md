# WEATHER APP

#### install

`npm i`

#### run locally

Currently the weather api has CORS issue. Disabling cors on fetch requests does
not allow to modify `Content-Type` header, which, by default is `text/plain`
and we need `application/json` so the workaround could be running network call
through proxy.
For this case run locally [cors-everywhere](https://github.com/nyancodeid/cors-everywhere/).

`npm start`

#### test

`npm test`
