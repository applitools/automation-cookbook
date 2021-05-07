# Cypress Recipes

## Getting Started

- Install dependencies
```
npm install
```
- Open Cypress UI
```
npm run cy:open
```
- Run Cypress in the terminal
```
npm run cy:run
```
- Run Cypress headless
```
npm run test:ci
```

## Environment

### cypress.env.json

Create a cypress.env.json file at the root of the project with:

```
{
  "TENOR_API_KEY": "[Your Tenor API Key]" // Required for api.spec.js
}
```