# dork

Remember jQuery? It's like that, but no one else uses it.

https://github.com/adamghill/dorkjs
https://www.npmjs.com/package/dorkjs

## Installation

No build step needed. Just download `dork.min.js` from the `dist` folder above and reference it in your HTML.

```html
<script src="dork.min.js"></script>

<button id="button1">Button has not been clicked</button>

<script>
    dork.onload((event, document, $) => {
      $.listen("#button1", "click", (event, button) => {
        $.print(button);
        $.inner(button, "Button has been clicked");
      });
    });
</script>
```

## Size

- 934 B
- 463 B (minified)
- 370 B (brotli)

## Features

### $

Query for a particular element in a document.

### $$

Query for all elements in a document.

### listen

Add an event listener to a particular `Element`.

### onload

A convenience wrapper to wait for the document to load completely.

### data

Get or set data on an `Element`.

### value

Get or set the value of an `Element`.

### inner

Get or set the innerHTML of an `Element`.

### outer

Get or set the outerHTML of an `Element`.

### hide

Hide an `Element`.

### show

Show an `Element`.

### print

A convenience wrapper around `console.log`.

## Developing

### See examples

1. `python3 -m http.server 8000`
2. Go to http://localhost:8000/example.html in a browser

### Run tests

TBD

### Build

`npm run b`

## Colophon

- [Rollup](https://rollupjs.org)

## Inspiration

Every JavaScript ever.
