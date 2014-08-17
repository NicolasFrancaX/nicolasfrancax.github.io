---
layout: post
title: "Guard - Facilitando eventos em CLI"
date: 2014-08-17 17:58:00
---

Olá galera, beleza? :}

Então, tenho uma pequena dica pra quem usa Ruby. É uma gem que estou
usando bastante agora que estou aprendendo TDD e tal. O nome dela é
[Guard](https://github.com/guard/guard).

Essa gem é bem poderosa, e pra ser sincero, não sei usar todo poder dela
ainda.

Basicamente, ela automatiza tarefas que você normalmente teria que fazer
na mão pelo terminal.

Por exemplo: Se eu preciso digitar: `bundle exec rspec spec/`, sempre
que eu escrever um novo test ou algum arquivo testado, eu posso
automatizar isso configurando um arquivo chamado `Guardfile`.

Quando estava estudando TDD, fiz o seguinte `Guardfile`:

<script
src="https://gist.github.com/NicolasFrancaX/51bed57118be70c1468e.js"></script>

É bem simples. Esses `interactor :off` e `notification :off` servem pra
não ficar disparando mensagens que não me interessam na execução do
guard.

O `guard :shell` usa um plugin do Guard (chamado
[guard-shell](https://github.com/guard/guard-shell)) e com
a chamada do método `watch`, sempre que eu editar algum dos arquivos
passados no parâmetro (que pode usar regex), ele vai disparar o evento
`task`.

Ai, pra diminuir o tamanho do comando do terminal, coloquei ele em um
método.

Depois disso, dou um `guard` no diretório e, sempre que eu editar algum
dos arquivos passados no watch, ele vai disparar aquele evento.

Bom, é isso galera! Abraços! :)
