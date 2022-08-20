













document.getElementById("btn_convert1").addEventListener("click", function() {
	html2canvas(document.getElementById("html-content-holder"), {useCORS: true}).then(function (canvas) {			
		var anchorTag = document.createElement("a");
		document.body.appendChild(anchorTag);
		document.getElementById("previewImg").appendChild(canvas);
		anchorTag.download = "invite.jpg";
		anchorTag.href = canvas.toDataURL('image/jpg', 1.0);
		anchorTag.target = '_blank';
		anchorTag.click();
	});
});