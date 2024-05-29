function solution(orders, courses) {
  const answer = [];
  const totalReceipt = {};

  courses.forEach((course) => (totalReceipt[course] = {}));

  for (let order of orders) {
    order = order.split('').sort((a, b) => (a < b ? -1 : 1));

    const makeReceipt = (receipt, index) => {
      if (index >= order.length) {
        return;
      }

      for (let i = index; i < order.length; i++) {
        const newReceipt = receipt + order[i];

        if (totalReceipt[newReceipt.length] !== undefined) {
          if (totalReceipt[newReceipt.length][newReceipt] === undefined) {
            totalReceipt[newReceipt.length][newReceipt] = 0;
          }
          totalReceipt[newReceipt.length][newReceipt] += 1;
        }
        makeReceipt(newReceipt, i + 1);
      }
    };

    makeReceipt('', 0);
  }

  for (const course in totalReceipt) {
    let maxSelling = 2;
    let maxSellingReceipt = [];

    for (const receipt in totalReceipt[course]) {
      if (totalReceipt[course][receipt] > maxSelling) {
        maxSellingReceipt = [];
        maxSellingReceipt.push(receipt);
        maxSelling = totalReceipt[course][receipt];
      } else if (totalReceipt[course][receipt] === maxSelling) {
        maxSellingReceipt.push(receipt);
      }
    }
    answer.push(...maxSellingReceipt);
  }

  return answer.sort((a, b) => (a < b ? -1 : 1));
}

const orders = ['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'];
const courses = [2, 3, 4];

solution(orders, courses);
