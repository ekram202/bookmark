var BookmarkerName = document.getElementById("Bookmarker-Name");
var WebsiteURL = document.getElementById("Website-URL");
var modal = document.getElementById("myModal");
var modal = document.getElementById("myModal");
var close = document.getElementById("close")

var allUrl = [];

if (localStorage.getItem("urls") !== null) {
  allUrl = JSON.parse(localStorage.getItem("urls"));
}
display();

function addUrl() {
  if (valdation() == true && valdationurl() == true) {
    var information = {
      name: BookmarkerName.value,
      url: WebsiteURL.value,
    };
    allUrl.push(information);
    localStorage.setItem("urls", JSON.stringify(allUrl));
    display();
    clear();
  } else {
    modal.style.display = "block";
  }
}

function clear() {
  (BookmarkerName.value = ""), (WebsiteURL.value = "");
}

function display() {
  cartona = "";
  for (i = 0; i < allUrl.length; i++) {
    cartona += `<tr>
<td>${i + 1}</td>
<td>${allUrl[i].name}</td>
<td>
<button onclick="visit(${i})" class="btn btn-warning btn-sm">Visit</button>
</td>
<td>
  <button onclick="deleteitem(${i})" class="btn btn-danger btn-sm">Delete</button>
</td>
</tr>`;
  }
  document.getElementById("tableData").innerHTML = cartona;
}
function visit(index) {
  window.open(allUrl[index].url);
}

function deleteitem(index) {
  allUrl.splice(index, 1);
  localStorage.setItem("urls", JSON.stringify(allUrl));
  display();
}

function valdation() {
  regex = /^[A-Za-z]{3,10}$/;
  text = BookmarkerName.value;
  if (regex.test(text) == true) {
    BookmarkerName.classList.add("is-valid");
    BookmarkerName.classList.remove("is-invalid");
    return true;
  } else {
    BookmarkerName.classList.add("is-invalid");
    BookmarkerName.classList.remove("is-valid");
    return false;
  }
}
function valdationurl() {
  regex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;
  text2 = WebsiteURL.value;
  if (regex.test(text2) == true) {
    WebsiteURL.classList.add("is-valid");
    WebsiteURL.classList.remove("is-invalid");
    // mess.classList.add("d-none");
    return true;
  } else {
    WebsiteURL.classList.add("is-invalid");
    WebsiteURL.classList.remove("is-valid");
    // mess.classList.remove("d-none");
    return false;
  }
}


  close.onclick = function() {
      modal.style.display = "none";
  }

  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

