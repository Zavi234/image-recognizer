//https://teachablemachine.withgoogle.com/models/F_qKvlWgE/

Webcam.set({
    width:400,
    height:300,
    image_format:"png",
    png_quality:90
})

    Webcam.attach("#camera")

    function takesnapshot()
    {
        Webcam.snap(function(picture_hold){
            document.getElementById("result").innerHTML= "<img id='object_pic' src='"+picture_hold+"'>"
        })
    }

    var classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/F_qKvlWgE/model.json", model_loaded)

    function model_loaded()
    {
        console.log("model_loaded")
    }

    console.log("ml5 version:", ml5.version)

    function identify_image_button()
    {
        var img = document.getElementById("object_pic")
        classifier.classify(img,result)
    }

    function result(e,r)
    {
        if(e)
        {
            console.error(e)
        }

        else
        {
            console.log(r)
            document.getElementById("object_name").innerHTML= r[0].label
            document.getElementById("object_accuarcy").innerHTML= r[0].confidence.toFixed(2)
        }
    }