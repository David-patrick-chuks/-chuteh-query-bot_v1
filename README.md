# @chuteh/query-bot_v1

## Description

`@chuteh/query-bot_v1` is a customizable and lightweight React chatbot component designed for handling user queries. It features real-time responses, message history, and customization options like user avatars, bot icons, and positioning.

## Features

- **Real-Time Responses**: Easily integrate with AI or API services to provide instant bot responses.
- **Customizable Interface**: Modify avatars, icons, and chat positioning to match your application's design.
- **Persistent Chat History**: Message history is saved in local storage for user convenience.
- **Voice and Copy Icons**: Built-in functionality for reading responses aloud and copying text.

## Installation

Install the package using npm:

```bash
npm install @chuteh/query-bot_v1

## or

```bash

yarn add chuteh-query-bot


## Usage
Here's an example of how to integrate the chatbot in your React application:

```bash 

import React from "react";
import ChatBot from "chuteh-query-bot";
import userAvatar from './assets/user-avatar.png';
import botAvatar from './assets/bot-avatar.png';

const App = () => {
  return (
    <ChatBot
      userInput=""
      relevantKeywords={["help", "support", "question"]}
      AboutChatBot="This is a helpful chatbot"
      userAvatar={userAvatar}
      botAvatar={botAvatar}
      userName="User"
      botName="Bot"
      position="bottom-left"
    />
  );
};

export default App;



## Props

| Prop             | Type                                   | Description                                           |
|------------------|----------------------------------------|-------------------------------------------------------|
| `userInput`      | `string`                               | User's input message                                  |
| `relevantKeywords`| `string[]`                            | Array of relevant keywords                            |
| `AboutChatBot`   | `string`                               | Description of the chatbot                            |
| `userAvatar`     | `string`                               | Path to the user's avatar image                       |
| `botAvatar`      | `string`                               | Path to the bot's avatar image                        |
| `userName`       | `string`                               | Name displayed for the user                           |
| `botName`        | `string`                               | Name displayed for the chatbot                        |
| `position`       | `"bottom-left" | "bottom-right" | "top-left" | "top-right"` | Position of the chat window                          |




---

### Key Sections:
- **Description**: A short explanation of what the package does.
- **Features**: Highlights of the chatbot's functionality.
- **Installation**: Instructions for installing the package.
- **Usage**: A code example showing how to use the chatbot in a React app.
- **Props Table**: Details about the available props for easy configuration.
- **Customization**: A note about further customization.
- **License**: The type of license for your package. (Assumed to be MIT here.)

This will give users a clear guide on how to install and use the package while making customization easy to understand.
