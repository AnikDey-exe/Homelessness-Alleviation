# Guide

## Setup Instructions

**Prerequisites**

NodeJS [https://nodejs.org/en/download/package-manager]

Git [https://git-scm.com/downloads]

Expo Go (download through App Store or Play Store)

### Setting Up Directory

1. Open **Command Prompt**
2. Run `git clone https://github.com/AnikDey-exe/Homelessness-Alleviation.git`
3. Enter into the directory
4. Run `npm install`
5. Run `npm install -g expo-cli`

**You are all set!**

### Testing the App

1. Run `npm start`
2. On your phone, scan the QR code that appears

**You can now start developing!**

## Guidelines

- Strictly use TypeScript
- Avoid using the `any` type
- Make sure your code is consistent with the codebase
  
    > When creating components, pages, types, etc, follow existing patterns as close as possible
- Only put components in the components folder if the components can be used in multiple places, else place in the components in the folder of the screen itself
- Use absolute imports whenever possible
- When installing packages run the command `npx expo install [package-name-1] [package-name-2] [package-name-3] ... [package-name-n]` 
