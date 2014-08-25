({
    block: 'b-page',
    head: [
        {elem: 'css', url: '_10-simple.css', ie: false},
        {elem: 'css', url: '_10-simple', ie: true}
    ],
    content: [
        {
            block: 'example',
            content: [
                'Найти ',
                {
                    block: 'check-button',
                    name: 'test',
                    value: '1',
                    mods: {size: 's'},
                    mix: [{block: 'example', elem: 'item'}],
                    content: '1'
                },
                {
                    block: 'check-button',
                    name: 'test',
                    mods: {size: 's'},
                    mix: [{block: 'example', elem: 'item'}],
                    content: '2'
                },
                {
                    block: 'check-button',
                    name: 'test',
                    value: '3',
                    mods: {size: 's'},
                    mix: [{block: 'example', elem: 'item'}],
                    content: '3'
                },
                {
                    block: 'check-button',
                    name: 'test',
                    value: '4plus',
                    mods: {size: 's', checked: 'yes'},
                    mix: [{block: 'example', elem: 'item'}],
                    content: '4+'
                },
                'комнатную квартиру'
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_10-simple.js'}
    ]
});
