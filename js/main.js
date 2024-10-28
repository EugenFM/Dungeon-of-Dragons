//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const choice = document.querySelector("input").value;
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log(data.name);
      console.log(data.subclasses);
      document.querySelector("h2").innerText = data.name;
      document.querySelector("h3").innerText = data.classes[0].name;

      // get the subclasses names and add them to the DOM (in the ul)
      data.subclasses.forEach((obj) => {
        console.log(obj.name);
        const li = document.createElement("li");
        li.textContent = obj.name;
        let subclassesList = document.querySelector("ul");
        subclassesList.appendChild(li);
      });
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
