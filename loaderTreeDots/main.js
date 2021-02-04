let elem = document.querySelectorAll(".square-ball");

TweenMax.to(elem, 1, {
  scale: 0.6,
  borderRadius: "50%",
  rotation: 360,
  repeat: -1,
  repeatDelay: 0.5,
  yoyo: true,
});

//////////*Sintaxe de um tween*/////////
// Recebe três parâmetros.
// Primeiro é o elemento que queremos animar
// segundo é duração da animação
// terceiro é um objeto contendo as propriedades do elemento que queremos animar

// from - Anima o elemento da prop (tween) até as prop atuais (css)
// to - Anima o elemento da prop atual (css) até as props passadas na prop (tween)
// fromTo - Anima o elemento das props passadas como from até as props passadas como to
///////// propriedade 'yoyo:true' diz a animação que ao terminar ela volte fazendo a mesma coisa
