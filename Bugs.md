MY CHANGES
1. removed the setInitialOverlay function as it performs the same operation as the set overlay function on line 153. Initialized the setOverlay() with room[0] to render thr first room's details.

2. Switched the variable names of the warm and cool overlay on line 145 and 151 to match the logical background color of ice and sun.

3. On line 206, the original code extracts the entire room object instead of the name as an input value, changed it from "room" to "room.name".

4. on Line 243,  added the () to execute the increase temperature immediately and store it in the increase room variable. removed the () in line 246.

5. Did same on line 264 and 267.

6. On lines 26, 61, 96 and 131, changed the incremented current temperature to be not go below 10

7. On lines 30, 65, 100 and 135, changed the incremented current temperature to be not go below 10

8. On line 310 and line 315, changed the error message to be limited to the warm temperature range and the cool temperature range.

9. On line 104 and line 110 in the index.html file, changed the max input to 24 from 22 for the coolInput iD, and 22 to 25 for the warm input ID to meet the edge case temperature requirements for the room. Also changed the limit of the cool temperature from 25 to 24 on line 341 of the main.js file

10. added an event listener to the warm and cold buttons on line 283 to change the current temperature to the cold or warm preset temperatures

11. removed the button selector in the css file in line 19 so that the individual css code for those features are not overwritten

12. changed the comparison operator on line 384 to use a less than operator so it matches the current temperature

13. Added the code to the close preset event handler on line 320 and 321 to hide the error message when the close icon has been clicked.

14. Made the cold and warm preset temperatures fallback to the the current temperature if they went below or above their required limit.

15. refactored the temperature control event handlers for increasing and decreasing the current temperature to avoid repeating the same code in both event handlers on line 231.

16. Used event delegation on the parent of the cool and warm preset buttons instead of selecting them individually using the getElementById method on line 227.

17. Added a setTimeout() to the preset input event handler to handle hiding the error message after 5 seconds