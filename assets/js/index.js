/**
 *                                                                        ---.
 *                                                                       -..  \
 *  ____  ____  _  _  ____  _  _  ___  _  ____        ____  _  _  ___      _|_|_
 *  [__   |___  |\/|  |__|  |\ |   |   |  |      __   |__|  |\ |   |     /  O    \
 *  ___]  |___  |  |  |  |  | \|   |   |  |___        |  |  | \|   |     \_______/
 *                                                                          /   \
 *                  Ant Design inspired theme for Semantic-UI              \/   \
 *                                                                         /'---'\
 *                                                                    ____/  |     \_____
 * This project was released under MIT license.                           __/\____/      \_
 *                                                                            |            \
 * @link      http://websemantics.ca                                         / \__  /\      '_
 * @author    Web Semantics, Inc. Dev Team <team@websemantics.ca>           /     \__ \        \
 * @author    Adnan M.Sagar, PhD. <adnan@websemantics.ca>                   \        \_\_________\
 *                                                                           \          \     \
 *                                                                            \          \
 */

/* tuen off Bragit styles autoload */
Bragit.defaults({
    css: {
        ignore: true
    }
})
Gitters.defaults({
    clearOnStart: false
})

var config = 'config.json'
var url = 'docs/'
var masonry = null
var templates = ['<div class="ui code brick segment"  data-filter="{{id}}">\
                    <div class="content">{{{content}}}</div>\
                    <div class="meta markdown">\
                      <div class="title"><i class="tag icon"></i><a href="#">{{title}}</a></div>\
                      <div>{{meta}}</div>\
                      <i class="collapse icon arrow circle outline right" unselectable="none"></i>\
                    </div>\
                    <div class="highlight wrapper">\
                    <pre class="highlight prettyprint lang-{{lang}}">{{content}}</pre>\
                   </div>\
                  </div>',
    '<div data-filter="{{id}}" class="ui {{color}} inverted tiny basic button">{{title}}</div>',
    '<a class="ui labeled mini button github-{{repository}}-stars">\
                        <div class="ui  mini button"> <i class="star icon"></i> Stars </div>\
                        <div class="ui basic  left pointing label"> <i class="spinner loading icon"></i> </div>\
                    </a>\
                    <a class="ui  mini button github-{{repository}}-github"> <i class="github icon"></i> Github </a>'
]

var template = Handlebars.compile(templates[0])
var button = Handlebars.compile(templates[1])
var bragit = Handlebars.compile(templates[2])

$(document)
    .ready(function() {

        /* page */

        $('[data-content]')
            .popup({
                duration: 200,
                delay: {
                    show: 200,
                    hide: 200
                },
                variation: 'inverted',
                position: 'top center'
            });

        $('.ui.main.menu').visibility({
            once: false,
            type: 'fixed',
            onFixed: function() {
                /* compensate for the missing menu height on the menu parent */
                $(this).parent().height($(this).height() - 1)
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


        /* Read docs */
        Gitters.fetch('websemantics/semantic-ant', 'docs', function(files) {
            Gitters.fetch('websemantics/semantic-ant', files.map(function(file) {
                return file.path
            }), 'master', function(jsFiles) {
                for (i in jsFiles) {
                    console.log(jsFiles[i].content)
                }
            })
        })
    })

/**
 * Change Theme.
 *
 * @param {theme} string, theme name (antd, default)
 * @return {void}
 */

function changeTheme(theme) {

    var regExp = /(\/components\/).*(\/[a-z]*.css)/
    $.each($('link.themable'), function() {
        $(this).attr('href', $(this).attr('href').replace(regExp, '$1' + theme + '$2'))
    })

    /* activate theme links */
    $('.overlay a.item').removeClass('active')
    $('.overlay a.item[rel="' + theme + '"]').addClass('active')

    /* set drop down too */
    $('.ui.sidebar .dropdown').dropdown('set selected', theme)

    if (masonry) {
        masonry.layout()
    }
}


/**
 * Called when all cheat files are fully loaded
 *
 * @return {void}
 */
function onCheatsLoad() {

    $('.toc .ui.sticky').sticky({
        ontext: $('.pusher > .full.height')
    })

    $('#slider').sidebar('attach events', '.launch.button, .view-ui, .launch.item')
        .sidebar('setting', {
            dimPage: false
        })

    masonry = new Masonry('.masonry', {
        'itemSelector': '.brick',
        columnWidth: '.brick'
    })

    /* code boxes */

    $('.ui.code.segment .collapse')
        .on('click', function() {
            var box = $(this).closest(".ui.code.segment")
            box.toggleClass("expand");
            setTimeout(function() {
                masonry.layout({
                    shuffle: true
                })
            }, 400);
        })

    /* button click effect */

    $('.ui.button')
        .on('click', function() {
            var button = $(this)
            button.addClass('clicked');
            setTimeout(function() {
                button.removeClass('clicked')
            }, 320);
        })

    $('.ui.active.page.loading.dimmer').remove()
    prettyPrint()

}
