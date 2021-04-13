const sequelize = require('../config/connection');

const User = require('../models/User');
const Post = require('../models/Post');


const userData = require('./userData.json');
const postData = require('./postData.json');


// Add the `async` keyword to the function `seedDatabase` to make Asynchronous.
const seedDatabase = async () => {

    // Add the `await` keyword infront of the expressions inside the `async` function.
    await sequelize.sync({ force: true });

    // Once JavaScript recogonizes the `await` keyword it waits for the promise to be fufilled before moving on.
    const user = await User.bulkCreate(userData);
    const post = await Post.bulkCreate(postData);



    process.exit(0);
};

seedDatabase();