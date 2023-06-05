/*
Funções que não retornam nada - 1 - void
Podemos ter funções que não retornam valores;
Qual seria o tipo de dado indicado para essa situação?
Neste caso utililizamos o void!
Ele vai dizer ao TS que não temos um valor de retorno;*/
console.log('===== VOID =====')
function withoutReturn():void {
    console.log('Esta função não tem retorno!')
}
withoutReturn()

/*
Callback como argumento - 2 - callback
Podemos inserir uma função de callback como argumento de uma função;
Nela conseguimos definir o tio de argumento aceito pela callback;
E também o tipo de retorno a mesma; */
console.log('===== CALLBACK =====')
function greeting(name: string):string {
    return `Olá ${name}`
}
function preGreeting(f: (name:string) => string, userName:string) {
    console.log('Preparando a função!')
    const greet = f(userName)
    console.log(greet)
}
preGreeting(greeting, 'Nelson')
preGreeting(greeting, 'Junior')

/* Generic functions
É uma estratégia para quando o tipo de retorno é relacionado ao tipo do argumento;
Por exemplo: um item de um array, pode ser string, boolean ou number;
Normalmente são utilizados letras como T ou U para definir os generics, é uma convençao;*/
console.log('===== GENERIC FUNCTION =====')
function firstElement<T>(arr: T[]): T{
    return arr[0]
}
console.log(firstElement([0, 1, 2]))
console.log(firstElement(['itemLista1','itemLista2']))
//Limitou a execução para aceitar apenas 'listas' más aceita diversos tipos.

function mergeObjects<N, A, J>(obj1: N, obj2: A, obj3: J) {
    return {
        ...obj1,
        ...obj2,
        ...obj3
    }
}
const newObject = mergeObjects({name: 'Nelson'}, {age: 27}, {Job: 'Programmer'})
console.log(newObject)
/* 4 - Constraints nas Generic Functions
As Generic Functions podem ter seu escopo reduzido por constraints;
Basicamente limitamos os tipos que podem ser utilizados no Generic;
Isso faz com que nosso escopo seja menos abrangente;*/
console.log('===== CONSTRAINTS GENERIC FUNCTION =====')
function biggestNumber<B extends Number | String>(a: B, b: B): B {
    let biggest: B

    if(+a > +b) {
        biggest = a
    } else {
        biggest = b
    }

    return biggest

}
console.log(biggestNumber(5, 3))
console.log(biggestNumber('12','5'))
//console.log(biggestNumber(true, false))

/* 5 - Defiindo tipo de parâmetros
Em generic functions temos que utilizar parâmetros de tipos semelhantes, se não recebemos um erro;
Porém há a posibilidade de determinar o tipo também dos parâmetros aceitos, com uma sintaxe especial;
Isso faz com que a validação do TS aceite os tipos escolhidos;*/
console.log('===== DEFININDO TIPO DE PARÂMETROS =====')
function mergeArrays<T>(arr1: T[], arr2: T[]) {
    return arr1.concat(arr2)
}
console.log(mergeArrays([1,2,3], [5, 6]))
console.log([mergeArrays<Number | String>([1,2,3], ['teste', 'testando'])])