# Spreadsheets

[**_"Spreadsheets"_**](https://spreadsheets-dfc91.web.app/ "Spreadsheets") is a single page application that is a simplified analogue of Google spreadsheets.

The application is written in pure JavaScript as part of a course on learning JavaScript.  
The application implements routing, State (by analogy with Redux) without using any extraneous libraries.  
Implemented unit testing of several components using Jest.

The application consists of 2 pages:

- dashboard page;
- spreadsheet page.

**The dashboard page** displays the list of all spreadsheets.

**_Actions on the dashboard page:_**

- go to to creating a new spreadsheet;
- go to spreadsheet editing.

**The spreadsheet page** allows you to create a new table or edit an existing one.

**_Actions on the spreadsheet page:_**

- rename the spreadsheet;
- fill in the table cells;
- resize cells (rows and columns);
- enter a formula for calculation;
- use the buttons on the toolbar to edit the style of the cells (text-align, text-decoration, font-weight, font-style);
- delete table;
- back to the main page.

To see the **application in action** click [**_here._**](https://spreadsheets-dfc91.web.app/ "Spreadsheets")

Deployed on **_Firebase Hosting_**.

---

## Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### `npm run dev`

Builds the app for development to the `dist` folder.

#### `npm run build`

Builds the app for production to the `dist` folder.

#### `npm run lint`

Runs ESLint error checking.

#### `npm run test`

Runs Jest tests.
