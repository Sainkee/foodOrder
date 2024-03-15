let orderbtn = document.querySelector(".orderbtn");

let imgDiv = document.getElementsByClassName("imgDiv");

let orderId = document.getElementById("orderId");
let orderIdDiv = document.querySelector(".orderIdDiv");
let checkVal = document.querySelectorAll('input[type="checkbox"]');
let foodImg = document.querySelector("#foodImg");
function delay(params) {
  return Math.floor(Math.random() * 4000 + 2000);
}

function randomId() {
  return Math.floor(Math.random() * 1000 + 100);
}

console.log(checkVal);

orderbtn.addEventListener("click", () => {
  orderId.innerText = "";
  orderIdDiv.style.display = "none";

  let model = [];
  checkVal.forEach((data) => {
    if (data.checked) {
      model.push(data.value);
    }
  });
  foodImg.style.display = "none";
  if (model.length === 0) {
    alert("abe food to kharid le garib");
    return;
  }
  orderbtn.disabled = true;

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, delay());
  }).then(function loadImg() {
    orderId.innerText = randomId();
    orderIdDiv.style.display = "block";

    let imageToShow = Math.floor(Math.random() * model.length);
    switch (model[imageToShow]) {
      case "burger":
        foodImg.src =
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60";
        break;
      case "fries":
        foodImg.src =
          "https://images.unsplash.com/photo-1576107232684-1279f390859f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60";

        break;

      case "drink":
        foodImg.src =
          "https://images.unsplash.com/photo-1437418747212-8d9709afab22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJpbmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60";
        break;
      default:
        break;
    }
    foodImg.style.display = "block";
    orderbtn.disabled = false;
    checkVal.forEach((data) => {
      data.checked = false;
    });
  });
});
