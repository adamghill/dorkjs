function _get_el(el) {
  if (typeof el == "string") {
    el = $(el);
  }

  return el;
}

function _set_val_if_not_undefined(obj, attr, val) {
  if (typeof val !== "undefined") {
    obj[attr] = val;
  }
}

/**
 * Query for a particular element in a document. Classic.
 * @param {String} query - CSS-like query for an `Element`.
 * @returns {Element} The first `Element` found for the query.
 */
export function $(query) {
  return document.querySelector(query);
}

/**
 * Query for all elements in a document.
 * @param {String} query - CSS-like query for `Element`s.
 * @returns {Element[]} All `Element`s found for the query.
 */
export function $$(query) {
  return document.querySelectorAll(query);
}

/**
 * Adds an event listener to a particular `Element`.
 * @param {String|Element} el - `Element` to listen to.
 * @param {String} eventName - Event to listen to, e.g. "click", "mouseover", etc.
 * @param {Function} fn - Function to run when a particular event is fired.
 * @param {Boolean} preventDefault - Whether or not `preventDefault()` should be called on the event. Useful for the click event.
 */
export function listen(el, eventName, fn, preventDefault) {
  el = _get_el(el);

  el.addEventListener(eventName, (event) => {
    if (preventDefault === true) {
      event.preventDefault();
    }

    // return `dork` here is valid once this gets bundled because it will be the wrapping module
    return fn(event, el, dork);
  });
}

/**
 * Runs a function after the DOM content has been loaded.
 * @param {Function} fn - The function to run after the DOM content has been loaded.
 */
export function onload(fn) {
  return listen(document, "DOMContentLoaded", fn);
}

/**
 * Get (or set) the data value of an `Element`.
 * @param {String|Element} el - `Element` to get the value for.
 * @param {String} data - Attribute to get the data from.
 * @param {*} val - Value to set on the data.
 */
export function data(el, data, val) {
  el = _get_el(el);

  if (typeof val !== "undefined") {
    el.dataset[data] = val;
  }

  return el.dataset[data];
}

/**
 * Get (or set) the value of an `Element`.
 * @param {String|Element} el - `Element` to get the value for.
 * @param {*} val - Value to set on the value.
 */
export function value(el, val) {
  el = _get_el(el);
  _set_val_if_not_undefined(el, "value", val);

  return el.value;
}

/**
 * Get the inner HTML of an `Element`.
 * @param {String|Element} el - `Element` to get the inner HTML for.
 * @param {*} val - Value to set on the inner HTML.
 */
export function inner(el, val) {
  el = _get_el(el);
  _set_val_if_not_undefined(el, "innerHTML", val);

  return el.innerHTML;
}

/**
 * Get (or set) the outer HTML of an `Element`.
 * @param {String|Element} el - `Element` to get the outer HTML for.
 * @param {*} val - Value to set on the outer HTML.
 */
export function outer(el, val) {
  el = _get_el(el);
  _set_val_if_not_undefined(el, "outerHTML", val);

  return el.outerHTML;
}

/**
 * Hide an `Element`.
 * @param {String|Element} el - The `Element` to hide.
 */
export function hide(el) {
  el = _get_el(el);

  if (el) {
    el.style = "display: none";
  }
}

/**
 * Show an `Element`.
 * @param {String|Element} el - The `Element` to show.
 */
export function show(el) {
  el = _get_el(el);

  if (el) {
    el.style = "display: inline";
  }
}

/**
 * Writes to the console.
 * @param {String[]} messages - The messages to write to the console.
 */
export function print(...messages) {
  console.log(...Array.prototype.slice.call(messages, 0, messages.length));
}
