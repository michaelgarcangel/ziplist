function zipList(list1, list2) {
  let newList = [];

  for (let i = 0; i < list1.length; i++) {
    newList.push(list1[i], list2[i]);
  }
  return newList;




}
const testList1 = [1, 2, 3];
const testList2 = [4, 5, 6];
console.log(zipList(testList1, testList2));

function zipListTheSimpleWay(list1, list2) {
  let newList = _.zip(list1, list2);
  return _.flatten(newList);
}

console.log(zipListTheSimpleWay(testList1, testList2));