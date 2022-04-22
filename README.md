# Vote for your favorite dog!

<p>App that allows users to vote for their favorite dog breed. Each user can only vote once and votes are tracked in real time (updated without refreshing the page). Users must be logged in to voting and are placed in a timeout until they can vote again.</p>

## How it's made:

- EJS
- CSS
- JS
- Express
- MongoDB
- Mongoose
- Socket.io
- Moment
- auth0

## Reflections and Lessons Learned:

<p>This was a really neat exercise in using a new (to me) tech in Socket.io. </p> 
<p>Socket was extremely easy to use, and the documentation was very straight-forward which was helpful in getting the application running. </p>
<p>Likewise Moment is very straight forward and very helpful when it comes to formatting, adding and subtracting dates</p>
<p>auth0 was very intuitive and a much easier way to implement users than I am accustomed to. However, I found that integrating it with MongoDB was somewhat messy. Especially, when it came to adding new fields to our user objects in the collection.</p>
<p>My biggest challenge was quite unexpected, which was making a timer that worked and persisted on the front end and was synced up with the back end. </p>

## Optimizations

<p> Styling is very bare-bones and needs updating </p>
<p> User profile customization to come </p>

## Errors and bugs

<p> If something is behaving weirdly or unexpectedly, it is a bug! Please report it <a href="https://github.com/MagicMarcos/ExpressVoting/issues">here</a>.</p>

## Running locally

- Create a .env file
- Add relevant strings to it - PORT, DB_String, auth string...
- use `npm install` to install dependencies
- use `npm run start` or `npm run devStart` for nodemon
