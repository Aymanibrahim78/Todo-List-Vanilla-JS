const uplode = document.querySelector("#upp");
const container = document.querySelector("#container");
const input = document.querySelector("input");
const form = document.querySelector("form");
const task = document.querySelector(".task");
const finsh = document.querySelector(".mohma");
const s = document.querySelector(".addTasks");

form.addEventListener("submit", (eo) => {
  eo.preventDefault();
  const task = `      <div class="task">
<i class="fa-solid fa-star fa-2xl"></i>
<p lang="ar" class="taskText" >${input.value}</p>
<div>
  <i class="fa-solid fa-trash-can fa-2xl"></i>
  <i class="fa-solid fa-face-angry fa-2xl"></i>
</div>
</div>`;
container.innerHTML += task;

input.value = "";
input.placeholder = "هتعمل ايه يا معلم ؟؟ تانى";
    container.getElementsByClassName("addTasks")[0].remove()


});





container.addEventListener("click", (eo) => {
  if (eo.target.className == "fa-solid fa-trash-can fa-2xl") {
    eo.target.parentElement.parentElement.remove();
  } else if (eo.target.className == "fa-solid fa-face-angry fa-2xl") {
    eo.target.parentElement.parentElement
      .getElementsByClassName("taskText")[0]
      .classList.add("finsh");
    eo.target.classList.add("dn");
    const heart = `<i class="fa-solid fa-heart fa-2xl"></i>`;
    eo.target.parentElement.innerHTML += heart;
  } else if (eo.target.className == "fa-solid fa-heart fa-2xl") {
    eo.target.parentElement.parentElement
      .getElementsByClassName("taskText")[0]
      .classList.remove("finsh");
    eo.target.classList.add("dn");
    const angry = `<i class="fa-solid fa-face-angry fa-2xl"></i>`;
    eo.target.parentElement.innerHTML += angry;
  } else if (eo.target.className == "fa-solid fa-star fa-2xl") {
    eo.target.classList.toggle("star");
    container.prepend(eo.target.parentElement);
  } else if (eo.target.className == "fa-solid fa-star fa-2xl star") {
    eo.target.classList.remove("star");
  }



});


