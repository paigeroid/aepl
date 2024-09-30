addPreChore() adds a new pre chore making it so you can use without creating an instance
```js
const Class = require('aepl');

let data = [1, 2, 3];


new Class("Main", class {});


Main.addPreChore("reverse", `return data.reverse();`);


console.log(Main.reverse()); // [3, 2, 1]
```

<br>

> ## Class.addPreChore()
> description: adds a new pre chore making it so you can use without creating an instance<br>
> calls:
> - addPreChore()
> - setPreChore()
> - newPreChore()