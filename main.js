function startclassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/o8NtG3WYV/model.json", modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
      console.error(error);
    } else {
      console.log(results);
      random_number_r = Math.floor(Math.random() * 255) + 1;
      random_number_g = Math.floor(Math.random() * 255) + 1;
      random_number_b = Math.floor(Math.random() * 255) + 1;
  
  
      document.getElementById("result_detected").innerHTML = 'Detected voice is of :- '+ results[0].label;
      document.getElementById("result_confidence").innerHTML = 'Detected Dog - '+dog+' Detected Cat - '+cat;
  
      img = document.getElementById("animal_image");
  
      if (results[0].label == "Barking") {
        img.src = 'bark.gif';
        dog = dog+1;
      } else if (results[0].label == "Meowing") {
        img.src = 'meow.gif';
        cat = cat + 1;
      } else{
        img.src = 'listen.gif';
      }
    }
  }