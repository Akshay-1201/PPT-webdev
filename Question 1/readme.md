# 1 Question: Explain all the CSS positions(static, fixed, sticky, relative, absolute) with one code example each

## Answer:

**CSS provides several positioning options for elements. Understanding these positions is essential for controlling the layout and positioning of elements on a web page. Here are the commonly used CSS positions:**

## 1. Static:

- The default position value in CSS is "static".
- Elements with a static position are positioned according to the normal flow of the document.

**Example:**

```html
<style>
  .Card {
    background-color: white;
    width: 100px;
    height: 100px;
  }
</style>
```

## 2. Fixed:

- Elements with a fixed position are positioned relative to the browser window.
- They will stay in the same position even if the page is scrolled.

**Example:**

```html
<style>
  .card {
    width: 100px;
    height: 100px;
    position: fixed;
    top: 20px;
    left: 20px;
  }
</style>
```

## 3. Sticky:

- Elements with a sticky position are positioned based on the user's scroll position.
- They behave like "fixed" until a specified scroll position is reached, then they become "relative" and start scrolling with the rest of the content.

**Example:**

```html
<style>
  .card {
    width: 100px;
    height: 100px;
    position: sticky;
    top: 50px;
  }
</style>
```

## 4. Relative:

- Elements with a relative position are positioned relative to their normal position.
- They can be moved using the top, right, bottom, and left properties.

**Example:**

```html
<style>
  .box {
    width: 100px;
    height: 100px;
    position: relative;
    top: 10px;
    left: 10px;
  }
</style>
```

## 5. Absolute:

- Elements with an absolute position are positioned relative to their nearest positioned ancestor.
- If there is no positioned ancestor, they are positioned relative to the initial containing block (usually the browser window).

**Example:**

```html
<style>
  div.sec {
    position: relative;
    height: 300px;
    width: 500px;
  }

  .card {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 20px;
    left: 20px;
  }
</style>
```