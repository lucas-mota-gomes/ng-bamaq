setTimeout(function () {
  el = document.getElementById('imgPrincipal')
  const teste = Draggable.create("#imgPrincipal", {
    type: "x",
    bounds: { maxX: 300 },
    inertia: true,
    onClick: function () {
      console.log("clicked");
    },
    onDrag: function () {
      console.log(teste[0].x);
      if (teste[0].x <= -188) {
        animateCSS('.sliderTeste', 'rotateOutUpLeft').then(() => el.remove())
      }
    },
  });
  el2 = document.getElementById('imagem');
  shadowCard = document.getElementsByClassName('shadow-card')[0];
  const teste2 = Draggable.create("#dragg", {
    type: "x",
    bounds: { maxX: 300 },
    inertia: true,
    onClick: function () {
      console.log("clicked");
    },
    onDrag: function () {
      el2.style.transform = `translateX(${teste2[0].x}px)`
      if (teste2[0].x >= 184.6) {
        el2.style.transform = `translateX(184px)`
        setTimeout(function () {
          animateCSS('.card-minimal', 'zoomOut').then(() => {
            document.getElementById('card-minimal').style.display = "none"
            document.getElementById('card-full').style.display = "block"
          })
        }, 100);
        animateCSS('.shadow-card', 'fadeOutRight').then(() => {
          shadowCard.remove();
        })
      }
    },
    onDragEnd: function () {
      if (teste2[0].x <= 184.6) {
        shadowCard.style.transform = `translateX(0px)`;
        el2.style.transform = `translateX(0px)`
      }
    }
  });

}, 1000);
