
const Circle = require('../circle.js');


describe('Circle', () => {
    it('should return logo with circle shape as per user choice', () => {
        const circle = new Circle('LK', 'green', 'red');
        expect(circle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <circle cx="150" cy="100" r="100" fill="red" /> <text x="150" y="125" font-size="70" text-anchor="middle" fill="green">LK</text></svg>`
        );
    });
});

