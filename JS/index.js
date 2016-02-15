var input;
var output;

$(document).ready(function() {


	$("#submit").click(function(){
		$("body").removeClass("bk_img_1");
		$("body").addClass("bk_img_2");
		input = $("#a").val();
		console.log(input);
		output = Math.round(input/3);
		console.log(output);
		$("#b").val(output);
	});


	$("#reset").click(function(){
		$("body").removeClass("bk_img_2");
		$("body").addClass("bk_img_1");
		$("#a").val(0);
		$("#b").val(0);

	});

});

/*
extract the value of input
output equals input divided by 3
output value displayed in the b box

*/

/*	
	$("#submit").click(function(){
		$("body").removeClass("bk_img_1");
		$("body").addClass("bk_img_2");
		input = $("#a").val();
		output = Math.round(input/3);

		update();
	});


	$("#reset").click(function(){
		$("body").removeClass("bk_img_2");
		$("body").addClass("bk_img_1");
		input = 0;
		output = 0;

		update();
	});

	function update(){
		$("#a").val(input);
		$("#b").val(output);
	}

*/
