<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Token

> In order to use some of the endpoints you will need first to login and use your own token

#### In Request headers add prop calls "token"

#### example:

```js
headers = {
  Authorization: 'Bearer yourOwnToken',
};
```

#### And then send this as header, something like this

```js
response = requests.get(url, { headers });
```

## API Endpoints
<h2>for signup: method => post</h2>
<a>http://localhost:3000/auth/signup </a>
<h2> body</h2>
<p>for example</p> 
{
"name":"bannan",
"email":"mahmoud@gmail.com", 
"password":"1234567"
}
<hr>
<h2>for login: method => get</h2>
<a>http://localhost:3000/auth/login </a>
<h2> body</h2>
<p>for example</p> 
{
"email":"mahmoud@gmail.com", 
"password":"1234567"
}
<hr>

<h2>get all books: method => get</h2>
<a>http://localhost:3000/book </a>
<hr>

<h2>for get book by id: method => get</h2>
<a>http://localhost:3000/book/65e85d1712bcdb74fdf10dff </a>
<h2> body</h2>
<p>for example</p> 
{
"email":"mahmoud@gmail.com", 
"password":"1234567"
}
<hr>



<h2>create new book: method => POST</h2>
<a>http://localhost:3000/book</a>
<h2> body</h2>
<p>for example</p> 
 {
  "title": "king 1",
  "description": "king bannan life ",
  "author": "mahmoud elbannan",
  "price": 5000,
  "category": "Adventure"
}

<hr>


<h2>update existing book: method => PATCH</h2>
<a>http://localhost:3000/book/65e85d1712bcdb74fdf10dff</a>
<h2> body</h2>
<p>for example</p> 
 {
  "title": "king 1",
  "description": "king bannan life ",
  "author": "mahmoud elbannan",
  "price": 5000,
  "category": "Adventure"
}
<hr>

<h2>
delete book: method => DELETE</h2>
<a>http://localhost:3000/book/65e85d1712bcdb74fdf10dff</a>
<h2> body</h2>
<p>for example</p> 
 {
  "title": "king 1",
  "description": "king bannan life ",
  "author": "mahmoud elbannan",
  "price": 5000,
  "category": "Adventure"
}
<hr>
