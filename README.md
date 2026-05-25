# pkgvoyager

> A simple CLI tool to calculate total npm downloads for any package across any custom date range.

Quickly check download counts without opening dashboards or manually adding numbers.

Built for developers who want fast npm package analytics directly from the terminal.

---

![npm](https://img.shields.io/npm/v/pkgvoyager)
![license](https://img.shields.io/npm/l/pkgvoyager)
![downloads](https://img.shields.io/npm/dm/pkgvoyager)


---

## Features

- Calculate downloads across any custom date range
- Supports every public npm package
- Fast terminal output
- Average downloads per day
- Works directly with `npx`
- No dependencies

---

## Installation

Global install:

```bash
npm install -g pkgvoyager
```

Or run instantly:

```bash
npx pkgvoyager react 2025-01-01 2025-12-31
```

---

## Usage

```bash
pkgvoyager <package-name> <start-date> <end-date>
```

### Example

```bash
pkgvoyager react 2025-01-01 2025-12-31
```

Output:

```text
Package: react
Period: 2025-01-01 → 2025-12-31

Total Downloads: 2,345,123,456
Avg / Day: 6,425,000
```

---

## Date Format

Dates must follow:

```text
YYYY-MM-DD
```

Example:

```bash
pkgvoyager express 2024-01-01 2024-12-31
```

---

## Why?

npm provides download statistics through its API, but calculating totals across arbitrary periods often means manually processing data.

This tool automates that process.

Useful for:

- Open source maintainers
- Developer analytics
- Package growth tracking
- Comparing adoption over time
- Curiosity

---

## Example Ideas

```bash
pkgvoyager react 2025-01-01 2025-12-31

pkgvoyager next 2024-06-01 2024-12-01

pkgvoyager typescript 2023-01-01 2026-01-01
```

---

## API Used

Powered by npm's public downloads API.

---

## Author

Built by **Arka Banerjee**

Developer. Builder. Shipping things and learning relentlessly.

Other projects:

- `arkaquiz` — npm package for quiz generation
- `timewrap` - just a hackathon project built with only 2 hours left

GitHub:

https://github.com/thearkabanerjee


npm:

https://www.npmjs.com/~thearkabanerjee

---

## Contributing

Issues and pull requests are welcome.

If you find a bug or have an idea for improvement, open an issue.

---

## License

MIT

