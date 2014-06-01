(function($){

	$('input.round').wrap('<div class="round" />').each(function(){
		var $input = $(this);
		var $div = $input.parent();
		var min = $input.data('min');
		var max = $input.data('max');
		var ratio = ($input.val() - min) / (max - min);
		var color = $input.data('color') ? $input.data('color') :  "#91c2ff";

		var $circle = $('<canvas width="200px" height="200px"/>');
		var $color = $('<canvas width="200px" height="200px"/>');
		$div.append($circle);
		$div.append($color);
		var ctx = $circle[0].getContext('2d');

		// On dessine le cercle blanc avec ombre porté
		ctx.beginPath();
		ctx.arc(100,100,85,0,2*Math.PI);
		ctx.lineWidth = 20;
		ctx.strokeStyle = "#f7f7f7"
		ctx.shadowOffsetX = 2;
		ctx.shadowBlur = 5;
		ctx.shadowColor="rgba(0,0,0,0.1)";
		ctx.stroke();

		// On dessine le certcle de couleur
		var ctx = $color[0].getContext('2d');
		ctx.beginPath();
		ctx.arc(100,100,85,-1/2 * Math.PI, ratio*2*Math.PI - 1/2 * Math.PI );
		ctx.lineWidth = 20;
		ctx.strokeStyle = color;
		ctx.stroke();

		// Lorsqu'on appuie sur la souris
		$div.mousedown(function(event){
			event.preventDefault();
			// On écoute le déplacement du curseur
			$div.bind('mousemove', function(event){
				// On trouve l'angle a (en %) fait par le curseur
				var x = event.pageX - $div.offset().left - $div.width()/2;
				var y = event.pageY - $div.offset().top - $div.height()/2;
				var a = Math.atan2(x,-y) / (2*Math.PI);
				if(a < 0){ a+=1; }
				// On nettoie la zone de dessin
				ctx.clearRect(0,0,200,200);
				// Et on redessine le cercle
				ctx.beginPath();
				ctx.arc(100,100,85,-1/2 * Math.PI, a*2*Math.PI - 1/2 * Math.PI );
				ctx.lineWidth = 20;
				ctx.strokeStyle = color;
				ctx.stroke();
				$input.val(Math.round(a * (max - min) + min));
			})
		// On coupe les évènement lorsqu'on lache le bouton de la souris
		}).mouseup(function(event){
			event.preventDefault();
			$div.unbind('mousemove');
		})

	})

})(jQuery);