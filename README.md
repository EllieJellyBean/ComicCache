## Comic Cache

### Table of Contents
* [Description](#description)
* [Setup](#setup)
* [Running Tests](#runningtests)
* [Technologies](#technologies)
* [Authors](#authors)


### Description
Love comics but can't think of which one to get next? Behold, Comic Cache! Comic Cache is a bestseller comic application, where users can see the top 10 comics each week from the New York Times Bestseller API. Users can add a comic to a reading list, or purchase a comic via an external link. This application also utilizes PWA technology - download the Comic Cache app to your phone and enjoy the benefits of a native app, but with the added PWA benefit of operating offline! 🤯


### Main Page
![](https://media.giphy.com/media/5oM2TAZ5GqjZLLDqsn/giphy.gif)

### Comic Details 
![](https://media.giphy.com/media/SyfdSP6STzNl1LMsuU/giphy.gif)

### Reading List
![](https://media.giphy.com/media/hDNxf2LPTcMh6dM5b5/giphy.gif)

### Mobile
![](https://media.giphy.com/media/PVH6j3qlFMr9l3lhuQ/giphy.gif)

### Accessibility Audit
<img width="414" alt="Screen Shot 2021-06-07 at 6 55 18 PM" src="https://user-images.githubusercontent.com/76269802/121105786-ffd9a000-c7c1-11eb-91be-44767e66b993.png">

### Setup
* From your terminal, clone this repository
`git clone https://github.com/EllieAzaveda/ComicCache.git`  
* `cd` into the project directory
* Run `$npm install` to install dependencies
* Run `$npm start`
* Your default browser should automatically open Comic Cache

OR

* View deployed application [here](https://comic-cache.herokuapp.com)

### Running Tests
* Once in project directory, run `npx cypress open` 
* In the `integration` directory, click on the file you'd like to see the testing for. 
* A Cypress window should open
* Open dev tools in the Cypress window 
* Go to the Application tab, and check 'Bypass for network' under Service Worker 
* Re-run tests  

### Technologies
<p>
  <img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>

  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"/>

  <img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>

  <img alt="HTML5" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/>

  <img alt="CSS3" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>

  <img alt="Cypress.io" src="https://camo.githubusercontent.com/bd9c528263673db09f67bcf3445ba8e5512cfb6829e966a31ef7a378933b231a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d437970726573732e696f2d626c61636b3f7374796c653d666f722d7468652d6261646765266c6f676f3d637970726573732e696f266c6f676f436f6c6f723d7768697465"/>
</p>

### Authors
<table>
    <tr>
        <td> Ellie Azaveda <a href="https://github.com/EllieAzaveda">GH</td>
        <td> Matt Craig <a href="https://github.com/mcraig2342">GH</td>
        <td> Michann Stoner <a href="https://github.com/michannstoner">GH</td>
    </tr>
    </tr>
        <td><img src="https://avatars.githubusercontent.com/u/76409536?v=4" alt="E. Azaveda" width="125" height="auto" /></td>
        <td><img src="https://avatars.githubusercontent.com/u/75296592?v=4" alt="M. Craig" width="125" height="auto" /></td>
        <td><img src="https://avatars.githubusercontent.com/u/76269802?v=4" alt="M. Stoner" width="125" height="auto" /></td>
    </tr>
</table>


### Reflections

#### Evolution of the Project & Joint Reflection
As a team, we started the project by spending some time solo studying Progressive Web Apps and how to implement them in a React project. We started creating the project as a team, using a driver/navigator style. Once we made some progress setting up the PWA, we split off and built out the React components, functionality, Cypress tests, and styling. We had daily check ins to manage the workload and decide how to distribute tasks. Most of the research we had done informed us that backloading the full implementation of the PWA is a better process, however we felt that in doing this we weren't prepared for the amount of time it takes to create a fully functional service worker. 

#### Wins 
Matt: I was excited to work on responsive design, because in previous projects this was more of a challenge, or the opportunity hadn't presented itself in group settings. I also enjoyed getting more practice with conditional rendering.
Ellie: I was glad that I had the opportunity to navigate the errors with our PWA implementation. I feel like I learned a lot from looking into the error messages. I'm also happy to have had more practice with React.
Michann: I'm pretty proud of us for working together so well, staying calm when things weren't going as smoothly as anticipated, and for teaching ourselves a new technology in a short amount of time. 

#### Challenges
We all feel that understanding how and when the service worker communicates and interacts with the rest of the application was pretty challenging. We ran into quite a few issues with caching, and getting the service worker registered to begin with. We also felt that the documentation for PWAs (more specifically, service workers) was a little inconsistent, which made troubleshooting complicated at times. 

