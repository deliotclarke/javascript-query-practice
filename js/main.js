document.querySelector(".article__header").textContent = "Welcome to the Eliot blog";

const headerClass = document.querySelectorAll(".article__header");

for (let i = 0; i < headerClass.length; i += 1) {
  headerClass[i].classList.add("important");
}

const dash = document.querySelector(".dashed");
dash.classList.remove("dashed");

const footer = document.querySelector(".article__footer");
footer.classList.add("goldenrod");