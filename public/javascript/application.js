$(document).ready(function() {

  var handlers = {

    timeDoubt: function(index, photo) {
      setTimeout(function() {
        var img = "<img src ="+photo.images.standard_resolution.url+">";
        $('#photo').html(img).addClass('show');
        console.log(img);
        setTimeout(function() {
          $('#photo').removeClass('show');
        }, 2000);
      }, 2900*index);
    },

    getPhotos: function() {
      var tagrequest = $('#tag').val();
      $.ajax({
        url: '/photos',
        data: { tag: tagrequest},
        success: function (photos) {
          var photoroll = photos.data;
          var next = photos.pagination.next_url;
          $.each(photoroll, handlers.timeDoubt);
        },
        dataType: 'json'
      });
    },

  };
  
  $('#tag').on('blur', function() {
    var highestTimeoutId = setTimeout(";");
    for (var i = 0 ; i < highestTimeoutId ; i++) {
      clearTimeout(i); 
    }
    handlers.getPhotos();
  });

  handlers.getPhotos();

});

