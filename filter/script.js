const students = [
    {name: "Andi", age: 20, city: "Bandung" },
    {name: "Emanon", age: 22, city: "Nganjuk" },
    {name: "Reki", age: 20, city: "Old home" },
    {name: "Rakka", age: 20, city: "Central Java" },
    {name: "Arisu", age: 20, city: "Bali" }
];

const searchInput = document.getElementById("search");
const dataList = document.getElementById("dataList");
const searchBy = document.getElementById("searchBy");

function displayData(data) {
    const query = searchInput.value.toLowerCase();
    dataList.innerHTML = "";
    data.forEach((student) => {
        const listItem = document.createElement("li");
        const highlightedName = student.name.replace(
            new RegExp(query, "gi"),
            (match) => `<mark>${match}</mark>`
        );
        const highlightedAge = student.age.toString().replace(
            new RegExp(query, "gi"),
            (match) => `<mark>${match}</mark>`
        );
        listItem.innerHTML = `${highlightedName} - ${highlightedAge} tahun - ${student.city}`;
        listItem.classList.add("list-item");
        dataList.appendChild(listItem);
    });
}

displayData(students);

searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filterKey = searchBy.value;
    const filteredData = students.filter((student) =>
        student[filterKey].toString().toLowerCase().includes(query) 
    );
    displayData(filteredData);
});