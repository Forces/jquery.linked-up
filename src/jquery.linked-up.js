/**
 * "Linked Up" plugin (Allows elements that contain a link to behave as a linked element)
 * Results in a behaviour similar to the concept of @href on elements from XHTML2 (i.e: <li href="test/"></li>)
 * jquery.linked-up.js
 * @version 0.1
 * Changelog:
 *   *  0.1 Initial implementation
 *
 * @author Andrew Ramsden
 * @see http://irama.org/web/dhtml/linked-up/
 * @license GNU GENERAL PUBLIC LICENSE (GPL) <http://www.gnu.org/licenses/gpl.html>
 * 
 * @requires jQuery (tested with 1.3.1) <http://jquery.com/>
 * 
 */
jQuery.linkedUpConf = {
	hoverClass : 'hover'
};

(function($) {// start closure
	
	
	/**
	 * Can be sent DOMNodes that contain one or more links
	 */
	$.fn.linkedUp = function () {
		
		$(this).each(function(){
			if ($(this).find('a[href]').size() == 0) {
				// no links in this element, return
					return;
			}
			
			// set actions
				$(this)
					.click(function(){
						// trigger click on inner link
							//$(this).find('a[href]').eq(0).click();
							window.location = $(this).find('a[href]').eq(0).attr('href')
					})
					.hover(
						over = function(){
							$(this).addClass($.linkedUpConf.hoverClass);
							window.status = $(this).find('a[href]').eq(0).attr('href');
						},
						out = function(){
							$(this).removeClass($.linkedUpConf.hoverClass);
							window.status = '';
						}
					)
				;
			
		});
		
		return $(this); // facilitate chaining
	};
	
	
	
	
	/**
	 * Dump debug messages to console if available, otherwise to status bar.
	 */
	$.debug = function (message){
		if (typeof window.console != 'undefined' && window.console.log != 'undefined') {
			window.console.log(message);
		} else {
			// un comment next line if testing IE6 issues in dev environment (don't use for production)
				//window.status = message;
		}
	};
	
})(jQuery); /* end closure */
