(function(){
  "use strict";

  $(document).ready(function() {
    $("#trushithaNoun").typed({
      strings: ["hacker", "designer", "artist",  "student" , "programmer", "video gamer", "Trushitha Narla"],
      typeSpeed: 80,
      backSpeed: 70,
      startDelay: 0,
      backDelay: 1500,
      loop: true,
      callback: function() {
        setTimeout(function() {
          $('.typed-cursor').css('visibility', 'shown');
        }, 1200);
      }
    });
  });

}());