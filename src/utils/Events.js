const events = new Map();

export default {
  //calling event
  $emit(eventName, data) {
    if (events.has(eventName)) {
      events.get(eventName).forEach((fn) => fn(data));
    }
  },

  //cretaing event
  $on(eventName, fn) {
    if (!events.has(eventName)) {
      events.set(eventName, []);
    }

    events.get(eventName).push(fn);
  },
};
