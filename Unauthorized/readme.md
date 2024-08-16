
# **UnAuthorized**

You've found yourself a job a kitty-corp managing the log-in proccess. Someone decided that to obscure user information on log in; the passwords would be scrambled. Perhaps this isn't the best approach but it's better than the passwords being sent through plain as day. Your job it to find the right user if there is one and return it.

Given a username and a scrambled password, match it with the correct user from the given array and return that `user object`. If none of the users are found, return `null` instead.

```javascript
let users = [
  {username: 'Mack', password: 'CrocT0wnUS@'},
  {username: 'Lake', password: 'xY07$_:"word1248'},
  ...
  ]
```

**example Output:**

with and input of `Mack` and `CrocT0wnUs@` =>
```javascript
{username: 'Mack', password: 'CrocT0wnUS@'}
```
should be returned