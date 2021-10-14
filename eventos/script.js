const btn = document.querySelector("button");

//Event.stopPropagation()
//Event.preventDefault()
//Event.target

const hacerClick = (e) => {
  console.log("click en el boton");
  console.log(e.target);
  console.dir(e.target);
  e.stopPropagation();
};

// const copia = hacerClick.bind(null, "Hola");

btn.addEventListener("click", hacerClick);

document.body.addEventListener("click", (e) => {
  console.log("click en el body");
  console.log(e.target);
});
// btn.addEventListener("click", (e) => hacerClick());
// btn.addEventListener("click", copia)
