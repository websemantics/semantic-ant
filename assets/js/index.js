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

    prettyPrint()

    /* button click effect */
    
    $('.ui.button')
      .on('click', function() {
        var button = $(this)
        button.addClass('clicked');
         setTimeout(function(){button.removeClass('clicked')}, 320);
      })


    /* code box */

    $('.ui.code.segment .collapse')
      .on('click', function() {
        $(this)
        .closest( ".ui.code.segment" )
        .toggleClass( "expand");
      })


    /* page */

    $('[data-content]')
      .popup({
        duration : 200,
        delay    : {
          show: 200,
          hide: 200
        },
        variation : 'inverted',
        position  : 'top center'
      })
    ;

    $('.ui.main.menu').visibility({
      once: false,
      type:'fixed',
      onFixed: function () {
        /* compensate for the missing menu height on the menu parent */
        $(this).parent().height($(this).height() -1)
      }
    })

    $('.ui.menu .ui.dropdown').dropdown({
      on: 'hover'
    });
    $('.ui.menu a.item')
      .on('click', function() {
        $(this)
          .addClass('active')
          .siblings()
          .removeClass('active')
      })

      $('.overlay').visibility({
        type: 'fixed',
        offset: 100
      })

      $('.overlay a.item').click(function() {
        changeTheme($(this).attr('rel'))
        return false
      })

    /* sidebar */

    $('.ui.sidebar').sidebar({
        transition: 'push',
        dimPage: false
      }).sidebar('attach events', $('.launch'))

    $('.ui.sidebar .dropdown')
      .dropdown({
        onChange: function(theme) {
          changeTheme(theme)
        }
      }).dropdown('set selected', 'antd')

  })

  /*
   * Change Theme
   */

  function changeTheme(theme){

    var regExp = /(\/components\/).*(\/[a-z]*.css)/
    $.each($('link.themable'), function() {
      $(this).attr('href', $(this).attr('href').replace(regExp, '$1' + theme + '$2'))
    })

    /* activate theme links */
    $('.overlay a.item').removeClass('active')
    $('.overlay a.item[rel="'+theme+'"]').addClass('active')

    /* set drop down too */
    $('.ui.sidebar .dropdown').dropdown('set selected', theme)

  }
