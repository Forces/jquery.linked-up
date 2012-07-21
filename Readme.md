# Linked up


## Examples
Place the following code in the `<head>` of your XHTML document.

Note: For best performance, it is recommended that you combine all JavaScript files
below into a single minified file.

```html
<script type="text/javascript" src="jquery-1.3.1.js"></script>
<script type="text/javascript" src="jquery.linked-up.js"></script>
```

The following markup should then be used in your `<body>` content

```html
<p>
	<a href="test">A link</a>
	Clicking this paragraph will follow the link above.
<p>
```

Combined with this script (after the markup has loaded):

```javascript
$( 'p' ).linkedUp();
```

This will result in a clickable, linked up `p` element.

Device independence (accessibility) is maintained, because the link itself is still a part of the tab order for the page and can be activated as usual in a device independent way.


## Licence

Linked up is licensed under the [The GNU General Public License (GPL)](http://www.gnu.org/licenses/gpl.html), by downloading and/or using it you are agreeing to abide by the terms of that license.


## Attribution

[Linked up at irama.org](http://irama.org/web/dhtml/linked-up/)
