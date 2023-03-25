<p align="center">
    A basic backend built with NestJS that could be used for testing.
    <br>
</p>

## 📝 Table of Contents

- [📝 Table of Contents](#-table-of-contents)
- [🏁 Getting Started ](#-getting-started-)
- [🎈 Usage ](#-usage-)
  - [Installation](#installation)
  - [Running the app](#running-the-app)
  - [API Documentation](#api-documentation)
- [🚀 Deployment ](#-deployment-)
- [⛏️ Built Using ](#️-built-using-)
- [✍️ Authors ](#️-authors-)
- [🎉 Acknowledgements ](#-acknowledgements-)
- [License](#license)


## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

## 🎈 Usage <a name="usage"></a>

### Installation

```bash
pnpm install
```

### Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

### API Documentation

This project is using Swagger UI to document the API. please run the server and visit `http://localhost:3000/api#/`  
if you're using postman or insomnia http clients, you could import the testable collection from [this URL](https://gist.githubusercontent.com/AymKh/0c007052ce22188a9779ba323f956019/raw/1279c59ba2916af0174faa5cec65b44751c29a3c/API_COLLECTION.json) or use the locally available file [API_COLLECTION](API_COLLECTION.json)

## 🚀 Deployment <a name = "deployment"></a>

To deploy this project please follow these steps:  

- build the project using `pnpm run build`
- Deploy to server  
Or you could use a pipeline.

## ⛏️ Built Using <a name = "built_using"></a>

- [MySQL](https://www.mysql.com/) - Database
- [NestJS](https://nestjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>

- [@AymKh](https://github.com/aymkh)  

See also the list of [contributors](https://github.com/AymKh/video-thingy-backend/contributors) who participated in this project.

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- README tempalte from [The-Documentation-Compendium](https://github.com/kylelobo/The-Documentation-Compendium)  

## License

Nest is [MIT licensed](LICENSE).
