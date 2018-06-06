# Infinite-Scrolling-JS

## In Action

<a href="https://imgflip.com/gif/2bpfyw"><img src="https://i.imgflip.com/2bpfyw.gif" title="made at imgflip.com"/></a>

or you can check live on this link <a href="http://marketi-ks.com/">http://marketi-ks.com</a>

## Install
Easy to integrate and use.

Add this javascript link before closing body element. `... </body>`
<br>
`<script src="https://gist.github.com/hsopjani/b6d8338d8f265e535aab6d82bf7ddd4a.js"></script>`
<br><br>

Simple way to setup in any element

```
<div id="#items">
        <div class="">...</div>
        <div class="">...</div>
        <div class="">...</div>
        <div class="">...</div>
    </div>
```
jQuery
<br>

```
$("#items").setInfiniteScroll({
    handler: function () {
        //call ajax or load other items
        
        //finish scrolling
        $("#items").finishScroll();
    }
});
```

If you have jQuery >3.0 make sure u have also migrate jQuery
`<script src="http://code.jquery.com/jquery-migrate-3.0.0.js"></script>`

Optional Options

```
$("#items").setInfiniteScroll({
    handler: function () {
        ...
    },
    offset:250,
    shouldHandle: function () {
        if (hasMore) return true;
        
        return false;
    }
});
```

Offset:
```
// Preload more data 250px before reaching the bottom of scroll.
    offset: 250
```

Should Handle:

```
// Provide a block to be called right before a infinite scroll event is triggered.  Return true to allow or false to prevent it from triggering.
    shouldHandle: function () {
        if (hasMore) return true;
        
        return false;
    }
```

