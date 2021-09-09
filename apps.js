let friendsArray = ["Paola", "Yesi", "Jess", "Steezy", "Liz"]

for (let i = 0; i < friendsArray.length; i++) {
  console.log(friendsArray[i] + ":")

  for (let G = 99; G >= 1; G--) {
    if (G === 2) {
      console.log("2 lines of code in the file, 2 lines of code; " + friendsArray[i] + " strikes one out, clears it all out, 1 line of code in the file");
    } else if (G === 1) {
      console.log("1 line of code in the file, 1 line of code; " + friendsArray[i] + " strikes one out, clears it all out, no more lines of code in the file");
    } else {
      console.log(G + " lines of code in the file, " + G + " lines of code; " + friendsArray[i] + " strikes one out, clears it all out, " + (G - 1) + " lines of code in the file");
    }
  }
}

