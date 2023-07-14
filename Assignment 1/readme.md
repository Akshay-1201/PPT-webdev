# Assignment no 1
## Q 1 <!DOCTYPE > html is it a tag of html? If not, what is it and why do we use it?
### Answer :-
> **no** <!doctype> is not an HTML tag. It is a declaration used at the beginning of an HTML document to specify the document type and version. It informs the web browser about the version of HTML being used, allowing it to interpret and render the page correctly.
## Q 2 Explain Semantic tags in html? And why do we need it?
### Answer :-
> Semantic tags in HTML are elements that provide meaning and structure to the content within a web page. They describe the purpose or role of the content, making it more understandable for search engines and assistive technologies.They improve accessibility, search engine optimization, and overall document structure.

## Q 3 Differentiate between HTML Tags and Elements?
### Answer :- 
> TML tags and elements are related but have distinct meanings. HTML tags are used to mark up the structure and define the behavior of elements within an HTML document. They are enclosed in angle brackets, such as `<tagname>`. HTML elements, on the other hand, consist of the opening tag, content, and closing tag, such as `<tagname>content</tagname>`. Tags define the element's type, while elements represent the actual content or structure within the tags.
## Q 4 Build Your Resume using HTML only
### Answer :- 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resume</title>
</head>
<body>
    <header> <h1>Resume</h1></header>
    <div>
      <h2>Akshay Balasaheb Kute</h2>
      <h3>Contact :- </h3>
      <p>Phone no :- 9373204629</p>
      <p>Email :- akshaykute12@gmail.com</p>
      <p><a href="http://">Github</a></p>
      <p><a href="http://">Linkdin</a></p>
    </div>
    <div>
      <h3>Education :-</h3>
      <p>Institute :- Amrutvahini College Of Engineering, Sangamner</p>
      <p> B.E Mechanical Engineering <br>Cgpa :- 8.3 <br> Passout year :- 2022</p>
    </div>
    <div class="section">
      <h2>Skills</h2>
      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Tailwind</li>
        <li>Git</li>
        <li>JavaScript</li>
        <li>React.js</li>
      </ul>
    </div> 
</body>
</html>
```
## Q 5 Write HTML code so that it looks like the below image
### Answer :-
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEqEHpze799zHLi2MYrrXHOgIWyxKDOpujbw&usqp=CAU" alt="">
    <h4>We will learn following things :</h4>
    <div>
        <table>
            <tr>
                <th>Day 1</th>
                <th>Day 2</th>
                <th>Day 3</th>
                <th>Day 4</th>
            </tr>
            <tr>
                <td>linux 1</td>
                <td>Html</td>
                <td>linux 2</td>
                <td>Linux 3</td>
            </tr>
            <tr>
                <td>Git 1</td>
                <td>CSS</td>
                <td>GIT 2</td>
                <td>Bootstrap</td>
            </tr>
        </table>
        <h4>If you want to contact me please fill this form</h4>
        <form action="">
            <table>
                <tr>
                    <td>Name</td>
                    <td><input type="text"></td>
                </tr>
                <tr>
                    <td>Phone no:</td>
                    <td><input type="text"></td>
                </tr>
                <tr>
                    <td>email id </td>
                    <td><input type="text"></td>
                </tr>   
            </table>
        </form>
        <h3>Following things are important to be a programmner</h3>
        <ul>
            <li>A problem solving mindset</li>
            <li>Consistency</li>
            <ul><li>Clean code</li> <li>Through knowledge of core concept</li> <li>Readable code</li></ul>
            <li>Speed</li>
        </ul>
    </div>
</body>
</html>
```

## Q 6 What are some of the advantages of HTML5 over its previous versions?
### Answer :-
> 1. Enhanced multimedia support without plugins.
> 2. Improved semantics for better SEO and readability.
> 3. Canvas element for dynamic 2D graphics.
> 4. Offline and local storage capabilities.
> 5. Geolocation API for location-based services.
>    Mobile-friendly and responsive design principles.
> 6. Simplified code syntax and elements.
> 7. Improved performance and faster page loading.
> 8. Better cross-browser compatibility.

## Q 7  Create a simple Music player using html only
### Answer :-
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Music player</title>
</head>
<body>
    <h1>Audio Player</h1>
    <audio
        controls
        src="https://cld3097web.audiovideoweb.com/va90web25003/companions/Foundations%20of%20Rock/13.01.mp3"
      ></audio>
</body>
</html>
```
## Q 8 What is the difference between <figure> tag and <img> tag?
### Answer :-
>  the `<img>` tag is specifically for inserting images, while the `<figure>` tag is used to group and provide semantic meaning to self-contained media content, including images.
## Q 9 What’s the difference between html tag and attribute and give example of some global attributes?
### Answer :-
> HTML tags are used to define the structure and content of elements, while attributes provide additional information or properties to elements. Global attributes, which can be used with any HTML element, include "class" for styling, "id" for unique identification, "style" for inline CSS, "title" for tooltips, and "data-" for custom data storage.

## Q 10 Table using HTML only
### Answer :- 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Table</title>
    <style>
        table,tr,th,td{
            border: 1px solid black;
        }
        th{
            font-size: 30px;
        }
        td{
            font-size: 22px;
        }
        div{
            display: flex;
            justify-content: center;
            align-items: center;
        }
    </style>
</head>
<body>
    <Div>
        <table>
            <tr>
                <th rowspan="3">Day</th>
                <th colspan="3">Seminar</th>
            </tr>
            <tr>
                <th colspan="2">Sheudule</th>
                <th rowspan="2">Topic</th>
            </tr>
            <tr>
                <th>Begin</th>
                <th>End</th>
            </tr>
            <tr>
                <td rowspan="2">Monday</td>
                <td rowspan="2">8:00 a.m</td>
                <td rowspan="2">5:00p.m</td>
                <td>Introduction to XML</td>
            </tr>
            <tr>
                <td>Validity DtD and Relad NG</td>
            </tr>
            <tr>
                <td rowspan="3">Tuesday</td>
                <td>8:00 a.m</td>
                <td>5:00 p.m</td>
                <td rowspan="2">XPath</td>
            </tr>
            <tr>
                <td>11:00 a.m</td>
                <td>2:00 p.m</td>
            </tr>
            <tr>
                <td>2:00 p.m</td>
                <td>5:00 p.m</td>
                <td>XlS Transformations</td>
            </tr>
            <tr>
                <td>Wednesday</td>
                <td>8:00 a.m </td>
                <td>12:00 p.m </td>
                <td>XlS Transformations objects</td>
            </tr>
        </table>
    </Div>
</body>
</html>
```