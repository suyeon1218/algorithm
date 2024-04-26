const ENTER = 'Enter';
const LEAVE = 'Leave';
const CHANGE = 'Change';

function solution(records) {
  const users = {};
  const messages = [];
  const enterRecord = [];

  for (const record of records) {
    const [type, id, nickname] = record.split(' ');

    if (type === ENTER || type === LEAVE) {
      enterRecord.push([type, id]);
    }
    if (type === ENTER || type === CHANGE) {
      users[id] = nickname;
    }
  }

  for (const record of enterRecord) {
    const [type, id] = record;

    if (type === ENTER) {
      messages.push(`${users[id]}님이 들어왔습니다.`);
    } else {
      messages.push(`${users[id]}님이 나갔습니다.`);
    }
  }

  return messages;
}
