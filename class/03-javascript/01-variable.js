const array = [1, 2, 3, 4, 5]

let array2 = [6, 7, 8, 9, 10]

array.concat(array2)

let sumArray = array.concat(array2)

console.log(sumArray)

// 문자열도 배열처럼 사용할 수 있다.
let email = "codecamp@gmail.com"
console.log(email.includes("@"))
let userMail = email.split("@")[0]
let company = email.split("@")[1]

let maskingMail = []

maskingMail.push(userMail[0])
maskingMail.push(userMail[1])
maskingMail.push(userMail[2])
maskingMail.push(userMail[3])
maskingMail.push("****")

let result = maskingMail.join("") + "@" + company

console.log(result)