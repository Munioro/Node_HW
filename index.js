const inquirer = require('inquirer');
const axios = require('axios');
const generateHTML = require('./generateHTML');

const questions = [
    {
        type: 'input',
        name: 'Github',
        message: 'Enter GIthub Usename'
    },
    {
        type: 'list',
        name: 'color',
        message: 'What is your favorite color',
        choices: ['green', 'blue', 'pink', 'red']
    }

];

function writeToFile(fileName, data) {

}

function init() {
    inquirer.prompt(questions).then(({Github, color}) => {
        console.log('searching');
        axios.get(`https://api.github.com/users/${Github}`)
        .then((res) => {
            console.log('user found');
            generateHTML(res,color)
        })
        .catch(() => {console.log('user not found')})
    })
    }

init();

