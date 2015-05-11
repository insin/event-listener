# event-listener

Simple function for `addEventListener()` vs `addEvent()` if you need to support
old IE.

## Install

```
npm install event-listener
```

## Usage

```javascript
var listen = require('event-listener')

// Returns an object with a .remove() method
var scrollListener = listen(window, 'scroll', function(e) {
  // ...
})

// Later...

scrollListener.remove()
```

## MIT Licensed