({
    block: 'b-page',
    title: 'АПИ',
    head: [
        {elem: 'css', url: '_70-api.css', ie: false},
        {elem: 'css', url: '_70-api', ie: true},
        {elem: 'meta', attrs: {name: 'viewport', content: 'initial-scale=1'}}
    ],
    content: [
        {
            block: 'example',
            js: true,
            attrs: {style: 'margin: 20px'},
            content: [
                {
                    tag: 'p',
                    content: 'API'
                },
                {
                    block: 'example',
                    mods: {type: 'api'},
                    content: [
                        {
                            block: 'radio-button',
                            mods: {size: 'm'},
                            name: 'results_type',
                            content: [
                                {
                                    elem: 'radio',
                                    controlAttrs: {value: 'global'},
                                    content: 'Global results'
                                },
                                {
                                    elem: 'radio',
                                    controlAttrs: {value: 'russian'},
                                    content: 'Russian results'
                                }
                            ]
                        }
                    ]
                },
                {
                    attrs: {style: 'margin-top: 1em'},
                    content: [
                        {
                            block: 'button',
                            js: {val: 'global'},
                            mods: {size: 's'},
                            attrs: {style: 'margin-top: 1em'},
                            content: '$(\'.radio-button\').bem(\'radio-button\').val(\'global\')'
                        }
                    ]
                },
                {
                    content: [
                        {
                            block: 'button',
                            js: {val: 'russian'},
                            mods: {size: 's'},
                            attrs: {style: 'margin-top: 1em'},
                            content: '$(\'.radio-button\').bem(\'radio-button\').val(\'russian\')'
                        }
                    ]
                },
                {
                    content: [
                        {
                            block: 'button',
                            js: {getval: true},
                            mods: {size: 's'},
                            attrs: {style: 'margin-top: 1em'},
                            content: '$(\'.radio-button\').bem(\'radio-button\').val()'
                        }
                    ]
                },
                {
                    content: [
                        {
                            block: 'button',
                            js: {uncheck: true},
                            mods: {size: 's'},
                            attrs: {style: 'margin-top: 1em'},
                            content: '$(\'.radio-button\').bem(\'radio-button\').uncheckAll()'
                        }
                    ]
                },
                {
                    tag: 'p',
                    content: [
                        'current: ',
                        {
                            tag: 'span',
                            attrs: {id: 'radio-button_current'},
                            content: '—'
                        },
                        '<br/>',
                        'prev: ',
                        {
                            tag: 'span',
                            attrs: {id: 'radio-button_prev'},
                            content: '—'
                        }
                    ]
                }
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_70-api.js'}
    ]
});
