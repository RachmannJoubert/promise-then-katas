// DO NOT EDIT THIS FILE

const {
    returnPromise,
    returnTen,
    returnString,
    returnBob,
    returnList,
    anError,
    theNumberOfTheBeast,
    internalServerError,
    happySad,
    amIYourFather,
    myNameIs
} = require("../src/promise-katas-1");
const { expect } = require("chai");

describe('returnPromise', () => {
    xit('returns a promise', (done) => {
        returnPromise()
            .then(() => done())
            .catch(() => done(new Error('The promise is expected to resolve')));
    });
});

describe('returnTen', () => {
    xit('returns a promise that resolves to 10', (done) => {
        returnTen()
            .then(value => {
                expect(value).to.equal(10);
                done();
            })
            .catch(() => done(new Error('The promise is expected to resolve with 10!')));
    });
});

describe('returnString', () => {
    xit("returns a promise that resolves to 'string'", (done) => {
        returnString()
            .then(value => {
                expect(value).to.equal('string');
                done();
            })
            .catch(() => done(new Error("The promise is expected to resolve with 'string'!")));
    });
});

describe('returnBob', () => {
    xit("returns a promise that resolves to { name: 'Bob' }", (done) => {
        returnBob()
            .then(value => {
                expect(value).to.deep.equal({ name: 'Bob' });
                done();
            })
            .catch(() => done(new Error("The promise is expected to resolve with { name: 'Bob' }!")));
    });
});

describe('returnList', () => {
    xit("returns a promise that resolves to ['eggs', 'apples', 'milk', 'bread']", (done) => {
        returnList()
            .then(value => {
                expect(value).to.deep.equal(['eggs', 'apples', 'milk', 'bread']);
                done();
            })
            .catch(() => done(new Error("The promise is expected to resolve with ['eggs', 'apples', 'milk', 'bread']!")));
    });
});

describe('anError', () => {
    xit('returns a promise that returns "An error occurred" when it rejects', (done) => {
        anError()
            .catch(value => {
                expect(value).to.equal("An error occurred");
                done();
            });
    })
});

describe('theNumberOfTheBeast', () => {
    xit('returns a promise that returns 666 when it rejects', (done) => {
        theNumberOfTheBeast()
            .catch(value => {
                expect(value).to.equal(666);
                done();
            });
    })
});

describe('internalServerError', () => {
    xit('returns a promise that returns { error: 500 } when it rejects', (done) => {
        internalServerError()
            .catch(value => {
                expect(value).to.deep.equal({ error: 500 });
                done();
            });
    })
});

describe('happySad', () => {
    xit('returns a promise that returns "happy" when x > 1', (done) => {
        happySad(2)
            .then(value => {
                expect(value).to.equal("happy");
                done();
            })
            .catch(() => done(new Error('The promise is expected to resolve with happy!')));
    })
    xit('returns a promise that returns "sad" when x < 1', (done) => {
        happySad(0)
            .catch(value => {
                expect(value).to.equal("sad");
                done();
            });
    })
});

describe('amIYourFather', () => {
    xit('returns a promise that returns "Yes. Luke, I am your father." when the passed parameter === "Luke"', (done) => {
        amIYourFather("Luke")
            .then(value => {
                expect(value).to.equal("Yes. Luke, I am your father.");
                done();
            })
            .catch(() => done(new Error('The promise is expected to resolve with "Yes. Luke, I am your father."!')));
    })
    xit('returns a promise that returns "Not your dad." when the passed parameter !== "Luke"', (done) => {
        amIYourFather("something else")
            .catch(value => {
                expect(value).to.equal("Not your dad.");
                done();
            });
    })
    xit('returns a promise that returns "Not your dad." when the passed parameter !== "Luke"', (done) => {
        amIYourFather(0)
            .catch(value => {
                expect(value).to.equal("Not your dad.");
                done();
            });
    })
});

describe('myNameIs', () => {
    xit('returns a promise that returns "My name is Romy" when it resolves', (done) => {
        const name = "Romy";
        myNameIs()
            .then(value => {
                expect(typeof value).to.equal("function");
                expect(value(name)).to.equal("My name is Romy");
                done();
            })
            .catch(() => done(new Error('The promise is expected to resolve with a function that returns "My name is Romy"!')));
    })
});
