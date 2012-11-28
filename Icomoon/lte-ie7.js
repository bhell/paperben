/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'bhell\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-Outlines-13' : '&#xe000;',
			'icon-Outlines-12' : '&#xe001;',
			'icon-Outlines-11' : '&#xe002;',
			'icon-Outlines-10' : '&#xe003;',
			'icon-Outlines-09' : '&#xe004;',
			'icon-Outlines-08' : '&#xe005;',
			'icon-Outlines-07' : '&#xe006;',
			'icon-Outlines-06' : '&#xe007;',
			'icon-Outlines-05' : '&#xe008;',
			'icon-Outlines-04' : '&#xe009;',
			'icon-Outlines-03' : '&#xe00a;',
			'icon-Outlines-02' : '&#xe00b;',
			'icon-Outlines-01' : '&#xe00c;',
			'icon-Icons-13' : '&#xe00d;',
			'icon-Icons-12' : '&#xe00e;',
			'icon-Icons-11' : '&#xe00f;',
			'icon-Icons-10' : '&#xe010;',
			'icon-Icons-09' : '&#xe011;',
			'icon-Icons-08' : '&#xe012;',
			'icon-Icons-07' : '&#xe013;',
			'icon-Icons-06' : '&#xe014;',
			'icon-Icons-05' : '&#xe015;',
			'icon-Icons-04' : '&#xe016;',
			'icon-Icons-03' : '&#xe017;',
			'icon-Icons-02' : '&#xe018;',
			'icon-Icons-01' : '&#xe019;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};