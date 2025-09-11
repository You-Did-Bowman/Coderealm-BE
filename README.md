# Final Project: Backend

## About The Project

Coderealm-BE is the backend service for the Coderealm platform — a gamified learning environment for web development.

Coderealm is an educational role-playing platform designed to teach web development in an engaging, game-like environment.
It combines the features of:
- Role-Playing: Players progress through levels and quests.
- Learning Platform: Structured lessons with theory and practice.
- Forum: A space to ask questions and collaborate.
- AI Assistance: Smart hints and code feedback to support learning.
- Challenges & Hackathons: Competitive coding and team-based problem solving.

This repository provides the API endpoints, business logic, and data handling required by the frontend.

### Live Demo
Check out the live version of Coderealm <a href="https://coderealm-e7af.onrender.com/"> here </a>.
<br><br>
**Disclaimer:** It may take some time for the backend to load if Coderealm has not been visited for a long time. Therefore, it will take a while to load when you log in for the first time. 

<p align="right">(<a href="#">back to top</a>)</p>


## Built With

- **Node.js** <br>
A JavaScript runtime environment that allows you to run JavaScript code on the server side, ideal for building scalable backend applications.
- **AWS Aurora** <br>
A managed relational database service from Amazon Web Services, compatible with MySQL and PostgreSQL, designed for high performance and scalability.
- **AWS S3**
A cloud storage service used to store and retrieve files, such as images, documents, or backups. In our case mainly images. 
- **Express.js** <br>
A minimal and flexible Node.js web application framework for building APIs and handling HTTP requests.
- **MySQL** <br>
A popular open-source relational database management system for structured data storage and querying.
- **Cors** <br>
A mechanism that allows a backend server to specify which origins are permitted to access its resources via browsers.
- **dotenv** <br>
A library that loads environment variables from a .env file into process.env, keeping sensitive data (like API keys) out of the codebase.
- **Google Authenticator** <br>
A two-factor authentication (2FA) method that generates time-based one-time passwords (TOTPs) for secure user logins.
- **jsonwebtoken** <br>
A standard for securely transmitting information between parties as a JSON object, commonly used for authentication and authorization.
- **nodemailer** <br>
A Node.js library for sending emails, often used for notifications, password resets, or confirmations.

<p align="right">(<a href="#">back to top</a>)</p>

## Project Structure
**controllers/**
<br>
Contains the business logic for handling API requests (e.g., user, authentication, courses).

**data/**
<br>
This is where data records are stored that are transferred to the database. These are fixed data such as teaching units, badges or hackathons.

**evaluators/**
<br>
Logic for evaluating code submissions by users. This currently happens mainly in the courses. 

**middlewares/**
<br>
Logic that mainly revolves around user authentication and validation.

**routers/**
<br>
Defines API endpoints and connects them to controllers.

**utils/**
<br>
Utility/helper functions (e.g., connection to database, formatters, parsers).

**.env.example**
<br>
Example configuration file with required environment variables (PORT, keys, etc.).

**server.js**
<br>
Application entry point. Initializes Express, middleware, and routes.

<p align="right">(<a href="#">back to top</a>)</p>

<!-- ROADMAP -->
<!-- ## Roadmap


<p align="right">(<a href="#readme-top">back to top</a>)</p>
-->


<!-- CONTACT -->
## Contact

Ahmad Al Sayed
<br>
Mail: -
<br><br>
Avdyl Zekaj
<br>
Mail: -
<br><br>
Divya Sheen
<br>
Mail: divyam.sheen@gmail.com
<br><br>
Judith Bohmann
<br>
Mail: ju.bohmann@gmx.de
<br><br>
Repo-Link: <a href="https://github.com/You-Did-Bowman/Coderealm-BE">github.com/You-Did-Bowman/Coderealm-BE</a>

<p align="right">(<a href="#">back to top</a>)</p>