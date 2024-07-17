# Hello Bill and KC! 

## Thank you again for the opportunity to interview today for the position at Monetary Metals.

To take a look at the results, please feel free to clone down this repo and run `node index.js` from the command line, assuming that you have Node installed. 

This will return the full `results` object. You will see that some of the values appear generic at this level, so I have included some additional log statements at the end of `index.js` (lines 157 and 158) to print these values specifically.

It was a pleasure meeting with you both and I look forward to hearing from you soon! Please feel free to contact me with any additional questions in the meantime. 

### Problem:

Design a function that takes two arguments:

1. `ObjectsList`: List of objects

```
[
    {
        a: 1,
        b: [1, 2, 3],
        c: "test",
        d: {
            a: 1,
            b: "test"
        }
    },
    {
        a: 5,
        b: [4, 5, 6],
        c: "test",
        d: {
            a: 1,
            b: "test"
        }
    },
    {
        a: 10,
        b: [7, 8, 9],
        c: "test",
        d: {
            a: 1,
            b: "test"
        }
    }
]
```
    
2. `Actions`: object of actions
       
```
{
    a: "add",
    b: "prepend",
    c: "concatenate"
    d: {
        a: "add",
        b: "concatenate"
    }
}
```

Return an object with the same keys, the values for which
are all of the values for that key operated upon by the
action listed for that key in the actions object.
 
Ex:

```
{
    a: 16,
    b: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    c: "testtesttest",
    d: {
        a: 3,
        b: "testtesttest"
    }
}
```
