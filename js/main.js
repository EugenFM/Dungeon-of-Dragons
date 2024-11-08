//Example fetch using DnD5eAPI - place subclasses in ul

document.querySelector("button").addEventListener("click", getFetch);

async function getFetch() {
  const choice = document.querySelector("input").value;
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.log("The Network response was NOT ok");
    }
    const data = await response.json();

    // console.log(data.results);
    data.results.forEach((obj) => {
      const li = document.createElement("li");
      li.textContent = obj.name;
      document.querySelector("ul").appendChild(li);
    });
  } catch (error) {
    console.log("error:", error);
  }
}
