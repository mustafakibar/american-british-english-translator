# FCC Quality Assurance — American/British English Translator

Express API that translates text between American and British English dialects, built for the FreeCodeCamp Quality Assurance certification.

## Features

- `POST /api/translate` — translates text given a `locale` (`american-to-british` or `british-to-american`)
- Translated words are wrapped in `<span class="highlight">` tags for front-end highlighting
- Returns `"Everything looks good to me!"` when no translation is needed
- Handles missing fields with `"Required field(s) missing"` and invalid locale with `"Invalid value for locale field"`
- Unit tests cover spelling, title, and time-format translations for both directions
- Functional tests cover the full POST endpoint with valid and invalid inputs

## Tech Stack

- Node.js
- Express
- Babel
- Chai / Mocha

## Requirements

- Node.js 16+
- Yarn 1.x or npm 8+

## Installation

```bash
yarn install
```

## Environment Variables

- `PORT` — server port (defaults to `3000`)
- `NODE_ENV` — `development` | `test` | `production`

## Usage

```bash
yarn start
```

Server listens on `http://localhost:3000`.

## Testing

```bash
NODE_ENV=test yarn start
```

## API

- `POST /api/translate` — body: `{ text, locale }` — returns `{ text, translation }`

## Project Structure

```
.
├── components/
├── routes/
├── tests/
├── public/
├── views/
├── server.js
└── package.json
```

## License

This project is licensed under the MIT License — see the [LICENSE](./LICENSE) file.
