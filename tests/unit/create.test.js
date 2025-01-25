// const jest = require('jest');
const createItem = require('../../src/server/controllers/createController');

test('creates a new item in the db', async() => {
    const testItem = {
        item: 'create test item in db',
        category: 'unit test',
        user: 'testAdmin',
        priority: 777
    };

    try {
        const createRes = await request(app).post('http://localhost:3000/create').send(testItem);
        expect(createRes).toBe('Got the create POST request');
    }  catch (err) {
        // write test for failure here
        console.log(`Error ${err}`)
    }

})