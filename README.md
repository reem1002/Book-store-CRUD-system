
# Book App

A simple book management application created using React and JSON Server. This app allows users to insert, edit, delete, and view book details. 

## Features

- **Insert Book:** Add a new book by entering its title, author, price, and description.
- **Book List:** Displays a list of all added books with search functionality.
- **Book Details:** Shows the details of a selected book.
- **Edit/Delete Book:** Edit and delete options for each book entry.

## Project Structure

The main project structure is as follows:

```plaintext
src/
├── components/
│   ├── Book/
│   │   ├── AddForm.js
│   │   ├── BookContainer.js
│   │   ├── BookEdit.js
│   │   ├── BookInfo.js
│   │   ├── BooksList.js
│   │   ├── EditBookForm.css
│   │   ├── Container.js
│   │   ├── Header.js
│   │   └── book.css
│   └── ...
├── store/
│   ├── authSlice.js
│   └── BookSlice.js
├── App.js
├── index.js
└── ...
```

## Getting Started

### Prerequisites

- **Node.js** and **npm** should be installed.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/reem1002/book-app.git
   cd book-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up JSON Server:**

   To start JSON Server, create a `db.json` file in your root directory (or use the existing file if provided) with a structure like:

   ```json
   {
     "books": []
   }
   ```

   Then run:

   ```bash
   npx json-server --watch db.json --port 5000
   ```

4. **Run the application:**

   ```bash
   npm start
   ```

   The app will open in the browser at [http://localhost:3000](http://localhost:3000).

### Adding a Favicon

1. Create or download a favicon image (`favicon.ico`) with dimensions 32x32 or 16x16 pixels.
2. Place the `favicon.ico` file in the `public` folder of your project.
3. Add the following line to your `public/index.html` file in the `<head>` section:

   ```html
   <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
   ```

## Screenshots

### Insert Book Form
![Insert Book Form Screenshot](screenshot.png)

## Troubleshooting

- **Unexpected token errors**: Ensure JSON responses are correctly structured and the JSON Server is running.

## License

This project is licensed under the MIT License.
