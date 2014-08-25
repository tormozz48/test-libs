({
    block: 'b-page',
    title: '15-button-dropdown',
    head: [
        {elem: 'css', url: '_15-button-dropdown.css'},
        {elem: 'css', url: '_15-button-dropdown', ie: true}
    ],
    attrs: {style: 'padding: 20px;'},
    content: [

        {
            block: 'button-dropdown',
            content: [
                {
                    block: 'dropdown-menu',
                    content: [
                        {
                            block: 'button',
                            mods: {theme: 'action', size: 'm', side: 'left'},
                            content: 'Открыть 644×479'
                        },
                        {
                            block: 'button',
                            mix: [
                                {block: 'dropdown-menu', elem: 'switcher'}
                            ],
                            mods: {theme: 'action', size: 'm', 'only-icon': 'yes', side: 'right'},
                            content: [
                                {
                                    block: 'image',
                                    mix: [
                                        {block: 'button', elem: 'icon', mods: {'8': 'down'}}
                                    ],
                                    alt: '/'
                                }
                            ]
                        },
                        {
                            elem: 'popup',
                            mix: [{block: 'button-dropdown'}],
                            js: {directions: 'bottom'},
                            content: [
                                {
                                    elem: 'item',
                                    content: {
                                        block: 'link',
                                        mods: {pseudo: 'yes'},
                                        url: '#640x480',
                                        content: '640x480'
                                    }
                                },
                                {
                                    elem: 'item',
                                    content: {
                                        block: 'link',
                                        mods: {pseudo: 'yes'},
                                        url: '#320x240',
                                        content: '320x240'
                                    }
                                },
                                {
                                    elem: 'item',
                                    content: {
                                        block: 'link',
                                        mods: {pseudo: 'yes'},
                                        url: '#128x64',
                                        content: '128x64'
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        },

        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_15-button-dropdown.js'}

    ]

});
