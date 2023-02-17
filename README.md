<!-- <img src="https://github.com/RocketChat/Rocket.Chat.Artwork/raw/master/Logos/2020/png/logo-horizontal-red.png" data-canonical-src="https://github.com/RocketChat/Rocket.Chat.Artwork/raw/master/Logos/2020/png/logo-horizontal-red.png" width="500" /> -->

<!-- <h1 align="center">
  The ultimate Free Open Source Solution for team communications.
</h1> -->
<!-- 
[Rocket.Chat](https://rocket.chat) is an open-source fully customizable communications platform developed in JavaScript for organizations with high standards of data protection.

We are a MERN based application enabling real-time conversations between colleagues, with other companies or with your customers, regardless of how they connect with you. The result is an increase in productivity and customer satisfaction rates.

Every day, tens of millions of users in over 150 countries and in organizations such as Deutsche Bahn, The US Navy, and Credit Suisse trust [Rocket.Chat](https://rocket.chat) to keep their communications completely private and secure.

- [Review product documentation](https://docs.rocket.chat)
- [Review developer documentation](https://developer.rocket.chat)

Using our self-managed offerings you can deploy Rocket.Chat on your own server, or you can use SaaS Rocket.Chat. We offer support for both community as well as commercial plans.

<img src="https://github.com/RocketChat/Rocket.Chat.Artwork/blob/master/Product%20Images/Welcome%20to%20RC%20(Readme).jpg" data-canonical-src="https://github.com/RocketChat/Rocket.Chat.Artwork/blob/master/Product%20Images/Welcome%20to%20RC%20(Readme).jpg" width="919" height="511" />

## Cloud Hosted Rocket.Chat

https://cloud.rocket.chat/trial -->

## Local development

### Prerequisites

You can follow these instructions to setup a dev environment:

- Install **Node 14.x (LTS)** either [manually](https://nodejs.org/dist/latest-v14.x/) or using a tool like [nvm](https://github.com/creationix/nvm) (recommended)
- Install **Meteor**: https://www.meteor.com/developers/install
- Install **yarn**: https://yarnpkg.com/getting-started/install
- Clone this repo: `git clone https://github.com/RocketChat/Rocket.Chat.git`
- Run `yarn` to install dependencies

### Starting Rocket.Chat

```
yarn dsv
```

After initialized, you can access the server at http://localhost:3000

### Starting Rocket.Chat in microservices mode

```
yarn turbo run ms
```

After initialized, you can access the server at http://localhost:4000

## Installation

Please see the [requirements documentation](https://docs.rocket.chat/installing-and-updating/minimum-requirements-for-using-rocket.chat) for system requirements and more information about supported operating systems.
Please refer to [Install Rocket.Chat](https://rocket.chat/install) to install your Rocket.Chat instance.
