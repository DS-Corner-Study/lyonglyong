// [React.js 3] 2장. 자바스크립트 실전 
// ============================================= // 


// 배열 구조 분해 할당 
let arr = [1,2,3]; 
let [one, two, three] = arr; // 배열 arr의 값을 순서대로 할당 
console.log(one, two, three); 
console.log("\n"); 
// 변수의 개수보다 배열의 크기가 적거나 많아도 상관없음
// 변수가 적을 경우는 순서대로, 많을 경우에는 undefined로 할당 


// ============================================= // 


// 함수 구조 분해 할당 
// key 값으로 구분 
// key이름 그대로도, key값에 이름 할당도 가능
function funstruct({ name: n, age: a, location: l}) {
    console.log(n,a,l);
}

let person = {
    name: "롱롱",
    age: 23, 
    location: "경기도"
}

funstruct(person);
console.log("\n"); 


// ============================================= // 


// 스프레드 연산자 (...)
// 반복가능한 객체에서 값을 개별 요소로 분리 

let arrA = [1,2,3]; 
let arrB = [...arrA, 4, 5, 6]

console.log(arrB); // [1,2,3,4,5,6]
// 만약 ...이 없었다면 [[1,2,3],4,5,6]
console.log("\n"); 

// 객체에도 동일하게 적용 가능 
// 함수의 호출에도 사용 
// 구조 분해 할당 vs 스프레드 연산자: 전자는 전달하는 인수가 1개 


// ============================================= // 


// rest 매개변수 (...)
// 개별 요소를 배열로 묶음 
// 함수에 전달된 인자를 순차적으로 배열에 저장 
// 먼저 선언되어 다른 매개변수에 할당된 인수를 제외하고 나머지를 모두 배열에 저장 
// 따라서 rest는 반드시 마지막에 선언 
function funrest(...rest) {
    console.log(rest);
}

funrest(1,2,3,4); 
