#!/usr/bin/env node

const https = require("https");

const args = process.argv.slice(2);

if (args.length < 3) {
  console.log(`
Usage:
npx pkgvoyager <package> <start-date> <end-date>

Example:
npx pkgvoyager arkaquiz 2024-01-01 2026-05-23
`);

  process.exit(1);
}

const [pkg, start, end] = args;

function isValidDate(date) {
  return /^\d{4}-\d{2}-\d{2}$/.test(date);
}

if (!isValidDate(start) || !isValidDate(end)) {
  console.error(
    "Invalid date format. Use YYYY-MM-DD"
  );
  process.exit(1);
}

const url =
  `https://api.npmjs.org/downloads/range/${start}:${end}/${pkg}`;

https
  .get(url, (res) => {
    let data = "";

    res.on(
      "data",
      (chunk) => (data += chunk)
    );

    res.on("end", () => {
      try {
        const json = JSON.parse(data);

        if (!json.downloads) {
          console.error(
            "API Error:",
            json.error || json
          );
          process.exit(1);
        }

        const total =
          json.downloads.reduce(
            (sum, day) =>
              sum + day.downloads,
            0
          );

        const avg =
          Math.round(
            total /
              json.downloads.length
          ) || 0;

        console.log(`
Package: ${pkg}
Period: ${start} → ${end}

Total Downloads: ${total.toLocaleString()}
Avg / Day: ${avg.toLocaleString()}
        `);

      } catch (err) {
        console.error(
          "Parse error:",
          err.message
        );
      }
    });
  })
  .on("error", (err) => {
    console.error(
      "Request failed:",
      err.message
    );
  });