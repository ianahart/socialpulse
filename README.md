# SocialPulse

![Node.js](https://camo.githubusercontent.com/85cba226a1290d078f1a437aa87cb872a5bdb30037fa96b8afcddf163cd5b328/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d4e6f64652e6a7326636f6c6f723d333339393333266c6f676f3d4e6f64652e6a73266c6f676f436f6c6f723d464646464646266c6162656c3d)
![Express.js](https://camo.githubusercontent.com/dd688eaaa262ca0022a159962f55bfd35cababef5df983fb2b3c136e62256b5e/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d4578707265737326636f6c6f723d303030303030266c6f676f3d45787072657373266c6f676f436f6c6f723d464646464646266c6162656c3d)
![MongoDB](https://camo.githubusercontent.com/57336fa2867efa094d65d48d3122413cf1aca60e77c77ebad92705a98d29f249/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d4d6f6e676f444226636f6c6f723d343741323438266c6f676f3d4d6f6e676f4442266c6f676f436f6c6f723d464646464646266c6162656c3d)
![Mongoose](https://camo.githubusercontent.com/526fab277c42e1279d7d5e9b8aa9e959c07e7e58acdf64878127eff498863366/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d4d6f6e676f6f736526636f6c6f723d383830303030266c6f676f3d4d6f6e676f6f7365266c6f676f436f6c6f723d464646464646266c6162656c3d)

## Built With

- Node.js
- NOSQL
- Express
- MongoDB
- Mongoose

## Description

SocialPulse is a REST API for a fictional social network. This web application offers users the ability to share their thoughts, react to friends's thoughts and make friends. The technology behind it consists of Express.js for the web framework, MongoDB for the database layer, and Mongoose for the ODM. Additionally, I used fakerjs to populate seed data, and dayjs to format timestamps.

## Table of Contents

- [SocialPulse](#socialpulse)
  - [Built With](#built-with)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Users](#users)
    - [Thoughts](#thoughts)
  - [Visuals](#visuals)
  - [Tests](#tests)
  - [Credits](#credits)
  - [References](#references)
  - [License](#license)
  - [Contributing](#contributing)
  - [Badges](#badges)
  - [Questions](#questions)

## Installation

- Download MongoDB at [MongoDB](https://www.mongodb.com/) if not already installed.
- Download Node.js at [Node.js](https://nodejs.org/en) if not already installed. You can check if it is installed by typing `node-v` in your command line.
- Fork the repo to make a copy.
- Next, clone the project using `git clone https://github.com/ianahart/socialpulse.git`.
- Make sure MongoDB is running, commands will be different depending on your OS.
- To install dependencies, make sure you're in the root of the project and run `npm install`.
- In a terminal window run the command `npm run seed` to seed the database with dummy data.

## Usage

---

### Users

| Route                                    | Method | Description                            |
| ---------------------------------------- | ------ | -------------------------------------- |
| `/api/users/`                            | GET    | Retrieve all users.                    |
| `/api/users/{userId}`                    | GET    | Retrieve a specific user by ID.        |
| `/api/users/`                            | POST   | Create a new user.                     |
| `/api/users/{userId}`                    | PUT    | Update an existing user.               |
| `/api/users/{userId}`                    | DELETE | Delete a user and associated thoughts. |
| `/api/users/{userId}/friends/{friendId}` | POST   | Create a friendship between two users. |
| `/api/users/{userId}/friends/{friendId}` | DELETE | Delete a friendship between two users. |

### Thoughts

| Route                                              | Method | Description                        |
| -------------------------------------------------- | ------ | ---------------------------------- |
| `/api/thoughts/`                                   | GET    | Retrieve all thoughts.             |
| `/api/thoughts/{thoughtId}`                        | GET    | Retrieve a specific thought by ID. |
| `/api/thoughts/`                                   | POST   | Create a new thought.              |
| `/api/thoughts/{thoughtId}`                        | PUT    | Update an existing thought.        |
| `/api/thoughts/{thoughtId}`                        | DELETE | Delete a thought.                  |
| `/api/thoughts/{thoughtId}/reactions/{reactionId}` | POST   | Add a reaction to a thought.       |
| `/api/thoughts/{thoughtId}/reactions/{reactionId}` | DELETE | Remove a reaction from a thought.  |

---

## Visuals

<div>
  <video src="https://github.com/ianahart/socialpulse/assets/29121238/9a24f019-b94e-4b89-b538-829d314a229d" width="650" controls type="video/mp4" />
</div>

## Tests

N/A

## Credits

N/A

## References

[Fakerjs](https://fakerjs.dev/)
[Dayjs](https://day.js.org/)

## License

This project is covered under MIT License

<details>
  <summary>
    License Text
  </summary>

```

Copyright (c) 2024  Ian Hart

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

```

</details>

## Contributing

No contributions are being accepted at this time.

## Badges

[![GitHub license](https://img.shields.io/github/license/ianahart/socialpulse)](https://github.com/ianahart/socialpulse/blob/main/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/ianahart/socialpulse)](https://github.com/ianahart/socialpulse/issues)
[![GitHub stars](https://img.shields.io/github/stars/ianahart/socialpulse)](https://github.com/ianahart/socialpulse/stargazers)

## Questions

- Get in touch with me through [email](mailto:ianalexhart@gmail.com).
- Check out my GitHub [profile](https://github.com/ianahart).
