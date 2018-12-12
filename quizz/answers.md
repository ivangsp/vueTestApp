# solutions to the Questions

## Qn. 5 

### i Will the above code return an error

- The  code will not return an errror but will not work as expected.

### ii.  Possible Fix

- The reason it does not work, its because  `this` in  the map  function is bound to the context of the function `teamSummary` which does not have variable `teamName`.

- This can be fixed by using the arrow function inside the map function. In arrow function  `this` is  lexically bound meaning it uses the `this` from the code that contains arrow function.

```js
const team = {
    members:['Superman','Batman','Wonder Woman'],
    teamName: 'Justice league',
    teamSummary: function(){
    return this.members.map((member) => {
    return `${member} is on team ${this.teamName}`;
    });
    }
   };
   team.teamSummary()  
```

- This can also be fixed by using the `bind` key word

 ```js
  const team = {
    members:['Superman','Batman','Wonder Woman'],
    teamName: 'Justice league',
    teamSummary: function(){
    return this.members.map(function(member){
    return `${member} is on team ${this.teamName}`;
    }.bind(this));
    }
   };
   team.teamSummary();

 ```
