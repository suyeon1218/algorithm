function solution(files) {
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

  return files.map((file) => file.join(''));
}
