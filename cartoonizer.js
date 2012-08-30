var Cartoonizer = (function($) {
    var _video = $("#video");
    var _canvas = $("#picture");


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
        _canvas.getContext("2d").drawImage(_video, 0, 0, canvas.width, canvas.height);
    }

})(jQuery, undefined);