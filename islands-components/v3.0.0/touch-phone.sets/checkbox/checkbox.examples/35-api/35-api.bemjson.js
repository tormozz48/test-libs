({
    block: 'b-page',
    title: 'API',
    head: [
        {elem: 'css', url: '_35-api.css', ie: false},
        {elem: 'css', url: '_35-api', ie: true}
    ],
    content: [
        {
            tag: 'table',
            content: {
                tag: 'tr',
                content: [
                    {
                        tag: 'td',
                        attrs: {style: 'background: #eaede2; padding: 0 10px; vertical-align: middle;'},
                        content: {block: 'checkbox', mods: {size: 'm'}}
                    },
                    {
                        tag: 'td',
                        content: [
                            {
                                block: 'b-js-example',
                                attrs: {style: 'padding: 10px;'},
                                content: '$(\'.checkbox\').bem(\'checkbox\').toggle()'
                            },
                            {
                                block: 'b-js-example',
                                attrs: {style: 'padding: 10px;'},
                                content: '$(\'.checkbox\').bem(\'checkbox\').setMod(\'checked\', \'yes\')'
                            },
                            {
                                block: 'b-js-example',
                                attrs: {style: 'padding: 10px;'},
                                content: '$(\'.checkbox\').bem(\'checkbox\').delMod(\'checked\')'
                            },
                            '<pre>val() <span id="val"></span></pre>\n' +
                                '<pre>isChecked() <span id="isChecked"/></pre>\n' +
                                '<pre>isDisabled() <span id="isDisabled"/></pre>'
                        ]
                    }
                ]
            }
        },
        '<script>\n' +
            '$(function(){\n' +
            '$(\'.checkbox\').bem(\'checkbox\').on(\'change\', function() {\n' +
            '$(\'#val\').text(\'→ \' + this.val());\n' +
            '$(\'#isChecked\').text(\'→ \' + this.isChecked());\n' +
            '$(\'#isDisabled\').text(\'→ \' + this.isDisabled());\n' +
            '});\n' +
            '});\n' +
            '</script>',
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_35-api.js'}
    ]
});
