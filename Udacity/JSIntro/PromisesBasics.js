new Promise(function (resolve[, reject]) {
    var value = doSomething();
    if (thingWorked) {
        resolve(value);
    } else if (somethingWentWrong) {
        reject();
    }
}).then(function (value) {
    //success
    return nextThing(value);
}).catch(rejectFunction);