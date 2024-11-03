# TextVoicer

## Overview

TextVoicer is a web application that converts text into speech using a third-party Text-to-Speech (TTS) API. The application consists of a frontend built with React and a backend built with Node.js and Express.

## Features

- Convert text to speech using a third-party TTS API
- Select from multiple voice options
- Play the generated audio in the browser

## Prerequisites

- Node.js (v12 or higher)
- npm (v6 or higher)

## Setup

1. Clone the repository:

```bash
git clone https://github.com/akaday/TextVoicer.git
cd TextVoicer
```

2. Install the dependencies for both the frontend and backend:

```bash
cd frontend
npm install
cd ../backend
npm install
```

3. Create a `.env` file in the `backend` directory and add the following environment variables:

```
TTS_API_URL=<your-tts-api-url>
PORT=3000
```

Replace `<your-tts-api-url>` with the URL of the TTS API you are using.

4. Start the backend server:

```bash
cd backend
npm start
```

5. Start the frontend development server:

```bash
cd frontend
npm start
```

6. Open your browser and navigate to `http://localhost:3000` to use the TextVoicer app.

## Usage

1. Enter the text you want to convert to speech in the textarea.
2. Select a voice from the dropdown menu.
3. Click the "Generate Voiceover" button.
4. The generated audio will be displayed and played in the browser.

## Testing

### Unit Testing

Unit tests for the `/api/generate-voice` endpoint are located in the `tests/unit/backend.test.js` file. To run the unit tests, use a testing framework like Mocha or Jest.

### Integration Testing

Integration tests for the frontend and backend components are located in the `tests/integration/frontend-backend.test.js` file. Use tools like Postman or Insomnia to send requests to the `/api/generate-voice` endpoint and verify responses.

### End-to-End Testing

End-to-end tests to validate the complete user experience are located in the `tests/e2e/e2e.test.js` file. Use a testing framework like Cypress or Selenium to automate browser interactions.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
