var BEMHTML = function() {
  var $$mode, $$block, $$elem, $$elemMods, $$mods;
  var cache,
      exports = {},
      xjst = (function (exports) {
    function $1(__$ctx) {
        var __t = $$block;
        if (__t === 'popup') {
            var __t = $$mode;
            if (__t === 'content') {
                if (!!$$elem === false) {
                    return [
                        {
                            elem: 'under',
                            mods: __$ctx.ctx.underMods
                        },
                        __$ctx.ctx.content
                    ];
                    return;
                } else {
                    return $16(__$ctx);
                }
            } else if (__t === 'default') {
                return $8(__$ctx);
            } else {
                return $16(__$ctx);
            }
        } else if (__t === 'suggest-item') {
            var __t = $$mode;
            if (__t === 'mix') {
                if ($$elem === 'answer-label') {
                    return [{ block: 'a11y-hidden' }];
                    return;
                } else {
                    if (!($$mods && $$mods.type === 'icon') === false) {
                        if (!__$ctx._url === false) {
                            if (!!$$elem === false) {
                                return { mods: { nav: 'yes' } };
                                return;
                            } else {
                                return $34(__$ctx);
                            }
                        } else {
                            return $34(__$ctx);
                        }
                    } else {
                        return $34(__$ctx);
                    }
                }
            } else if (__t === 'text') {
                return $111(__$ctx);
            } else if (__t === 'value') {
                return $149(__$ctx);
            } else if (__t === 'icon') {
                return $163(__$ctx);
            } else if (__t === 'content') {
                if ($$elem === 'answer') {
                    return [
                        {
                            elem: 'answer-label',
                            content: BEM.I18N('suggest-item', 'quick-answer')
                        },
                        __$ctx.ctx.content
                    ];
                    return;
                } else {
                    if (!($$mods && $$mods.type === 'icon') === false) {
                        if (!!$$elem === false) {
                            return $69(__$ctx);
                        } else {
                            return $72(__$ctx);
                        }
                    } else {
                        return $72(__$ctx);
                    }
                }
            } else if (__t === 'default') {
                return $209(__$ctx);
            } else if (__t === 'answer') {
                return $235(__$ctx);
            } else if (__t === 'attrs') {
                if ($$elem === 'icon') {
                    var __r0, __r1, __r2, __r3;
                    return { style: ('', __r0 = $$mode, $$mode = 'png', __r1 = $270(__$ctx), $$mode = __r0, '', __r1) + ('', __r2 = $$mode, $$mode = 'svg', __r3 = $265(__$ctx), $$mode = __r2, '', __r3) };
                    return;
                } else {
                    if (!!$$elem === false) {
                        return { id: __$ctx.generateId() };
                        return;
                    } else {
                        return $428(__$ctx);
                    }
                }
            } else if (__t === 'svg') {
                if ($$elem === 'icon') {
                    return $265(__$ctx);
                } else {
                    return $428(__$ctx);
                }
            } else if (__t === 'png') {
                if ($$elem === 'icon') {
                    return $270(__$ctx);
                } else {
                    return $428(__$ctx);
                }
            } else if (__t === 'tag') {
                var __t = $$elem;
                if (__t === 'answer-label' || __t === 'answer') {
                    return 'span';
                    return;
                } else if (__t === 'icon') {
                    return 'i';
                    return;
                } else if (__t === 'value' || __t === 'text' || __t === 'hint') {
                    return 'span';
                    return;
                } else {
                    if (!!$$elem === false) {
                        return 'li';
                        return;
                    } else {
                        return $428(__$ctx);
                    }
                }
            } else if (__t === 'link') {
                if (!($$mods && $$mods.type === 'nav') === false) {
                    if (!!$$elem === false) {
                        return $276(__$ctx);
                    } else {
                        return $428(__$ctx);
                    }
                } else {
                    return $428(__$ctx);
                }
            } else if (__t === 'js') {
                if (!($$mods && $$mods.type === 'icon') === false) {
                    if (!__$ctx._url === false) {
                        if (!!$$elem === false) {
                            return { val: __$ctx._url };
                            return;
                        } else {
                            return $186(__$ctx);
                        }
                    } else {
                        return $186(__$ctx);
                    }
                } else {
                    return $186(__$ctx);
                }
            } else {
                return $428(__$ctx);
            }
        } else if (__t === 'i-bem') {
            if ($$mode === 'default') {
                if ($$elem === 'i18n') {
                    return $286(__$ctx);
                } else {
                    return $428(__$ctx);
                }
            } else {
                return $428(__$ctx);
            }
        } else if (__t === 'link') {
            var __t = $$mode;
            if (__t === 'mix') {
                return $292(__$ctx);
            } else if (__t === 'tag') {
                if ($$elem === 'inner') {
                    return 'span';
                    return;
                } else {
                    if (!!$$elem === false) {
                        return __$ctx.ctx.url ? 'a' : 'span';
                        return;
                    } else {
                        return $428(__$ctx);
                    }
                }
            } else if (__t === 'attrs') {
                return $308(__$ctx);
            } else if (__t === 'js') {
                if (!__$ctx.ctx.hasOwnProperty('tabindex') === false) {
                    return { origTabindex: String(__$ctx.ctx.tabindex) };
                    return;
                } else {
                    return $428(__$ctx);
                }
            } else {
                return $428(__$ctx);
            }
        } else if (__t === 'suggest') {
            var __t = $$elem;
            if (__t === 'padding') {
                var __t = $$mode;
                if (__t === 'content') {
                    return [
                        '.suggest .suggest-item{padding-left:',
                        __$ctx.ctx.itemPaddingLeft,
                        'px;} ',
                        '.suggest .suggest__title{width:',
                        __$ctx.ctx.titleWidth,
                        'px;}'
                    ];
                    return;
                } else if (__t === 'attrs') {
                    return { type: 'text/css' };
                    return;
                } else if (__t === 'bem') {
                    return false;
                    return;
                } else if (__t === 'tag') {
                    return 'style';
                    return;
                } else {
                    return $372(__$ctx);
                }
            } else if (__t === 'group') {
                var __t = $$mode;
                if (__t === 'default') {
                    return $342(__$ctx);
                } else if (__t === 'attrs') {
                    return {
                        role: 'group',
                        'aria-labelledby': __$ctx._titleId
                    };
                    return;
                } else {
                    return $372(__$ctx);
                }
            } else if (__t === 'items') {
                if ($$mode === 'tag') {
                    return 'ul';
                    return;
                } else {
                    return $372(__$ctx);
                }
            } else if (__t === 'title-hidden') {
                var __t = $$mode;
                if (__t === 'mix') {
                    return [{ block: 'a11y-hidden' }];
                    return;
                } else if (__t === 'tag') {
                    return 'span';
                    return;
                } else {
                    return $372(__$ctx);
                }
            } else if (__t === 'title') {
                var __t = $$mode;
                if (__t === 'content') {
                    return [
                        {
                            elem: 'title-hidden',
                            content: BEM.I18N('suggest', 'group')
                        },
                        __$ctx.ctx.content
                    ];
                    return;
                } else if (__t === 'attrs') {
                    return { id: __$ctx._titleId };
                    return;
                } else if (__t === 'tag') {
                    return 'span';
                    return;
                } else {
                    return $372(__$ctx);
                }
            } else {
                return $372(__$ctx);
            }
        } else if (__t === 'b-page') {
            if ($$mode === 'js-params') {
                if (!!$$elem === false) {
                    return $383(__$ctx);
                } else {
                    return $428(__$ctx);
                }
            } else {
                return $428(__$ctx);
            }
        } else if (__t === 'i-global') {
            var __t = $$mode;
            if (__t === 'public-params') {
                return $389(__$ctx);
            } else if (__t === 'default') {
                return $394(__$ctx);
            } else if (__t === 'env') {
                return $421(__$ctx);
            } else {
                return $428(__$ctx);
            }
        } else {
            return $428(__$ctx);
        }
    }
    function $8(__$ctx) {
        if (!!__$ctx._popupDefaults === false) {
            if (!!$$elem === false) {
                return $11(__$ctx);
            } else {
                return $16(__$ctx);
            }
        } else {
            return $16(__$ctx);
        }
    }
    function $11(__$ctx) {
        var _$4eqctx = __$ctx.ctx;
        _$4eqctx.mods = $$mods = __$ctx.extend({
            theme: 'ffffff',
            autoclosable: 'yes',
            adaptive: 'yes',
            animate: 'yes'
        }, $$mods);
        if (_$4eqctx.zIndex) {
            var _$4eqattrs = _$4eqctx.attrs || (_$4eqctx.attrs = {});
            _$4eqattrs.style = (_$4eqattrs.style || '') + ';z-index:' + _$4eqctx.zIndex + ';';
        } else {
            undefined;
        }
        {
            '';
            var __r0 = __$ctx._popupDefaults;
            __$ctx._popupDefaults = true;
            $8(__$ctx);
            __$ctx._popupDefaults = __r0;
            '';
        }
        undefined;
        return;
    }
    function $16(__$ctx) {
        if (!($$mode === '' && __$ctx._popupDefaults) === false) {
            delete __$ctx._popupDefaults;
            applyc(__$ctx);
            undefined;
            return;
        } else {
            return $428(__$ctx);
        }
    }
    function $34(__$ctx) {
        if (!($$mods && $$mods.type === 'nav') === false) {
            if (!!$$elem === false) {
                return [{ mods: { nav: 'yes' } }];
                return;
            } else {
                return $40(__$ctx);
            }
        } else {
            return $40(__$ctx);
        }
    }
    function $40(__$ctx) {
        if (!!$$elem === false) {
            return [{
                    block: 'i-pressed-controller',
                    js: true
                }];
            return;
        } else {
            return $428(__$ctx);
        }
    }
    function $69(__$ctx) {
        var __r0, __r1, __r2, __r3, __r4, __r5;
        return [
            ('', __r0 = $$mode, $$mode = 'text', __r1 = $112(__$ctx), $$mode = __r0, '', __r1),
            ('', __r2 = $$mode, $$mode = 'icon', __r3 = $166(__$ctx), $$mode = __r2, '', __r3),
            ('', __r4 = $$mode, $$mode = 'value', __r5 = $152(__$ctx), $$mode = __r4, '', __r5)
        ];
        return;
    }
    function $72(__$ctx) {
        if (!($$mods && $$mods.type === 'weather') === false) {
            if (!!$$elem === false) {
                var __r0, __r1, __r2, __r3;
                return [
                    ('', __r0 = $$mode, $$mode = 'text', __r1 = $111(__$ctx), $$mode = __r0, '', __r1),
                    ('', __r2 = $$mode, $$mode = 'answer', __r3 = $238(__$ctx), $$mode = __r2, '', __r3)
                ];
                return;
            } else {
                return $78(__$ctx);
            }
        } else {
            return $78(__$ctx);
        }
    }
    function $78(__$ctx) {
        if (!($$mods && $$mods.type === 'traffic') === false) {
            if (!!$$elem === false) {
                var __r0, __r1, __r2, __r3;
                return [
                    ('', __r0 = $$mode, $$mode = 'text', __r1 = $111(__$ctx), $$mode = __r0, '', __r1),
                    ('', __r2 = $$mode, $$mode = 'answer', __r3 = $235(__$ctx), $$mode = __r2, '', __r3)
                ];
                return;
            } else {
                return $84(__$ctx);
            }
        } else {
            return $84(__$ctx);
        }
    }
    function $84(__$ctx) {
        if (!($$mods && $$mods.type === 'text') === false) {
            if (!!$$elem === false) {
                var __r0, __r1;
                return '', __r0 = $$mode, $$mode = 'text', __r1 = $111(__$ctx), $$mode = __r0, '', __r1;
                return;
            } else {
                return $90(__$ctx);
            }
        } else {
            return $90(__$ctx);
        }
    }
    function $90(__$ctx) {
        if (!($$mods && $$mods.type === 'nav') === false) {
            if (!!$$elem === false) {
                var __r0, __r1;
                return [
                    ('', __r0 = $$mode, $$mode = 'link', __r1 = $276(__$ctx), $$mode = __r0, '', __r1),
                    {
                        elem: 'answer',
                        content: [
                            '&nbsp;&mdash;&nbsp;',
                            {
                                elem: 'text',
                                content: __$ctx.ctx.data[2]
                            }
                        ]
                    }
                ];
                return;
            } else {
                return $96(__$ctx);
            }
        } else {
            return $96(__$ctx);
        }
    }
    function $96(__$ctx) {
        if (!($$mods && $$mods.type === 'fact') === false) {
            if (!!$$elem === false) {
                var __r0, __r1, __r2, __r3;
                return [
                    ('', __r0 = $$mode, $$mode = 'text', __r1 = $111(__$ctx), $$mode = __r0, '', __r1),
                    ('', __r2 = $$mode, $$mode = 'answer', __r3 = $235(__$ctx), $$mode = __r2, '', __r3)
                ];
                return;
            } else {
                return $102(__$ctx);
            }
        } else {
            return $102(__$ctx);
        }
    }
    function $102(__$ctx) {
        var __t = $$elem;
        if (__t === 'value' || __t === 'text' || __t === 'hint') {
            return __$ctx.xmlEscape(__$ctx.ctx.content);
            return;
        } else {
            return $428(__$ctx);
        }
    }
    function $111(__$ctx) {
        if (!($$mods && $$mods.type === 'icon') === false) {
            return $112(__$ctx);
        } else {
            return $123(__$ctx);
        }
    }
    function $112(__$ctx) {
        if (!__$ctx._url === false) {
            if (!!$$elem === false) {
                return {
                    block: 'suggest-item',
                    elem: 'link',
                    url: __$ctx._url,
                    content: __$ctx._text
                };
                return;
            } else {
                return $118(__$ctx);
            }
        } else {
            return $118(__$ctx);
        }
    }
    function $118(__$ctx) {
        if (!!$$elem === false) {
            return {
                elem: 'text',
                content: __$ctx._text
            };
            return;
        } else {
            return $123(__$ctx);
        }
    }
    function $123(__$ctx) {
        if (!($$mods && $$mods.type === 'weather') === false) {
            if (!!$$elem === false) {
                return {
                    elem: 'text',
                    content: __$ctx.ctx.data[1]
                };
                return;
            } else {
                return $129(__$ctx);
            }
        } else {
            return $129(__$ctx);
        }
    }
    function $129(__$ctx) {
        if (!($$mods && $$mods.type === 'traffic') === false) {
            if (!!$$elem === false) {
                return {
                    elem: 'text',
                    content: __$ctx.ctx.data[1]
                };
                return;
            } else {
                return $135(__$ctx);
            }
        } else {
            return $135(__$ctx);
        }
    }
    function $135(__$ctx) {
        if (!($$mods && $$mods.type === 'text') === false) {
            if (!!$$elem === false) {
                return {
                    elem: 'text',
                    content: __$ctx._.isArray(__$ctx.ctx.data) ? __$ctx.ctx.data[1] : __$ctx.ctx.data
                };
                return;
            } else {
                return $141(__$ctx);
            }
        } else {
            return $141(__$ctx);
        }
    }
    function $141(__$ctx) {
        if (!($$mods && $$mods.type === 'fact') === false) {
            if (!!$$elem === false) {
                return {
                    elem: 'text',
                    content: __$ctx.ctx.data[1]
                };
                return;
            } else {
                return $428(__$ctx);
            }
        } else {
            return $428(__$ctx);
        }
    }
    function $149(__$ctx) {
        if (!($$mods && $$mods.type === 'icon') === false) {
            if (!!$$elem === false) {
                return $152(__$ctx);
            } else {
                return $155(__$ctx);
            }
        } else {
            return $155(__$ctx);
        }
    }
    function $152(__$ctx) {
        return {
            elem: 'value',
            content: __$ctx.xmlEscape(__$ctx._fact)
        };
        return;
    }
    function $155(__$ctx) {
        if (!($$mods && $$mods.type === 'weather') === false) {
            if (!!$$elem === false) {
                return {
                    elem: 'value',
                    content: __$ctx.ctx.data[2]
                };
                return;
            } else {
                return $428(__$ctx);
            }
        } else {
            return $428(__$ctx);
        }
    }
    function $163(__$ctx) {
        if (!($$mods && $$mods.type === 'icon') === false) {
            if (!!$$elem === false) {
                return $166(__$ctx);
            } else {
                return $169(__$ctx);
            }
        } else {
            return $169(__$ctx);
        }
    }
    function $166(__$ctx) {
        return {
            elem: 'icon',
            mods: { type: 'favicon' },
            svg: __$ctx._icons.svg,
            png: __$ctx._icons.png
        };
        return;
    }
    function $169(__$ctx) {
        if (!($$mods && $$mods.type === 'weather') === false) {
            if (!!$$elem === false) {
                return {
                    elem: 'icon',
                    elemMods: { weather: __$ctx.ctx.data[3].replace('-', 'minus-').replace('+', 'plus-').replace(/_/g, '-') }
                };
                return;
            } else {
                return $428(__$ctx);
            }
        } else {
            return $428(__$ctx);
        }
    }
    function $186(__$ctx) {
        if (!($$mods && $$mods.type === 'nav') === false) {
            if (!!$$elem === false) {
                return { val: __$ctx._url };
                return;
            } else {
                return $192(__$ctx);
            }
        } else {
            return $192(__$ctx);
        }
    }
    function $192(__$ctx) {
        if (!!$$elem === false) {
            return true;
            return;
        } else {
            if (!__$ctx.ctx.pers === false) {
                if (!!$$elem === false) {
                    return { pers: 1 };
                    return;
                } else {
                    return $201(__$ctx);
                }
            } else {
                return $201(__$ctx);
            }
        }
    }
    function $201(__$ctx) {
        if (!__$ctx.ctx['search_cgi'] === false) {
            if (!!$$elem === false) {
                return { cgi: __$ctx.ctx['search_cgi'] };
                return;
            } else {
                return $428(__$ctx);
            }
        } else {
            return $428(__$ctx);
        }
    }
    function $209(__$ctx) {
        if (!(__$ctx['__$anflg559'] !== true) === false) {
            if (!($$mods && $$mods.type === 'icon') === false) {
                if (!!$$elem === false) {
                    return $213(__$ctx);
                } else {
                    return $218(__$ctx);
                }
            } else {
                return $218(__$ctx);
            }
        } else {
            return $218(__$ctx);
        }
    }
    function $213(__$ctx) {
        if (!Array.isArray(__$ctx.ctx.data)) {
            return undefined;
        } else {
            undefined;
        }
        var _$4ecdata = __$ctx.ctx.data.slice(1), _$4ecinfo = _$4ecdata[1] || {};
        if (!_$4ecinfo.icon) {
            return undefined;
        } else {
            undefined;
        }
        var _$4ecicons = {};
        if (Array.isArray(_$4ecinfo.icon[0])) {
            _$4ecinfo.icon.forEach(function (icon) {
                _$4ecicons[icon[0]] = icon[1];
            });
        } else {
            _$4ecicons[_$4ecinfo.icon[0]] = _$4ecinfo.icon[1];
        }
        if (_$4ecinfo.url) {
            __$ctx._url = (/[\/]{2}/.test(_$4ecinfo.url) ? '' : 'http://') + _$4ecinfo.url;
        } else {
            undefined;
        }
        {
            '';
            var __r0 = __$ctx['__$anflg559'];
            __$ctx['__$anflg559'] = true;
            {
                '';
                var __r1 = __$ctx._text;
                __$ctx._text = __$ctx.xmlEscape(_$4ecdata[0]) || '';
                var __r2 = __$ctx._icons;
                __$ctx._icons = _$4ecicons;
                var __r3 = __$ctx._fact;
                __$ctx._fact = _$4ecinfo.fact || '';
                $209(__$ctx);
                __$ctx._text = __r1;
                __$ctx._icons = __r2;
                __$ctx._fact = __r3;
                '';
            }
            __$ctx['__$anflg559'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $218(__$ctx) {
        if ($$elem === 'link') {
            if (!(__$ctx['__$anflg558'] !== true) === false) {
                return $221(__$ctx);
            } else {
                return $224(__$ctx);
            }
        } else {
            return $224(__$ctx);
        }
    }
    function $221(__$ctx) {
        var __r0, __r4, __r1, __r2, __r3;
        return '', __r0 = __$ctx['__$anflg558'], __$ctx['__$anflg558'] = true, __r4 = ('', __r1 = __$ctx.ctx, __$ctx.ctx = {
            block: 'link',
            url: __$ctx.ctx.url,
            target: '_blank',
            mix: {
                block: $$block,
                elem: $$elem
            },
            content: __$ctx.ctx.content
        }, __r2 = $$mode, $$mode = '', __r3 = $429(__$ctx), __$ctx.ctx = __r1, $$mode = __r2, '', __r3), __$ctx['__$anflg558'] = __r0, '', __r4;
        return;
    }
    function $224(__$ctx) {
        if (!(__$ctx['__$anflg555'] !== true) === false) {
            if (!($$mods && $$mods.type === 'nav') === false) {
                if (!!$$elem === false) {
                    var _$4dmurl = __$ctx.ctx.data[4];
                    {
                        '';
                        var __r0 = __$ctx['__$anflg555'];
                        __$ctx['__$anflg555'] = true;
                        {
                            '';
                            var __r1 = __$ctx._url;
                            __$ctx._url = (_$4dmurl.match(/^\w[\w-]*:\/\//g) ? '' : 'http://') + _$4dmurl;
                            $209(__$ctx);
                            __$ctx._url = __r1;
                            '';
                        }
                        __$ctx['__$anflg555'] = __r0;
                        '';
                    }
                    undefined;
                    return;
                } else {
                    return $428(__$ctx);
                }
            } else {
                return $428(__$ctx);
            }
        } else {
            return $428(__$ctx);
        }
    }
    function $235(__$ctx) {
        if (!($$mods && $$mods.type === 'weather') === false) {
            if (!!$$elem === false) {
                return $238(__$ctx);
            } else {
                return $241(__$ctx);
            }
        } else {
            return $241(__$ctx);
        }
    }
    function $238(__$ctx) {
        var __r0, __r1, __r2, __r3;
        return {
            elem: 'answer',
            content: [
                ('', __r0 = $$mode, $$mode = 'icon', __r1 = $163(__$ctx), $$mode = __r0, '', __r1),
                ('', __r2 = $$mode, $$mode = 'value', __r3 = $149(__$ctx), $$mode = __r2, '', __r3)
            ]
        };
        return;
    }
    function $241(__$ctx) {
        if (!($$mods && $$mods.type === 'traffic') === false) {
            if (!!$$elem === false) {
                return {
                    elem: 'answer',
                    content: [
                        {
                            elem: 'icon',
                            elemMods: { traffic: __$ctx.ctx.data[3] }
                        },
                        {
                            elem: 'value',
                            content: __$ctx.ctx.data[2]
                        }
                    ]
                };
                return;
            } else {
                return $247(__$ctx);
            }
        } else {
            return $247(__$ctx);
        }
    }
    function $247(__$ctx) {
        if (!($$mods && $$mods.type === 'fact') === false) {
            if (!!$$elem === false) {
                return {
                    elem: 'answer',
                    content: [{
                            elem: 'hint',
                            content: __$ctx.ctx.data[2]
                        }]
                };
                return;
            } else {
                return $428(__$ctx);
            }
        } else {
            return $428(__$ctx);
        }
    }
    function $265(__$ctx) {
        return __$ctx.ctx.svg ? 'background-image:none,url("' + __$ctx.ctx.svg + '")' : '';
        return;
    }
    function $270(__$ctx) {
        return __$ctx.ctx.png ? 'background-image:url("' + __$ctx.ctx.png + '");' : '';
        return;
    }
    function $276(__$ctx) {
        return {
            elem: 'link',
            url: __$ctx._url,
            content: __$ctx.ctx.data[3]
        };
        return;
    }
    function $286(__$ctx) {
        var __r0, __r1, __r2, __r3;
        if (!__$ctx.ctx) {
            return '';
        } else {
            undefined;
        }
        var _$4ekctx = __$ctx.ctx, _$4ekkeyset = _$4ekctx.keyset, _$4ekkey = _$4ekctx.key, _$4ekparams = _$4ekctx.params || {};
        if (!(_$4ekkeyset || _$4ekkey)) {
            return '';
        } else {
            undefined;
        }
        if (_$4ekctx.content) {
            var _$4ekcnt;
            _$4ekparams.content = (_$4ekcnt = [], '', __r0 = __$ctx._buf, __$ctx._buf = _$4ekcnt, __r1 = $$mode, $$mode = '', __r2 = __$ctx.ctx, __$ctx.ctx = _$4ekctx.content, __r3 = $429(__$ctx), __$ctx._buf = __r0, $$mode = __r1, __$ctx.ctx = __r2, '', __r3, _$4ekcnt.join(''));
        } else {
            undefined;
        }
        __$ctx._buf.push(BEM.I18N(_$4ekkeyset, _$4ekkey, _$4ekparams));
        return;
    }
    function $292(__$ctx) {
        if (!(__$ctx['__$anflg557'] !== true) === false) {
            if (!!$$elem === false) {
                var __r0, __r1;
                var _$4dwmix = ('', __r0 = __$ctx['__$anflg557'], __$ctx['__$anflg557'] = true, __r1 = $292(__$ctx), __$ctx['__$anflg557'] = __r0, '', __r1) || [];
                _$4dwmix.push({
                    block: 'i-pressed-controller',
                    js: true
                });
                return _$4dwmix;
                return;
            } else {
                return $428(__$ctx);
            }
        } else {
            return $428(__$ctx);
        }
    }
    function $308(__$ctx) {
        if (!(__$ctx['__$anflg556'] !== true) === false) {
            if (!($$mods && $$mods.disabled === 'yes') === false) {
                if (!!$$elem === false) {
                    var __r0, __r1;
                    var _$4duattrs = ('', __r0 = __$ctx['__$anflg556'], __$ctx['__$anflg556'] = true, __r1 = $308(__$ctx), __$ctx['__$anflg556'] = __r0, '', __r1) || {};
                    _$4duattrs.tabindex = -1;
                    _$4duattrs['aria-disabled'] = true;
                    return _$4duattrs;
                    return;
                } else {
                    return $317(__$ctx);
                }
            } else {
                return $317(__$ctx);
            }
        } else {
            return $317(__$ctx);
        }
    }
    function $317(__$ctx) {
        if (!!$$elem === false) {
            return $319(__$ctx);
        } else {
            return $428(__$ctx);
        }
    }
    function $319(__$ctx) {
        var _$4dtctx = __$ctx.ctx, _$4dtattrs = {};
        [
            'title',
            'target',
            'id',
            'tabindex'
        ].forEach(function (param) {
            if (_$4dtctx.hasOwnProperty(param)) {
                _$4dtattrs[param] = String(_$4dtctx[param]);
            } else {
                undefined;
            }
        });
        if (_$4dtctx.url !== null && typeof _$4dtctx.url !== 'undefined') {
            if (__$ctx.isSimple(_$4dtctx.url)) {
                _$4dtattrs.href = String(_$4dtctx.url);
            } else {
                var _$4dtbuf = [];
                {
                    '';
                    var __r0 = $$mode;
                    $$mode = '';
                    var __r1 = __$ctx._buf;
                    __$ctx._buf = _$4dtbuf;
                    var __r2 = __$ctx.ctx;
                    __$ctx.ctx = _$4dtctx.url;
                    $429(__$ctx);
                    $$mode = __r0;
                    __$ctx._buf = __r1;
                    __$ctx.ctx = __r2;
                    '';
                }
                undefined;
                _$4dtattrs.href = _$4dtbuf.join('');
            }
        } else {
            _$4dtattrs.role = 'button';
            if (!_$4dtattrs.tabindex) {
                _$4dtattrs.tabindex = '0';
            } else {
                undefined;
            }
        }
        return _$4dtattrs;
        return;
    }
    function $342(__$ctx) {
        if (!(__$ctx['__$anflg554'] !== true) === false) {
            {
                '';
                var __r0 = __$ctx['__$anflg554'];
                __$ctx['__$anflg554'] = true;
                {
                    '';
                    var __r1 = __$ctx._titleId;
                    __$ctx._titleId = __$ctx.generateId();
                    $342(__$ctx);
                    __$ctx._titleId = __r1;
                    '';
                }
                __$ctx['__$anflg554'] = __r0;
                '';
            }
            undefined;
            return;
        } else {
            return $372(__$ctx);
        }
    }
    function $372(__$ctx) {
        if ($$mode === 'js') {
            if (!!$$elem === false) {
                return true;
                return;
            } else {
                return $428(__$ctx);
            }
        } else {
            return $428(__$ctx);
        }
    }
    function $383(__$ctx) {
        var __r0, __r1, __r2, __r3;
        var _$4cs_this = __$ctx['i-global'], _$4csjs = {}, _$4csblock = {
                block: 'i-global',
                js: _$4csjs
            }, _$4cse;
        for (_$4cse in _$4cs_this) {
            if (_$4cs_this.hasOwnProperty(_$4cse) && ('', __r0 = $$mode, $$mode = 'public-params', __r1 = $$block, $$block = 'i-global', __r2 = $$elem, $$elem = _$4cse, __r3 = $389(__$ctx), $$mode = __r0, $$block = __r1, $$elem = __r2, '', __r3)) {
                _$4csjs[_$4cse] = _$4cs_this[_$4cse];
            } else {
                undefined;
            }
        }
        return _$4csblock;
        return;
    }
    function $389(__$ctx) {
        if (!$$elem === false) {
            return {
                id: 1,
                lang: 1,
                tld: 1,
                'content-region': 1,
                'user-region': 1,
                login: 1,
                displayName: 1,
                index: 1,
                yandexuid: 1,
                'passport-host': 1,
                'pass-host': 1,
                'passport-msg': 1,
                'static-host': 1,
                'lego-static-host': 1,
                'social-host': 1,
                clck: 1,
                'click-host': 1,
                'export-host': 1,
                'i-host': 1,
                'social-retpath': 1,
                'lego-path': 1,
                sid: 1,
                retpath: 1,
                uid: 1
            }[$$elem] || false;
            return;
        } else {
            return $428(__$ctx);
        }
    }
    function $394(__$ctx) {
        var __t = $$elem;
        if (__t === 'lego-static-host') {
            return '//yastatic.net/lego/2.10-142';
            return;
        } else if (__t === 'export-host') {
            return '//export.yandex.ru';
            return;
        } else if (__t === 'social-host') {
            return '//social.yandex.ru';
            return;
        } else if (__t === 'pass-host') {
            return '//pass.yandex.ru';
            return;
        } else if (__t === 'passport-host') {
            return 'https://passport.yandex.ru';
            return;
        } else if (__t === 'click-host') {
            return '//clck.yandex.ru';
            return;
        } else if (__t === 'content-region' || __t === 'tld' || __t === 'lang') {
            return 'ru';
            return;
        } else {
            if (!$$elem === false) {
                return '';
                return;
            } else {
                if (!!$$elem === false) {
                    return $418(__$ctx);
                } else {
                    return $428(__$ctx);
                }
            }
        }
    }
    function $418(__$ctx) {
        var _$4cgparams = __$ctx.ctx.params || {}, _$4cgiGlobal = __$ctx['i-global'], _$4cgisTldChanged = _$4cgparams.tld && _$4cgparams.tld !== _$4cgiGlobal.tld, _$4cgtld, _$4cgxYaDomain, _$4cgyaDomain;
        if (_$4cgisTldChanged) {
            _$4cgtld = _$4cgparams.tld;
            _$4cgxYaDomain = _$4cgtld === 'tr' ? 'yandex.com.tr' : 'yandex.' + _$4cgtld;
            _$4cgyaDomain = [
                'ua',
                'by',
                'kz'
            ].indexOf(_$4cgtld) != -1 ? 'yandex.ru' : _$4cgxYaDomain;
            _$4cgiGlobal['content-region'] = _$4cgtld;
            _$4cgiGlobal['click-host'] = '//clck.' + _$4cgyaDomain;
            _$4cgiGlobal['passport-host'] = 'https://passport.' + _$4cgyaDomain;
            _$4cgiGlobal['pass-host'] = '//pass.' + _$4cgxYaDomain;
            _$4cgiGlobal['social-host'] = '//social.' + _$4cgxYaDomain;
            _$4cgiGlobal['export-host'] = '//export.' + _$4cgxYaDomain;
        } else {
            undefined;
        }
        for (var _$4cgp in _$4cgparams) {
            _$4cgiGlobal[_$4cgp] = _$4cgparams[_$4cgp];
        }
        return;
    }
    function $421(__$ctx) {
        if (!!$$elem === false) {
            return {};
            return;
        } else {
            return $428(__$ctx);
        }
    }
    function $428(__$ctx) {
        if ($$mode === '') {
            return $429(__$ctx);
        } else {
            return $434(__$ctx);
        }
    }
    function $429(__$ctx) {
        if (!!__$ctx['i-global'] === false) {
            return $431(__$ctx);
        } else {
            return $434(__$ctx);
        }
    }
    function $431(__$ctx) {
        var __r0, __r1, __r2, __r3, __r4, __r5, __r6;
        var _$4ceps = {}, _$4cees = [
                'lang',
                'tld',
                'content-region',
                'click-host',
                'passport-host',
                'pass-host',
                'social-host',
                'export-host',
                'login',
                'lego-static-host'
            ], _$4cee;
        while (_$4cee = _$4cees.shift()) {
            _$4ceps[_$4cee] = ('', __r0 = $$mode, $$mode = 'default', __r1 = $$block, $$block = 'i-global', __r2 = $$elem, $$elem = _$4cee, __r3 = $394(__$ctx), $$mode = __r0, $$block = __r1, $$elem = __r2, '', __r3);
        }
        __$ctx['i-global'] = __$ctx._.extend(_$4ceps, ('', __r4 = $$mode, $$mode = 'env', __r5 = $$block, $$block = 'i-global', __r6 = $421(__$ctx), $$mode = __r4, $$block = __r5, '', __r6));
        applyc(__$ctx);
        undefined;
        return;
    }
    function $434(__$ctx) {
        var __t = $$block;
        if (__t === 'i-ua') {
            var __t = $$mode;
            if (__t === 'content') {
                return $436(__$ctx);
            } else if (__t === 'bem') {
                if (!!$$elem === false) {
                    return false;
                    return;
                } else {
                    return $543(__$ctx);
                }
            } else if (__t === 'tag') {
                if (!!$$elem === false) {
                    return 'script';
                    return;
                } else {
                    return $543(__$ctx);
                }
            } else {
                return $543(__$ctx);
            }
        } else if (__t === 'input') {
            var __t = $$mode;
            if (__t === 'content') {
                var __t = $$elem;
                if (__t === 'clear') {
                    if (!!__$ctx.ctx.content === false) {
                        return '';
                        return;
                    } else {
                        return $543(__$ctx);
                    }
                } else if (__t === 'ahead') {
                    return [
                        { elem: 'ahead-filler' },
                        { elem: 'ahead-hint' }
                    ];
                    return;
                } else {
                    return $543(__$ctx);
                }
            } else if (__t === 'attrs') {
                var __t = $$elem;
                if (__t === 'clear') {
                    return { unselectable: 'on' };
                    return;
                } else if (__t === 'control') {
                    return $473(__$ctx);
                } else {
                    return $543(__$ctx);
                }
            } else if (__t === 'tag') {
                var __t = $$elem;
                if (__t === 'clear') {
                    return 'span';
                    return;
                } else if (__t === 'control') {
                    return 'input';
                    return;
                } else if (__t === 'ahead-hint' || __t === 'ahead-filler') {
                    return 'span';
                    return;
                } else {
                    if (!!$$elem === false) {
                        return 'span';
                        return;
                    } else {
                        return $543(__$ctx);
                    }
                }
            } else if (__t === 'default') {
                return $494(__$ctx);
            } else if (__t === 'mix') {
                if ($$elem === 'ahead') {
                    return [{
                            block: 'input',
                            elem: 'input'
                        }];
                    return;
                } else {
                    return $543(__$ctx);
                }
            } else if (__t === 'value') {
                return $516(__$ctx);
            } else if (__t === 'js') {
                if (!!$$elem === false) {
                    if ($$mods.popup == 'gradient') {
                        return {
                            live: false,
                            popupMods: { gradient: 'yes' }
                        };
                    } else {
                        return { live: false };
                    }
                    return;
                } else {
                    return $543(__$ctx);
                }
            } else {
                return $543(__$ctx);
            }
        } else {
            return $543(__$ctx);
        }
    }
    function $436(__$ctx) {
        if (!(__$ctx['__$anflg553'] !== true) === false) {
            if (!!$$elem === false) {
                var __r0, __r1;
                var _$4cdc = ('', __r0 = __$ctx['__$anflg553'], __$ctx['__$anflg553'] = true, __r1 = $436(__$ctx), __$ctx['__$anflg553'] = __r0, '', __r1);
                _$4cdc += [
                    ';(function(d,e,c,r,n,w,v,f){',
                    'e=d.documentElement;',
                    'c="className";',
                    'r="replace";',
                    'n="createElementNS";',
                    'f="firstChild";',
                    'w="http://www.w3.org/2000/svg";',
                    'e[c]+=" i-ua_svg_"+(!!d[n]&&!!d[n](w,"svg").createSVGRect?"yes":"no");',
                    'v=d.createElement("div");',
                    'v.innerHTML="<svg/>";',
                    'e[c]+=" i-ua_inlinesvg_"+((v[f]&&v[f].namespaceURI)==w?"yes":"no");',
                    '})(document);'
                ].join('');
                return _$4cdc;
                return;
            } else {
                return $442(__$ctx);
            }
        } else {
            return $442(__$ctx);
        }
    }
    function $442(__$ctx) {
        if (!!$$elem === false) {
            return [
                ';(function(d,e,c,r){',
                'e=d.documentElement;',
                'c="className";',
                'r="replace";',
                'e[c]=e[c][r]("i-ua_js_no","i-ua_js_yes");',
                'if(d.compatMode!="CSS1Compat")',
                'e[c]=e[c][r]("i-ua_css_standart","i-ua_css_quirks")',
                '})(document);'
            ].join('');
            return;
        } else {
            return $543(__$ctx);
        }
    }
    function $473(__$ctx) {
        if (!(__$ctx['__$anflg552'] !== true) === false) {
            var __r0, __r1;
            var _$4c6ctx = __$ctx.ctx, _$4c6a = __$ctx._.extend(('', __r0 = __$ctx['__$anflg552'], __$ctx['__$anflg552'] = true, __r1 = $473(__$ctx), __$ctx['__$anflg552'] = __r0, '', __r1), {
                    autocomplete: _$4c6ctx.autocomplete || 'off',
                    autocorrect: _$4c6ctx.autocorrect || 'off',
                    autocapitalize: _$4c6ctx.autocapitalize || 'off',
                    spellcheck: _$4c6ctx.spellcheck || 'false'
                });
            return _$4c6a;
            return;
        } else {
            var _$4c4a = __$ctx._.extend({
                    id: __$ctx._inputId,
                    name: __$ctx._name
                }, __$ctx.ctx.controlAttrs);
            (__$ctx._value || __$ctx._value === 0) && (_$4c4a.value = __$ctx._value);
            $$mods.disabled && (_$4c4a.disabled = 'disabled');
            _$4c4a['aria-labelledby'] = __$ctx._labelId + ' ' + __$ctx._hintId;
            return _$4c4a;
            return;
        }
    }
    function $494(__$ctx) {
        if ($$elem === 'control') {
            if (!(__$ctx['__$anflg551'] !== true) === false) {
                if (!!$$mods.clear === false) {
                    return $498(__$ctx);
                } else {
                    return $503(__$ctx);
                }
            } else {
                return $503(__$ctx);
            }
        } else {
            return $503(__$ctx);
        }
    }
    function $498(__$ctx) {
        {
            '';
            var __r0 = __$ctx['__$anflg551'];
            __$ctx['__$anflg551'] = true;
            {
                '';
                var __r1 = __$ctx.ctx;
                __$ctx.ctx = {
                    elem: 'box',
                    tag: 'span',
                    content: [
                        __$ctx.ctx,
                        {
                            elem: 'clear',
                            elemMods: __$ctx._value || __$ctx._value === 0 ? { visibility: 'visible' } : undefined
                        }
                    ]
                };
                var __r2 = $$mode;
                $$mode = '';
                $429(__$ctx);
                __$ctx.ctx = __r1;
                $$mode = __r2;
                '';
            }
            __$ctx['__$anflg551'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $503(__$ctx) {
        if (!(__$ctx['__$anflg550'] !== true) === false) {
            if (!!$$elem === false) {
                return $506(__$ctx);
            } else {
                return $543(__$ctx);
            }
        } else {
            return $543(__$ctx);
        }
    }
    function $506(__$ctx) {
        var __r0, __r1, __r2;
        var _$4bvvalue = ('', __r0 = $$mode, $$mode = 'value', __r1 = __$ctx.ctx, __$ctx.ctx = __$ctx.ctx.value, __r2 = $516(__$ctx), $$mode = __r0, __$ctx.ctx = __r1, '', __r2), _$4bvid = __$ctx.ctx.id || __$ctx.generateId(), _$4bvmods = __$ctx.ctx.mods || {};
        _$4bvmods.theme = _$4bvmods.theme || 'normal';
        {
            '';
            var __r3 = __$ctx['__$anflg550'];
            __$ctx['__$anflg550'] = true;
            {
                '';
                var __r4 = __$ctx._inputId;
                __$ctx._inputId = _$4bvid;
                var __r5 = __$ctx._labelId;
                __$ctx._labelId = 'label' + _$4bvid;
                var __r6 = __$ctx._hintId;
                __$ctx._hintId = 'hint' + _$4bvid;
                var __r7 = __$ctx._name;
                __$ctx._name = __$ctx.ctx.name || '';
                var __r8 = __$ctx._value;
                __$ctx._value = _$4bvvalue;
                var __r9 = __$ctx._inputLink;
                __$ctx._inputLink = true;
                var __r10 = __$ctx._disabled;
                __$ctx._disabled = $$mods.disabled;
                var __r11 = __$ctx.ctx, __r12 = __r11.mods;
                __r11.mods = _$4bvmods;
                $494(__$ctx);
                __$ctx._inputId = __r4;
                __$ctx._labelId = __r5;
                __$ctx._hintId = __r6;
                __$ctx._name = __r7;
                __$ctx._value = __r8;
                __$ctx._inputLink = __r9;
                __$ctx._disabled = __r10;
                __r11.mods = __r12;
                '';
            }
            __$ctx['__$anflg550'] = __r3;
            '';
        }
        undefined;
        return;
    }
    function $516(__$ctx) {
        if (!__$ctx.isSimple(__$ctx.ctx) === false) {
            if (!!$$elem === false) {
                return __$ctx.ctx;
                return;
            } else {
                return $522(__$ctx);
            }
        } else {
            return $522(__$ctx);
        }
    }
    function $522(__$ctx) {
        if (!__$ctx.ctx === false) {
            if (!!$$elem === false) {
                var _$4bxvalue = [];
                {
                    '';
                    var __r0 = __$ctx._buf;
                    __$ctx._buf = _$4bxvalue;
                    var __r1 = $$mode;
                    $$mode = '';
                    $429(__$ctx);
                    __$ctx._buf = __r0;
                    $$mode = __r1;
                    '';
                }
                undefined;
                return _$4bxvalue.join('');
                return;
            } else {
                return $528(__$ctx);
            }
        } else {
            return $528(__$ctx);
        }
    }
    function $528(__$ctx) {
        if (!true === false) {
            if (!!$$elem === false) {
                return '';
                return;
            } else {
                return $543(__$ctx);
            }
        } else {
            return $543(__$ctx);
        }
    }
    function $543(__$ctx) {
        var __t = $$mode;
        if (__t === 'content') {
            return __$ctx.ctx.content;
            return;
        } else if (__t === 'mix' || __t === 'bem' || __t === 'jsAttr' || __t === 'js' || __t === 'cls' || __t === 'attrs' || __t === 'tag') {
            return undefined;
            return;
        } else {
            if (!__$ctx.ctx === false) {
                if (!__$ctx.ctx.link === false) {
                    if (!!__$ctx._.isSimple(__$ctx.ctx) === false) {
                        return $564(__$ctx);
                    } else {
                        return $569(__$ctx);
                    }
                } else {
                    return $569(__$ctx);
                }
            } else {
                return $569(__$ctx);
            }
        }
    }
    function $564(__$ctx) {
        var __r0, __r1;
        function _$4bkfollow() {
            if (this.ctx.link === 'no-follow') {
                return undefined;
            } else {
                undefined;
            }
            var data = this._links[this.ctx.link];
            return '', __r0 = this.ctx, this.ctx = data, __r1 = $1(__$ctx), this.ctx = __r0, '', __r1;
        }
        if (!cache || !__$ctx._cacheLog) {
            return _$4bkfollow.call(__$ctx);
        } else {
            undefined;
        }
        var _$4bkcontents = __$ctx._buf.slice(__$ctx._cachePos).join('');
        __$ctx._cachePos = __$ctx._buf.length;
        __$ctx._cacheLog.push(_$4bkcontents, {
            log: __$ctx._localLog.slice(),
            link: __$ctx.ctx.link
        });
        var _$4bkres = _$4bkfollow.call(__$ctx);
        __$ctx._cachePos = __$ctx._buf.length;
        return _$4bkres;
        return;
    }
    function $569(__$ctx) {
        if (!cache === false) {
            if (!__$ctx.ctx === false) {
                if (!__$ctx.ctx.cache === false) {
                    return $573(__$ctx);
                } else {
                    return $578(__$ctx);
                }
            } else {
                return $578(__$ctx);
            }
        } else {
            return $578(__$ctx);
        }
    }
    function $573(__$ctx) {
        var _$4bjcached;
        function _$4bjsetProperty(obj, key, value) {
            if (key.length === 0) {
                return undefined;
            } else {
                undefined;
            }
            if (Array.isArray(value)) {
                var target = obj;
                for (var i = 0; i < value.length - 1; i++) {
                    target = target[value[i]];
                }
                value = target[value[i]];
            } else {
                undefined;
            }
            var host = obj, previous;
            for (var i = 0; i < key.length - 1; i++) {
                host = host[key[i]];
            }
            previous = host[key[i]];
            host[key[i]] = value;
            return previous;
        }
        if (_$4bjcached = cache.get(__$ctx.ctx.cache)) {
            var _$4bjoldLinks = __$ctx._links;
            if (__$ctx.ctx.links) {
                __$ctx._links = __$ctx.ctx.links;
            } else {
                undefined;
            }
            for (var _$4bji = 0; _$4bji < _$4bjcached.log.length; _$4bji++) {
                if (typeof _$4bjcached.log[_$4bji] === 'string') {
                    __$ctx._buf.push(_$4bjcached.log[_$4bji]);
                    continue;
                } else {
                    undefined;
                }
                var _$4bjlog = _$4bjcached.log[_$4bji], _$4bjreverseLog;
                _$4bjreverseLog = _$4bjlog.log.map(function (entry) {
                    return {
                        key: entry[0],
                        value: _$4bjsetProperty(this, entry[0], entry[1])
                    };
                }, __$ctx).reverse();
                {
                    '';
                    var __r0 = __$ctx.ctx, __r1 = __r0.cache;
                    __r0.cache = null;
                    var __r2 = __$ctx._cacheLog;
                    __$ctx._cacheLog = null;
                    var __r3 = __$ctx.ctx, __r4 = __r3.link;
                    __r3.link = _$4bjlog.link;
                    $1(__$ctx);
                    __r0.cache = __r1;
                    __$ctx._cacheLog = __r2;
                    __r3.link = __r4;
                    '';
                }
                undefined;
                _$4bjreverseLog.forEach(function (entry) {
                    _$4bjsetProperty(this, entry.key, entry.value);
                }, __$ctx);
            }
            __$ctx._links = _$4bjoldLinks;
            return _$4bjcached.res;
        } else {
            undefined;
        }
        var _$4bjcacheLog = [], _$4bjres;
        {
            '';
            var __r5 = __$ctx.ctx, __r6 = __r5.cache;
            __r5.cache = null;
            var __r7 = __$ctx._cachePos;
            __$ctx._cachePos = __$ctx._buf.length;
            var __r8 = __$ctx._cacheLog;
            __$ctx._cacheLog = _$4bjcacheLog;
            var __r9 = __$ctx._localLog;
            __$ctx._localLog = [];
            {
                _$4bjres = $1(__$ctx);
                var _$4bjtail = __$ctx._buf.slice(__$ctx._cachePos).join('');
                if (_$4bjtail) {
                    _$4bjcacheLog.push(_$4bjtail);
                } else {
                    undefined;
                }
            }
            __r5.cache = __r6;
            __$ctx._cachePos = __r7;
            __$ctx._cacheLog = __r8;
            __$ctx._localLog = __r9;
            '';
        }
        cache.set(__$ctx.ctx.cache, {
            log: _$4bjcacheLog,
            res: _$4bjres
        });
        return _$4bjres;
        return;
    }
    function $578(__$ctx) {
        var __t = $$mode;
        if (__t === 'default') {
            return $580(__$ctx);
        } else if (__t === '') {
            if (!__$ctx._.isSimple(__$ctx.ctx) === false) {
                __$ctx._listLength--;
                var _$4bhctx = __$ctx.ctx;
                (_$4bhctx && _$4bhctx !== true || _$4bhctx === 0) && __$ctx._buf.push(_$4bhctx);
                return;
            } else {
                if (!!__$ctx.ctx === false) {
                    __$ctx._listLength--;
                    return;
                } else {
                    if (!__$ctx._.isArray(__$ctx.ctx) === false) {
                        return $589(__$ctx);
                    } else {
                        if (!true === false) {
                            return $592(__$ctx);
                        } else {
                            return $e(__$ctx);
                        }
                    }
                }
            }
        } else {
            return $e(__$ctx);
        }
    }
    function $580(__$ctx) {
        var __r13, __r0, __r4, __r5, __r6, __r7, __r8, __r9, __r10, __r11, __r12, __r1, __r14, __r15, __r16, __r17, __r20, __r21, __r22, __r23, __r24, __r25;
        var _$4biBEM_ = __$ctx.BEM, _$4biv = __$ctx.ctx, _$4bibuf = __$ctx._buf, _$4bitag;
        _$4bitag = ('', __r0 = $$mode, $$mode = 'tag', __r1 = $1(__$ctx), $$mode = __r0, '', __r1);
        typeof _$4bitag != 'undefined' || (_$4bitag = _$4biv.tag);
        typeof _$4bitag != 'undefined' || (_$4bitag = 'div');
        if (_$4bitag) {
            var _$4bijsParams, _$4bijs;
            if ($$block && _$4biv.js !== false) {
                _$4bijs = ('', __r4 = $$mode, $$mode = 'js', __r5 = $1(__$ctx), $$mode = __r4, '', __r5);
                _$4bijs = _$4bijs ? __$ctx._.extend(_$4biv.js, _$4bijs === true ? {} : _$4bijs) : _$4biv.js === true ? {} : _$4biv.js;
                _$4bijs && ((_$4bijsParams = {})[_$4biBEM_.INTERNAL.buildClass($$block, _$4biv.elem)] = _$4bijs);
            } else {
                undefined;
            }
            _$4bibuf.push('<', _$4bitag);
            var _$4biisBEM = ('', __r6 = $$mode, $$mode = 'bem', __r7 = $1(__$ctx), $$mode = __r6, '', __r7);
            typeof _$4biisBEM != 'undefined' || (_$4biisBEM = typeof _$4biv.bem != 'undefined' ? _$4biv.bem : _$4biv.block || _$4biv.elem);
            var _$4bicls = ('', __r8 = $$mode, $$mode = 'cls', __r9 = $1(__$ctx), $$mode = __r8, '', __r9);
            _$4bicls || (_$4bicls = _$4biv.cls);
            var _$4biaddJSInitClass = _$4biv.block && _$4bijsParams;
            if (_$4biisBEM || _$4bicls) {
                _$4bibuf.push(' class="');
                if (_$4biisBEM) {
                    _$4biBEM_.INTERNAL.buildClasses($$block, _$4biv.elem, _$4biv.elemMods || _$4biv.mods, _$4bibuf);
                    var _$4bimix = ('', __r10 = $$mode, $$mode = 'mix', __r11 = $1(__$ctx), $$mode = __r10, '', __r11);
                    _$4biv.mix && (_$4bimix = _$4bimix ? _$4bimix.concat(_$4biv.mix) : _$4biv.mix);
                    if (_$4bimix) {
                        var _$4bivisited = {};
                        function _$4bivisitedKey(block, elem) {
                            return (block || '') + '__' + (elem || '');
                        }
                        _$4bivisited[_$4bivisitedKey($$block, $$elem)] = true;
                        if (!__$ctx._.isArray(_$4bimix)) {
                            _$4bimix = [_$4bimix];
                        } else {
                            undefined;
                        }
                        for (var _$4bii = 0; _$4bii < _$4bimix.length; _$4bii++) {
                            var _$4bimixItem = _$4bimix[_$4bii];
                            if (!_$4bimixItem) {
                                continue;
                            } else {
                                undefined;
                            }
                            var _$4bihasItem = _$4bimixItem.block || _$4bimixItem.elem, _$4biblock = _$4bimixItem.block || _$4bimixItem._block || $$block, _$4bielem = _$4bimixItem.elem || _$4bimixItem._elem || $$elem, _$4bimods = _$4bimixItem.mods || $$mods, _$4bielemMods = _$4bimixItem.elemMods || {};
                            _$4bihasItem && _$4bibuf.push(' ');
                            _$4biBEM_.INTERNAL[_$4bihasItem ? 'buildClasses' : 'buildModsClasses'](_$4biblock, _$4bimixItem.elem || _$4bimixItem._elem || (_$4bimixItem.block ? undefined : $$elem), _$4bimixItem.elemMods || _$4bimixItem.mods, _$4bibuf);
                            if (_$4bimixItem.js) {
                                (_$4bijsParams || (_$4bijsParams = {}))[_$4biBEM_.INTERNAL.buildClass(_$4biblock, _$4bimixItem.elem)] = _$4bimixItem.js === true ? {} : _$4bimixItem.js;
                                _$4biaddJSInitClass || (_$4biaddJSInitClass = _$4biblock && !_$4bimixItem.elem);
                            } else {
                                undefined;
                            }
                            if (_$4bihasItem && !_$4bivisited[_$4bivisitedKey(_$4biblock, _$4bielem)]) {
                                _$4bivisited[_$4bivisitedKey(_$4biblock, _$4bielem)] = true;
                                var _$4binestedMix = ('', __r12 = $$block, $$block = _$4biblock, __r13 = $$elem, $$elem = _$4bielem, __r14 = $$mods, $$mods = _$4bimods, __r15 = $$elemMods, $$elemMods = _$4bielemMods, __r16 = $$mode, $$mode = 'mix', __r17 = $1(__$ctx), $$block = __r12, $$elem = __r13, $$mods = __r14, $$elemMods = __r15, $$mode = __r16, '', __r17);
                                if (_$4binestedMix) {
                                    for (var _$4bij = 0; _$4bij < _$4binestedMix.length; _$4bij++) {
                                        var _$4binestedItem = _$4binestedMix[_$4bij];
                                        if (!_$4binestedItem.block && !_$4binestedItem.elem || !_$4bivisited[_$4bivisitedKey(_$4binestedItem.block, _$4binestedItem.elem)]) {
                                            _$4binestedItem._block = _$4biblock;
                                            _$4binestedItem._elem = _$4bielem;
                                            _$4bimix.splice(_$4bii + 1, 0, _$4binestedItem);
                                        } else {
                                            undefined;
                                        }
                                    }
                                } else {
                                    undefined;
                                }
                            } else {
                                undefined;
                            }
                        }
                    } else {
                        undefined;
                    }
                } else {
                    undefined;
                }
                _$4bicls && _$4bibuf.push(_$4biisBEM ? ' ' : '', _$4bicls);
                _$4biaddJSInitClass && _$4bibuf.push(' i-bem');
                _$4bibuf.push('"');
            } else {
                undefined;
            }
            if (_$4bijsParams) {
                var _$4bijsAttr = ('', __r20 = $$mode, $$mode = 'jsAttr', __r21 = $1(__$ctx), $$mode = __r20, '', __r21);
                _$4bibuf.push(' ', _$4bijsAttr || 'data-bem', '="', __$ctx._.attrEscape(JSON.stringify(_$4bijsParams)), '"');
            } else {
                undefined;
            }
            var _$4biattrs = ('', __r22 = $$mode, $$mode = 'attrs', __r23 = $1(__$ctx), $$mode = __r22, '', __r23);
            _$4biattrs = __$ctx._.extend(_$4biattrs, _$4biv.attrs);
            if (_$4biattrs) {
                var _$4biname;
                for (_$4biname in _$4biattrs) {
                    if (_$4biattrs[_$4biname] === undefined) {
                        continue;
                    } else {
                        undefined;
                    }
                    _$4bibuf.push(' ', _$4biname, '="', __$ctx._.attrEscape(_$4biattrs[_$4biname]), '"');
                }
            } else {
                undefined;
            }
        } else {
            undefined;
        }
        if (__$ctx._.isShortTag(_$4bitag)) {
            _$4bibuf.push('/>');
        } else {
            _$4bitag && _$4bibuf.push('>');
            var _$4bicontent = ('', __r24 = $$mode, $$mode = 'content', __r25 = $1(__$ctx), $$mode = __r24, '', __r25);
            if (_$4bicontent || _$4bicontent === 0) {
                var _$4biisBEM = $$block || $$elem;
                {
                    '';
                    var __r26 = __$ctx._notNewList;
                    __$ctx._notNewList = false;
                    var __r27 = __$ctx.position;
                    __$ctx.position = _$4biisBEM ? 1 : __$ctx.position;
                    var __r28 = __$ctx._listLength;
                    __$ctx._listLength = _$4biisBEM ? 1 : __$ctx._listLength;
                    var __r29 = __$ctx.ctx;
                    __$ctx.ctx = _$4bicontent;
                    var __r30 = $$mode;
                    $$mode = '';
                    $1(__$ctx);
                    __$ctx._notNewList = __r26;
                    __$ctx.position = __r27;
                    __$ctx._listLength = __r28;
                    __$ctx.ctx = __r29;
                    $$mode = __r30;
                    '';
                }
                undefined;
            } else {
                undefined;
            }
            _$4bitag && _$4bibuf.push('</', _$4bitag, '>');
        }
        return;
    }
    function $589(__$ctx) {
        var _$4bfv = __$ctx.ctx, _$4bfl = _$4bfv.length, _$4bfi = 0, _$4bfprevPos = __$ctx.position, _$4bfprevNotNewList = __$ctx._notNewList;
        if (_$4bfprevNotNewList) {
            __$ctx._listLength += _$4bfl - 1;
        } else {
            __$ctx.position = 0;
            __$ctx._listLength = _$4bfl;
        }
        __$ctx._notNewList = true;
        while (_$4bfi < _$4bfl) {
            var _$4bfnewCtx = _$4bfv[_$4bfi++];
            {
                '';
                var __r0 = __$ctx.ctx;
                __$ctx.ctx = _$4bfnewCtx == null ? '' : _$4bfnewCtx;
                $1(__$ctx);
                __$ctx.ctx = __r0;
                '';
            }
            undefined;
        }
        _$4bfprevNotNewList || (__$ctx.position = _$4bfprevPos);
        return;
    }
    function $592(__$ctx) {
        var _$4bevBlock = __$ctx.ctx.block, _$4bevElem = __$ctx.ctx.elem, _$4beblock = __$ctx._currBlock || $$block;
        __$ctx.ctx || (__$ctx.ctx = {});
        {
            '';
            var __r0 = $$mode;
            $$mode = 'default';
            var __r1 = __$ctx._links;
            __$ctx._links = __$ctx.ctx.links || __$ctx._links;
            var __r2 = $$block;
            $$block = _$4bevBlock || (_$4bevElem ? _$4beblock : undefined);
            var __r3 = __$ctx._currBlock;
            __$ctx._currBlock = _$4bevBlock || _$4bevElem ? undefined : _$4beblock;
            var __r4 = $$elem;
            $$elem = __$ctx.ctx.elem;
            var __r5 = $$mods;
            $$mods = (_$4bevBlock ? __$ctx.ctx.mods : $$mods) || {};
            var __r6 = $$elemMods;
            $$elemMods = __$ctx.ctx.elemMods || {};
            {
                $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
                $1(__$ctx);
                undefined;
            }
            $$mode = __r0;
            __$ctx._links = __r1;
            $$block = __r2;
            __$ctx._currBlock = __r3;
            $$elem = __r4;
            $$mods = __r5;
            $$elemMods = __r6;
            '';
        }
        return;
    }
    function $e(__$ctx) {
        throw new Error(this);
        return;
    }
    !function oninit() {
        (function (global, bem_) {
            if (bem_.I18N) {
                return undefined;
            } else {
                undefined;
            }
            global.BEM = bem_;
            var i18n = bem_.I18N = function (keyset, key) {
                    return key;
                };
            i18n.keyset = function () {
                return i18n;
            };
            i18n.key = function (key) {
                return key;
            };
            i18n.lang = function () {
                return undefined;
            };
        }(this, typeof BEM === 'undefined' ? {} : BEM));
    }();
    !function oninit() {
        var BEM_ = {}, toString = Object.prototype.toString, SHORT_TAGS = {
                area: 1,
                base: 1,
                br: 1,
                col: 1,
                command: 1,
                embed: 1,
                hr: 1,
                img: 1,
                input: 1,
                keygen: 1,
                link: 1,
                meta: 1,
                param: 1,
                source: 1,
                wbr: 1
            };
        (function (BEM, undefined) {
            var MOD_DELIM = '_', ELEM_DELIM = '__', NAME_PATTERN = '[a-zA-Z0-9-]+';
            function buildModPostfix(modName, modVal, buffer) {
                buffer.push(MOD_DELIM, modName, MOD_DELIM, modVal);
            }
            function buildBlockClass(name, modName, modVal, buffer) {
                buffer.push(name);
                modVal && buildModPostfix(modName, modVal, buffer);
            }
            function buildElemClass(block, name, modName, modVal, buffer) {
                buildBlockClass(block, undefined, undefined, buffer);
                buffer.push(ELEM_DELIM, name);
                modVal && buildModPostfix(modName, modVal, buffer);
            }
            BEM.INTERNAL = {
                NAME_PATTERN: NAME_PATTERN,
                MOD_DELIM: MOD_DELIM,
                ELEM_DELIM: ELEM_DELIM,
                buildModPostfix: function (modName, modVal, buffer) {
                    var res = buffer || [];
                    buildModPostfix(modName, modVal, res);
                    return buffer ? res : res.join('');
                },
                buildClass: function (block, elem, modName, modVal, buffer) {
                    var typeOf = typeof modName;
                    if (typeOf == 'string') {
                        if (typeof modVal != 'string') {
                            buffer = modVal;
                            modVal = modName;
                            modName = elem;
                            elem = undefined;
                        } else {
                            undefined;
                        }
                    } else {
                        if (typeOf != 'undefined') {
                            buffer = modName;
                            modName = undefined;
                        } else {
                            if (elem && typeof elem != 'string') {
                                buffer = elem;
                                elem = undefined;
                            } else {
                                undefined;
                            }
                        }
                    }
                    if (!(elem || modName || buffer)) {
                        return block;
                    } else {
                        undefined;
                    }
                    var res = buffer || [];
                    elem ? buildElemClass(block, elem, modName, modVal, res) : buildBlockClass(block, modName, modVal, res);
                    return buffer ? res : res.join('');
                },
                buildModsClasses: function (block, elem, mods, buffer) {
                    var res = buffer || [];
                    if (mods) {
                        var modName;
                        for (modName in mods) {
                            if (!mods.hasOwnProperty(modName)) {
                                continue;
                            } else {
                                undefined;
                            }
                            var modVal = mods[modName];
                            if (modVal == null) {
                                continue;
                            } else {
                                undefined;
                            }
                            modVal = mods[modName] + '';
                            if (!modVal) {
                                continue;
                            } else {
                                undefined;
                            }
                            res.push(' ');
                            if (elem) {
                                buildElemClass(block, elem, modName, modVal, res);
                            } else {
                                buildBlockClass(block, modName, modVal, res);
                            }
                        }
                    } else {
                        undefined;
                    }
                    return buffer ? res : res.join('');
                },
                buildClasses: function (block, elem, mods, buffer) {
                    var res = buffer || [];
                    elem ? buildElemClass(block, elem, undefined, undefined, res) : buildBlockClass(block, undefined, undefined, res);
                    this.buildModsClasses(block, elem, mods, buffer);
                    return buffer ? res : res.join('');
                }
            };
        }(BEM_));
        var buildEscape = function () {
                var ts = {
                        '"': '&quot;',
                        '&': '&amp;',
                        '<': '&lt;',
                        '>': '&gt;'
                    }, f = function (t) {
                        return ts[t] || t;
                    };
                return function (r) {
                    r = new RegExp(r, 'g');
                    return function (s) {
                        return ('' + s).replace(r, f);
                    };
                };
            }();
        function BEMContext(context, apply_) {
            this.ctx = typeof context === null ? '' : context;
            this.apply = apply_;
            this._buf = [];
            this._ = this;
            this._start = true;
            this._listLength = 0;
            this._notNewList = false;
            this.position = 0;
        }
        BEMContext.prototype.isArray = function isArray(obj) {
            return toString.call(obj) === '[object Array]';
        };
        BEMContext.prototype.isSimple = function isSimple(obj) {
            var t = typeof obj;
            return t === 'string' || t === 'number' || t === 'boolean';
        };
        BEMContext.prototype.isShortTag = function isShortTag(t) {
            return SHORT_TAGS.hasOwnProperty(t);
        };
        BEMContext.prototype.extend = function extend(o1, o2) {
            if (!o1 || !o2) {
                return o1 || o2;
            } else {
                undefined;
            }
            var res = {}, n;
            for (n in o1) {
                o1.hasOwnProperty(n) && (res[n] = o1[n]);
            }
            for (n in o2) {
                o2.hasOwnProperty(n) && (res[n] = o2[n]);
            }
            return res;
        };
        BEMContext.prototype.identify = function () {
            var cnt = 0, id = BEM_['__id'] = +new Date(), expando = '__' + id, get = function () {
                    return 'uniq' + id + ++cnt;
                };
            return function (obj, onlyGet) {
                if (!obj) {
                    return get();
                } else {
                    undefined;
                }
                if (onlyGet || obj[expando]) {
                    return obj[expando];
                } else {
                    return obj[expando] = get();
                }
            };
        }();
        BEMContext.prototype.xmlEscape = buildEscape('[&<>]');
        BEMContext.prototype.attrEscape = buildEscape('["&<>]');
        BEMContext.prototype.BEM = BEM_;
        BEMContext.prototype.isFirst = function isFirst() {
            return this.position === 1;
        };
        BEMContext.prototype.isLast = function isLast() {
            return this.position === this._listLength;
        };
        BEMContext.prototype.generateId = function generateId() {
            return this.identify(this.ctx);
        };
        exports.apply = BEMContext.apply = function _apply() {
            var ctx = new BEMContext(this, apply);
            ctx.apply();
            return ctx._buf.join('');
        };
    }();
    return exports;
    exports.apply = apply;
    function apply(ctx) {
        return applyc(ctx || this);
    }
    function applyc(__$ctx) {
        return $1(__$ctx);
    }
    return exports;
}(typeof exports === 'undefined' ? {} : exports));;
  return function(options) {
    var context = this;
    if (!options) options = {};
    cache = options.cache;
    return function() {
      if (context === this) {
        context = undefined;
$$mode = ''
$$block = ''
$$elem = ''
$$elemMods = ''
$$mods = ''
      } else {
$$mode = '';
$$block = '';
$$elem = '';
$$elemMods = '';
$$mods = '';
      }
      return xjst.apply.call(
[context]
      );
    }.call(null);
  };
}();
typeof exports === "undefined" || (exports.BEMHTML = BEMHTML);/*borschik:include:../../../../libs/bem-bl/blocks-common/i-jquery/__inherit/i-jquery__inherit.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-jquery/__identify/i-jquery__identify.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-jquery/__is-empty-object/i-jquery__is-empty-object.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-jquery/__debounce/i-jquery__debounce.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-jquery/__observable/i-jquery__observable.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-touch/i-fastclick/i-fastclick.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-touch/i-pointer-events/i-pointer-events.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-bem/i-bem.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-ecma/__object/i-ecma__object.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-ecma/__array/i-ecma__array.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-ecma/__function/i-ecma__function.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-bem/__internal/i-bem__internal.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-bem/__dom/i-bem__dom.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-ecma/__string/i-ecma__string.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-ecma/__json/i-ecma__json.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-bem/__dom/_init/i-bem__dom_init_auto.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-touch/i-ua/i-ua.js*/;
/*borschik:include:../../../../libs/islands-romochka/touch.blocks/i-ua/i-ua.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-jquery/__cookie/i-jquery__cookie.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-jquery/__decodeuri/i-jquery__decodeuri.js*/;
/*borschik:include:../../../../libs/islands-romochka/common.blocks/i-common/check-session/i-common__check-session.js*/;
/*borschik:include:../../../../libs/islands-romochka/common.blocks/i-global/i-global.js*/;
/*borschik:include:../../../../libs/islands-romochka/common.blocks/i-counter/i-counter.js*/;
/*borschik:include:../../../../libs/islands-romochka/common.blocks/i-common/cookie/i-common__cookie.js*/;
/*borschik:include:../../../../libs/islands-romochka/common.blocks/i-common/init/i-common__init.js*/;
/*borschik:include:../../../../libs/islands-romochka/common.blocks/i-common/i-common.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-ua/_interaction/i-ua_interaction_yes.js*/;
/*borschik:include:../../../../common.blocks/suggest/suggest.examples/10-simple.blocks/example/example.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-touch/i-jquery/__tap/i-jquery__tap.js*/;
/*borschik:include:../../../../common.blocks/suggest/suggest.js*/;
/*borschik:include:../../../../touch.blocks/suggest/suggest.js*/;
/*borschik:include:../../../../touch-pad.blocks/suggest/suggest.js*/;
/*borschik:include:../../../../libs/islands-romochka/common.blocks/i-request/i-request.js*/;
/*borschik:include:../../../../libs/islands-romochka/common.blocks/i-request/_type/i-request_type_ajax.js*/;
/*borschik:include:../../../../common.blocks/suggest/__provider/suggest__provider.js*/;
/*borschik:include:../../../../common.blocks/suggest-item/suggest-item.js*/;
/*borschik:include:../../../../touch.blocks/suggest-item/suggest-item.js*/;
/*borschik:include:../../../../common.blocks/suggest-item/_nav/suggest-item_nav_yes.js*/;
/*borschik:include:../../../../common.blocks/link/link.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-touch/i-pressed-controller/i-pressed-controller.js*/;
/*borschik:include:../../../../common.blocks/popup/popup.js*/;
/*borschik:include:../../../../touch-pad.blocks/popup/popup.js*/;
/*borschik:include:../../../../common.blocks/popup/_autoclosable/popup_autoclosable_yes.js*/;
/*borschik:include:../../../../common.blocks/popup/_adaptive/popup_adaptive_yes.js*/;
/*borschik:include:../../../../common.blocks/popup/_animate/popup_animate_yes.js*/;
/*borschik:include:../../../../common.blocks/popup/__under/popup__under.js*/;
/*borschik:include:../../../../touch.blocks/popup/__under/popup__under.js*/;
/*borschik:include:../../../../common.blocks/input/input.js*/;
/*borschik:include:../../../../touch.blocks/input/input.js*/;
/*borschik:include:../../../../touch-pad.blocks/input/input.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-system/i-system.js*/;
/*borschik:include:../../../../common.blocks/input/__clear/input__clear.js*/;


/* global BEM, i18n */
(function(global_, bem_, undefined) {

// Check if BEM.I18N was already initialized
if(typeof bem_.I18N === 'function' && bem_.I18N._proto) {
    return bem_.I18N;
}

/**
 * Support tanker-like syntax of keys in `i-bem__i18n`
 * @example
 *  i18n['prj']['keyset']['key'](params)
 */
if(typeof i18n === 'undefined') {
    /* jshint -W020 */
    i18n = {};
    /* jshint +W020 */
}

/* jshint -W020 */
BEM = bem_;
/* jshint +W020 */

var MOD_DELIM = '_',
    ELEM_DELIM = '__',
    DEFAULT_LANG = 'ru',
    cache = {},
    // {String[]} A stack used for restoring context of dynamic keysets
    stack = [],
    debug = false,
    // @see http://whattheheadsaid.com/2011/04/internet-explorer-9s-problematic-console-object
    hasConsole = typeof console !== 'undefined' && typeof console.log === 'function';

function log() {
    if(debug && hasConsole) {
        console.log.apply(console, arguments);
    }
}

function bemName(decl) {
    typeof decl === 'string' && (decl = { block: decl });

    return decl.block +
        (decl.elem ? (ELEM_DELIM + decl.elem) : '') +
        (decl.modName ? MOD_DELIM + decl.modName + MOD_DELIM + decl.modVal : '');
}

function bemParse(name) {
    var bemitem = {};

    name.split(ELEM_DELIM).forEach(function(item, i) {
        var keys = [ i ? 'elem' : 'block', 'mod', 'val' ];

        item.split(MOD_DELIM).forEach(function(part, j) {
            bemitem[keys[j]] = part;
        });
    });

    return bemitem;
}

function _pushStack(name) {
    if(!name) return false;
    return stack.push(name);
}

function _popStack() {
    return stack.length && stack.pop();
}


/**
 * @constructor
 */
function _i18n() {
    this._lang = '';
    this._prj = 'lego'; // FIXME: bem-bl?
    this._keyset = '';
    this._key = '';
}

_i18n.prototype = {

    lang : function(name) {
        this._lang = name;
        return this;
    },

    project : function(name) {
        this._prj = name;
        return this;
    },

    keyset : function(name, saveCtx) {
        saveCtx && _pushStack(this._keyset);

        this._keyset = bemName(name);
        return this;
    },

    key : function(name) {
        this._key = name;
        return this;
    },

    /**
     * FIXME: Move legacy-syntax support into separat method
     * @param {Object|Function} v
     */
    decl : function(v) {
        var bemitem = bemParse(this._keyset),
            // tanker legacy syntax
            prj = bemitem.block === 'i-tanker' ? 'tanker' : this._prj,
            keyset = bemitem.elem || this._keyset,
            key = this._key;

        prj = i18n[prj] || (i18n[prj] = {});
        keyset = prj[keyset] || (prj[keyset] = {});
        keyset[key] = typeof v === 'function' ? v : (function(p) { return (v); });

        // `BEM.I18N` syntax
        var l = cache[this._lang] || (cache[this._lang] = {}),
            k = l[this._keyset] || (l[this._keyset] = {});

        k[key] = v;
    },

    val : function(params, ctx) {
        var value = cache[this._lang] && cache[this._lang][this._keyset],
            debugString = 'keyset: ' + this._keyset + ' key: ' + this._key + ' (lang: ' + this._lang + ')';

        if(!value) {
            log('[I18N_NO_KEYSET] %s', debugString);
            return '';
        }

        value = value[this._key];

        var valtype = typeof value;
        if(valtype === 'undefined') {
            log("[I18N_NO_VALUE] %s", debugString);
            return '';
        }

        if(valtype === 'string') {
            return value;
        }

        ctx || (ctx = this);
        // TODO: try/catch
        return value.call(ctx, params);
    },

    _cache : function() { return cache; }

};

/**
 * @namespace
 * @lends BEM.I18N
 */
bem_.I18N = (function(base) {

    /**
     * Shortcut to get key value
     *
     * @param {String|Object} keyset
     * @param {String} key
     * @param {Object} [params]
     * @returns {String}
     */
    var klass = function(keyset, key, params) {
        return klass.keyset(keyset).key(key, params);
    };

    klass._proto = base;

    /**
     * @param {String} name
     * @returns {BEM.I18N}
     */
    klass.project = function(name) {
        this._proto.project(name);
        return this;
    };

    /**
     * @param {String} name
     * @returns {BEM.I18N}
     */
    klass.keyset = function(name) {
        this._proto.keyset(name, true);
        return this;
    };

    /**
     * @param {String} name Key name
     * @param {Object} params
     * @returns {String}
     */
    klass.key = function(name, params) {
        var proto = this._proto,
            result,
            ksetRestored;

        proto.lang(this._lang).key(name);

        // TODO: kiss
        result = proto.val.call(proto, params, klass);

        // restoring keyset's context
        // NOTE: should not save current ctx, `saveCtx = false`
        ksetRestored = _popStack();
        ksetRestored && proto.keyset(ksetRestored, false);

        return result;
    };

    /**
     * Declaration of translations
     *
     * @param {String|Object} bemitem
     * @param {Object} keysets
     * @param {Object} [params] declaration params
     * @returns {BEM.I18N}
     */
    klass.decl = function(bemitem, keysets, params) {
        var proto = this._proto,
            k;

        params || (params = {});
        params.lang && proto.lang(params.lang);

        proto.keyset(bemitem);

        for(k in keysets) {
            if(keysets.hasOwnProperty(k)) {
                proto.key(k).decl(keysets[k]);
            }
        }

        return this;
    };

    /**
     * Get/set current language
     *
     * @param {String} [lang]
     * @returns {String}
     */
    klass.lang = function(lang) {
        typeof lang !== 'undefined' && (this._lang = lang);
        return this._lang;
    };

    klass.debug = function(flag) {
        debug = !!flag;
    };

    klass.lang(DEFAULT_LANG);

    return klass;

}(new _i18n()));

})(this, typeof BEM === 'undefined' ? {} : BEM);


BEM.I18N.decl('suggest', {"fact": 'Facts',"group": 'Group of suggestions',"nah": 'You searched for',"nav": 'Site',"text": 'Search',"traffic": 'Traffic',"weather": 'Weather'}, {
"lang": "en"
});

BEM.I18N.decl('suggest-item', {"quick-answer": 'Quick answer'}, {
"lang": "en"
});

BEM.I18N.lang('en');
