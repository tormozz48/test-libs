({
    block: 'b-page',
    title: 'Тумблер с заданным именем и значениями радиокнопок',
    head: [
        {elem: 'css', url: '_25-server.css', ie: false},
        {elem: 'css', url: '_25-server', ie: true}
    ],
    content: [
        {
            attrs: {style: 'margin: 20px;'},
            content: [
                {
                    content: 'Радиокнопки с атрибутом name="color" и соответствующими атрибутами value.'
                },
                {
                    block: 'tumbler',
                    name: 'color',
                    mods: {size: 's'},
                    content: [
                        {
                            elem: 'option',
                            side: 'left',
                            content: 'серый',
                            value: 'gray'
                        },
                        {
                            elem: 'option',
                            side: 'right',
                            content: 'жёлтый',
                            value: 'yellow'
                        }
                    ]
                }
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', 'url': '_25-server.js'}
    ]
});
