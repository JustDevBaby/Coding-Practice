$(document).ready(function(){
	console.log("DOM ready.");
	// $("#main").prepend("Another hello world!");

	$("#btn").on("click", function() {
		var listContent = $("#input").val();
		$(".list").prepend(listContent);
	});

	$(".item").click(function(){
		$(this).toggleClass("active");
	});

})