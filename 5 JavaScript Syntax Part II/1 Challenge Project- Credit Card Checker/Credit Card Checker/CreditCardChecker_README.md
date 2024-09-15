# Javascript Syntax Part II > Challenge Project: Credit Card Checker
## Project Description
### Overview
This project is slightly different than others you have encountered thus far on 
Codecademy. Instead of a step-by-step tutorial, this project contains a series 
of open-ended requirements which describe the project you’ll be building. There 
are many possible ways to correctly fulfill all of these requirements, and you 
should expect to use the internet, Codecademy, and other resources when you 
encounter a problem that you cannot easily solve.

### Project Goals
Context: The company that you work for suspects that credit card distributors 
have been mailing out cards that have invalid numbers. In this project, you have
the role of a clerk who checks if credit cards are valid. Every other clerk 
currently checks using pencil and paper, but you’ll be optimizing the 
verification process using your knowledge of functions and loops to handle 
multiple credit cards at a time. Unlike the other clerks, you can spend the 
rest of your time relaxing!

As you progress through the steps, use the terminal and console.log() statements
 to check the output of your loops and functions.

### Setup Instructions
If you choose to do this project on your computer instead of Codecademy, you can
download what you’ll need by clicking the “Download” button below. You’ll need 
to open and work in main.js in a text editor. To edit main.js, use your text 
editor of choice. If you need a recommendation or help to install an editor, 
we recommend looking into our article about setting up a text editor for web
development (Follow along until you get to the section: “Practice: Let’s Make a
Project”). To run main.js on your computer, you will need to install Node.js. 
If you need help installing Node.js, read our article on installing Node.

## Project Requirements
Look over the starter code. There are 15 arrays that each contain the digits of 
separate credit card numbers. They all have prefixes to reflect their status, 
i.e. variables that start with valid contain a valid number, whereas invalid do 
not, and mystery variables can be either. There is also a batch array that 
stores all of the provided credit cards in a single array.

To find out if a credit card number is valid or not, use the 
[Luhn algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm#Description).
Generally speaking, an algorithm is a series of steps that solve a problem — the
Luhn algorithm is a series of mathematical calculations used to validate certain
identification numbers, e.g. credit card numbers. The calculations in the Luhn 
algorithm can be broken down as the following steps:

 1. Starting from the farthest digit to the right, AKA the check digit, iterate 
 to the left.
 2. As you iterate to the left, every other digit is doubled (the check digit is
  not doubled). If the number is greater than 9 after doubling, subtract 9 from 
  its value.
 3. Sum up all the digits in the credit card number.
 4. If the sum modulo 10 is 0 (if the sum divided by 10 has a remainder of 0) 
 then the number is valid, otherwise, it’s invalid.

Here’s a [visual](https://content.codecademy.com/PRO/independent-practice-projects/credit-card-checker/diagrams/cc%20validator%20diagram%201.svg?_gl=1*1f6ztra*_gcl_au*Njc1Nzk3ODU1LjE3MjU5MjQ3ODM.*_ga*MzgyODM0ODgxMy4xNzE4MTMwNzgz*_ga_3LRZM6TM9L*MTcyNjM1MzM2Ni4xMjUuMS4xNzI2MzU3NDc1LjE1LjAuMA..)
that outlines the steps. Check your function using both the provided valid and 
invalid numbers.

## Files
`main.js`

## Note:
To run node: $ node main.js