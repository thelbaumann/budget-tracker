# Budget Tracker Application [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
### MongoDB + IDB + Mongoose + PWA
This is progressive web application built for my fullstack coding bootcamp. The frontend code as well as the routing was given to me, and I was tasked with building the database information, as well as the service worker. This application tracks the spending and paychecks of it's user, and is able to be offline, where it will store any additions until it regains internet connection. The deployed project can be found [here](https://tranquil-island-13864.herokuapp.com/).

## Table of Contents

[Assignment Details & Acceptance Criteria](#assignment-details--acceptance-criteria) 

[Installing/Dependencies](#installingdependencies)  

[Usage Information](#usage-information)

[Walkthrough](#walkthrough)  

[Contributing to this project](#contributing-to-this-project)  

[Questions?](#questions)  

[License](#license)

## Assignment Details & Acceptance Criteria
### Assignment Details
I was given the following user story to guide my development:

```AS AN avid traveller I WANT to be able to track my withdrawals and deposits with or without a data/internet connection SO THAT my account balance is accurate when I am traveling```

### Acceptance Criteria

Add functionality to our existing Budget Tracker application to allow for offline access and functionality.

The user will be able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online.

Offline Functionality:

    -Enter deposits offline

    -Enter expenses offline

When brought back online:

    -Offline entries should be added to tracker.


## Installing/Dependencies
```npm i express```
```npm i compression```
```npm i mySQL```
```npm i lite-server```
```npm i mongoose```
```npm i morgan```

## Usage Information
Clone this project, install the required dependencies, and run 'npm run start' in your terminal.

Or, alternatively, visit the deployed version of the finished project on Heroku [here](https://tranquil-island-13864.herokuapp.com/).

## Walkthrough

When the user hits the homepage, they are displayed with a visual graph and table of the previously recorded paychecks and transactions for the budget. The user can enter a name, as well as an amount, and then submit it using either the positive or negative transaction button. These submissions can still be made even if the user is online, as it is stored locally until the internet connection is restablished, at which point it is pushed to the main database. The information will hold upon refreshes and different devices for this reason!

![Gif Walkthrough of Application](https://media.giphy.com/media/FcG2YHm3v1a14J9ExO/giphy.gif).

## Contributing to this project
Pull requests are welcome! Find my contact information below to reach out about collaborating with me.

## Questions?
[Laura Baumann](https://github.com/thelbaumann) -- You can reach me anytime for questions or collaboration at l.bmann@yahoo.com.
## License
This project is licensed under [MIT](LICENSE) - 2020 Laura Baumann
