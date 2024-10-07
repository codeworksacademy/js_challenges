# King of Pong 🏓

> *It's time once again for the King of Pong singles tournament to take place. Who will be victorious?*

## Instructions

### King of Pong 🏆

You will start out with nothing... nothing but a *url* to `fetch` your data. Once you have the data, you will need to look through the array and return the `playerName` of the *player* that has the most `wins`.

Once the data is `fetched`, you will get back an *array* of data that follow the following example.

```js
  {
    playerName: "Yubi🧘",
    wins: 10,
    losses: 5,
    ties: 1,
    penalties: 0,
    id: 1
  }
```

### King of Virtue 🏅

As a secondary award to the winner of the tournament, an award of virtue is also given to the best performing player who showed the most sportsmanship.

Like the last one, you will start out with nothing but a *url* to `fetch` your data. It's the same *url* and the same data you will be working with. However this time, you will need to look through the array and return the `playerName` of the *player* that has the most `wins` and `0` penalties.


### fetch

For this challenge you will need to utilize the `fetch` api. A built in way to request resources, including resources across the web. In it's simplest form, which we will be using in this challenge, `fetch` can be used to read data from a resource not local to your machine. It can be used to fetch just about anything, but today we will used it to access an **API**, and read data about our ping pong players.

[MDN fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

### Async & Await

If we are going to use `fetch` we need to establish our code as *asynchronous* `async`. This tells JavaScript to not run line by line as fast as possible any more, but that it might *wait* on a particular line before moving to the next. This *wait* period is based off another built in class of JavaScript called a `Promise`.

All of this is necessary because when we involve resources not local to our machine, the *time* it takes to access that data is not consistent, sometimes more that `500ms`. To us that is half a second, to a computer this is a *reeeeeeeealy* long time, so it is required we tell our code to *wait* that whole time. This wait period is what we typically the cause load times.

So lets see an example.

```js
function fetchCars(){ // no async
  const response = fetch("sandbox.codeworksacademy.com/api/cars") // no await
  console.log('fetch cars',response)
}
```
If we run this code. We won't actually get any data about cars, we won't even get a `response`, we will get a `Promise<pending>` back. Our code basically said *"I will ask, I **promise** to return with their response"*. However if we don't wait for them to comeback, we are left with nothing but that empty promise.

So what should it look like?

```js
async function fetchCars(){ // async in front of functions
  const response = await fetch("sandbox.codeworksacademy.com/api/cars") // await before fetch
  console.log('fetch cars',response)
}
```

Now when our code *asks* that url for data, it will *wait* for the `fetch` to get it an bring it back. To us it probably won't feel any different because even a few hundred milliseconds is still under a second, but it's very important our code *waits* for that `response` before moving to the next line.

### response

Now we have a response, but where is the data you talked about?
The `response` contains lots of important information that, right now, we don't actually care about. Things like `code` and `status` tell use how the `fetch` went, there are many many more properties that at this point look alien. 

We want `data`, stuff we can iterate over, access properties of. All of that `data` is in the `body`, property of the `response` however it's format is a `ReadableStream` of data, or a bunch of `bytes` that actually aren't too readable by us. So we actually need to *parse* this data out into a format we can work with. There are a few options we can use.

```js
  const response = await fetch("sandbox.codeworksacademy.com/api/cars")
  const text = await response.text() // parses the body as plain text
  const bytes = await response.blob() // parses the body as blob of Bytes
  const json = await response.json() // parses the body into JavaScript Object Notation
```

> ⚠️ *it's important to know that this is just an example, normally the body can only be parsed one time*

Most of the time, we will want use the `.json()` as this will parse the body into a format that our code can read, like *objects* or *arrays*.

```js
  const response = await fetch("sandbox.codeworksacademy.com/api/cars")
  const data = await response.json()
  console.log('data', data) // => [{...}, {...}, {...}]
```
Now you have `data` or something your JavaScript app can work with.

> 🗝️ Something to know about *APIs* is that they are all different, they response with different data in different formats. While they might follow certain patterns you should always **log** the `data` of the `response`, and inspect it to know what you are working with.

[MDN Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

[MDN async await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

## Skills

Both `async & await` and `fetch` are key topics of our *unit 4* curriculum. Being able to interact with an *API* is necessary for modern web developers, not to mention how really extends our ability to build cool apps.


## Solutions

The first step of both of these problems is to get the data from the *API*, so that we can iterate through it. Use the `kopUrl` (king of pong Url), inside the fetch.

```js
async function kingOfPong() {
  const response = await fetch(kopUrl)
  const data = await response.json()
  console.log('data', data)
}
```
### King of Pong 🏆

For King of Pong we want to look through the array of player data that comes back, and find the highest scoring player. We can create a variable `winner` outside of a loop, to have an initial player for our loop to compare against.

Then on each iteration we will, check and see if the current `player` in the loop has a higher count of `wins` than the `winner` on the outside of the loop. If they do, then that `player` becomes the `winner`. 

This `winner` will change anytime the loop encounters a `player` with a higher number of `wins` than the current `winner`. So by the end of the loop, `winner` will in fact be our champion. So all we need to do is **return** the `playerName` of `winner`.

```js
async function kingOfPong() {
  const response = await fetch(kopUrl)
  const data = await response.json()
  console.log('data', data)

  let winner = data[0]
  data.forEach(player => {
    if (player.wins > winner.wins) {
      winner = player
    }
  })
  return winner.playerName
}
```
### King of Virtue 🏅

For the solution to this challenge, it will actually be very similar however we can actually just add in one quick little line, a line that will skip any `player` that has a `penalties`.

```js
async function kingOfVirtue() {
  const response = await fetch(kopUrl)
  const data = await response.json()
  console.log('data', data)

  let winner = data[0]
  data.forEach(player => {

    if(player.penalties) return  // ++

    if (player.wins > winner.wins) {
      winner = player
    }
  })
  return winner.playerName
}
```

Before we make the comparison, we can check that `player.penalties` if true we can **return**. This **return** won't actually end `the kingOfVirtue` function, because it is inside of a `forEach`. This **return** will end the inner function in the `forEach`, skipping to the next player.
```js
player => {
    if(player.penalties) return  // <-- skips to the next player in forEach
    if (player.wins > winner.wins) {
      winner = player
    }
  }
```

If you were working with a `for` loop, you can instead use the **continue** key word.

```js
for(let i = 0; i < data.length; i++){
  const player = data[i]
  if(player.penalties) continue // <-- skips to the next iteration in for loop
   if (player.wins > winner.wins) {
      winner = player
    }
}
```