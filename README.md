# webpack-react

##### To launch app

1. build project

```bash
npm run build
```

2. install serve gobally

```bash
npm install --global serve
```

3. launch app with serve by below command

```bash
npm run dev
```

##### To display the bundle visualization

1. Using the webpack-bundle-analyzer Plugin:
The webpack-bundle-analyzer is a popular plugin that generates an interactive visualization of the bundle's contents. You can use it to visualize the size of each module and dependency in your bundle.

    - install the plugin as a development dependency:

      ```bash
      npm install webpack-bundle-analyzer --save-dev
      ```

    - Then, modify your webpack.config.js to use the plugin:

      ```javascript
      const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

      module.exports = {
        // ... your webpack config settings ...

        plugins: [
          new BundleAnalyzerPlugin()
        ]
      };
      ```

    - Now, when you run your build, it will generate a report and open a browser window displaying the bundle visualization.

##### To set up Visual Studio Code (VSCode) to load a local ESLint configuration file for your project, follow these steps:To set up Visual Studio Code (VSCode) to load a local ESLint configuration file for your project, follow these steps:

1. Install ESLint Extension:

    - If you haven't already, you'll need to install the ESLint extension for VSCode. Open VSCode, go to the Extensions view by clicking the Extensions icon in the Activity Bar on the side of the window, and search for "ESLint." Install the one published by Dirk Baeumer.

2. Install ESLint Locally:

    - Make sure you have ESLint installed locally in your project. If not, you can install it using npm or yarn:

      ```sh
      npm install eslint --save-dev
      # or
      yarn add eslint --dev
      ```

3. Create ESLint Configuration:
    - Create an ESLint configuration file (e.g., .eslintrc.js, .eslintrc.json, or .eslintrc.yaml) in the root directory of your project. If you already have a configuration file, make sure it's properly set up.

4. Configure VSCode:
    - Open your VSCode workspace (your project folder) or your individual project files. Then, follow these steps:

    - Press Ctrl + Shift + P (Windows/Linux) or Cmd + Shift + P (macOS) to open the command palette.

    - Type "Preferences: Open Settings (JSON)" and select it. This will open your VSCode settings in JSON format.

    - In the JSON settings file, add the following configuration to tell VSCode to use the local ESLint configuration:

      ```json
      "eslint.options": {
          "configFile": ".eslintrc.js"  // Adjust the path to your ESLint config file
      },
      "eslint.run": "onSave"
      ```
      > Make sure to adjust the "configFile" path to match the actual path of your ESLint configuration file.

5. Configure Auto-Fix on Save (Optional):

    - If you want VSCode to automatically fix some ESLint issues when you save a file, you can add the following configuration to your VSCode settings:

      ```json
      "editor.codeActionsOnSave": {
          "source.fixAll.eslint": true
      }
      ```
