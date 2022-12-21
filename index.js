const inquirer = require('inquirer')
const fs = require('fs')

    const questions = ({githubUsername, email, title, description, installation, usage, license, contributions, tests}) =>

    `# ${title}


## Description 
    
    ${description}

## Badges 

<img alt= "Git-License" src="https://img.shields.io/badge/license-${license}-green">

## Table Of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)


## Installation
    
    ${installation}
    
## Usage 
    
    ${usage}

## Contributions
    
    ${contributions}
    
## License
    
    The application is covered under the following license: ${license}
    
## Tests
    
    ${tests}
    
## Questions
    
[GitHub Page](https://github.com/${githubUsername})

Email Me @ ${email} with any questions! 

 `

inquirer
  .prompt([
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email',
    },
    {
        type: 'input',
        name: 'title',
        message: 'Title of program',
    },
    {
        type: 'input',
        name: 'description',
        message: `Describe application`,
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Instructions and examples for use'
    },
    {
        type: 'list',
        name: 'license',
        choices: [ "ISC", new inquirer.Separator(), "Apache License 2.0", new inquirer.Separator(), 'MIT License' ],
        message: 'What license does this application use'
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Guidelines for contribution'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Instructions for preforming tests'
    },
  ])

.then((data) => {
    const readmePage = questions(data)
    fs.writeFile('README.md', readmePage, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
    )
})



