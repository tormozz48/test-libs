({
    block: 'b-page',
    title: 'attach',
    head: [
        {elem: 'css', url: '_10-attach.css', ie: false},
        {elem: 'css', url: '_10-attach', ie: true}
    ],
    content: [
        {
            attrs: {style: 'margin: 20px'},
            content: [
                'Какой-то текст   ',
                {
                    block: 'attach',
                    attrs: {style: 'margin-left: 10px;'},
                    mods: {size: 's'},
                    content: [
                        {
                            block: 'button',
                            mods: {size: 's'},
                            mix: [{block: 'attach', elem: 'button'}],
                            tabindex: 1,
                            id: 'bla',
                            content: {
                                block: 'i-bem', elem: 'i18n', keyset: 'attach', key: 'button-text'
                            }
                        },
                        {
                            elem: 'holder',
                            content: {
                                block: 'i-bem', elem: 'i18n', keyset: 'attach', key: 'no-file'
                            }
                        }
                    ]
                }
            ]
        },
        {
            attrs: {style: 'margin: 20px'},
            content: [
                'Какой-то текст   ',
                {
                    block: 'attach',
                    attrs: {style: 'margin-right: 1em; margin-left: 10px;'},
                    mods: {size: 'm'},
                    content: [
                        {
                            block: 'button',
                            mods: {size: 'm'},
                            mix: [{block: 'attach', elem: 'button'}],
                            tabindex: 2,
                            name: 'customName',
                            id: 'bla-2',
                            content: {
                                block: 'i-bem', elem: 'i18n', keyset: 'attach', key: 'button-text'
                            }
                        },
                        {
                            elem: 'holder',
                            content: {
                                block: 'i-bem', elem: 'i18n', keyset: 'attach', key: 'no-file'
                            }
                        }
                    ]
                },
                {
                    block: 'button',
                    mods: {theme: 'normal', size: 'm'},
                    type: 'button',
                    content: 'Я.Submit'
                }
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_10-attach.js'}
    ]
});
