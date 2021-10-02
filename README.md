# Stand Up Notes

A tool to capture and present notes for engineering standups.

## Context

I'm a software engineer first and foremost. This implies that I have my daily
engineering scrum duties (attending standup to give updates, attending sprint
planning to share estimation for the tasks and capability, discuss blockers for
me as I'm executing the tasks ... etc.). As I attended these ceremonies, I found
a few opportunities to make my life more fun :D Namely, I'd love to improve:
1. Template (what you did yesterday, what you do today and what are blockers)
2. Time (a countdown timer for each person to share update)
3. Automate (capture information from git/Jira)
4. Presentation (slides over looking at tickets without focus)

## Built with

### Front End
- [React.js](https://reactjs.org/)

### Back End
- [Serverless Stack](https://docs.serverless-stack.com/)
- [AWS DynamoDB](https://aws.amazon.com/dynamodb/)

## Getting Started

### Prerequisites
0. (Optional) Have an AWS Account
1. Install [Node.js](https://nodejs.org/en/)

### Installation
0. Clone the repository
1. `yarn` to install dependencies
2. Copy `.env.example` to `.env` and replace configurations
3. `yarn start` to start the app locally
4. Check http://localhost:3000 to see app running

## Roadmap
- [ ] Implement basic starter code to run hello world front end
- [ ] Implement basic starter code to run hello world back end
- [ ] Implement basic GitHub authentication/authorization strategy
- [ ] Implement basic markdown slide render
- [ ] Implement basic storage for slides (separate by day and the author)
- [ ] Implement basic counter for slide presentation

## Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See LICENSE.txt for more information.
