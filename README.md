# GitHub Repos Explorer

This is a simple React app that fetches and displays repositories from the [GoDaddy GitHub organization](https://github.com/godaddy). Users can view a list of repositories and click on each one to see detailed information.

## Features

- Fetches repositories from GitHub's API
- Displays a list of repositories with basic details
- Allows users to click on a repository to see more details such as:
  - Title
  - Description
  - Link to the GitHub page
  - Language(s)
  - Forks, open issues, and watchers
- Responsive design using Tailwind CSS

## Tech Stack

- **React**: Frontend framework
- **Axios**: For fetching data from GitHub API
- **React Router**: For navigation between pages
- **Tailwind CSS**: For styling
- **Jest & React Testing Library**: For unit and integration tests

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/github-repos-explorer.git
   cd github-repos-explorer
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```
4. Open the app in your browser at `http://localhost:3000`.

## Running Tests

To run the test suite, use:

```sh
npm test
```

## Folder Structure

```
/src
  ├── __tests__
  │   ├── App.test.jsx
  ├── assets
  ├── Pages
  │   ├── Details
  │   │   ├── index.jsx
  │   ├── Home
  │   │   ├── index.jsx
  ├── routes
  │   ├── index.jsx
  ├── App.jsx
  ├── index.css
  ├── Layout.jsx
  ├── main.jsx
```

## API Usage

This project fetches data from:

```
GET https://api.github.com/orgs/godaddy/repos
```

## Future Enhancements

- Add pagination for large lists of repositories
- Improve error handling and loading states
- Display more detailed repository statistics

## Why These Libraries?

- **Axios**: Simple API requests with built-in error handling.
- **React Router**: Efficient routing for navigation.
- **Tailwind CSS**: Rapid styling without custom CSS files.
- **Testing Library**: Ensures components work as expected.

---

### Notes

This project is a minimal implementation designed to showcase API fetching, testing and routing in React.
