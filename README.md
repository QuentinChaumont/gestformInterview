# GestForm interview test

## Introduction
GestForm interview test is a nodejs script using integer as parameters.
Display on the console for each number added on parameter : 
* 'Gestform' if number is divisible by 3 and 5
* 'Geste' if number is divisible by 3
* 'Forme' if number is divisible by 5
* number if not divisible by 3 or 5

## Getting started

On terminal lunch script using number as arguments : 
```
node index.js 7 1000 60 18 9 25 873 -554
```

will return :

```
7
Forme
Gestform
Geste
Geste
Forme
Geste
-554

```
# tests

Install devDependencies : 
```
npm i
```
Then launch test command : 
```
npm test
```



