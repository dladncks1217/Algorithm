var addTwoNumbers = function (l1, l2) {
  let result = new ListNode(0);
  let link = result;
  let l1num = "";
  let l2num = "";
  let sum;
  while (l1 !== null) {
    l1num += l1.val;
    l1 = l1.next;
  }
  while (l2 !== null) {
    l2num += l2.val;
    l2 = l2.next;
  }
  l1num = l1num.split("").reverse().join("");
  console.log(l1num);
  l2num = l2num.split("").reverse().join("");
  console.log(l2num);
  sum = BigInt(l1num) + BigInt(l2num);
  sum = sum.toString().split("").reverse();
  sum.forEach((v) => {
    link.next = new ListNode(Number(v));
    link = link.next;
  });
  return result.next;
};
