const fs = require("node:fs");
const fsPromises = require("node:fs/promises");

console.log(
  "Promise output:" + doesFileExistPromise("./pokemonStats.json")
);
console.log(
  "sync output:" + doesFileExistSync("./pokemonStats.json")
);

(async () => {
  let asyncResult = await doesFileExistAsync("./pokemonStats.json");
  console.log("Async output:" + asyncResult.size);
})();

async function doesFileExistAsync(targetPath) {
  return await fsPromises.stat(targetPath);
}

function doesFileExistPromise(targetPath) {
  let result = false;

  return new Promise((resolve, reject) => {
    fsPromises
      .stat(targetPath)
      .then((statData) => {
        if (statData.size || statData.birthtimeMs) {
          result = true;
          resolve(result);
        } else {
          resolve(result);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });

  //   fs.exists(targetpath, (existResult) => {
  //     result = existResult;

  //     return result;
  //   });
}

function doesFileExistSync(targetpath) {
  let result = false;

  if (fs.existsSync(targetpath)) {
    result = true;
  } else {
    result = false;
  }

  // Find file logic goes here

  return result;
}

function createJsonFile(targetpath, data) {
  // Todo: wishlist item because a json file already exist for us
}

async function loadDataFromFile(targetPath) {
  let data = null;
  let doesFileExist = await doesFileExistAsync(targetPath);

  if (doesFileExist) {
    data = await fsPromises.readFile(targetPath, {encoding :'utf-8'});
    data = JSON.parse(data);
  }

  return data;
}
(async () => {
  let fileData = await loadDataFromFile("./pokemonStats.json");
  console.log(fileData);
})();

/*

*/

function saveDataToFile(targetpat, data) {
  //  TODO:Write  data to json file logic goes here
}
