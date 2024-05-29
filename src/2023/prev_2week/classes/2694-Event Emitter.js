/*
  * explain
  Design an EventEmiiter class.

  * EventEmitter
    This interface is similar (but with some differences) to the one found in Node.js or the Event Target interface of the DOM. 
    The EventEmiiter should allow for subscribing to events and emitting them. 
    Your EventEmitter class should have the following two methods.

  * subscribe
    - 이벤트를 등록할 수 있어야 함
    - unsubscribe 를 할 수 있어야 함

  * emit
    이벤트 등록시 넘겨준 콜백 함수들의 반환값을 전부 받아올 수 있어야 함
*/

class EventEmitter {
  constructor () {
    this.event = new Map();
  }

  subscribe(eventType, cb) {
    if (this.event.has(eventType) === false) {
      this.event.set(eventType, new Map());
    }
    const events = this.event.get(eventType);
    events.set(cb, cb);

    return {
        unsubscribe: () => {
          const events = this.event.get(eventType);
          events.delete(cb);
        }
    };
  }

  emit(eventType, args = []) {
    const result = [];

    if (this.event.has(eventType) === false) {
      return result;
    }

    const events = this.event.get(eventType).entries();
    let func = undefined;
    
    do {
      func = events.next().value;
      if (func !== undefined) {
        result.push(func[1](...args));
      }
    } while(func)

    return result;
  }

}

const emitter = new EventEmitter();

const sub1 = emitter.subscribe("firstEvent", x => x + 1);
const sub2 = emitter.subscribe("firstEvent", x => x + 2);
sub1.unsubscribe(); // undefined
emitter.emit("firstEvent", [5]); // [7]

// ;; [5] + 2 는 '52'
