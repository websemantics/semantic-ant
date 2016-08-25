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
window.Prism = require('prismjs')
window.Semantic = require('semantic-ui/dist/semantic.min')
window.parse = require('markdown-html-ast').parse
window._ = require("underscore.string")

/* tuen off Bragit styles autoload */
Bragit.defaults({
    css: {
        ignore: true
    }
})

/* setup the Gitters package to maintain cache on start */
Gitters.defaults({
    clearOnStart: false,
})

var repo = 'websemantics/semantic-ant'
var currentTheme = 'antd'
var masonry = null
var template = Handlebars.compile($("#box-template").html())
var button = Handlebars.compile($("#button-template").html())

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
            })

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
        })

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

            if ($(this).attr('rel') !== currentTheme) {
                changeTheme($(this).attr('rel'))
            }

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


        var doc = {
            id: 'id123',
            title: 'There is a title',
            content: '<button class="ui primary small button">Primary</button><button class="ui small default button">Default</button><button class="ui small basic button">Ghost</button>',
            html: Prism.highlight('<button class="ui primary small button">Primary</button>\
<button class="ui small default button">Default</button>\
<button class="ui small basic button">Ghost</button>', Prism.languages.html),
            meta: 'When you need embedded within , you can set properties directly or use within the component.ButtonIconiconButtonIcon\
          <br/><br/>If you want to control specific location, you can only directly',
            lang: 'html'
        }

        $('#content').append(template(doc))

        pageRefresh()

        return

        /* load docs */
        Gitters.fetch(repo, 'docs/README.md', function(file) {

            var elements = parse(file.content).children,
                summary

            elements.forEach(function(item, index, elements) {

                /* mark the summary section, and parse all the relevent headings */
                if (summary = summary ? summary : item.element === 'h1' && item.value === 'Summary') {

                    if (item.element === 'h2') {

                        console.log(item)

                        //
                        //   var code = elements[index + 1]
                        //
                        //   var data = {
                        //     id: _.underscored(item.value),
                        //     title: item.value,
                        //     icon : icon,
                        //     lang: code.language,
                        //     color: colors[index % 13],
                        //     content: Prism.highlight(code.value, Prism.languages[code.language])
                        //   }
                        //
                        //   $('#content').append(segment(data))
                        //   $('.filter').append(button(data))
                    }


                }
            })

            setTimeout(pageRefresh, 300)
        })


        return


        var doc = {
            id: 'id123',
            title: 'There is a title',
            content: '<button class="ui primary small button">Primary</button><button class="ui small default button">Default</button><button class="ui small basic button">Ghost</button>',
            html: Prism.highlight('<button class="ui primary small button">Primary</button><button class="ui small default button">Default</button><button class="ui small basic button">Ghost</button>', Prism.languages.html),
            meta: 'When you need embedded within , you can set properties directly or use within the component.ButtonIconiconButtonIcon\
          <br/><br/>If you want to control specific location, you can only directly',
            lang: 'html'
        }

        $('#content').append(template(doc))

        pageRefresh()



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


                    // var code = "var data = 1"
                    // var html = Prism.highlight(code, Prism.languages.javascript)

                }
                pageRefresh()
            })
        })
    })

/**
 * Change Theme dynamically by changing url of all themable link elements in index.html header
 *
 * @param {theme} string, theme name ('antd' or 'default')
 * @return {void}
 */

function changeTheme(theme) {

    currentTheme = theme

    var regExp = /(\/components\/).*(\/[a-z]*.css)/
    $.each($('link.themable'), function() {
        $(this).attr('href', $(this).attr('href').replace(regExp, '$1' + theme + '$2'))
    })

    /* set drop down to the selected theme, in case it changed from the overlay selector */
    $('.ui.sidebar .dropdown').dropdown('set selected', theme)

    if (masonry) {
        masonry.layout()
    }
}


/**
 * Called when all doc files are fully loaded
 *
 * @return {void}
 */
function pageRefresh() {

    /* layout code boxes */

    masonry = new Masonry('.masonry', {
        'itemSelector': '.brick',
        columnWidth: '.brick'
    })

    /* enable code boxes interactivity */

    $('.ui.code.segment .collapse')
        .on('click', function() {
            var box = $(this).closest(".ui.code.segment")
            box.toggleClass("expand")
            setTimeout(function() {
                masonry.layout()
            }, 400)
        })

    /* enable ant design button click effect */

    $('.ui.button')
        .on('click', function() {
            var button = $(this)
            button.addClass('clicked')
            setTimeout(function() {
                button.removeClass('clicked')
            }, 320)
        })

    $('.ui.active.page.loading.dimmer').remove()
}
