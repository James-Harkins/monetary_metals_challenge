let objectsList = [
    {
        a: 1,
        b: [1, 2, 3],
        c: "test",
        d: {
            a: 3,
            b: "test",
            c: {
                a: [1, 2, 3],
                b: [3, 2, 1],
                c: 57,
                d: {
                    a: 'test'
                }
            },
        },
    },
    {
        a: 5,
        b: [4, 5, 6],
        c: "testing",
        d: {
            a: 9,
            b: "tester",
            c: {
                a: [4, 5, 6],
                b: [6, 5, 4],
                c: 43,
                d: {
                    a: 'test again'
                }
            },
        },
    },
    {
        a: 10,
        b: [7, 8, 9],
        c: "tested",
        d: {
            a: 15,
            b: "testerer",
            c: {
                a: [7, 8, 9],
                b: [9, 8, 7],
                c: 1000,
                d: {
                    a: 'test again again'
                }
            },
        },
    },
];

let actions = {
    a: "add",
    b: "prepend",
    c: "concatenate",
    d: {
        a: "add",
        b: "concatenate",
        c: {
            a: "prepend",
            b: "append",
            c: "add",
            d: {
                a: "concatenate"
            }
        }
    },
};

let testResult1 = {
    a: 16,
    b: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    c: "testtestingtested",
    d: {
        a: 27,
        b: "testtestertesterer"
    }
}

function generateInitialValues(actions) {
    let initialValues = {};

    for (const key in actions) {
        initialValues[key] = determineInitialValue(actions[key]);
    }

    return initialValues;
}

function determineInitialValue(action) {
    if (typeof action === "object") return generateInitialValues(action);
    else {
        switch (action) {
            case "add":
                return 0;
            case "append":
                return new Array();
            case "prepend":
                return new Array();
            case "concatenate":
                return "";
        }
    }
}

function updateArrayValue(result, object, action) {
    let current = Array.from(result);
    
    for (let j = 0; j < object.length; j++) {
        if (action == 'append') current.push(object[j]);
        else if (action == 'prepend') current.unshift(object[j])
    }
    
    return current.filter(function (char) {
        return char !== ',';
    })
}

function updateResultsForObject(results, object, actions) {
    for (const key in results) {
        if (typeof actions[key] === 'object') updateResultsForObject(results[key], object[key], actions[key]);
        else {
            switch (actions[key]) {
                case "add":
                    results[key] += object[key];
                    break;
                case "append":
                    results[key] = updateArrayValue(results[key], object[key], actions[key])
                    break;
                case "prepend":
                    results[key] = updateArrayValue(results[key], object[key], actions[key])
                    break;
                case "concatenate":
                    results[key] += object[key];
                    break;
            }
        }
    }
}

function operateOnObjectsList(objectsList, actions) {
    let results = generateInitialValues(actions);

    for (let i = 0; i < objectsList.length; i++) {
        updateResultsForObject(results, objectsList[i], actions)
    }
 
    return results;
}

const result = (operateOnObjectsList(objectsList, actions))

console.log(result)
console.log(result['d']['c']['b'])
console.log(result['d']['c']['d']['a'])