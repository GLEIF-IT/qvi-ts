# qvi-ts

## Structure

The goal is to utilize the Inversion of Control design pattern to make thw `qvi-ts` library modular and
easy to test. Internal dependencies (like a SignifyClient) are defined by an Interface `src/interfaces` and
by one or more concrete implementations `src/entities` and configured in `config/ioc_config.ts`.

See `Client`/`SignifyClient`/`QVI` for a basic pattern.

### Development

Install dependencies

```
yarn
```

Test

```
yarn test
```
