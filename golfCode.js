var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {

  if (strokes === 1) {
    return "Hole-in-one!";
  } else if (strokes === 2) {
    return "Eagle";
  } else if (strokes === 3) {
    return "Birdie";
  } else if (par === 4 && strokes === 4) {
    return "Par";
  } else if (par === 4 && strokes === 5) {
    return "Bogey";
  } else if (par === 4 && strokes === 6) {
    return "Double Bogey";
  } else if (par >= 4 && strokes >= 7) {
    return "Go Home!";
  } else if (par === 5 && strokes === 5) {
    return "Par";
  }

}

golfScore(5, 4);