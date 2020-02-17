# simple todo app

[![Coverage Status](https://coveralls.io/repos/github/TimPrd/teaching_todo/badge.svg?branch=master)](https://coveralls.io/github/TimPrd/teaching_todo?branch=master)

[![CircleCI](https://circleci.com/gh/TimPrd/teaching_todo.svg?style=svg)](https://circleci.com/gh/TimPrd/teaching_todo)

## installation
requirements:
- [node](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm)
- [mongodb](https://docs.mongodb.com/manual/administration/install-community/)

install required nodejs modules with `npm install`

start mongodb `systemctl start mongod`

## running the app
start with `npm start`

env config:
- `PORT=4000`
- `DB=mongodb://localhost/todo`
