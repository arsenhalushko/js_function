//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function square(a, b) {

let result= a * b;
  return result;
}
let res= square(10,50);
console.log(res);
//- створити функцію яка обчислює та повертає площу кола з радіусом r

function s(r) {

    let result= 3.14 * r**2;
    return result;
}
let resultat= s(10);
console.log(resultat);
//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом
function square(r, h) {

    let result= 2*3.14 * r**2 + 2 * 3.14 *h;
   return result;
}
let res1= square(10, 2);
console.log(res1);
//- створити функцію яка приймає масив та виводить кожен його елемент

function userArr(user){
    for (const userElement of user) {
        console.log(userElement)
    }

}
let users = [
    {name: 'Thomas',
        username: 'Price',
        password: '12345'
    },
    {name: 'Ann',
        username: 'White',
        password: '525521'
    },
    {name: 'Jahseh',
        username: 'Connor',
        password: '543543'
    }
]
userArr(users);

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
function writter(text){
    document.write(
        `<div>
<p> ${text} </p>
</div>`
    )
}
writter('Hello')
//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function unOrderList(txt){
    document.write(`<div>
<ul>
<li>${txt}</li>
<li>${txt}</li>
<li>${txt}</li>
</ul>
</div>`)
}
unOrderList('okten')


//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function f(text,count){
    document.write(`<ul> `);
    for (let i = 0; i < count   ; i++) {
        document.write (`<div>${text}</div>`)

    }
    document.write(`</ul>`);
}

f('hello',3);
//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let array=[1,2,'arrr', true,false]
function arsen(arr){
    document.write(`<ul>`);
    for (const arrElement of arr) {
        document.write(`<li>$(item)</li>`);

    }
    document.write(`</ul>`);
}
arsen (array);
//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//- створити функцію яка повертає найменьше число з масиву
//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

//- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
//Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

