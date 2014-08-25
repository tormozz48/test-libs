({
    block: 'b-page',
    title: 'Скрытые инпуты',
    head: [
        {elem: 'css', url: '_15-input-hidden.css', ie: false},
        {elem: 'css', url: '_15-input-hidden', ie: true}
    ],
    content: [
        {
            attrs: {style: 'margin: 20px'},
            content: [
                {
                    block: 'slider',
                    mods: {theme: 'normal', size: 'm', orientation: 'horiz', input: 'hidden'},
                    js: {
                        min: 10,
                        max: 90,
                        scale: [
                            {value: 0, step: 10},
                            {value: 100}
                        ]
                   },
                    content: {
                        elem: 'info',
                        elemMods: {preset: 'inline'},
                        content: [
                            {
                                elem: 'title',
                                content: 'Слайдер'
                           },
                            {
                                block: 'input',
                                mods: {size: 'm'},
                                value: 30,
                                content: {elem: 'control'}
                           },
                            {
                                elem: 'unit',
                                content: 'руб.'
                           }
                        ]
                   }
               }
            ]
       },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_15-input-hidden.js'}
    ]
});
