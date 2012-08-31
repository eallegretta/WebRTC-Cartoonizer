var Cartoonizer = (function($) {
    var _video = document.getElementById("video");
    var _canvas = document.getElementById("pictureBuffer");


    $(document).ready(function() {
        _canvas.width = 480;
        _canvas.height = 360;

        captureVideo();

        $("#takePicture").click(function() {
            takePicture();
        });
    });

    function captureVideo() {
        navigator.webkitGetUserMedia({ video: true }, function(stream) {
            _video.src = webkitURL.createObjectURL(stream);
        },
        function() {
        });
    }

    function takePicture() {
        _canvas.getContext("2d").drawImage(_video, 0, 0, _canvas.width, _canvas.height);
        $("#picture")
            .attr("src", _canvas.toDataURL("img/png"))
            .pixastic("sharpen", { ammount: 0.7 });
    }

})(jQuery, undefined);