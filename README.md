# favstarmy
=========

Some people on Twitter are cool, and some are awful. Awful people talk shit to cool people ALL THE TIME. Trouble is you don't follow awful people, so you don't see their @mentions. 

## How it works

We'll assume that all the people you're following are cool people, and all the people you've blocked/muted are awful. When you visit this site you'll see a list of Tweets made by people you follow to people you've blocked/muted. Simple as that.

## Todo
- Authenticate to Twitter API
- Create a recurrent task that performs the following steps
  - Fetch the list of cool people
  - Fetch the list awful people
  - Search for tweets from cool people to awful people, or vice versa
  - add those tweets to a collection
- embed collection
