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

window.jQuery = window.$ = require('jquery')
window.Bragit = require('bragit')
window.Handlebars = require('handlebars')
window.Masonry = require('masonry-plus')
window.Gitters = require('gitters')
window.Markdown = require('markdown').markdown
window.Prism = require('prismjs')
window.Ssemantic = require('semantic-ui/dist/semantic.min')

/* tuen off Bragit styles autoload */
Bragit.defaults({
    css: {
        ignore: true
    }
})
Gitters.defaults({
    clearOnStart: true
})
var repo = 'websemantics/semantic-ant'
var masonry = null
var templates = ['<div class="ui code brick segment"  data-filter="{{id}}">\
                    <div class="content">{{{content}}}</div>\
                    <div class="meta markdown">\
                      <div class="title"><i class="tag icon"></i><a href="#">{{title}}</a></div>\
                      <div>{{meta}}</div>\
                      <i class="collapse icon arrow circle outline right" unselectable="none"></i>\
                    </div>\
                    <div class="highlight wrapper">\
                    <pre><code class="language-{{lang}}">{{{html}}}</code></pre>\
                   </div>\
                  </div>', '<div data-filter="{{id}}" class="ui {{color}} inverted tiny basic button">{{title}}</div>']

var template = Handlebars.compile(templates[0])
var button = Handlebars.compile(templates[1])

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
        Gitters.fetch(repo, 'src/docs', function(files) {
            Gitters.fetch(repo, files.map(function(file) {
                return file.path
            }), function(jsFiles) {

                for (i in jsFiles) {

                    var content = Markdown.toHTML(jsFiles[i].content)

                    var doc = {
                        id: jsFiles[i].name.slice(0, -4),
                        title: jsFiles[i].name,
                        content: jsFiles[i].content,
                        html: Prism.highlight(jsFiles[i].content, Prism.languages.html),
                        meta: 'When you need embedded within , you can set properties directly or use within the component.ButtonIconiconButtonIcon\
                      <br/><br/>If you want to control specific location, you can only directly',
                        lang: 'html'
                    }

                    $('#content').append(template(doc))

                    // $('.filter').append(button(cheat))


                    // var code = "var data = 1;";
                    // var html = Prism.highlight(code, Prism.languages.javascript);

                }
                onCheatsLoad()
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
                masonry.layout()
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
}
