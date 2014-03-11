---
layout: post
title: "Criando blog com Jekyll e Github Pages"
date: 2014-03-11 17:39:10
---

Olá pessoal, tudo bem? Esse será meu primeiro post. Será como fiz pra instalar e configurar o Jekyll e usa-lo com Github Pages.

Primeiro, vamos instalar o Jekyll na maquina. 

{% highlight bash %}
gem install jekyll
{% endhighlight %}

Agora vamos criar a estrutura do Jekyll.

{% highlight bash %}
jekyll new seu_nick_do_github.github.io
{% endhighlight  %}

No meu caso específico, criei como `nicolasfrancax.github.io`. 

Depois disso, vamos ver a seguinte estrutura:

[![Tree](/images/tree-jekyll.png)](/images/tree-jekyll.png)

Agora, dentro da sua aplicação, use o seguinte comando.

{% highlight bash %}
jekyll serve -w
{% endhighlight %}

No seu navegador, digite [0.0.0.0:4000/][1].
[1]: http://0.0.0.0:4000/

[![Hello-World](/images/hello-world-jekyll.png)](/images/hello-world-jekyll.png)

Agora você pode escrever suas postagens. Só precisa entrar no diretório `_post` e usar a seguinte convenção: `ano-mês-dia-nome-do-post.markdown`. Quando for escrever sua postagem, se for leigo com markdown (assim como eu), veja postagens de outros usuários pelo Github afora.

Depois de tudo isso, vamos publicar seu blog pelo Github Pages.

Para isso, vá ao Github e crie um novo repositório `seu_nick_do_github.github.io`, entre no seu diretório do Jekyll e faça:

{% highlight bash %}
git init
git add --all
git commit -m "primeiro commit"
git remote add origin git@github.com:seu_nick_do_github/seu_nick_do_github.github.io.git
git push -u origin master
{% endhighlight %}

Pronto, você acabou de publicar seu blog no Github. Espere cerca de 10 minutos e entre no link `seu_nick_do_github.github.io` e irá acessar a página do seu blog.

Antes de terminar, não se esqueça de adicionar algumas coisas importantes no seu blog, como por exemplo: RSS, comentários e claro, mude a sua página de apresentação ao seu gosto. :)

É isso pessoal, até a próxima.

bla();
