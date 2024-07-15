const nums = [1, 2, 3, 4, 5];

nums.map((num) => {
	console.log("in loop:", num);
	return num;
});

const sumNums = nums.reduce((acc, num) => acc + num, 0);
console.log("sum_nums:", sumNums);
