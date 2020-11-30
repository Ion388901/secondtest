// Randomly generate a fake allTables JSON file

const fs = require("fs");
const numTables = Math.floor(Math.random() * 10) + 16; // 16 - 26 (exclusive)

let fakeTables = [];
for (i = 1; i < numTables; i++) {
  const chairs = Math.floor(Math.random() * 6) + 2; // 2-8 (exclusive)
  const name = `CDT-10${i}`;
  // const availability = [true, false][Math.round(Math.random())];
  const professor = ["Pedro Lopez", "Maria Hernandez", "Sergio Urbina"][Math.floor(Math.random() * 3)]; // 0-3 (exclusive)
  fakeTables.push({
    name: name,
    capacity: chairs,
    // isAvailable: availability,
    isAvailable: true,
    professor: professor
  });
}

let data = JSON.stringify({
  tables: fakeTables
});
fs.writeFileSync(__dirname + "/allTables.json", data);
