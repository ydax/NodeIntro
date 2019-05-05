const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!')
        }, 1500);
    });
    return promise;
};

setTimeout(() => {
    console.log('Timer is done!');
    fetchData().then(text => {
        console.log(text);
    })
}, 2000);

console.log('Hello!');

const car = {
    name: 'Dartanyan',
    make: 'Honda'
}

const { name, make } = car;
// console.log(`Hi, my name is ${name} and I am a ${make}.`);

const carSpeak = number => {
    let test = number;
    let promise = new Promise((resolve, reject) => {
        if (test > 2) {
            resolve(console.log(`Hi, my name is ${name} and I am a ${make}.`))
        } else {
            reject(console.log(`Sorry, ${number} is less than 2, so ${name} won't speak to you!`))
        };
    });
    return promise;
}

let makeCarTalk = async (number) => {
    try {
        await carSpeak(number);  
    } catch (error) {
        console.log(`Oops! Here's your error: ` + error);
    } 
}

makeCarTalk(1);