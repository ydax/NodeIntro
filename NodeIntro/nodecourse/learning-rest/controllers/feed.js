const { validationResult } = require('express-validator/check')

exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: [{
            _id: '1',
            title: 'first post',
            content: 'this is my first post!',
            imageUrl: 'images/duck.jpg',
            creator: {
                name: 'Davis'
            },
            createdAt: new Date()
        }]
    });
};

exports.createPost = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422)
            .json({
                message: 'Validation failed. Entered data is incorrect.',
                errors: errors.array()
            });
    }
    // extracts data we expect to come with the request
    const title = req.body.title;
    const content = req.body.content;
    // console.log(title, content)
    //create a post in the DB
    res.status(201).json({
        message: 'this post was created successfully',
        post: {
            _id: new Date().toISOString(),
            title: title,
            content: content,
            creator: { name: 'Davis' },
            createdAt: new Date()
        }
    });
};