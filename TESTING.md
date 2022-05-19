### W3C HTML Validator

## Home Page

![Home Page](doc/screenshots/code-validator-homepage.png)

## Game Page

![Game Page](doc/screenshots/code-validator-gamepage.png)

## End Game Page

![End Page](doc/screenshots/code-validator-endpage.png)

## Highscore Page

![Highscores Page](doc/screenshots/code-validator-highscorespage.png)

## CSS Pages

![Css](doc/screenshots/code-validator-css.png)

## Bugs

- When a user opened up the quiz with a device with a shorter height, this gap would appear moving the some elements out of frame and creating a gap below the page.
To fix this I changed the overlay and video elements position's from absolute to fixed.

![White gap bug](doc/screenshots/gap-bug.png)

- When the timer gets to zero its continues into the minus numbers. To fix this...

![Timer bug](doc/screenshots/timer-bug.png)

- When the game page loads, there is currently no timer there. A second later the timer spawns in via the javascript. This then would shift all the elements down a bit during the gameplay. This disrupts the smoothness of the game. 

- To fix this I wrote 0: 30 in the timer div as a place holder, so it has some text there when it loads which prevents the downwards shift.

![Timer bug1](doc/screenshots/timer-bug1.png)
![Timer bug2](doc/screenshots/timer-bug-2.png)

### Browser Compatibility

## Chrome

I have found no compatibility issues using the chrome browser.

- This is the home page in tablet mode

![Home page](doc/screenshots/tablet-homepage.png)

- This the game page in mobile mode

![Game page](doc/screenshots/mobile-gamepage.png)

## Safari

- When the user presses on the save button, the user is then directed to an error page.

![Compatibility bug](doc/screenshots/compatibility-issue.png)

- This the highscores page in tablet mode

![Highscores page](doc/screenshots/highscores-tablet.png)

### Responsiveness

## Desktop

Here are two screenshots of the game page and end page in desktop mode.

![Game page](doc/screenshots/desktop-gamepage.png)
![End page](doc/screenshots/desktop-endpage.png)

## Tablet

Here are two screenshots of the game page and end page in tablet mode.

![Home page](doc/screenshots/tablet-homepage.png)

![Highscores page](doc/screenshots/highscores-tablet.png)

## Mobile

Here are two screenshots of the game page and end page in mobile mode.

![Game page](doc/screenshots/mobile-gamepage.png)
![End page](doc/screenshots/mobile-endpage.png)
