({
    block: 'b-page',
    title: 'Табики в табиках',
    head: [
        {elem: 'css', url: '_30-go-deeper.css'},
        {elem: 'css', url: '_30-go-deeper', ie: true}
    ],
    content: [
        {
            block: 'example',
            content: [
                {
                    block: 'tabs',
                    panes: 'oh-my-tabs',
                    mods: {control: 'menu', size: 'm', theme: 'normal', layout: 'horiz'},
                    content: [
                        {elem: 'tab', content: 'Tab 1', elemMods: {active: 'yes'}},
                        {elem: 'tab', content: 'Tab 2'},
                        {elem: 'tab', content: 'Tab 3'}
                    ]
                },
                {
                    block: 'tabs-panes',
                    id: 'oh-my-tabs',
                    content: [
                        {elem: 'pane', elemMods: {active: 'yes'}, content: [
                            {
                                block: 'tabs',
                                panes: 'deeper-tabs',
                                mods: {control: 'menu', size: 's', theme: 'normal', layout: 'horiz'},
                                content: [
                                    {elem: 'tab', content: 'Inner tab 1',  elemMods: {active: 'yes'}},
                                    {elem: 'tab', content: 'Inner tab 2'}
                                ]
                            },
                            {
                                block: 'tabs-panes',
                                id: 'deeper-tabs',
                                content: [
                                    {elem: 'pane', content: 'Content for first inner tab', elemMods: {active: 'yes'}},
                                    {elem: 'pane', content: 'Content for second inner tab'}
                                ]
                            }
                        ]},
                        {elem: 'pane', content: 'Pane 2'},
                        {elem: 'pane', content: 'Pane 3'}
                    ]
                }
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_30-go-deeper.js'}
    ]
});
