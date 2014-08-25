({
    block: 'b-page',
    title: 'C примерами',
    head: [
        {elem: 'css', url: '_25-samples.css', ie: false},
        {elem: 'css', url: '_25-samples', ie: true}
    ],
    content: [
        {
            attrs: {style: 'width: 400px; padding: 20px'},
            content: {
                block: 'input',
                mods: {size: 's'},
                content: [
                    {elem: 'control'},
                    {
                        elem: 'samples',
                        content: [
                            {
                                block: 'link',
                                mods: {pseudo: 'yes'},
                                mix: [{block: 'input', elem: 'sample'}],
                                content: 'пример 1'
                            },
                            ', ',
                            {
                                block: 'link',
                                mods: {pseudo: 'yes'},
                                mix: [{block: 'input', elem: 'sample'}],
                                content: 'пример 2'
                            }
                        ]
                    }
                ]
            }
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', 'url': '_25-samples.js'}
    ]
});
