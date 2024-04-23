/*
  * explain
  Write a class that aloow getting and setting key-value pairs, however a time until expiration is associated with each key.

  * methods
  - set(key, value, duration)
    accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible.
    The method should return true if the same un-expired key alreay exist and flas otherwise.
    Both value and duration should be ocerwritten if the key already exists.

  - get(key)
    If an un-expired key exists, it shoud return the associated vlaue, Otherwise it should return -1

  - counter()
    return the count of un-expired keys.
*/

class TimeLimitedCache {
  constructor() {
    this.cache = new Map();
  }

  set(key, value, duration) {
    const isExisted = this.cache.has(key);

    if (isExisted === true) {
      clearTimeout(this.cache.get(key).duration); // 덮어쓰기
    }
    this.cache.set(key, {
      value,
      duration: setTimeout(() => {
        this.cache.delete(key);
      }, duration)
    })

    return isExisted;
  }

  get(key) {
    if (this.cache.has(key) === false) { // none key
      return -1;
    }

    return this.cache.get(key).value;
  }

  count() {
    return this.cache.size;
  }
}