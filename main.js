$(document).ready(function() {





function getConditions() {
  var park = $('.park').text();
  var zip = $park.val();


}

$('.getPark').on('click', getCams)


function getCams() {
  console.log('button clicked')
    var park = $('.park').text();
    var zip = $('.park').val();
    $.ajax(`http://api.wunderground.com/api/8245fa2da0121f3e/webcams/q/${zip}.json`)
      .done(function(data) {
        console.log(data)
        console.log(data.webcams)
        var $cams = data.webcams.map(camElement);

     $('.cams').empty().append($cams);   

      });
}




function getConditionsAndCams() {
  getConditions();
  getCams();
}

function camElement(cam) {
  let $cam = $('.template').clone();
  $cam.removeClass('template');
  $cam.find('img').attr('src', cam.CURRENTIMAGEURL);
  $cam.find('.camid').text(cam.camid);

  return $cam;
}

});

