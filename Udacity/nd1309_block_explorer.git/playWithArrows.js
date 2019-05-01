/*
function add(x) { 
    console.log(x + 2);
}
add(2);

var addArrows = x => console.log(x + 2)
addArrows(2);

var addArrows2 = (x, y) => console.log(x + y)
addArrows2(3, 5);
*/

/*
function Counter() {
    this.num = 0;
    this.timer = function (add () {
        this.num++;
        console.log(this.num);
    }, 1000);
}
var a = new Counter();
*/

/* 
var doStuff = (x, y, z) => console.log((x + y) / z)
doStuff (4, 18, 6)
*/

/*
let isSelfish = new Promise(function (resolve, reject) {
    let notSelfish = true;
    if (notSelfish) {
        resolve("not selfish");
} else {
        reject("selfish");
    }
  });

isSelfish.then(function (fromResolve) {
    console.log("They are " + fromResolve + ".");
}).catch(function (fromReject) {
    console.log("They are " + fromReject + ".");
})
*/

var goFishing = function () {
    return new Promise(function (resolve) {
        let temp = 80;
        if (temp > 65) {
            resolve('The weather looked good, so I went fishing. ');
        }
    });
};

var catchFish = function (message) {
    return new Promise(function (resolve) {
        let gotSomething = true;
        if (gotSomething) {
            resolve(message + 'I got something, so ');
        }
    });
};

var supper = function (message) {
    return new Promise(function (resolve) {
        resolve(message + 'we had some tasty fish for dinner.')
    });
};

goFishing().then(function (result) {
    return catchFish(result);
}).then(function (result) {
    return supper(result);
}).then(function (result) {
    console.log(result);
}).catch(console.log('Fishing did not work out today.'))



