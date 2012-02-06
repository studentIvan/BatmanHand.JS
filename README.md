# Batman History Api Navigation Dispatcher (Batman HAND)
### Simple html5 javascript history api helper

## Using
1. Connect script with ur webpage
2. <pre>
batmanHand.init(function (path, title) {
	// You receive:
	// path - relative path with left slash e.g. /test
	// and title - new webpage title, you can just set document.title = title
});
</pre>
3. Add data-history attribute on your references (Hello World is a new webpage title):<br>
<pre><a href="/hello/world" data-history="Hello World"></a></pre>


## Not supported html5 history api? No problem
Links will be static

## Customize
batmanHand.init supports an additional parameter - unitType, default is a "a" html-tag

## Testing
1. Start web server
2. Run /testing.html file in your browsers