// code your solution here
// razzle();

function razzle(lawyer = "Billy", target = "'em") {
  console.log(`${lawyer} razzle-dazzles ${target}`);
}

// razzle();
// razzle("Methuselah", "T'challah");

function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

// console.log(saturdayFun("Code"));

const mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

function wrapAdjective(flair = "*") {
  return function (thought = "special") {
    return `You are ${flair}${thought}${flair}!`;
  };
}
