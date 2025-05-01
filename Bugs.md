# MY CHANGES

1. **Removed** the `setInitialOverlay` function as it performs the same operation as the `setOverlay()` function on line 153. Initialized `setOverlay()` with `room[0]` to render the first room's details.

2. **Switched** the variable names of the warm and cool overlay on lines 145 and 151 to match the logical background color of ice and sun.

3. On **line 206**, changed the input value from the entire room object (`room`) to `room.name` to correctly extract the name.

4. On **line 243**, added `()` to execute `increaseTemperature` immediately and store it in the `increasedRoom` variable. Removed `()` in **line 246**.

5. Did the **same** on **lines 264 and 267**.

6. On **lines 26, 61, 96, and 131**, ensured that the incremented current temperature does not go below 10.

7. On **lines 30, 65, 100, and 135**, ensured that the decremented current temperature does not go below 10.

8. On **lines 310 and 315**, updated the error messages to reflect the warm and cool temperature range limits.

9. In the `index.html` file:
   - On **lines 104 and 110**, changed the `max` input to 24 (from 22) for the `coolInput` ID and to 25 (from 22) for the warm input ID.
   - In `main.js`, changed the limit of the cool temperature from 25 to 24 on **line 341**.

10. **Added** an event listener to the warm and cold buttons on **line 283** to update the current temperature to the respective preset values.

11. **Removed** the global button selector in the CSS file on **line 19** to prevent it from overriding individual button styles.

12. On **line 384**, changed the comparison operator to `<` (less than) to match the current temperature comparison logic.

13. On **lines 320 and 321**, added code to hide the error message when the close icon is clicked in the preset modal.

14. Ensured the **cold and warm preset temperatures** fall back to the current temperature if they exceed their respective limits.

15. **Refactored** the temperature control event handlers (increase/decrease) to remove repeated code on **line 231**.

16. **Used event delegation** on the parent of the cool and warm preset buttons instead of selecting them individually using `getElementById` on **line 227**.

17. **Added** a `setTimeout()` in the preset input event handler to hide the error message after 5 seconds.
