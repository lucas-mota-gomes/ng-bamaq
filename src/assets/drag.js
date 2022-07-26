// setTimeout(function () {
//   el = document.getElementById('imgPrincipal')
//   const teste = Draggable.create("#imgPrincipal", {
//     type: "x",
//     bounds: { maxX: 300 },
//     inertia: true,
//     onClick: function () {
//       console.log("clicked");
//     },
//     onDrag: function () {
//       console.log(teste[0].x);
//       if (teste[0].x <= -188) {
//         animateCSS('.sliderTeste', 'rotateOutUpLeft').then(() => el.remove())
//       }
//     },
//   });
//   el2 = document.getElementById('imagem');
//   shadowCard = document.getElementsByClassName('shadow-card')[0];
//   const teste2 = Draggable.create("#dragg", {
//     type: "x",
//     bounds: { maxX: 300 },
//     inertia: true,
//     onClick: function () {
//       console.log("clicked");
//     },
//     onDrag: function () {
//       el2.style.transform = `translateX(${teste2[0].x}px)`
//       if (teste2[0].x >= 184.6) {
//         el2.style.transform = `translateX(184px)`
//         setTimeout(function () {
//           animateCSS('.card-minimal', 'zoomOut').then(() => {
//             document.getElementById('card-minimal').style.display = "none"
//             document.getElementById('card-full').style.display = "block"
//           })
//         }, 100);
//         animateCSS('.shadow-card', 'fadeOutRight').then(() => {
//           shadowCard.remove();
//         })
//       }
//     },
//     onDragEnd: function () {
//       if (teste2[0].x <= 184.6) {
//         shadowCard.style.transform = `translateX(0px)`;
//         el2.style.transform = `translateX(0px)`
//       }
//     }
//   });

// }, 1000);

function teste() {
    var draggs = []
    var list = document.getElementsByClassName("card-item")
    for (var i = 0; i < list.length; i++) {
        draggs[i] = Draggable.create(`#card-minimal${i}`, {
            type: "x",
            bounds: { maxX: 300 },
            inertia: true,
            onClick: function() {
                console.log("clicked");
            },
            onDrag: function() {
                document.querySelectorAll(`#card-minimal${i} > div`).style.transform = `translateX(${draggs[i - 1][0].x}px)`
                if (draggs[i].x >= 184.6) {
                    el2.style.transform = `translateX(184px)`
                    setTimeout(function() {
                        animateCSS('.card-minimal', 'zoomOut').then(() => {
                            document.getElementById(`card-minimal${i}`).style.display = "none"
                            document.getElementById('card-full').style.display = "block"
                        })
                    }, 100);
                    animateCSS('.shadow-card', 'fadeOutRight').then(() => {
                        shadowCard.remove();
                    })
                }
            },
            onDragEnd: function() {
                console.log(draggs[i - 1][0].x)
                console.log(i)
                if (draggs[i].x <= 184.6) {
                    // shadowCard.style.transform = `translateX(0px)`;
                    document.querySelectorAll(`#card-minimal${i} > div`).style.transform = `translateX(0px)`
                }
            }
        });
        console.log("🚀 ~ file: drag.js ~ line 53 ~ teste ~ draggs", draggs)
    }


}