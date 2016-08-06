```   
                                                        ---.
                                                        -..  \
                                                          _|_|_
                             __________________________ /  O    \
                            |░░░░░░░░░░░░░░░░░░░░░░░░░░|\_______/
                            |░░░░░░░░░░░░░░░░░░░░░░░░░░|   /   \
                            |░░░░░░░░░|`     ,|░░░░░░░░|   \/   \
                            |░░░░░░░|          |░░░░░░░|   /'---'\
                            |░░░░░░░|   |░░░░░░░░░░░░░____/  |     \_____
                            |░░░░░░░|      `|░░░░░░░░░░|  __/\____/      \_
                            |░░░░░░░░░░|       |░░░░░░░|       |            \
                            |░░░░░░░░░░░░░░|    |░░░░░░|      / \__  /\      '_
                            |░░░░░░░|   `.,.   .|░░░░░░|     /     \__ \        \
                            |░░░░░░░░|        |░░░░░░░░|     \        \_\_________\
                            |░░░░░░░░░░░░░░░░░░░░░░░░░░|      \          \     \
                            |░░░░░░░░░░░░░░░░░░░░░░░░░░|       \          \     

                    ____  ____  _  _  ____  _  _  ___  _  ____        ____  _  _  ___
                    [__   |___  |\/|  |__|  |\ |   |   |  |      __   |__|  |\ |   |  
                    ___]  |___  |  |  |  |  | \|   |   |  |___        |  |  | \|   |  
```

> [Ant Design](http://ant.design/) inspired theme for [Semantic-UI](http://semantic-ui.com/)

[![Build Status](https://travis-ci.org/websemantics/semantic-ant.svg?branch=master)](https://travis-ci.org/websemantics/semantic-ant)

[Semantic Ant](http://websemantics.github.io/semantic-ant) is a custom theme for building beautiful modern Web apps with the combined awesomeness of [Semantic-ui](http://semantic-ui.com/) framework and the elegant minimal styles of [Ant Design](http://ant.design/) for beautiful and responsive layouts</p>

### [Live demo](http://websemantics.github.io/semantic-ant/)


## Install

Firs install all npm modules

```bash
npm i
```

To build

```bash
npm run build
```

This will compile two themes, the default Semantic-UI theme `default` and Semantic-Ant theme `antd`. The generated styles are stored at `assets/css/ui/antd` and `assets/css/ui/default`.

To achieve this double (or more) builds, the `build` script in `package.json` works behind–the–scenes
to generate two distinct `theme.config` & `semantic.json` copies per build. The template for these are stored in `templates` folder

Finally if you'd like to make changes in development mode, run the `watch` Gulp task.

```bash
npm run watch
```


## Theming

The [official documentation](http://semantic-ui.com/usage/theming.html) of Semantic-ui is a great resource that explains with examples how to work with themes.

### Progress

- [ ] Reset
- [x] Site
- [x] Button
- [ ] Container
- [ ] Divider
- [ ] Flag
- [ ] Header
- [x] Icon
- [ ] Image
- [ ] Input
- [ ] Label
- [ ] List
- [ ] Loader
- [ ] Rail
- [ ] Reveal
- [x] Segment
- [x] Code Segment [NEW]
- [ ] Step
- [ ] Breadcrumb
- [ ] Form
- [ ] Grid
- [ ] Menu
- [ ] Message
- [ ] Table
- [ ] Ad
- [ ] Card
- [ ] Comment
- [ ] Feed
- [ ] Item
- [ ] Statistic
- [ ] Accordion
- [ ] Checkbox
- [ ] Dimmer
- [ ] Dropdown
- [ ] Embed
- [ ] Modal
- [ ] Nag
- [ ] Popup
- [ ] Progress
- [ ] Search
- [ ] Shape
- [ ] Sidebar
- [ ] Sticky
- [ ] Tab
- [ ] Transition
- [ ] Api
- [ ] Form
- [ ] State
- [ ] Visibility


## Releated

[Awesome Ant Design](https://github.com/websemantics/awesome-ant-design): A list of resources for [Ant Design](http://ant.design),  an enterprise-class UI design language and React-based implementation.


## Contributing

This project is in development and your contributions are always welcome!


## Credits

This project uses and is heavily inspired by the following projects

[Ant Design](http://ant.design/), An enterprise-class UI design language and React-based implementation.

[Recreating GitHub](https://github.com/Semantic-Org/example-github), A Semantic UI project designed to showcase theming with examples to create a packaged theme, using component CSS overrides, and managing themes with `theme.config`.
