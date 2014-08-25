({
    block: 'b-page',
    title: 'С меткой и подсказкой',
    head: [
        {elem: 'css', url: '_15-label-hint.css', ie: false},
        {elem: 'css', url: '_15-label-hint', ie: true}
    ],
    content: [
        {
            attrs: {style: 'width: 400px; padding: 20px;'},
            content: {
                block: 'input',
                mods: {size: 's'},
                content: [
                    {elem: 'label', content: 'Метка для инпута'},
                    {elem: 'hint', content: 'Хинт для инпута'},
                    {elem: 'control'}
                ]
            }
        },
        {
            attrs: {style: 'width: 150px; padding: 20px;'},
            content: {
                block: 'input',
                mods: {size: 's'},
                content: [
                    {elem: 'label', content: 'Метка для инпута'},
                    {elem: 'hint', content: 'Не помещающийся хинт для инпута'},
                    {elem: 'control'}
                ]
            }
        },
        {
            attrs: {style: 'width: 400px; padding: 20px;'},
            content: {
                block: 'input',
                mods: {size: 's', disabled: 'yes'},
                content: [
                    {elem: 'label', content: 'С модификатором _disabled_yes'},
                    {elem: 'hint', content: 'Хинт для инпута'},
                    {elem: 'control'}
                ]
            }
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_15-label-hint.js'}
    ]
});
