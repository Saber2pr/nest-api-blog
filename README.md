# nest-api-blog

> api for saber2pr.top

[Api Document](./docs/api.md)

## From Docker

```bash
docker pull saber2pr/nest-api-blog:tag
docker run -d -p 3000:3000 -it saber2pr/nest-api-blog:tag
```

## Env

```sh
# -e host=localhost -e port=3306 -e username=root -e password=root -e database=nest_api_hello
host=localhost
port=3306
username=root
password=root
database=nest_api_hello
```

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```