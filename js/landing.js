var waypoint = new Waypoint({
  element: document.getElementById('basic-waypoint'),
  handler: function() {
    notify('Basic waypoint triggered')
  }
})

$("h1").waypoint(function() {
    // animation code
     $('h1).addClass('slideInLeft');
  }}, { offset: '100%'});
