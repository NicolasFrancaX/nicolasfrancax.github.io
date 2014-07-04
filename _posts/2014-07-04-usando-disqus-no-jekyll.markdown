---
layout: post
title: "Usando Disqus no Jekyll"
date: 2014-07-04 15:23:00
---

Olá galera, beleza?

Vou fazer dois posts de uma vez aqui, aproveitando que estou fazendo
algumas alterações nele. :)

Vamos aprender como vincular o Disqus no Jekyll.

Primeiro, temos que entrar no [site do Disqus](https://disqus.com/) e
criar uma conta. Provavelmente, você já tenha uma vinculada ao seu
facebook/twitter/g+.

Depois, você vai em [add Disqus to your
site](http://disqus.com/admin/create/). Coloque no formulário o nome do
seu blog e o nome que você quer como user. Selecione a categoria e dê
"Finish registration".

Vai aparecer uma tela com várias opções de tipos de serviços para blogs.
Vai em "Universal Code".

Copie aquele código e cole no final do seu *_layouts/post.html*.

Depois, vai no seu *_config.yml* e adicione o seguinte trecho:

``` yaml
layout: default
comments: true
```

Depois disso, use `jekyll serve` pra testar na maquina local. Se tudo
der certo, commite e desfrute. :)

É isso galera, até mais.
