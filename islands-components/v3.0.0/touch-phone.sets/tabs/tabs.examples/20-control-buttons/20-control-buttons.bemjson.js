({
    block: 'b-page',
    title: 'В виде кнопок',
    head: [
        {elem: 'css', url: '_20-control-buttons.css'},
        {elem: 'css', url: '_20-control-buttons', ie: true}
    ],
    content: [
        {
            block: 'example',
            content: [
                {
                    block: 'tabs',
                    panes: 'oh-my-tabs',
                    mods: {
                        control: 'buttons',
                        size: 'm'
                    },
                    content: [
                        {elem: 'tab', content: 'Tab 1', elemMods: {active: 'yes'}},
                        {elem: 'tab', content: 'Tab 2'},
                        {elem: 'tab', content: 'Tab 3', elemMods: {disabled: 'yes'}}
                    ]
                },
                {
                    block: 'tabs-panes',
                    id: 'oh-my-tabs',
                    content: [
                        {elem: 'pane', content: 'Pane 1', elemMods: {active: 'yes'}},
                        {elem: 'pane', content: 'Pane 2'},
                        {elem: 'pane', content: 'Pane 3'}
                    ]
                }
            ]
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_20-control-buttons.js'}
    ]
});
