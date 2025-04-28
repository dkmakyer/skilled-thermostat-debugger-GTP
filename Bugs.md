
1. the dropdown to display the various rooms are not dynamically displaying the data for every room that is clicked on
2. you cant set the temperature from the buttons
3. the temperature limit is not working as expected even if the limit is valid


MY CHANGES
1. removed "  document.querySelector(
    ".room"
  ).style.backgroundImage = `url('${rooms[0].image}')`;" on line 154 from the set overlay code since it does the same as the one below in updating the image with the overlay effect.

2. Switched the variable names of the warm and cool overlay on line 145 and 151 to match the logical background color of ice and sun.

3. On line 206, the original code extracts the entire room object instead of the name as an input value, changed it from "room" to "room.name".

4. on Line 243,  added the () to execute the increase temperature immediately and store it in the increase room variable. removed the () in line 246.

5. Did same on line 264 and 267.

6. On lines 26, 61, 96 and 131, changed the incremented current temperature to be not go below 10

6. On lines 30, 65, 100 and 135, changed the incremented current temperature to be not go below 10