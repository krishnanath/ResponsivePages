
(function() {
		window.signature = {
				initialize: function() {
						return $('.signature svg').each(function() {
								var delay, i, len, length, path, paths, previousStrokeLength, results, speed;
								paths = $('path, circle, rect', this);
								delay = 0;
								results = [];
								for (i = 0, len = paths.length; i < len; i++) {
										path = paths[i];
										length = path.getTotalLength();
										previousStrokeLength = speed || 0;
										speed = 1000;
										delay += previousStrokeLength + 100;
										results.push($(path).css('transition', 'none').attr('data-length', length).attr('data-speed', speed).attr('data-delay', delay).attr('stroke-dashoffset', length).attr('stroke-dasharray', length + ',' + length));
								}
								return results;
						});
				},
				animate: function() {
						return $('.signature svg').each(function() {
								var delay, i, len, length, path, paths, results, speed;
								paths = $('path, circle, rect', this);
								results = [];
								for (i = 0, len = paths.length; i < len; i++) {
										path = paths[i];
										length = $(path).attr('data-length');
										speed = $(path).attr('data-speed');
										delay = $(path).attr('data-delay');
										results.push($(path).css('transition', 'stroke-dashoffset ' + speed + 'ms ' + delay + 'ms linear').attr('stroke-dashoffset', '0'));
								}
								return results;
						});
				}

		};

		$(document).ready(function() {

				window.signature.initialize();
				return $('button').on('click', function() {
						window.signature.initialize();
						return setTimeout(function() {
								return window.signature.animate();
						}, 500);
				});
		});

		$(window).load(function() {
				return window.signature.animate();
		});

}).call(this);
