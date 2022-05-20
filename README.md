# Vidster
A video saving, sharing, and playlisting web application by David Flores, Edward Cabral and Craig McGowan

![2021-11-30_17 36 08](https://user-images.githubusercontent.com/87156044/144139337-f4c85d00-9efb-4a3f-8be2-18370bc26b2b.png)

## Links
Deployed App: https://vidster.netlify.app/

Deployed Backend: https://playlist-backend1.herokuapp.com/playlist/

Frontend Github Repo: https://github.com/dflores23/playlist-frontend

Backend Github Repo: https://github.com/dflores23/playlist-backend

Team Trello Board: https://trello.com/b/2iCKm9Nj/playlist

Figma Planning Board: https://www.figma.com/file/WFQKqTVwkm94Qqhbx8fFNO/MyPlaylist



## User Stories
As a user, I can see my list of playlists.

As a user, I can click on one of the links in my playlist and have it direct me to that link.

As a user, I can add content to my playlist.

As a user, I can delete content from my playlist.

## Project Roles
**Release manager ( David)**- responsible for handling branches, keeping mastersafe, and resolving merge conflicts if the developers cannot resolve them.

**Product manager (Ed)**- responsible for prioritizing tasks so that the user gets the most out of the app -- this will usually be the originator of the project idea.

**Lead front-end dev ( Craig)**- responsible for breaking ties when the group has disagreements on front-end coding, and for designing a general plan for front-end development, e.g. file structure and state management

**Lead back-end dev ( David)**- responsible for breaking ties when the group has disagreements on back-end coding, and for designing a general plan for back-end development, e.g. file structure and schema definitions

# Project Process And Planning

## Team Planning Board - Trello
![2021-11-30_17 30 11](https://user-images.githubusercontent.com/87156044/144139499-e75180a8-c417-4f85-97b4-02dbe1cfb4ec.png)

The team used trello to create work tickets, manage workflows and divy up tasks. As we worked through the code and made changes on the fly or new work items became clear, we added them to the tickets list. As we worked on cards we moved them into our in progress lists and finally into the completed list. Larger tasks were broken up into checklists and important resources and links were added to the board for easy reference.


## App Wireframing and component tree - Figma
<img width="747" alt="2021-11-30_14 46 27" src="https://user-images.githubusercontent.com/87156044/144139948-f073a6d8-4856-489b-bee2-87b2fd49af91.png">

<img width="1008" alt="2021-11-30_14 45 32" src="https://user-images.githubusercontent.com/87156044/144139963-f394d8a9-f9f5-47ba-81bc-1c5dea9e5932.png">

<img width="1019" alt="2021-11-30_14 50 20" src="https://user-images.githubusercontent.com/87156044/144140166-307c8910-076b-4b52-b079-0b3a4da1c812.png">

Figma was used to wireframe the basic look of our app and map out our intended components and jot down notes. We found it an easy and intuitive way to plan out our app and start off on the same page with the core functionality

## Technologies Used

### React
### React Router 6
### Express
### MongoDB, Mongoose
### CSS
### Google Fonts, React Router Icons
### Youtube API
### Firebase (Pending)


## Challenges/Learning Experiences
Our goal from the start of the project was to approach this as a chance to challenge ourselves and learn collaboratively. We decided to use react router 6 which meant we spent a good amount of time googling how to do nested routes, incorporate new hooks like useNavigate, useParams, and get used to the new syntax. We also wanted to incorporate an API call so we researched the youTube API and figured out how to pull in data from search and then embed videos from the returned data as well as adding videos to our database from the API call. Our app was designed to be user based, meaning that you would log in and have personalized playlists that you made yourself. For an additional challenge we decided to use Firebase which would allow us to deliver a seamless and intuitive user system.

Learning all these new technologies and taking on the challenges meant that in the end, we may not have been able to add as much polish to the app as we wanted, and while in the end it was a great experience an argument could be made that due to the limited time window, we may have been better served using methods and technologies we were more experienced in.



## Planned Upgrades and Improvements
User Authentication and User Authorization

Share Playlists with other users

Additional styling

Playlist Cover Images

Song Playlists 
