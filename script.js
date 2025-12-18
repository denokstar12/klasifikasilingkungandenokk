function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "" || pass === "") {
    alert("Username dan password harus diisi!");
    return;
  }

  if (pass !== "12345") {
    alert("Password salah!");
    return;
  }

  document.getElementById("user").innerText = user;
  document.getElementById("loginPage").style.display = "none";
  document.getElementById("mainPage").style.display = "block";
}

function logout() {
  document.getElementById("mainPage").style.display = "none";
  document.getElementById("loginPage").style.display = "block";
}

function classify(type) {
  let result = "";

  if (type === "tercemar") {
    result = "AI mendeteksi lingkungan tercemar ⚠️. Edukasi: Kurangi sampah dan lakukan daur ulang.";
  } else if (type === "hijau") {
    result = "AI mendeteksi lingkungan hijau 🌱. Edukasi: Pertahankan kebersihan dan kelestarian alam.";
  } else if (type === "polusi") {
    result = "AI mendeteksi polusi lingkungan 🏭. Edukasi: Kurangi emisi dan tingkatkan kepedulian sosial.";
  }

  document.getElementById("result").innerText = result;
}
