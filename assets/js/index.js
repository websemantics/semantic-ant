
/*******************************
          Page JS
*******************************/

/*
  This is boilerplate to show initializing components
  The way this is wrapped will vary by platform/framework
*/

$(document)
  .ready(function() {

    $('.ui.main.menu').visibility({
      once: false,
      type:'fixed',
      onFixed: function () {
        /* compensate for the missing menu height on the menu parent */
        $(this).parent().height($(this).height() -1)
      }
    })

  })
