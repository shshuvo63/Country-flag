# World on the Go

World on the Go is a small country explorer built with React, TypeScript, and Vite. It displays country names and flags from the Programming Hero public API and tracks which countries have been marked as visited.

## Table of Contents

- [World on the Go](#world-on-the-go)
  - [Table of Contents](#table-of-contents)
  - [About the Project](#about-the-project)
  - [Project Overview](#project-overview)
  - [Key Features](#key-features)
  - [Tech Stack](#tech-stack)
  - [Dependencies](#dependencies)
  - [Installation and Setup](#installation-and-setup)
    - [Requirements](#requirements)
    - [Run Locally](#run-locally)
    - [Build and Lint](#build-and-lint)
  - [Folder Structure](#folder-structure)
  - [Contributors](#contributors)
  - [How to Contribute](#how-to-contribute)
  - [License](#license)
  - [Contact](#contact)

## About the Project

The goal of this project is to present basic information about countries in a simple, interactive interface. Users can mark countries in the list as visited and see the total number of visited countries.

## Project Overview

- Country data is fetched from the `https://openapi.programming-hero.com/api/all` endpoint.
- The app displays the number of countries returned by the API; this count depends on the API response.
- The visited-country count is held in the current app session and is not persisted after a page reload.
- The API response shape is described with a TypeScript interface.
- Country cards include a Capital label, but the capital value is not currently displayed.

## Key Features

- Loads country names and flag images from the API.
- Lets users toggle each country between visited and not visited.
- Displays the total number of countries and visited countries.
- Shows a React `Suspense` fallback while the data loads.

## Tech Stack

- **Frontend:** React 19, TypeScript
- **Build tool and development server:** Vite 8
- **Linting:** Oxlint
- **Data source:** Programming Hero Countries API
- **Backend/Database:** Not used in this project

## Dependencies

Main runtime dependencies:

```json
{
  "react": "^19.2.8",
  "react-dom": "^19.2.8"
}
```

Main development dependencies:

```json
{
  "@types/node": "^24.13.3",
  "@types/react": "^19.2.18",
  "@types/react-dom": "^19.2.7",
  "@vitejs/plugin-react": "^6.1.1",
  "oxlint": "^1.81.0",
  "typescript": "~6.0.2",
  "vite": "^8.3.0"
}
```

## Installation and Setup

### Requirements

- Node.js and npm
- An internet connection to load country data

### Run Locally

```bash
git clone <your-repository-url>
cd react-ts-on-the-go
npm install
npm run dev
```

Vite will print the local development URL in the terminal, usually `http://localhost:5173`.

This app does not require a `.env` file or database credentials. The API endpoint is configured in `src/App.tsx`.

### Build and Lint

```bash
npm run build
npm run lint
npm run preview
```

`npm run preview` serves the production build locally. Run `npm run build` first.

## Folder Structure

```text
react-ts-on-the-go/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Countries/
│   │   │   ├── Countries.tsx
│   │   │   └── Countries.css
│   │   └── Country/
│   │       ├── Country.tsx
│   │       └── Country.css
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   ├── main.tsx
│   ├── type.ts
│   └── user.tsx
├── index.html
├── README.md
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

## Contributions

This is primarily a personal portfolio project.

However, suggestions and improvements are welcome.

| Name       | Role      | Contributions        |
| ---------- | --------- | -------------------- |
| Md. Shamsul Haque Shuvo | Developer | Design & Development |

## How to Contribute

1. Fork the repository.
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push the branch and open a Pull Request.

## License

No license is currently documented in this repository. Confirm the applicable license with the project owner before distributing or reusing this project.

## Contact



**Email:** [sh.shuvo2363@gmail.com](mailto:sh.shuvo2363@gmail.com)

**GitHub:** [GitHub Profile](https://github.com/shshuvo63)

**LinkedIn:** [LinkedIn Profile](https://www.linkedin.com/in/shamsul-haque-shuvo-755439246/)

