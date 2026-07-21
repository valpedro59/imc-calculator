// Function to calculate IMC
const imcMaker = (userWeight, userHeight) => {
  // Making the operation
  const imc = userWeight / (userHeight * userHeight);

  //   conditional statement to determinate the category by imc
  let category = "";
  if (imc < 18.5) {
    category = "maigreur";
  } else if (imc >= 18.5 && imc < 24.9) {
    category = "normal";
  } else if (imc >= 25 && imc < 29.9) {
    category = "surpoids";
  } else if (imc >= 30) {
    category = "obésité";
  }
  //   outpot the result
  console.log(
    `Votre IMC est : ${imc.toFixed(2)} . vous etes dans la categorie : ${category}`,
  );
  //   return the final value
  return category;
};

// making some tests
imcMaker(96, 1.7);
imcMaker(66, 1.73);
imcMaker(96, 1.8);
imcMaker(50, 1.68);
