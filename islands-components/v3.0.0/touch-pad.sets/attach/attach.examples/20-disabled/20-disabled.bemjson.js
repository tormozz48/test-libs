({
    block: 'b-page',
    title: 'attach',
    head: [
        {elem: 'css', url: '_20-disabled.css', ie: false},
        {elem: 'css', url: '_20-disabled', ie: true}
    ],
    content: [
        {
            attrs: {style: 'margin: 20px'},
            content: [
                'Какой-то текст   ',
                {
                    block: 'attach',
                    attrs: {style: 'margin-right: 1em;'},
                    mods: {size: 's', disabled: 'yes'},
                    content: [
                        {
                            block: 'button',
                            mods: {size: 's'},
                            mix: [{block: 'attach', elem: 'button'}],
                            tabindex: 1,
                            name: 'customName',
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
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_20-disabled.js'}
    ]
});
