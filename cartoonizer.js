var Cartoonizer = (function($) {
    var _video = document.getElementById("video");
    var _canvas = document.getElementById("picture");


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

        var img = new Image();
        img.onload = function() {
            Pixastic.process(img, "sharpen", {
                amount: $("#value-amount").val()
            });
            _canvas.drawImage(img);
        }

        img.src = _canvas.toDataURL("img/png");
    }

})(jQuery, undefined);