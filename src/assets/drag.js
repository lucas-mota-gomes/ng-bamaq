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
        el.remove();
      }
    },
  });

}, 1000);
