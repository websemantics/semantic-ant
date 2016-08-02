/**
 *  ____  ____  _  _  ____  _  _  ___  _  ____        ____  _  _  ___
 *  [__   |___  |\/|  |__|  |\ |   |   |  |      __   |__|  |\ |   |
 *  ___]  |___  |  |  |  |  | \|   |   |  |___        |  |  | \|   |
 *
 *                  Ant Design inspired theme for Semantic-UI
 *
 *
 * This project was released under MIT license.
 *
 * @link      http://websemantics.ca
 * @author    Web Semantics, Inc. Dev Team <team@websemantics.ca>
 * @author    Adnan M.Sagar, PhD. <adnan@websemantics.ca>
 */

/* tuen off Bragit styles autoload */

Bragit.defaults({css:{ignore:true}})

$(document)
  .ready(function() {

    /* page */

    $('.ui.main.menu').visibility({
      once: false,
      type:'fixed',
      onFixed: function () {
        /* compensate for the missing menu height on the menu parent */
        $(this).parent().height($(this).height() -1)
      }
    })

    /* sidebar */

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
      }).dropdown('set selected', 'antd')

  })
