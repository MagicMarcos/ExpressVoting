# Vote for your favorite dog!

<p>App that allows users to vote for their favorite dog breed. Each user can only vote once and votes are tracked in real time (updated without refreshing the page). </p>

## How it's made:

- EJS
- CSS
- JS
- Express
- MongoDB
- Mongoose

## Reflections and Lessons Learned:

<p>This was a really neat exercise in using a new (to me) tech in firebase. It was extremely easy to use, and the documentation was very straight-forward which was helpful in getting the application running. </p>

## Optimizations

<p> As it stands, local storage is used to track which users have voted. This is of course a huge flaw! So future implementations we can look into fixing this issue. We can do this by adding authorization and tracking users and their votes. </p>

## Errors and bugs

<p> If something is behaving weirdly or unexpectedly, it is a bug! Please report it <a href="https://github.com/MagicMarcos/firebaseVoting/issues">here</a>.</p>

## Running locally

- Create a firebase account
- Create a file called firebaseConfig.js and add your config variables to that page and export them as firebaseConfig
