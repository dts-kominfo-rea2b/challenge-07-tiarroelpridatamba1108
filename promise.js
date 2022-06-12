const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (result) => {
  const resultIXX = await promiseTheaterIXX();
  const resultVGC = await promiseTheaterVGC();
  let marah = 0;
  let tidakMarah = 0;
  for (let i = 0; i < resultIXX.length; i++) {
    if (resultIXX[i].hasil === "marah") {
      marah++;
    } else {
      tidakMarah++;
    }
  }

  for (let i = 0; i < resultVGC.length; i++) {
    if (resultVGC[i].hasil === "marah") {
      marah++;
    } else {
      tidakMarah++;
    }
  }

  if (result === "marah") return marah;
  return tidakMarah;
};

module.exports = {
  promiseOutput,
};
