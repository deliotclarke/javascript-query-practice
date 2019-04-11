const text = document.querySelector(".article__header");
text.textContent = 'Welcome to the blog of ELIOTTTT';

const headerClass = document.querySelectorAll(".article__header");

for (let i = 0; i < headerClass.length; i += 1) {
  headerClass[i].classList.add("important");
}

headerClass.forEach(header => {
  header.classList.add("forEach");
})

const dash = document.querySelector(".dashed");
dash.classList.remove("dashed");

const footer = document.querySelector(".article__footer");
footer.classList.add("goldenrod");