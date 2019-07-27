# Project 5: JavaScript Calculator

### Roles
* Overall Project Manager: Pranay Byreddy
* Coding Manager: Zhengqi Dong
* Testing Manager: Yi Zhao
* Documentation: Trevor Shirey

### Description
This Project implements a basic functional calculation. Based on Microsoft Calculator in Windows 10, we designed a new calculator to provide a calculator with colorful interface and innovative functionalities. The calculator supports following basic functionalities: binary operation (including +, -, ×, ÷, module and exponent), unary operation (including square, square root, negate, reverse), and memory functionality (MC, MR, M+, M-, MS). Also this function has another skin for dark mode, a history board to show calculation history, as well as a memory bar to show the stored memory. (You can clean text inside of history board through additional side button).

### File System
This project includes following files: 
* README.md
* style: includes stylesheets: style.css and dark_mode.css.
* test: includes test plan and some unit tests for this project.
* script: includes all javascript files:
- script.js: define core variables and functions.
- number_keys.js: listener for .,1,2,3,4,5,6,7,8,9,0 buttons
- evaluate.js: evaluate the expression and create listener for "=".
- binary_operator.js: +, -,  ×, ÷, module and exponent functionalities.
- unary_operator.js: square, square root, negate, reverse.
- clear_keys.js: C, CE, DEL functionalities.
- side_buttons: change skin, clear history.
- memory_keys: MC, MR, M+, M-, MS and memory functionalities.
* other: Includes conversionCalculator.html. PLEASE DO NOT GRADE this file as it's not finished yet but it provides informations on personal contributions/workload distribution. 

### Contributions
* Trevor Shirey: wrote the mod and power functions and added them to binary operators switch case. Wrote the unary listeners and unary functions. I also helped with degree/radian conversion.
* Zhengqi Dong: Using javascript to implement the memory functionalities which includes the Memory recall, Memory clear, Memory store, Memory plus and Memory subtract, in the memory_key.js file. In addition, added the memory display box to show the result after the operations. Testing: Did unit testing for each memory functions, and write the testing plan for integration test, which can be used for validating many boundary and special cases.
* Yi Zhao: Implemented calculator.html, style.css and dark_mode.css to design DOM structure and make the calculator showing properly and clearly. Implemented script.js to create core variables and helper functions, implemented functionalities for binary operators, clear buttons, evaluation process, number buttons and side buttons. (binary_operator.js, clear_keys.js, evaluate.js, number_key.js, side_button.js). Testing: Did unit testing for binary operations. Did integration testing for binary operation, evaluation process, and number buttons. Did integration testing for clear keys (C, CE, DEL). 
* Pranay Byreddy: Implemented History feature for all operations with clear history option. Implemented all trigonometric functions for radians/degree and also allowed conversion between the two.










# -Full-Stack-Project04_Calculator
