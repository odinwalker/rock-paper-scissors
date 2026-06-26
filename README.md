# rock-paper-scissors
Rock-Paper-Scissors game running in the console

## 项目概述
这是一个在控制台运行的“石头-剪刀-布”游戏，这个项目的重点在与写`javascript`时的思维逻辑。

Play Game ： “此处为游玩连接”

## 实现思路

### 项目功能解析

- 用户输入选择
- 电脑随机返回选择
- 将用户选择和电脑选择进行比较，判断胜负
- 根据胜负各自记分
- 一共5轮游戏，5轮结束，分高者胜利

### 伪代码

```
  Declare humanScore = 0;
  Declare computerScore = 0;

  Loop 5 times (from 1 to 5 rounds);
    Get random choice from computer (rock or paper or scissors);
    Get input from human (rock or paper or scissors);
    If getHumanChoice equals getComputerChoice;
      Print "It's a tie for this round."
    Else if (
        (getHumanChoice is "rock" and getComputerChoice is "scissors") or 
        (getHumanChoice is "scissors" and getComputerChoice is "paper") or 
        (getHumanChoice is "paper" and getComputerChoice is "rock" ))
        print "Human win this round!"
        Increment humanScore by 1;
    Else print "Computer win this round!"
    Increment computerScore by 1;
  End of loop;
  If (humanScore > computerScore)
    print "The final winner is human!"
  Else if (humanScore = computerScore)
    print " The entire game ends in a tie!"
  Else:
    print " The final winner is computer!"
```
