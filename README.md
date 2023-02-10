# upscale - API

This project was bootstrapped with [API UPSCALE](https://github.com/hektahendrapriana/upscale).

> **copy to .env**

*   NODE_ENV="development"
*   PORT=9000
*   JWT_SECRET="7D6425FAC26477182B78C8F2F39CE"
*   JWT_EXPIRATION_IN_MINUTES=1440
*   MONGO_URI=""mongodb://127.0.0.1:27017/upscale"
*   FRONTEND_URL=http://localhost:3000
*   BECKEND_URL=http://localhost:9000/upscale
*   USE_REDIS=true
*   REDIS_HOST=127.0.0.1
*   REDIS_PORT=6379


## Available Scripts

In the project directory, you can run for development:

### `npm run dev`

Runs the app in the development mode.\

### `npm start`

Runs the app in the production mode with compability pm2.\


Open [http://localhost:9000/upscale/tasks](http://localhost:9000/upscale/tasks) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Parameters

### `filter and fields`
This parameters can be use for search data.
filter : keywords you want to search
fields : name of field(s) you want to search (array fields separate by comma)

example : http://localhost:9000/upscale/tasks?filter=membuat&fields=judul

### `sort and order`
This parameters can be use for sorting results.
sort : name of field
order : 1 for asc and -1 for desc

example : http://localhost:9000/upscale/tasks?filter=membuat&fields=judul&sort=judul&order=1

### `page and limit`
This parameters can be use for limit and pagination.
limit : number of limit (format Number)
page : page you want to select (format Number)

example : http://localhost:9000/upscale/tasks?filter=membuat&fields=judul&sort=judul&order=1&limit=100&page=1


### `COLLECTIONS`
Collections MongoDB on folder collections DB

Collections POSTMAN on folder POSTMAN COLLECTIONS
