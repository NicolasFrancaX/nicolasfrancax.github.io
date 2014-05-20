---
layout: post
title: "Brincando com Regex - Parte 1"
date: 2014-05-20 18:31:10
---

Olá pessoal, demorei um pouco pra criar outro post, mas aqui estou. :D

Hoje vamos brincar um pouco com regex (Regular Expressions).

Para isso, pedi a um dos meus senseis, o Plínio Balduino, pra me passar exercícios para brincar com regex. Ele me passou três.

Os exercícios foram os seguintes:

Primeiro:

```
Dada uma lista de CEPs válidos, escreva uma expressão regular que funcione com todos os itens:

04567003
04567-003
04.567-003
04.567.003
04 567 003
04567 003
04567.003
```

Segundo:

```
Dada uma lista de telefones válidos, escreva uma expressão regular que funciona com todos os itens:

https://gist.github.com/NicolasFrancaX/11296532 (link com a lista de telefones)
```

Terceiro:

```
Dadas duas listas de emails, uma com itens válidos e outra com inválidos, escreva uma expressão que 
selecione TODOS os itens válidos e NENHUM item inválido ou qualquer uma de suas partes.

Válidos:
  niceandsimple@example.com
  very.common@example.com
  a.little.lengthy.but.fine@dept.example.com
  disposable.style.email.with+symbol@example.com
  other.email-with-dash@example.com
  user@[IPv6:2001:db8:1ff::a0b:dbd0]
  "much.more unusual"@example.com
  "very.unusual.@.unusual.com"@example.com
  "very.(),:;<>[]\".VERY.\"very@\\ \"very\".unusual"@strange.example.com
  postbox@com
  admin@mailserver1
   !#$%&'*+-/=?^_`{}|~@example.org
  "()<>[]:,;@\\\"!#$%&'*+-/=?^_`{}| ~.a"@example.org
  " "@example.org
  üñîçøðé@example.com
  üñîçøðé@üñîçøðé.com

Inválidos:
  Abc.example.com
  A@b@c@example.com
  a"b(c)d,e:f;g<h>i[j\k]l@example.com
  just"not"right@example.com
  this is"not\allowed@example.com
  this\ still\"not\\allowed@example.com
```

Nessa primeira parte, vou resolver o primeiro exercício. Vou resolve-lô progressivamente, do modo que acho mais simples e depois vou refatorando.

Para resolver o exercício, vou usar o Rubular. Coloco a string que eu gostaria de casar (match) em "Your test string:" e a minha regex em "Your regular expression:". Você verá os resultados de match em "Match result:".

Primeiro exercício:

Primeiro eu vou casando todas as strings de modo "roubado", assim: 

`^04[. ]?567[-. ]?003` 

Dessa maneira, eu consigo casar com todas as strings da maneira mais fácil possível. Mas como pode haver diferentes CEPs com esse mesmo modelo de string, eu vou colocar, no lugar dos números, um "[0-9]".

`^[0-9]{2}[. ]?[0-9]{3}[-. ]?[0-9]{3}`

Com o [0-9], eu posso casar qualquer número nesse intervalo de tempo (de 0 a 9). Usando o {n}, posso repetir aquele caractere n vezes.

Depois disso, eu substituo o [0-9] para \d, pois eles tem o mesmo efeito.

`^\d{2}[. ]?\d{3}[-. ]?\d{3}`

Pronto. Agora tenho uma regex que casa com aquele modelo de CEP. 

Bom, é isso. Até o próximo post! :D