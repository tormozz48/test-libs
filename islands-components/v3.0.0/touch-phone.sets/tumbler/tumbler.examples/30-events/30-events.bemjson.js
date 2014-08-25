({
    block: 'b-page',
    title: 'События тумблера',
    head: [
        {elem: 'css', url: '_30-events.css', ie: false},
        {elem: 'css', url: '_30-events', ie: true}
    ],
    content: [
        {
            block: 'example',
            js: true,
            content: [
                {
                    attrs: {style: 'margin: 20px;'},
                    content: [
                        {
                            content: 'При изменении своего состояния, тумблер генерирует событие "change". ' +
                                'Смотри консоль.'
                        },
                        {
                            tag: 'pre',
                            attrs: {style: 'font-size: 12px;'},
                            content: '$(\'.tumbler\').bem(\'tumbler\').on' +
                                '(\'change\', function(e, data) {\n console.log(data);\n});'
                        },
                        {
                            block: 'tumbler',
                            mods: {size: 's'},
                            content: [
                                {
                                    elem: 'option',
                                    side: 'left',
                                    content: 'налево',
                                    value: 'left'
                                },
                                {
                                    elem: 'option',
                                    side: 'right',
                                    content: 'направо',
                                    value: 'right'
                                }
                            ]
                        }
                    ]
                },
                {
                    attrs: {style: 'margin: 20px;'},
                    content: [
                        {
                            block: 'button',
                            mods: {size: 's'},
                            js: {val: 'left'},
                            content: '.val(\'left\')'
                        },
                        {
                            block: 'button',
                            mods: {size: 's'},
                            js: {val: 'right'},
                            content: '.val(\'right\')'
                        },
                        {
                            block: 'button',
                            mods: {size: 's'},
                            js: {val: 'doesnt_exist'},
                            content: '.val(\'doesnt_exist\')'
                        }
                    ]
                },
                {
                    attrs: {style: 'margin: 20px;'},
                    content: [
                        {
                            block: 'button',
                            mods: {size: 's'},
                            js: {action: 'uncheck'},
                            content: '.uncheck()'
                        },
                        {
                            block: 'button',
                            mods: {size: 's'},
                            js: {action: 'check'},
                            content: '.check()'
                        },
                        {
                            block: 'button',
                            mods: {size: 's'},
                            js: {action: 'toggle'},
                            content: '.toggle()'
                        }
                    ]
                }
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', 'url': '_30-events.js'},
        {
            elem: 'js',
            content: '$(\'.tumbler\').bem(\'tumbler\').on' + '(\'change\', function(e, data) { console.log(data); });'
        }
    ]
});
