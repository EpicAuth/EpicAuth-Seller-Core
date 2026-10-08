# @epicauth/seller-core

Generated core client and types for the **EpicAuth Seller API**.

This package provides the generated HTTP client, API operations, and TypeScript types for the EpicAuth Seller API.

> This package is intended primarily as a low-level foundation for the official EpicAuth Seller SDK.

## Installation

```bash
npm install @epicauth/seller-core
```

or:

```bash
bun add @epicauth/seller-core
```

## Usage

```ts
import {
  client,
  allSeller,
} from "@epicauth/seller-core";
```

Configure the API client:

```ts
import { client } from "@epicauth/seller-core";

client.setConfig({
  baseUrl: "https://epicauth.cc/api",
});
```

You can then use the generated API operations:

```ts
import { allSeller } from "@epicauth/seller-core";

const response = await allSeller({
  query: {
    sellerkey: "YOUR_SELLER_KEY",
    type: "stats",
  },
});

console.log(response.data);
```

The exact generated operation names and types depend on the OpenAPI specification used to generate this package.

## TypeScript

The package includes generated TypeScript types for the EpicAuth Seller API.

```ts
import type {
  // Generated types
} from "@epicauth/seller-core";
```

TypeScript definitions are included automatically when installing the package.

## API Client

The generated client handles HTTP communication with the EpicAuth Seller API.

The base URL can be configured using the generated client configuration:

```ts
import { client } from "@epicauth/seller-core";

client.setConfig({
  baseUrl: "https://epicauth.cc/api",
});
```

For custom configurations, refer to the generated client types and operations included in the package.

## Architecture

`@epicauth/seller-core` is intentionally a low-level package.

```text
@epicauth/seller-core
        │
        ├── Generated HTTP Client
        ├── Generated API Operations
        └── Generated TypeScript Types
                    │
                    ▼
          @epicauth/seller
          High-level Seller SDK
```

The recommended architecture is to use `@epicauth/seller` for a simpler developer experience:

```ts
import { SellerClient } from "@epicauth/seller";

const seller = new SellerClient({
  sellerKey: "YOUR_SELLER_KEY",
});

await seller.add({
  // ...
});
```

The high-level SDK provides friendly methods such as:

```ts
seller.add()
seller.addTime()
seller.setVar()
seller.getVar()
seller.fetchAllKeys()
```

while `@epicauth/seller-core` provides the underlying generated API layer.

## Generated Code

This package is generated from the EpicAuth Seller API OpenAPI specification using:

* [Hey API](https://heyapi.dev/)
* OpenAPI
* TypeScript

The generated source code is kept in the repository and the final compiled package is published from `dist/`.

## Development

Install dependencies:

```bash
bun install
```

Generate the client:

```bash
bun run generate
```

Build the package:

```bash
bun run build
```

Run both:

```bash
bun run generate
bun run build
```

## Project Structure

```text
seller-core/
├── .github/
│   └── workflows/
│       └── publish.yml
├── openapi/
│   └── seller.json
├── src/
│   └── generated source
├── LICENSE
├── README.md
├── openapi-ts.config.ts
├── package.json
├── tsconfig.json
└── bun.lock
```

## Publishing

The package will then be published to npm as:

```text
@epicauth/seller-core@1.0.0
```

## License

Elastic License 2.0.

See the `LICENSE` file for the complete license terms.

---

**EpicAuth** — Authentication and licensing infrastructure for developers.
