({
    block: 'b-page',
    title: 'Подсказка',
    head: [
        {elem: 'css', url: '_10-simple.css'},
        {elem: 'css', url: '_10-simple', ie: true}
    ],
    mods: {theme: 'normal'},
    content: [
        {
            block: 'example',
            js: true,
            content: {
                block: 'search',
                action: '//yandex.ru/yandsearch',
                content: {
                    elem: 'row',
                    content: [
                        {
                            elem: 'cell',
                            mix: [{elem: 'input'}],
                            content: {
                                block: 'input',
                                mods: {size: 'm', theme: 'normal'},
                                content: {
                                    elem: 'control',
                                    attrs: {
                                        name: 'text',
                                        tabindex: 1,
                                        autocomplete: 'off',
                                        maxlength: 400
                                    }
                                }
                            }
                        }
                    ]
                }
            }
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url:'_10-simple.js'}
    ]
});
