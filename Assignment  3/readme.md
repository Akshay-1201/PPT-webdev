# Assignment no 3
## Q 1 What is a Media Query in CSS, and what is its purpose?
### Answer:-
>A media query in CSS is a technique that allows you to apply different styles to a web page based on certain conditions, such as the characteristics of the device or the viewport it is being viewed on. The purpose of media queries is to create responsive designs that can adapt and optimize the layout and presentation of a website for different screen sizes, resolutions, and devices. By using media queries, you can target specific devices or types of devices and apply custom styles accordingly.
## Q 2 How do you define a media query in CSS?
### Answer :-
>To apply mediaquery we use @media.

```html
@media media-type and (media-feature: value) {

}
```
> The media type are screen, Print etc & feature is like height,width etc.
## Q 3 Explain the concept of Breakpoints in Responsive Web Design and How They are used in Media Queries.
### Answer :-
>In responsive web design, breakpoints are specific points or ranges of viewport widths at which the layout of a web page needs to change to provide an optimal user experience. Breakpoints are typically defined based on common device sizes or specific design considerations.

>Media queries are used to define these breakpoints in CSS. By using media features such as max-width or min-width along with appropriate values, you can specify when certain CSS rules should be applied to adapt the layout and styling of your webpage.
# Q 4  What is the purpose of using Media Queries for Print Media?
### Answer:-
>Media queries are not limited to just screens or displays; they can also be used for print media. The purpose of using media queries for print is to apply specific styles when a webpage is printed, allowing you to optimize the print layout and appearance.
## Q 5 What is the purpose of the orientation media feature?

### Answer:-
>The orientation media feature in CSS is used to target the orientation of the device's viewport, whether it's in portrait or landscape mode. The purpose of this media feature is to apply different styles based on the orientation of the device, allowing you to optimize the layout and presentation accordingly.By using the orientation media feature, you can make specific adjustments to your design based on whether the user is viewing the content in a vertical or horizontal orientation. For instance, you might want to rearrange elements, adjust font sizes, or change the aspect ratio of media to better suit the available space in each orientation.