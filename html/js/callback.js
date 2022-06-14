const addTwo = x => {
	return x + 2;
}
const modifyArray = (array, call) => {
	for (let i = 0; i < array.length; i++){
		array[i] = call(array[i]);
	}
	console.log(array);
};
let myArray = [5, 10, 15, 20];
modifyArray(myArray, addTwo);
