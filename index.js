/*카멜 케이스(camel case) : 모든 변수의 시작은 소문자로, 다른 의미를 담고 싶을 때는 스페이스바가 아닌 대문자로 바꿔준다.
camel : 낙타
ex) const dayofday (x)
    const dayOfDay (o)
*/
/* Array
const daysOfWeek = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun",true];

console.log(daysOfWeek[2]);
*/
const kangInfo = {
    name:"KangMan",
    age:26,
    gender:"Male",
    isHandsome:true,
    favMovies: ["Forrest Gump","The Legend of 1900","The Notebook"],
    favFood: [{name:"garbi",fatty:true},{name:"Stir-fried spinach",fatty:false}]
};

console.log(kangInfo);