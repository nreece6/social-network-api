# Social-Network-API


![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)



## Descritption

This social network API is a Node.js application that allows users to perform CRUD operations to interact with a NoSQL database built around a social netowrk data model system. This database includes friends, users, thoughts and reaction data models, with the ability to either retrieve all data of a particular model, or by the particular data's ID. 

This application was built to provide a simple social network database backend using Node.js and Mongoose.


## Table of Contents

  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Contributing](#contributing)
  4. [License](#license)
  5. [Tests](#tests)
  6. [Questions](#questions)
  

## Installation

To install this application, navigate to the repo on my github account https://github.com/nreece6/social-network-api. Clone the repo and open the folder location of the program in the terminal. You must have node installed in order to run the application. You must also use 

```
npm install
```

In your shell to install all necessary dependencies.

Once you have the repo location open in your terminal, run the program with 

```
npm start
 ``` 

The server will run locally. You can interact with the API endpoints using Insomnia.


## Usage

Once you have cloned the repo, installed the necessary dependencies, and started the server, use Insomnia to interact with the API endpoints at https://localhost:3001. The available endpoints are:

1. GET /api/users - get all users
2. GET /api/users/:userId - get a single user by ID
3. POST /api/users - create a new user
4. PUT /api/users/:userId - update a user by ID
5. DELETE /api/users/:userId - delete a user by ID
6. GET /api/thought - get all thought
7. GET /api/thought/:thoughtId - get a single thought by ID
8. POST /api/thought - create a new thought
9. PUT /api/thought/:thoughtId - update a thought by ID
10. DELETE /api/thought/:thoughtId - delete a thought by ID
11. POST /api/thought/:thoughtId/reactions - add a reaction to a thought
12. DELETE /api/thought/:thoughtId/reactions/:reactionId - remove a reaction from a thought
13. POST /api/users/:userId/friends/:friendId - add a friend to a user's friend list
14. DELETE /api/users/:userId/friends/:friendId - remove a friend from a user's friend list

Video example of usage available at:

https://drive.google.com/file/d/1K5ommYKuTY64MITOlvdvr4XmQ8wwWkgY/view

Run the program in the terminal using 
```
npm start
```


## Contributing

To contribute, clone this repo and push any changes.


## License

https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt

MIT License

Copyright (c) 2021 Othneil Drew

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Tests

N/A for this application

## Questions


For any questions, please view my github account:

https://github.com/nreece6

or you can reach me at:

reece.nick24@gmail.com