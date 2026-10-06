function insert_Row() {
  const table = document.getElementById("sampleTable");
  const row = table.insertRow(-1);
  const firstCell = row.insertCell(0);
  const secondCell = row.insertCell(1);

  firstCell.textContent = "New cell1";
  secondCell.textContent = "New cell2";
}