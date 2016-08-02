
/*******************************
           Theme JS
*******************************/

/*
  This is boilerplate to show initializing components
  The way this is wrapped will vary by platform/framework
*/

$(document)
  .ready(function() {

    var regExp = /(\/components\/).*(\/[a-z]*.css)/

    $('.ui.sidebar').sidebar({
        transition: 'push',
        dimPage: false
      }).sidebar('attach events', $('.launch'))

    $('.ui.sidebar .dropdown')
      .dropdown({
        onChange: function(theme) {
            $.each($('link.themable'), function() {
              $(this).attr('href', $(this).attr('href').replace(regExp, '$1' + theme + '$2'))
          })
        }
      }).dropdown('set selected', 'default')
  })
