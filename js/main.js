// 'use strict';

// apply(f, {}, [1, 2, 3]);
// Первый параметр это функция, которую необходимо вызовать, 2й - контекст, 3й это массив аргументов, с которым функция будет вызвана.

// let bindedF = bind(f, {});

// bindedF();


let obj = {
    a: 1,
    b: 4,
    name: 'Olegka', 
    nike: 28,
    method: f,
    methodApply: f1,
}

console.log('Сам обьект', obj);
// Функция apply
function apply (fn, context, ...arg) {
    return fn.call(context, arg)
}

function f1 (arg) {
    let result = [];
    arg[0].forEach(element => {
        let resultSum = element + this.a + this.b;
        result.push(resultSum);
    });
    return result
}

console.log('APPLY FUNCTION -----', apply(f1, obj, [8, 7]));

// Фукция bind
const bind = function (fn, context) {
    return function (...arg) {
        return fn.call(context, arg);
    }
}

function f (arg) {
    let result = `${arg} ${this.name}${this.nike}`
    return result;
}

const binded = bind(f, obj);

console.log('BIND FUNCTION -----', binded("Мой ник:"));
