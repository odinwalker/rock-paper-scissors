let humanScore = 0;
let computerScore = 0;

/*
这里不用数组来解决，而是通过Math.random（）范围内的随机数分解成三个区间来对应三个选择
Math.random()返回的是区间内的随机浮点数，所以我需要把这个区间的随机浮点数分成三份，每一份对应一个输出选项
还可以通过Math.random（）* 3来扩大区间，并通过Math.floor（）向下取整来简化
*/
//获取电脑的随机选择
function getComputerChoice() {
  //使用一个变量来存储随机数
  const randNumber = Math.random() * 3;
  //通过条件判断return 给函数
  if (randNumber <= 1) {
    return "Rock";
  } else if (randNumber <= 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

//获取人类的选择
function getHumanChoice() {
  return (answer = prompt("Please enter one of Rock, Paper, or Scissors : "));
}

//单轮游戏逻辑
function playRound(humanChoice, computerChoice) {
  if (!humanChoice) {
    return "Game over or cancelled";
  }
  //获取的所有人类输入都首字母大写
  const cleanHumanChoice =
    humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
  //比较所有可能的选择，制定输赢的输出结果，并为每一轮获胜者加分
  if (cleanHumanChoice === computerChoice) {
    return "It's a tie for this round!";
  } else if (cleanHumanChoice === "Rock" && computerChoice === "Scissors") {
    humanScore = humanScore + 1;
    return "Human win this round!";
  } else if (cleanHumanChoice === "Paper" && computerChoice === "Rock") {
    humanScore = humanScore + 1;
    return "Human win this round!";
  } else if (cleanHumanChoice === "Scissors" && computerChoice === "Paper") {
    humanScore = humanScore + 1;
    return "Human win this round!";
  } else {
    computerScore = computerScore + 1;
    return "Computer win this round!";
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    //定义变量来循环获取电脑和人类的选择
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    //定义变量来获取单轮游戏的结果
    const result = playRound(humanSelection, computerSelection);
    console.log(result);
  }
  //判断比分，比较出最终的胜利者
  if (humanScore > computerScore) {
    console.log("Human win this Game!");
  } else {
    console.log("Computer win this Game!");
  }
}

playGame();
