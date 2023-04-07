README FOR A3



Index.html :

The HTML file contains the structure of a webpage and references a style sheet and an image. It

also includes a form for booking a flight and a section with information about the airline

company. The java script file is used for handling the form in the HTML file. I have also

implemented Notifications on my index.html page, when you refresh the page you’ll be able to

see the notification on the left corner where I used Js function separately and linked it to the
index.html page.

The HTML file has a header section with a navigation menu and a gallery of images. The

navigation menu has three links to the home page, an about page, and a destinations page. The

gallery of images has four thumbnails and a preview section to display the selected image. I

used div class for the photo gallery which is linked to java script separately.

The form in the HTML file allows users to search for flights by entering a flight number and

selecting a seat class from a drop-down menu. The java script file contains a function that

handles the form's submission and checks whether the selected seat class is overbooked. If the

seat class is first class and overbooked, the function displays a message that the user will

receive a free upgrade to business class. If the selected seat class is business or economy, the

function displays a message indicating the selected class. I have used while, if and else if as the

conditional for displaying the message.

The HTML file also includes an audio element that plays a music file when the page is loaded.

Everything else that’s below the audio element was used previously in A1 and A2.

Overall, my index.html has 6 images in which three images were taken from google photos and

the other three were originally taken by me using my phone.


ACM Citation: Say hello to Air Canada Rouge. Air Canada Rouge. Retrieved April 6, 2023
from https://flyrouge.com/ca/en/index.html

File structure for index.html:

index.html

Style.css

script.js

about.html

Destinations.html

Asset/

unnamed.jpg

IMG_3154.jpg

IMG_1026.JPG

photo-2018-1c.jpeg

air-canada-a220-business-class-09.jpeg

new-food.jpeg

dji_fly_20230220_105924_749_1676916324231_photo_optimized.jpg


Bloody-Sweet-MassTamilan.dev.mp3





About.html:

The code for about.html has various elements to create a webpage. The HTML file is composed

of different sections, such as the head and body sections.

The head section includes the title tag, which sets the title of the webpage displayed in the

browser's title bar. It also includes links to external files, such as the Style.css file for styling the

webpage, and an image file for the favicon.

The body section is where the main content of the webpage is located. It includes headings,

paragraphs, and ordered list tags to organize and display information about starting an airline
company.

The code also includes an iframe tag that embeds a YouTube video player on the webpage.

Additionally, it has a script section that defines JavaScript functions to change the background

color of the webpage by clicking on corresponding buttons. There is a code snippet where

there is a function that allows the user to change the background color and text color of the

webpage by selecting from three different color schemes: blue, green, or red. When a user

clicks on one of the buttons, the corresponding function sets the class name of the body

element to the appropriate color scheme. The setBlue (), setGreen (), and setRed () functions

change the background color of the webpage to blue, green, or red, respectively. This

functionality is achieved using JavaScript, which is embedded in the HTML code.

Overall, it simply defines the structure and content of a webpage using HTML, CSS, and
JavaScript.


ACM CITATION: 2020. Ratan Tata's aviation experience: Mega icons: Season 2: National
Geographic. YouTube. Retrieved April 6, 2023, from https://youtu.be/Oy3MZude24o



Style.css:

This file contains CSS styles that are used to style the HTML document. The purpose of CSS is to
add style to the different elements in the HTML document to improve the overall look and feel
of the web page.

The main code in this section uses media queries to adjust the styling of the webpage based on

the screen size. The code sets different font sizes, padding, margins, and flex-direction for

different screen sizes. This ensures that the webpage displays optimally across various devices,

including mobile phones, tablets, and desktops. The code is organized into four media queries,

each with specific rules that are applied to a range of screen sizes.

The CSS code provided for Splash defines the styles for a splash screen, a gallery of images with

thumbnails and a preview of the selected image. The splash screen has a fixed position that

covers the entire viewport with a white background. The gallery and thumbnails are displayed

using flexbox, and the thumbnails are sized to be 150px by 150px with a margin of 10px. The

preview of the selected image is displayed below the thumbnails with a margin-top of 20px and

has a maximum width and height of 500px.

Other than that, the other part of code contains CSS styles to apply a 1-pixel solid border to all

elements, add padding to all elements, set box-sizing to border-box to include padding and

borders in the element's total width, and style different HTML elements such as tables, lists,

headers, and navigation bars. Additionally, I have defined styles for a grid layout, images, and

text alignment. Additionally, I have used CSS for proper organization and for the viewers to

easily understand, with comments included to explain what each block of styles does.

Overall, this page is a collection of CSS styles that can be applied to an HTML document to give

it a consistent and visually appealing look.



Destinations.html:


This file contains various HTML elements that are used to display content on a webpage.

The first section of the file includes the page's title, links to external stylesheets, and an image.

The image that’s displayed is of a view from an airport, and it's set to a width of 300 pixels and

height of 500 pixels.


The second section of the file includes a form that prompts the user to enter their flight

number. The form has a submit button that triggers an event listener in JavaScript. When the

user submits the form, the flight number is retrieved, and an alert message is displayed

indicating that the search is being performed. The JavaScript code listens for a submit event on

the form, prevents the default form submission behavior, and extracts the flight number from

the input field.


The third section of the file includes a list of destinations offered by the airline. The list is

displayed in a grid format and includes New York, London, and Paris. The grid part was from

Assignment 2.

The fourth section of the file includes a list of flights and their corresponding layover times

where I used ol, li and ul. This part was from Assignment 2.

The fifth section of the file includes a table with flight details such as flight number, departure

and arrival cities, and departure and arrival times.

The final section of the file includes a video with controls and a source file in MP4 format. The

video is centered on the page and has a width of 1500 pixels and height of 450 pixels.

Overall, this file is a basic HTML file that can be used as a template for an airline website. The

code structure includes various HTML elements that are commonly used to display content on a
webpage.


CITATION: Personal photo and Video (shot taken by me)


Script.js:

The file contains two functions and few conditional statements. The first conditional statement

checks if the user has granted permission for notifications. If not, it requests permission. The

second conditional statement checks if the user has granted permission for notifications. If

permission is granted, it creates a new notification with a title, message, and icon. When the

notification is clicked, it opens a new window to a specified URL.

The showImage () function takes an image source as input and displays it on a specified

element with the id "preview-image". The purpose of this function is to dynamically display an

image on a webpage.


LIST OF ASSETS USED

photo-2018-1c.JPEG – Photo gallery image

dji_fly_20230220_105924_749_1676916324231_photo_optimized.jpeg – Photo Gallery

new-food.jpeg – Photo Gallery

air-canada-a220-business-class-09.jpeg – Photo gallery

IMG_3154.jpg – Title image of the website

IMG_1026.Jpg – Background image

Bloody-Sweet-MassTamilan.dev.mp4 – Audio file

6EDC9637-6691-4885-8776-E5BD279B74B9.jpg – Second page Title image

IMG_3133.jpg – Third page title image

IMG_3150.mp4 – Video for the last page

Unnamed.jpg – favi icon

