/Creating an array of colors
const colors = ["#E602B1", "#0228F0", "#0DD980", "#E4F002", "#190CF2", "#DB004F", "#F2290C", "#E85A0C", "#0FEB00", "#DB0050", "#7901EB", "#36BAEB"
]

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

console.log(colors.length);

//Getting the elements by their ID and storing it in a variable
const body = document.querySelector("body");
const btn = document.getElementById("btn");
const code = document.getElementById("code");

//Creating a method to generate random number and return to where t was called
hexColorGenerator = () => {
  hexColor = "#";
  const length = numbers.length;
  // const randomNumber = Math.floor(Math.random() * length);
  // console.log(Math.floor(Math.random() * length) + 1);
  for (let i = 1; i <= 6; i++) {
    randomNum = Math.floor(Math.random() * length);
    hexColor += numbers[randomNum];
  }
  return hexColor;
}
//Adding event listener to the button --> click event
btn.addEventListener("click", () => {
  body.style.backgroundColor = hexColorGenerator();
  // code.textContent = colors[randomNumGenerator()];
  code.textContent = hexColorGenerator();
})
