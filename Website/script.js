$(document).ready(setInterval(function(){
  $.get("frame_RGB_values.txt", function(data){
    var rgb = data.split(")");

    const ctx = canvas.getContext('2d');
    const imageData = ctx.createImageData(176, 144);

    for (let i = 0; i < imageData.data.length; i += 4) {
    // Modify pixel data
      var temp = rgb[i/4].split(",");
      
      imageData.data[i + 0] = parseInt(temp[0]);  // R value
      imageData.data[i + 1] = parseInt(temp[1]);  // G value
      imageData.data[i + 2] = parseInt(temp[2]);  // B value
      imageData.data[i + 3] = 255;                    // A value
    
    }

    // Draw image data to the canvas
    ctx.putImageData(imageData, 20, 20);
    
  });
}, 500)
);