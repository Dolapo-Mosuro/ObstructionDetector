Task

You have been invited to work within a team of 70 people. Each member of the team will work on individual modules, which means the project contains 70 modules. Your code must be perfectly independent and yet, able to easily work with other modules in the team. The project is a scientific exhibition project that helps explorers determine the best route to follow while digging to the core of the earth. Your module is to help them in calculating the best way to avoid hitting impenetrable rocks under the earth. The following parameters will help you:

a. Your module works with 2 paramets, which are location a and location b.
b. Your module looks at point a to b to determine if there are any obstructions and if the obstructions are impenetrable
c. If there are no obstructions, your module returns false, if there are obstructions your module returns true
d. An obstruction would typically be determined by how long it will take to go from a to b
e. An obstruction is considered impenetrable determine time exceeds expected by 60 mins.

Assumptions:

The following assumptions are true:

a. Another member of the team already developed a module to calculation time taken from one distance to another, you can simulate the result from this module (You don't need to develop this module, just simulate the results from the module in minutes).
b. Your module knows the following: 1. the speed of the machine 2. the distance between a - b (in miles), and 3. the expected time it will take to get from a - b (calculate expected time by using speed and distance).
c. the above speed, distance and time taken cannot be hardcoded into your module because point a and b are never fixed
