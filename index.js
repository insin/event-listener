'use strict';

function listen(target, eventType, callback) {
  if (typeof eventType != 'string') {
    throw new TypeError('eventType must be a string')
  }
  var eventTypes = eventType.split(' ').filter(Boolean)
  if (target.addEventListener) {
    eventTypes.forEach(function (eventType) {
      target.addEventListener(eventType, callback, false)
    })
    return {
      remove: function() {
        eventTypes.forEach(function (eventType) {
          target.removeEventListener(eventType, callback, false)
        })
      }
    }
  }
  else if (target.attachEvent) {
    eventTypes.forEach(function (eventType) {
      target.attachEvent('on' + eventType, callback)
    })
    return {
      remove: function() {
        eventTypes.forEach(function (eventType) {
          target.detachEvent('on' + eventType, callback)
        })
      }
    }
  }
}

module.exports = listen
