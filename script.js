let services = [
  { title: "Web Design", category: "Design" },
  { title: "Logo Making", category: "Graphics" }
];

function displayServices(data) {
  const container = document.getElementById("services");
  container.innerHTML = "";

  data.forEach(service => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h3>${service.title}</h3>
      <p>${service.category}</p>
    `;
    container.appendChild(div);
  });
}

function addService() {
  const title = document.getElementById("title").value;
  const category = document.getElementById("category").value;

  if (title && category) {
    services.push({ title, category });
    displayServices(services); 
  }
}

document.getElementById("search").addEventListener("input", function () {
  const value = this.value.toLowerCase();
  const filtered = services.filter(s =>
    s.title.toLowerCase().includes(value)
  );
  displayServices(filtered);
});

displayServices(services);
