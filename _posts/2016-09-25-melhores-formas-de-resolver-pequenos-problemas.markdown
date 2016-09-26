---
layout: post
title: "Melhores formas de resolver pequenos problemas"
date: 2016-09-25 22:58:00
---

Vou tentar fazer um post muito simples, mas bem significativo para mim.

Hoje, o Alexandre me mandou [um código em Racket](https://github.com/alexandre/R-99/blob/master/p35.rkt) e me sugeriu criar algo em cima de Python/JS/Ruby/C. Fiquei muito interessado e resolvi fazer em Javascript.

Temos o seguinte exercício:

"*Determine the prime factors of a given positive integer. Construct a flat list containing the prime factors in ascending order.*

*Example: (prime-factors 315) (3 3 5 7)*"

Sem muitas delongas, o código ficou basicamente assim:

<script src="https://gist.github.com/NicolasFrancaX/fb858d1d25ab5c0760d3b8112943f994.js"></script>

Não vou explicar muito do código. Seja *n* o número testado, a lógica principal é: sair do loop como **false** se o número for divisível por *i*. Se *i* chegar a *n*, então n é **true**. **Problema resolvido**.

O interessante foi quando eu tive uma idéia muito simples pra melhorar o código. Não em estilo (ele na verdade ficou bem mais feio), mas sim na **otimização** dele.

É bem simples. Sabemos que depois de *2*, nenhum primo vai ser par. Com isso, podemos ter um verificador de números pares. Caso o for, retorna **false**. Depois, fazer com que um *i* corra de *2* em *2* (sendo esse *i* um número impar). Ou seja, ele vai pular os pares durante a iteração.

É engraçado. Pode parecer besta, mas essa otimização já retorna **false** logo caso o número *n* seja maior que *2* e par. Caso ele seja impar (tendo a possibilidade de ser primo), ele vai percorrer de *2* em *2* números, o que nos possibilita uma otimização de *50%*. Afinal, se vamos percorrer *101*, ele vai percorrer de: *3, 5, 7, 9, ...*.

No final, o código ficou assim:

<script src="https://gist.github.com/NicolasFrancaX/58ffa1a4e8631efba4983549b6628419.js"></script>

Até ai, beleza. Mas o Alexandre deu uma luz. 

Usar a raiz quadrada ao nosso favor.

É bem simples a lógica. Se temos um número não primo, ele pode ser decomposto como *n = a.b*. A questão é que se temos um número qualquer *n*, em que *n = c.c* se tiramos sua raiz quadrada, teremos *c*. Sendo *1 < a < b*, temos que: *n = a.b = c.c*, necessariamente *a < c < b*. E como pra provar se um número é primo só precisamos mostrar que ele tem um multiplo diferente de *1* e ele mesmo, podemos considerar o menor valor que multiplicado por algo retorne *n*. Ou seja, se percorrermos até *c*, vamos passar por *a*, que é o menor valor de multiplicação que gera *n*, mas não vamos passar por *b*, que é o maior.

Pra vocês terem noção do poder disso, vamos pegar o número *101*. Se tirarmos sua raiz quadrada, temos algo próximo de *10*. Como o nosso contator começa de *3*, então o nosso algoritmo vai percorrer: *3, 5, 7, 9, 10*. Se no nosso primeiro algoritmo iriamos percorrer algo em torno de *95* números e no segundo algo em torno de *43* números, nesse atual, percorremos *5*! É uma diferença *muito boa*. Aumentamos cerca de *20* vezes a otimização. 
Temos:

<script src="https://gist.github.com/NicolasFrancaX/665c6518339da85bad988aeb87a7626a.js"></script>

Muito bacana!

Em uma hora e meia de conversa mais ou menos, o Alê e eu desenvolvemos esse humilde algoritmo o mais otimizado possível de acordo com nossos conhecimentos atuais.

O bacana é perceber que podemos encontrar uma solução que resolva o nosso problema, mas que podem existir soluções melhores. E que podemos aprender sobre essas soluções estudando, discutindo, conversando, filosofando e tal. As possibilidades são multiplas.

Uma conversa no twitter pode fazer uma grande diferença. Um texto lido. Uma tarde testando coisas novas. Varias possibilidades!

É isso pessoal. Boa semana! :)

