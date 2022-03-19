<div id="top"></div>
<!-- PROJECT LOGO -->
<br />
<div align="center">
    <img src="https://i.imgur.com/3aYHwQa.jpg" alt="Logo" width="80" height="80">
  <h3 align="center">Observatorium: A space observatory and Internet forum</h3>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#authors">Authors</a></li>
    <li><a href="#demo">Demo</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Observatorium: A space observatory and Internet forum is our final project developed in Ironhack Madrid. 

We used the following APIs:

Four NASA API:
- Astronomy Picture of the Day 
- Earth Observatory Natural Event Tracker 
- Mars Rover Photos
- Mars Weather API via Curiosity Rover

Two API for map Integration:
- OpenLayers
- MapTiler

One SaaS API to upload our media assets:
- Cloudinary

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Bootstrap](https://getbootstrap.com)
* [Express](https://expressjs.com)
* [MongoDB](https://www.mongodb.com)
* [Mongoose](https://mongoosejs.com)
* [Node.js](https://nodejs.org)
* [React.js](https://reactjs.org)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ENDPOINTS -->
## Endpoints Summary
CLIENT:

| Routes    | URI path  		| Description          | Protected |
| --------- | ----------------- | -------------------- | --------- |
| Route    	| /  				| Home page            |           |
| Route    	| /items			| items page           |           |
| Route    	| /items/:id  		| item details page    |           |
| Route    	| /earth			| earth event          |    ✅     |
| Route    	| /mars  			| mars                 |    ✅     |
| Route    	| /mars/carousel  	| mars carousel        |    ✅     |
| Route    	| /mars/weather	 	| mars weather         |    ✅     |
| Route    	| /profile  		| profile: user, admin |    ✅     |
| Route    	| /profile/my-items | items:user,admin     |    ✅     |
| Route    	| /admin		    | panelAdmin           |    ✅     |
| Component | Error message     | errors management    |           |

SERVER:

| HTTP Method | URI path  		  	     | Description                | Protected | Role        | 
| ----------- | ------------------------ | -------------------------- | --------- | ----------- |
| GET	 	  | /items/getAllItems       | list of items    	      |	          | user, admin |
| GET	      | /items/getAllItems/:id   | item details 	          |	          | user, admin | 
| GET	      | CLOUDINARY               | item image   	          |	          | user, admin |
| POST	      | /auth/logout             | user logout   	          |	          | user, admin |
| POST	      | /items/create            | create items  	          |	   ✅     | user, admin |
| PUT	      | /user/:id                | update user 	              |	   ✅     | user, admin |
| GET	      | /user/:id/items          | user Id items 	          |	   ✅     | user, admin |
| POST	      | /auth/login              | login user, admin	      |	          | user, admin |
| POST	      | /auth/signup             | sign up user	              |	          | user, admin | 
| GET	      | /admin-panel             | users, items, rating	      |	   ✅     | admin       |
| DELETE      | /user/:id/delete         | delete user (role:admin)   |    ✅     | admin       |
| DELETE      | /items/:id/delete        | delete item (role:admin)   |    ✅     | admin       |
| DELETE      | /items/rating/:id/delete | delete rating (role:admin) |    ✅     | admin       |
| PUT		  | /items/:id/edit          | administration panel       |    ✅     | user, admin |


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

* Packages
  ```sh
  npm install bcryptjs express-session connect-mongo
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/ricardoronchetti/observatorium.git
   ```
2. Install NPM packages in Client and Server folder
   ```sh
   npm install
   ```
3. In the Server folder 
   ```sh
   npm run dev
   ```
5. In the Client folder
   ```js
   npm start
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- DEMO -->
## Demo

A live [Demo](https://observatorium-ironhack.netlify.app/) is available.

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

André Documet - [LinkedIn](https://linkedin.com/in/andre-documet)<br />
Ricardo Ronchetti - [LinkedIn](https://linkedin.com/in/ricardoronchetti)<br />
Roberto Cadenas - [LinkedIn](https://linkedin.com/in/robertocadenas)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Guillermo Concepción - Ironhack's Teacher Assistant & our Product Owner

<p align="right">(<a href="#top">back to top</a>)</p>