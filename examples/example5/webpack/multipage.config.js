const path = require('path');

result = {}

result.entry = {
    'main': path.join(__dirname, '../src/main.js'),
    'articles': path.join(__dirname, '../src/articles.js'),
    'users': path.join(__dirname, '../src/users.js'),
}

result.pages = [
    { chunks: ['main'], page: 'index.html', template: path.join(__dirname, '../src/index.html'), },
    { chunks: ['users'], page: 'pages/users.html', template: path.join(__dirname, '../pages/users.html') },
    { chunks: ['articles'], page: 'pages/articles.html', template: path.join(__dirname, '../pages/articles.html') },
    { chunks: ['articles'], page: 'pages/articles/articles1.html', template: path.join(__dirname, '../pages/articles/articles1.html') },
    { chunks: ['articles'], page: 'pages/articles/articles2.html', template: path.join(__dirname, '../pages/articles/articles2.html') },
    { chunks: ['articles'], page: 'pages/articles/articles3.html', template: path.join(__dirname, '../pages/articles/articles3.html') },
    { chunks: ['articles'], page: 'pages/articles/articles4.html', template: path.join(__dirname, '../pages/articles/articles4.html') },
    { chunks: ['articles'], page: 'pages/articles/articles5.html', template: path.join(__dirname, '../pages/articles/articles5.html') },
]

module.exports = result;