
# Password Generator React App

The Password Generator React App is a simple web application that allows users to generate random passwords based on their preferences for including alphabets, numbers, and special characters. It also provides a list of the last five generated passwords that can be copied to the clipboard.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository to your local machine using:

   ```
   git clone https://github.com/your-username/password-generator-app.git
   ```

2. Navigate to the project directory:

   ```
   cd password-generator-app
   ```

3. Install the project dependencies using your preferred package manager. For example, with npm:

   ```
   npm install
   ```

## Usage

1. After installing the dependencies, start the development server:

   ```
   npm start
   ```

2. Open your web browser and go to `http://localhost:3000` to access the Password Generator app.

3. Customize your password preferences by checking or unchecking the checkboxes for including numbers and special characters, and selecting the desired password length.

4. Click on the "Generate Password" button to generate a new random password based on your preferences.

5. The last five generated passwords will be displayed in a card below the generator. You can copy any of the displayed passwords to your clipboard by clicking the "Copy to clipboard" button associated with that password.

## Features

- Generate random passwords with customizable preferences.
- Choose to include alphabets, numbers, and special characters in passwords.
- Specify the desired length of the generated password.
- View and copy the last five generated passwords.
- Visual feedback using success messages for password generation and copying to clipboard.


## Technologies Used

- React
- Material-UI
- SweetAlert2 (for notifications)
- JavaScript
