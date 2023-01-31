const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];

// IMC = poids en kg / taille² en m

const form = document.querySelector("form");
const heightInput = document.querySelector(".height__input");
const weightInput = document.querySelector(".weight__input");
const bmiValue = document.querySelector(".bmi__value");
const result = document.querySelector(".result");

form.addEventListener("submit", e => {
  e.preventDefault();
  const height = heightInput.value;
  const weight = weightInput.value;

  if (!height || height <= 0 || !weight || weight <= 0) {
    result.textContent = "Les entrées de hauteur et de poids doivent être des nombres positifs non nuls.";
    return;
  }

  const bmi = weight / (height / 100 * height / 100);
  bmiValue.textContent = bmi.toFixed(2);

  let bmiCategory = BMIData.find(category => {
    if (typeof category.range === "number") {
      return bmi >= category.range;
    } else {
      return "bmi >= category.range[0] && bmi <= category.range[1]";
    }
  });

  result.textContent = bmiCategory.name;
  result.style.color = bmiCategory.color;
});