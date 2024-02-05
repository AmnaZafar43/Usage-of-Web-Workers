# Implementation-of-Web Worker

### Developer Name

Amna Zafar(2021-CS-27)

### ***Project Name:***

Data Processing Application

### ***Project Description:***

This web application perform some data processing operations using web worker. Firstly, when project runs 4 buttons are shown with different functionalities. Button no 1 generate large array containing 100,00,00,00 elements. Button two calculates sum of all elements of array. Button 3 implement our task with worker and on four button you can choose color with their codes. When I click on generate array button it's going to generate a large array of 100,00,00,00 elements and when this task is in processing if I select another button UI should not be responsive and stuck, that's why I use web worker. Web worker done this generating array task and I parallelly do my other functionalities without even stucking of UI. 

### *How to run project locally*

1. **Create Project Directory:**Create a new directory for your project. Place the `index.html`file and `script.js` file in this directory.

2. **Include Bootstrap Library:**In your `index.html` file, make sure the Bootstrap CSS and JS files are correctly included. You're already using CDN links, so you should be fine. However, if you want to work offline, you can download Bootstrap and host it locally.

3. **Include jQuery (Optional):**If you decide to uncomment the jQuery script link in your `index.html`, make sure to download jQuery and include it in your project directory.

4. **Start a Local Server:**To avoid potential cross-origin issues with fetching data using AJAX, it's recommended to run a local server. You can use Python's built-in HTTP server for this.

   Open a terminal or command prompt, navigate to your project directory, and run the following command:

   ```python -m http.server```

   If you're using Python 2, use:

   ```python -m SimpleHTTPServer```

   This will start a local server, and you can access your project at `http://localhost:8000` or `http://127.0.0.1:8000` in your web browser.

5. **Access the Project:**Open your web browser and go to `http://localhost:8000` or `http://127.0.0.1:8000`. You should see your `index.html` page. Interact with the dropdown and click the "Fetch Data" button to see the AJAX implementation in action.