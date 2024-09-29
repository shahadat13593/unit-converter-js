document.addEventListener("DOMContentLoaded", () => {
  const calcDiv = document.querySelector(".calc-div");
  const btnDiv = document.querySelector(".btn-div");
  const calcTitle = document.querySelector("#calc-title");
  const ResultTitle = document.querySelector("#resultTitle");
  const result = document.querySelector("#result");
  const btnConvert = document.querySelector(".btn-convert");
  const inputAll = document.querySelectorAll(".radio-input");
  const btnClear = document.querySelector(".btn-clear");
  const update = function (cls, title, resultTitle) {
    calcDiv.classList.remove(cls);
    btnDiv.classList.remove(cls);
    calcTitle.textContent = title;
    ResultTitle.textContent = resultTitle;
  };
  const clear = () => {
    document.querySelector("#number").value = "";
    document.querySelector("#result").value = "";
  };

  for (const input of inputAll) {
    input.addEventListener("change", (e) => {
      if (e.target.id === "kmToMiles" && e.target.checked) {
        clear();
        update("hidden", "Kilometer", "Mile");
        btnConvert.addEventListener("click", () => {
          const number = Number(document.querySelector("#number").value);
          result.value = (number * 0.621371).toFixed(4);
        });
      } else {
        clear();
        update("hidden", "Celsius", "Fahrenheit");
        btnConvert.addEventListener("click", () => {
          const number = Number(document.querySelector("#number").value);
          result.value = (number * (9 / 5) + 32).toFixed(2);
        });
      }

      btnClear.addEventListener("click", clear);
    });
  }
});
