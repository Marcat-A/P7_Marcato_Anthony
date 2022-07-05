export const handleErrors = (err) => {
  const zone = document.getElementById("errors");
  if (err.message.includes("Username is alredy registered")) {
    zone.innerHTML = '<div id="errors" style={{ display: "none" }}></div>';
  }
};
