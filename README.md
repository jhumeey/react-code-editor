# JSX to JSON Converter App

This is a React application that allows you to convert JSX code into JSON format. It provides a user-friendly interface where you can input your JSX code, and the app will generate the corresponding JSON representation.

## Features

- Syntax highlighting: The code editor component uses Prism.js to provide syntax highlighting for both JSX and JSON code.
- Real-time conversion: As you edit the JSX code, the JSON representation is updated in real-time, providing instant feedback.
- Dual editor layout: The app displays two sets of editors side by side, allowing you to view and compare the JSX and JSON code simultaneously.

## Prerequisites

To run the app locally, make sure you have the following dependencies installed:

- React
- react-simple-code-editor
- prismjs

You can install these dependencies using npm or yarn by running the following command:

```shell
npm install react react-simple-code-editor prismjs
```

## Getting Started

1. Clone the repository and navigate to the project directory.

2. Install the dependencies by running the following command:

```shell
npm install
```

3. Start the development server:

```shell
npm start
```

4. Open your browser and visit `http://localhost:3000` to access the app.

## Usage

1. Upon opening the app, you'll see two sets of code editors, each with JSX and JSON code.

2. Modify the JSX code in the left editor to reflect the component you want to convert.

3. As you make changes, the JSON representation will update in real-time in the right editor.

4. To initiate the conversion manually, click the "Convert" button below the JSX editor.

5. The JSON representation will be displayed in the right editor.

6. You can also modify the JSON code in the right editor, and the corresponding JSX code will update in real-time in the left editor.

7. To convert the JSON back to JSX, click the "Convert" button below the JSON editor.

8. Feel free to experiment with different JSX code and observe the resulting JSON and vice versa.

## Additional Information

- This app uses the `react-simple-code-editor` package for providing the code editor functionality.
- The `prismjs` library is used for syntax highlighting in the code editors.
- The conversion logic is implemented in the `convertJSXToJSON` function, which extracts information from the JSX code and generates a JSON representation.

Note: It's important to mention that the conversion process relies on certain assumptions about the structure and formatting of the JSX code. Make sure your JSX code follows the expected patterns for accurate conversion.

## License

This project is licensed under the [MIT License](LICENSE).