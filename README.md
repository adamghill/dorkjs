# dork

Remember jQuery? It's like that, but no one else uses it.

- https://github.com/adamghill/dorkjs
- https://www.npmjs.com/package/dorkjs

## Installation

No build step needed. 🎉 

Two options:

1. Reference the script in unpkg in your HTML.

```
<script src="https://unpkg.com/dorkjs@latest"></script>
```

OR

1. Download `dork.min.js` from the `dist` folder
1. Reference the downloaded script in your HTML.

```html
<script src="dork.min.js"></script>
```

## Simple example of how `dork` looks

```
<button id="button1">Button has not been clicked</button>

<script>
    dork.onload((onloadEvent, document, $) => {
      $.listen("#button1", "click", (buttonEvent, button) => {
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

## Functions

<dl>
<dt><a href="#$">$(query)</a> ⇒ <code>Element</code></dt>
<dd><p>Query for a particular element in a document. Classic.</p>
</dd>
<dt><a href="#$$">$$(query)</a> ⇒ <code>Array.&lt;Element&gt;</code></dt>
<dd><p>Query for all elements in a document.</p>
</dd>
<dt><a href="#listen">listen(el, eventName, fn, preventDefault)</a></dt>
<dd><p>Adds an event listener to a particular <code>Element</code>.</p>
</dd>
<dt><a href="#onload">onload(fn)</a></dt>
<dd><p>Runs a function after the DOM content has been loaded.</p>
</dd>
<dt><a href="#data">data(el, data, val)</a></dt>
<dd><p>Get (or set) the data value of an <code>Element</code>.</p>
</dd>
<dt><a href="#value">value(el, val)</a></dt>
<dd><p>Get (or set) the value of an <code>Element</code>.</p>
</dd>
<dt><a href="#inner">inner(el, val)</a></dt>
<dd><p>Get the inner HTML of an <code>Element</code>.</p>
</dd>
<dt><a href="#outer">outer(el, val)</a></dt>
<dd><p>Get (or set) the outer HTML of an <code>Element</code>.</p>
</dd>
<dt><a href="#hide">hide(el)</a></dt>
<dd><p>Hide an <code>Element</code>.</p>
</dd>
<dt><a href="#show">show(el)</a></dt>
<dd><p>Show an <code>Element</code>.</p>
</dd>
<dt><a href="#print">print(messages)</a></dt>
<dd><p>Writes to the console.</p>
</dd>
</dl>

<a name="$"></a>

## $(query) ⇒ <code>Element</code>
Query for a particular element in a document. Classic.

**Returns**: <code>Element</code> - The first `Element` found for the query.  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>String</code> | CSS-like query for an `Element`. |

<a name="$$"></a>

## $$(query) ⇒ <code>Array.&lt;Element&gt;</code>
Query for all elements in a document.

**Returns**: <code>Array.&lt;Element&gt;</code> - All `Element`s found for the query.  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>String</code> | CSS-like query for `Element`s. |

<a name="listen"></a>

## listen(el, eventName, fn, preventDefault)
Adds an event listener to a particular `Element`.


| Param | Type | Description |
| --- | --- | --- |
| el | <code>String</code> \| <code>Element</code> | `Element` to listen to. |
| eventName | <code>String</code> | Event to listen to, e.g. "click", "mouseover", etc. |
| fn | <code>function</code> | Function to run when a particular event is fired. |
| preventDefault | <code>Boolean</code> | Whether or not `preventDefault()` should be called on the event. Useful for the click event. |

<a name="onload"></a>

## onload(fn)
Runs a function after the DOM content has been loaded.


| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | The function to run after the DOM content has been loaded. |

<a name="data"></a>

## data(el, data, val)
Get (or set) the data value of an `Element`.


| Param | Type | Description |
| --- | --- | --- |
| el | <code>String</code> \| <code>Element</code> | `Element` to get the value for. |
| data | <code>String</code> | Attribute to get the data from. |
| val | <code>\*</code> | Value to set on the data. |

<a name="value"></a>

## value(el, val)
Get (or set) the value of an `Element`.


| Param | Type | Description |
| --- | --- | --- |
| el | <code>String</code> \| <code>Element</code> | `Element` to get the value for. |
| val | <code>\*</code> | Value to set on the value. |

<a name="inner"></a>

## inner(el, val)
Get the inner HTML of an `Element`.


| Param | Type | Description |
| --- | --- | --- |
| el | <code>String</code> \| <code>Element</code> | `Element` to get the inner HTML for. |
| val | <code>\*</code> | Value to set on the inner HTML. |

<a name="outer"></a>

## outer(el, val)
Get (or set) the outer HTML of an `Element`.


| Param | Type | Description |
| --- | --- | --- |
| el | <code>String</code> \| <code>Element</code> | `Element` to get the outer HTML for. |
| val | <code>\*</code> | Value to set on the outer HTML. |

<a name="hide"></a>

## hide(el)
Hide an `Element`.


| Param | Type | Description |
| --- | --- | --- |
| el | <code>String</code> \| <code>Element</code> | The `Element` to hide. |

<a name="show"></a>

## show(el)
Show an `Element`.


| Param | Type | Description |
| --- | --- | --- |
| el | <code>String</code> \| <code>Element</code> | The `Element` to show. |

<a name="print"></a>

## print(messages)
Writes to the console.


| Param | Type | Description |
| --- | --- | --- |
| messages | <code>Array.&lt;String&gt;</code> | The messages to write to the console. |


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
- [jsdoc2md](https://github.com/jsdoc2md/jsdoc-to-markdown)

## Inspiration

Every JavaScript ever.
