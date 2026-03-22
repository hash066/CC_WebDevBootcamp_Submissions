function addToDo() {
    const title = document.getElementById("title");
    const desc = document.getElementById("desc");

    if (title === "" ) return;

    const li = document.createElement("li");

    li.innerHTML = `
        <strong>${title}</strong><br>
        <span>${desc}</span>
        <button style="margin-left: 10px;">❌</button>
    `;
    li.querySelector("button").onclick = function () {
        li.remove();
    };
    document.getElementById("todos").appendChild(li);

    document.getElementById("title").value = "";
    document.getElementById("desc").value = "";
}