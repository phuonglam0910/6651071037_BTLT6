function getFormvalue() {
  const form = document.forms["form1"];
  const fname = form.elements["fname"].value;
  const lname = form.elements["lname"].value;

  alert("Họ và tên: " + fname + " " + lname);
  return false;
}