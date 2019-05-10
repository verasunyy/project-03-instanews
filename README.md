# Instanews
Insranews is a a one-page, responsive website that allows a user to filter top news story catergories via the New York Times API.

The layout of this website is using flexbox. Adding instan news (data type in JASON ) vis NYT API with Ajax and filteing by images and showing in the webpage based on the sections been chosen.

<br/>

## Thouthrough
### 1. Set up and build Gulp
### 2. Using SCSS to nesting CSS
### 3. Getting API Key from NYT
### 4. Using Ajax to get data in Jason
### 5. Using .addClass() and .append() 
### 6. Animating the header and news when hover

<br/>

## Challenge During Progress
### 1. Errors when choose "section..." from <select style="width: 6rem"> <option value="section"> Sections ...</option></select>
    solve the problem by adding a conditional (if/
    else) statement

### 2. Some section does not have image for the article
    add filter to get a new array with all the articles that have a valid image anf to limited to only 12 articles per section:
```
<script>
    const validData = data.results.filter(item => item.multimedia.length == 5).slice(0, 12);
</script>
```
### 3. When hover, the background image not scale properly
    transform: scale(1) to transform: scale(1.1) when hover.
    the abstract will scale with the background too, and the background is overflow with other articles.

    need to change the width for the abstract to fit the scale and add another div for overflow: hidden;

### 4. <select style="width: 6rem"> <option value="section"> Sections ...</option></select> <span> &nbsp; plug-in </span>
 
    need to understant the attribute and properties of the plug-in (and I always fund this part is really difficult that understanding other person's code and sometimes it is time consuming) in order to change the style.





# API Key to NYT 
https://api.nytimes.com/svc/topstories/v2/science.json?api-key=dvQGQmQUORlCX2sUF92DAy1eyxuxGwXD