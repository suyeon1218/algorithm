# [파일명정렬](https://school.programmers.co.kr/learn/courses/30/lessons/17686)

- 문제에서 주어진 방법대로 `HEAD`, `NUMBER`, `TAIL` 을 나누게 될 때 `HEAD` 와 `NUMBER` 을 문자코드가 아닌 숫자로 정렬한 배열을 반환하는 문제.

### 문제 풀이

```
1. 주어진 files 를 HEAD, NUMBER, TAIL 부분으로 나눈다.
2. HEAD 로 먼저 정렬한 다음, NUMBER 를 기준으로 다시 한번 정렬한다.
```

- files 를 HEAD, NUMBER, TAIL 로 나눈다.

  ```js
  files = files.map((file) => {
    let head = '';
    let number = '';
    let tail = '';
    let index = 0;

    while (file[index] === ' ' || isNaN(file[index]) === true) {
      head += file[index];
      index += 1;
    }

    while (isNaN(file[index]) === false) {
      number += file[index];
      index += 1;
    }

    while (index < file.length) {
      tail += file[index];
      index += 1;
    }

    return [head, number, tail];
  });
  ```

- file 를 HEAD, NUMBER 로 정렬한다.

  ```js
  files.sort(([head1, number1], [head2, number2]) => {
    head1 = head1.toLowerCase();
    head2 = head2.toLowerCase();
    number1 = Number(number1);
    number2 = Number(number2);

    if (head1 < head2) return -1;
    if (head1 > head2) return 1;
    if (number1 < number2) return -1;

    return 1;
  });
  ```

- 결과 반환

  ```js
  return files.map((file) => file.join(''));
  ```
