const logSomething = options => ({ ...options, anotherOption: 'HellO!' });

const options = logSomething({ one: 1, two: 2 });

console.log(options);
