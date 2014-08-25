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
                return $108(__$ctx);
            } else if (__t === 'value') {
                return $146(__$ctx);
            } else if (__t === 'icon') {
                return $160(__$ctx);
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
                            return $66(__$ctx);
                        } else {
                            return $69(__$ctx);
                        }
                    } else {
                        return $69(__$ctx);
                    }
                }
            } else if (__t === 'default') {
                return $203(__$ctx);
            } else if (__t === 'answer') {
                return $229(__$ctx);
            } else if (__t === 'attrs') {
                if ($$elem === 'icon') {
                    var __r0, __r1, __r2, __r3;
                    return { style: ('', __r0 = $$mode, $$mode = 'png', __r1 = $264(__$ctx), $$mode = __r0, '', __r1) + ('', __r2 = $$mode, $$mode = 'svg', __r3 = $259(__$ctx), $$mode = __r2, '', __r3) };
                    return;
                } else {
                    if (!!$$elem === false) {
                        return { id: __$ctx.generateId() };
                        return;
                    } else {
                        return $519(__$ctx);
                    }
                }
            } else if (__t === 'svg') {
                if ($$elem === 'icon') {
                    return $259(__$ctx);
                } else {
                    return $519(__$ctx);
                }
            } else if (__t === 'png') {
                if ($$elem === 'icon') {
                    return $264(__$ctx);
                } else {
                    return $519(__$ctx);
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
                        return $519(__$ctx);
                    }
                }
            } else if (__t === 'link') {
                if (!($$mods && $$mods.type === 'nav') === false) {
                    if (!!$$elem === false) {
                        return $270(__$ctx);
                    } else {
                        return $519(__$ctx);
                    }
                } else {
                    return $519(__$ctx);
                }
            } else if (__t === 'js') {
                if (!($$mods && $$mods.type === 'icon') === false) {
                    if (!__$ctx._url === false) {
                        if (!!$$elem === false) {
                            return { val: __$ctx._url };
                            return;
                        } else {
                            return $183(__$ctx);
                        }
                    } else {
                        return $183(__$ctx);
                    }
                } else {
                    return $183(__$ctx);
                }
            } else {
                return $519(__$ctx);
            }
        } else if (__t === 'i-bem') {
            if ($$mode === 'default') {
                if ($$elem === 'i18n') {
                    return $280(__$ctx);
                } else {
                    return $519(__$ctx);
                }
            } else {
                return $519(__$ctx);
            }
        } else if (__t === 'link') {
            var __t = $$mode;
            if (__t === 'tag') {
                if ($$elem === 'inner') {
                    return 'span';
                    return;
                } else {
                    if (!!$$elem === false) {
                        return __$ctx.ctx.url ? 'a' : 'span';
                        return;
                    } else {
                        return $519(__$ctx);
                    }
                }
            } else if (__t === 'attrs') {
                return $294(__$ctx);
            } else if (__t === 'js') {
                if (!__$ctx.ctx.hasOwnProperty('tabindex') === false) {
                    return { origTabindex: String(__$ctx.ctx.tabindex) };
                    return;
                } else {
                    return $519(__$ctx);
                }
            } else {
                return $519(__$ctx);
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
                    return $358(__$ctx);
                }
            } else if (__t === 'group') {
                var __t = $$mode;
                if (__t === 'default') {
                    return $328(__$ctx);
                } else if (__t === 'attrs') {
                    return {
                        role: 'group',
                        'aria-labelledby': __$ctx._titleId
                    };
                    return;
                } else {
                    return $358(__$ctx);
                }
            } else if (__t === 'items') {
                if ($$mode === 'tag') {
                    return 'ul';
                    return;
                } else {
                    return $358(__$ctx);
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
                    return $358(__$ctx);
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
                    return $358(__$ctx);
                }
            } else {
                return $358(__$ctx);
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
                        return $519(__$ctx);
                    }
                } else if (__t === 'ahead') {
                    return [
                        { elem: 'ahead-filler' },
                        { elem: 'ahead-hint' }
                    ];
                    return;
                } else {
                    return $519(__$ctx);
                }
            } else if (__t === 'attrs') {
                var __t = $$elem;
                if (__t === 'clear') {
                    return { unselectable: 'on' };
                    return;
                } else if (__t === 'control') {
                    var _$3qba = __$ctx._.extend({
                            id: __$ctx._inputId,
                            name: __$ctx._name
                        }, __$ctx.ctx.controlAttrs);
                    (__$ctx._value || __$ctx._value === 0) && (_$3qba.value = __$ctx._value);
                    $$mods.disabled && (_$3qba.disabled = 'disabled');
                    _$3qba['aria-labelledby'] = __$ctx._labelId + ' ' + __$ctx._hintId;
                    return _$3qba;
                    return;
                } else {
                    return $519(__$ctx);
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
                        return $519(__$ctx);
                    }
                }
            } else if (__t === 'default') {
                return $398(__$ctx);
            } else if (__t === 'mix') {
                if ($$elem === 'ahead') {
                    return [{
                            block: 'input',
                            elem: 'input'
                        }];
                    return;
                } else {
                    return $519(__$ctx);
                }
            } else if (__t === 'value') {
                return $420(__$ctx);
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
                    return $519(__$ctx);
                }
            } else {
                return $519(__$ctx);
            }
        } else if (__t === 'i-ua') {
            var __t = $$mode;
            if (__t === 'content') {
                return $448(__$ctx);
            } else if (__t === 'bem') {
                if (!!$$elem === false) {
                    return false;
                    return;
                } else {
                    return $519(__$ctx);
                }
            } else if (__t === 'tag') {
                if (!!$$elem === false) {
                    return 'script';
                    return;
                } else {
                    return $519(__$ctx);
                }
            } else {
                return $519(__$ctx);
            }
        } else if (__t === 'b-page') {
            if ($$mode === 'js-params') {
                if (!!$$elem === false) {
                    return $474(__$ctx);
                } else {
                    return $519(__$ctx);
                }
            } else {
                return $519(__$ctx);
            }
        } else if (__t === 'i-global') {
            var __t = $$mode;
            if (__t === 'public-params') {
                return $480(__$ctx);
            } else if (__t === 'default') {
                return $485(__$ctx);
            } else if (__t === 'env') {
                return $512(__$ctx);
            } else {
                return $519(__$ctx);
            }
        } else {
            return $519(__$ctx);
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
        var _$3sactx = __$ctx.ctx;
        _$3sactx.mods = $$mods = __$ctx.extend({
            theme: 'ffffff',
            autoclosable: 'yes',
            adaptive: 'yes',
            animate: 'yes'
        }, $$mods);
        if (_$3sactx.zIndex) {
            var _$3saattrs = _$3sactx.attrs || (_$3sactx.attrs = {});
            _$3saattrs.style = (_$3saattrs.style || '') + ';z-index:' + _$3sactx.zIndex + ';';
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
            return $519(__$ctx);
        }
    }
    function $34(__$ctx) {
        if (!($$mods && $$mods.type === 'nav') === false) {
            if (!!$$elem === false) {
                return [{ mods: { nav: 'yes' } }];
                return;
            } else {
                return $519(__$ctx);
            }
        } else {
            return $519(__$ctx);
        }
    }
    function $66(__$ctx) {
        var __r0, __r1, __r2, __r3, __r4, __r5;
        return [
            ('', __r0 = $$mode, $$mode = 'text', __r1 = $109(__$ctx), $$mode = __r0, '', __r1),
            ('', __r2 = $$mode, $$mode = 'icon', __r3 = $163(__$ctx), $$mode = __r2, '', __r3),
            ('', __r4 = $$mode, $$mode = 'value', __r5 = $149(__$ctx), $$mode = __r4, '', __r5)
        ];
        return;
    }
    function $69(__$ctx) {
        if (!($$mods && $$mods.type === 'weather') === false) {
            if (!!$$elem === false) {
                var __r0, __r1, __r2, __r3;
                return [
                    ('', __r0 = $$mode, $$mode = 'text', __r1 = $108(__$ctx), $$mode = __r0, '', __r1),
                    ('', __r2 = $$mode, $$mode = 'answer', __r3 = $232(__$ctx), $$mode = __r2, '', __r3)
                ];
                return;
            } else {
                return $75(__$ctx);
            }
        } else {
            return $75(__$ctx);
        }
    }
    function $75(__$ctx) {
        if (!($$mods && $$mods.type === 'traffic') === false) {
            if (!!$$elem === false) {
                var __r0, __r1, __r2, __r3;
                return [
                    ('', __r0 = $$mode, $$mode = 'text', __r1 = $108(__$ctx), $$mode = __r0, '', __r1),
                    ('', __r2 = $$mode, $$mode = 'answer', __r3 = $229(__$ctx), $$mode = __r2, '', __r3)
                ];
                return;
            } else {
                return $81(__$ctx);
            }
        } else {
            return $81(__$ctx);
        }
    }
    function $81(__$ctx) {
        if (!($$mods && $$mods.type === 'text') === false) {
            if (!!$$elem === false) {
                var __r0, __r1;
                return '', __r0 = $$mode, $$mode = 'text', __r1 = $108(__$ctx), $$mode = __r0, '', __r1;
                return;
            } else {
                return $87(__$ctx);
            }
        } else {
            return $87(__$ctx);
        }
    }
    function $87(__$ctx) {
        if (!($$mods && $$mods.type === 'nav') === false) {
            if (!!$$elem === false) {
                var __r0, __r1;
                return [
                    ('', __r0 = $$mode, $$mode = 'link', __r1 = $270(__$ctx), $$mode = __r0, '', __r1),
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
                return $93(__$ctx);
            }
        } else {
            return $93(__$ctx);
        }
    }
    function $93(__$ctx) {
        if (!($$mods && $$mods.type === 'fact') === false) {
            if (!!$$elem === false) {
                var __r0, __r1, __r2, __r3;
                return [
                    ('', __r0 = $$mode, $$mode = 'text', __r1 = $108(__$ctx), $$mode = __r0, '', __r1),
                    ('', __r2 = $$mode, $$mode = 'answer', __r3 = $229(__$ctx), $$mode = __r2, '', __r3)
                ];
                return;
            } else {
                return $99(__$ctx);
            }
        } else {
            return $99(__$ctx);
        }
    }
    function $99(__$ctx) {
        var __t = $$elem;
        if (__t === 'value' || __t === 'text' || __t === 'hint') {
            return __$ctx.xmlEscape(__$ctx.ctx.content);
            return;
        } else {
            return $519(__$ctx);
        }
    }
    function $108(__$ctx) {
        if (!($$mods && $$mods.type === 'icon') === false) {
            return $109(__$ctx);
        } else {
            return $120(__$ctx);
        }
    }
    function $109(__$ctx) {
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
                return $115(__$ctx);
            }
        } else {
            return $115(__$ctx);
        }
    }
    function $115(__$ctx) {
        if (!!$$elem === false) {
            return {
                elem: 'text',
                content: __$ctx._text
            };
            return;
        } else {
            return $120(__$ctx);
        }
    }
    function $120(__$ctx) {
        if (!($$mods && $$mods.type === 'weather') === false) {
            if (!!$$elem === false) {
                return {
                    elem: 'text',
                    content: __$ctx.ctx.data[1]
                };
                return;
            } else {
                return $126(__$ctx);
            }
        } else {
            return $126(__$ctx);
        }
    }
    function $126(__$ctx) {
        if (!($$mods && $$mods.type === 'traffic') === false) {
            if (!!$$elem === false) {
                return {
                    elem: 'text',
                    content: __$ctx.ctx.data[1]
                };
                return;
            } else {
                return $132(__$ctx);
            }
        } else {
            return $132(__$ctx);
        }
    }
    function $132(__$ctx) {
        if (!($$mods && $$mods.type === 'text') === false) {
            if (!!$$elem === false) {
                return {
                    elem: 'text',
                    content: __$ctx._.isArray(__$ctx.ctx.data) ? __$ctx.ctx.data[1] : __$ctx.ctx.data
                };
                return;
            } else {
                return $138(__$ctx);
            }
        } else {
            return $138(__$ctx);
        }
    }
    function $138(__$ctx) {
        if (!($$mods && $$mods.type === 'fact') === false) {
            if (!!$$elem === false) {
                return {
                    elem: 'text',
                    content: __$ctx.ctx.data[1]
                };
                return;
            } else {
                return $519(__$ctx);
            }
        } else {
            return $519(__$ctx);
        }
    }
    function $146(__$ctx) {
        if (!($$mods && $$mods.type === 'icon') === false) {
            if (!!$$elem === false) {
                return $149(__$ctx);
            } else {
                return $152(__$ctx);
            }
        } else {
            return $152(__$ctx);
        }
    }
    function $149(__$ctx) {
        return {
            elem: 'value',
            content: __$ctx.xmlEscape(__$ctx._fact)
        };
        return;
    }
    function $152(__$ctx) {
        if (!($$mods && $$mods.type === 'weather') === false) {
            if (!!$$elem === false) {
                return {
                    elem: 'value',
                    content: __$ctx.ctx.data[2]
                };
                return;
            } else {
                return $519(__$ctx);
            }
        } else {
            return $519(__$ctx);
        }
    }
    function $160(__$ctx) {
        if (!($$mods && $$mods.type === 'icon') === false) {
            if (!!$$elem === false) {
                return $163(__$ctx);
            } else {
                return $166(__$ctx);
            }
        } else {
            return $166(__$ctx);
        }
    }
    function $163(__$ctx) {
        return {
            elem: 'icon',
            mods: { type: 'favicon' },
            svg: __$ctx._icons.svg,
            png: __$ctx._icons.png
        };
        return;
    }
    function $166(__$ctx) {
        if (!($$mods && $$mods.type === 'weather') === false) {
            if (!!$$elem === false) {
                return {
                    elem: 'icon',
                    elemMods: { weather: __$ctx.ctx.data[3].replace('-', 'minus-').replace('+', 'plus-').replace(/_/g, '-') }
                };
                return;
            } else {
                return $519(__$ctx);
            }
        } else {
            return $519(__$ctx);
        }
    }
    function $183(__$ctx) {
        if (!($$mods && $$mods.type === 'nav') === false) {
            if (!!$$elem === false) {
                return { val: __$ctx._url };
                return;
            } else {
                return $189(__$ctx);
            }
        } else {
            return $189(__$ctx);
        }
    }
    function $189(__$ctx) {
        if (!__$ctx.ctx.pers === false) {
            if (!!$$elem === false) {
                return { pers: 1 };
                return;
            } else {
                return $195(__$ctx);
            }
        } else {
            return $195(__$ctx);
        }
    }
    function $195(__$ctx) {
        if (!__$ctx.ctx['search_cgi'] === false) {
            if (!!$$elem === false) {
                return { cgi: __$ctx.ctx['search_cgi'] };
                return;
            } else {
                return $519(__$ctx);
            }
        } else {
            return $519(__$ctx);
        }
    }
    function $203(__$ctx) {
        if (!(__$ctx['__$anflg457'] !== true) === false) {
            if (!($$mods && $$mods.type === 'icon') === false) {
                if (!!$$elem === false) {
                    return $207(__$ctx);
                } else {
                    return $212(__$ctx);
                }
            } else {
                return $212(__$ctx);
            }
        } else {
            return $212(__$ctx);
        }
    }
    function $207(__$ctx) {
        if (!Array.isArray(__$ctx.ctx.data)) {
            return undefined;
        } else {
            undefined;
        }
        var _$3rwdata = __$ctx.ctx.data.slice(1), _$3rwinfo = _$3rwdata[1] || {};
        if (!_$3rwinfo.icon) {
            return undefined;
        } else {
            undefined;
        }
        var _$3rwicons = {};
        if (Array.isArray(_$3rwinfo.icon[0])) {
            _$3rwinfo.icon.forEach(function (icon) {
                _$3rwicons[icon[0]] = icon[1];
            });
        } else {
            _$3rwicons[_$3rwinfo.icon[0]] = _$3rwinfo.icon[1];
        }
        if (_$3rwinfo.url) {
            __$ctx._url = (/[\/]{2}/.test(_$3rwinfo.url) ? '' : 'http://') + _$3rwinfo.url;
        } else {
            undefined;
        }
        {
            '';
            var __r0 = __$ctx['__$anflg457'];
            __$ctx['__$anflg457'] = true;
            {
                '';
                var __r1 = __$ctx._text;
                __$ctx._text = __$ctx.xmlEscape(_$3rwdata[0]) || '';
                var __r2 = __$ctx._icons;
                __$ctx._icons = _$3rwicons;
                var __r3 = __$ctx._fact;
                __$ctx._fact = _$3rwinfo.fact || '';
                $203(__$ctx);
                __$ctx._text = __r1;
                __$ctx._icons = __r2;
                __$ctx._fact = __r3;
                '';
            }
            __$ctx['__$anflg457'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $212(__$ctx) {
        if ($$elem === 'link') {
            if (!(__$ctx['__$anflg456'] !== true) === false) {
                return $215(__$ctx);
            } else {
                return $218(__$ctx);
            }
        } else {
            return $218(__$ctx);
        }
    }
    function $215(__$ctx) {
        var __r0, __r4, __r1, __r2, __r3;
        return '', __r0 = __$ctx['__$anflg456'], __$ctx['__$anflg456'] = true, __r4 = ('', __r1 = __$ctx.ctx, __$ctx.ctx = {
            block: 'link',
            url: __$ctx.ctx.url,
            target: '_blank',
            mix: {
                block: $$block,
                elem: $$elem
            },
            content: __$ctx.ctx.content
        }, __r2 = $$mode, $$mode = '', __r3 = $520(__$ctx), __$ctx.ctx = __r1, $$mode = __r2, '', __r3), __$ctx['__$anflg456'] = __r0, '', __r4;
        return;
    }
    function $218(__$ctx) {
        if (!(__$ctx['__$anflg454'] !== true) === false) {
            if (!($$mods && $$mods.type === 'nav') === false) {
                if (!!$$elem === false) {
                    var _$3r7url = __$ctx.ctx.data[4];
                    {
                        '';
                        var __r0 = __$ctx['__$anflg454'];
                        __$ctx['__$anflg454'] = true;
                        {
                            '';
                            var __r1 = __$ctx._url;
                            __$ctx._url = (_$3r7url.match(/^\w[\w-]*:\/\//g) ? '' : 'http://') + _$3r7url;
                            $203(__$ctx);
                            __$ctx._url = __r1;
                            '';
                        }
                        __$ctx['__$anflg454'] = __r0;
                        '';
                    }
                    undefined;
                    return;
                } else {
                    return $519(__$ctx);
                }
            } else {
                return $519(__$ctx);
            }
        } else {
            return $519(__$ctx);
        }
    }
    function $229(__$ctx) {
        if (!($$mods && $$mods.type === 'weather') === false) {
            if (!!$$elem === false) {
                return $232(__$ctx);
            } else {
                return $235(__$ctx);
            }
        } else {
            return $235(__$ctx);
        }
    }
    function $232(__$ctx) {
        var __r0, __r1, __r2, __r3;
        return {
            elem: 'answer',
            content: [
                ('', __r0 = $$mode, $$mode = 'icon', __r1 = $160(__$ctx), $$mode = __r0, '', __r1),
                ('', __r2 = $$mode, $$mode = 'value', __r3 = $146(__$ctx), $$mode = __r2, '', __r3)
            ]
        };
        return;
    }
    function $235(__$ctx) {
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
                return $241(__$ctx);
            }
        } else {
            return $241(__$ctx);
        }
    }
    function $241(__$ctx) {
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
                return $519(__$ctx);
            }
        } else {
            return $519(__$ctx);
        }
    }
    function $259(__$ctx) {
        return __$ctx.ctx.svg ? 'background-image:none,url("' + __$ctx.ctx.svg + '")' : '';
        return;
    }
    function $264(__$ctx) {
        return __$ctx.ctx.png ? 'background-image:url("' + __$ctx.ctx.png + '");' : '';
        return;
    }
    function $270(__$ctx) {
        return {
            elem: 'link',
            url: __$ctx._url,
            content: __$ctx.ctx.data[3]
        };
        return;
    }
    function $280(__$ctx) {
        var __r0, __r1, __r2, __r3;
        if (!__$ctx.ctx) {
            return '';
        } else {
            undefined;
        }
        var _$3s4ctx = __$ctx.ctx, _$3s4keyset = _$3s4ctx.keyset, _$3s4key = _$3s4ctx.key, _$3s4params = _$3s4ctx.params || {};
        if (!(_$3s4keyset || _$3s4key)) {
            return '';
        } else {
            undefined;
        }
        if (_$3s4ctx.content) {
            var _$3s4cnt;
            _$3s4params.content = (_$3s4cnt = [], '', __r0 = __$ctx._buf, __$ctx._buf = _$3s4cnt, __r1 = $$mode, $$mode = '', __r2 = __$ctx.ctx, __$ctx.ctx = _$3s4ctx.content, __r3 = $520(__$ctx), __$ctx._buf = __r0, $$mode = __r1, __$ctx.ctx = __r2, '', __r3, _$3s4cnt.join(''));
        } else {
            undefined;
        }
        __$ctx._buf.push(BEM.I18N(_$3s4keyset, _$3s4key, _$3s4params));
        return;
    }
    function $294(__$ctx) {
        if (!(__$ctx['__$anflg455'] !== true) === false) {
            if (!($$mods && $$mods.disabled === 'yes') === false) {
                if (!!$$elem === false) {
                    var __r0, __r1;
                    var _$3rfattrs = ('', __r0 = __$ctx['__$anflg455'], __$ctx['__$anflg455'] = true, __r1 = $294(__$ctx), __$ctx['__$anflg455'] = __r0, '', __r1) || {};
                    _$3rfattrs.tabindex = -1;
                    _$3rfattrs['aria-disabled'] = true;
                    return _$3rfattrs;
                    return;
                } else {
                    return $303(__$ctx);
                }
            } else {
                return $303(__$ctx);
            }
        } else {
            return $303(__$ctx);
        }
    }
    function $303(__$ctx) {
        if (!!$$elem === false) {
            return $305(__$ctx);
        } else {
            return $519(__$ctx);
        }
    }
    function $305(__$ctx) {
        var _$3rectx = __$ctx.ctx, _$3reattrs = {};
        [
            'title',
            'target',
            'id',
            'tabindex'
        ].forEach(function (param) {
            if (_$3rectx.hasOwnProperty(param)) {
                _$3reattrs[param] = String(_$3rectx[param]);
            } else {
                undefined;
            }
        });
        if (_$3rectx.url !== null && typeof _$3rectx.url !== 'undefined') {
            if (__$ctx.isSimple(_$3rectx.url)) {
                _$3reattrs.href = String(_$3rectx.url);
            } else {
                var _$3rebuf = [];
                {
                    '';
                    var __r0 = $$mode;
                    $$mode = '';
                    var __r1 = __$ctx._buf;
                    __$ctx._buf = _$3rebuf;
                    var __r2 = __$ctx.ctx;
                    __$ctx.ctx = _$3rectx.url;
                    $520(__$ctx);
                    $$mode = __r0;
                    __$ctx._buf = __r1;
                    __$ctx.ctx = __r2;
                    '';
                }
                undefined;
                _$3reattrs.href = _$3rebuf.join('');
            }
        } else {
            _$3reattrs.role = 'button';
            if (!_$3reattrs.tabindex) {
                _$3reattrs.tabindex = '0';
            } else {
                undefined;
            }
        }
        return _$3reattrs;
        return;
    }
    function $328(__$ctx) {
        if (!(__$ctx['__$anflg453'] !== true) === false) {
            {
                '';
                var __r0 = __$ctx['__$anflg453'];
                __$ctx['__$anflg453'] = true;
                {
                    '';
                    var __r1 = __$ctx._titleId;
                    __$ctx._titleId = __$ctx.generateId();
                    $328(__$ctx);
                    __$ctx._titleId = __r1;
                    '';
                }
                __$ctx['__$anflg453'] = __r0;
                '';
            }
            undefined;
            return;
        } else {
            return $358(__$ctx);
        }
    }
    function $358(__$ctx) {
        if ($$mode === 'js') {
            if (!!$$elem === false) {
                return true;
                return;
            } else {
                return $519(__$ctx);
            }
        } else {
            return $519(__$ctx);
        }
    }
    function $398(__$ctx) {
        if ($$elem === 'control') {
            if (!(__$ctx['__$anflg452'] !== true) === false) {
                if (!!$$mods.clear === false) {
                    return $402(__$ctx);
                } else {
                    return $407(__$ctx);
                }
            } else {
                return $407(__$ctx);
            }
        } else {
            return $407(__$ctx);
        }
    }
    function $402(__$ctx) {
        {
            '';
            var __r0 = __$ctx['__$anflg452'];
            __$ctx['__$anflg452'] = true;
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
                $520(__$ctx);
                __$ctx.ctx = __r1;
                $$mode = __r2;
                '';
            }
            __$ctx['__$anflg452'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $407(__$ctx) {
        if (!(__$ctx['__$anflg451'] !== true) === false) {
            if (!!$$elem === false) {
                return $410(__$ctx);
            } else {
                return $519(__$ctx);
            }
        } else {
            return $519(__$ctx);
        }
    }
    function $410(__$ctx) {
        var __r0, __r1, __r2;
        var _$3q2value = ('', __r0 = $$mode, $$mode = 'value', __r1 = __$ctx.ctx, __$ctx.ctx = __$ctx.ctx.value, __r2 = $420(__$ctx), $$mode = __r0, __$ctx.ctx = __r1, '', __r2), _$3q2id = __$ctx.ctx.id || __$ctx.generateId(), _$3q2mods = __$ctx.ctx.mods || {};
        _$3q2mods.theme = _$3q2mods.theme || 'normal';
        {
            '';
            var __r3 = __$ctx['__$anflg451'];
            __$ctx['__$anflg451'] = true;
            {
                '';
                var __r4 = __$ctx._inputId;
                __$ctx._inputId = _$3q2id;
                var __r5 = __$ctx._labelId;
                __$ctx._labelId = 'label' + _$3q2id;
                var __r6 = __$ctx._hintId;
                __$ctx._hintId = 'hint' + _$3q2id;
                var __r7 = __$ctx._name;
                __$ctx._name = __$ctx.ctx.name || '';
                var __r8 = __$ctx._value;
                __$ctx._value = _$3q2value;
                var __r9 = __$ctx._inputLink;
                __$ctx._inputLink = true;
                var __r10 = __$ctx._disabled;
                __$ctx._disabled = $$mods.disabled;
                var __r11 = __$ctx.ctx, __r12 = __r11.mods;
                __r11.mods = _$3q2mods;
                $398(__$ctx);
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
            __$ctx['__$anflg451'] = __r3;
            '';
        }
        undefined;
        return;
    }
    function $420(__$ctx) {
        if (!__$ctx.isSimple(__$ctx.ctx) === false) {
            if (!!$$elem === false) {
                return __$ctx.ctx;
                return;
            } else {
                return $426(__$ctx);
            }
        } else {
            return $426(__$ctx);
        }
    }
    function $426(__$ctx) {
        if (!__$ctx.ctx === false) {
            if (!!$$elem === false) {
                var _$3q4value = [];
                {
                    '';
                    var __r0 = __$ctx._buf;
                    __$ctx._buf = _$3q4value;
                    var __r1 = $$mode;
                    $$mode = '';
                    $520(__$ctx);
                    __$ctx._buf = __r0;
                    $$mode = __r1;
                    '';
                }
                undefined;
                return _$3q4value.join('');
                return;
            } else {
                return $432(__$ctx);
            }
        } else {
            return $432(__$ctx);
        }
    }
    function $432(__$ctx) {
        if (!true === false) {
            if (!!$$elem === false) {
                return '';
                return;
            } else {
                return $519(__$ctx);
            }
        } else {
            return $519(__$ctx);
        }
    }
    function $448(__$ctx) {
        if (!(__$ctx['__$anflg450'] !== true) === false) {
            if (!!$$elem === false) {
                var __r0, __r1;
                var _$3pzc = ('', __r0 = __$ctx['__$anflg450'], __$ctx['__$anflg450'] = true, __r1 = $448(__$ctx), __$ctx['__$anflg450'] = __r0, '', __r1);
                _$3pzc += [
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
                return _$3pzc;
                return;
            } else {
                return $454(__$ctx);
            }
        } else {
            return $454(__$ctx);
        }
    }
    function $454(__$ctx) {
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
            return $519(__$ctx);
        }
    }
    function $474(__$ctx) {
        var __r0, __r1, __r2, __r3;
        var _$3pv_this = __$ctx['i-global'], _$3pvjs = {}, _$3pvblock = {
                block: 'i-global',
                js: _$3pvjs
            }, _$3pve;
        for (_$3pve in _$3pv_this) {
            if (_$3pv_this.hasOwnProperty(_$3pve) && ('', __r0 = $$mode, $$mode = 'public-params', __r1 = $$block, $$block = 'i-global', __r2 = $$elem, $$elem = _$3pve, __r3 = $480(__$ctx), $$mode = __r0, $$block = __r1, $$elem = __r2, '', __r3)) {
                _$3pvjs[_$3pve] = _$3pv_this[_$3pve];
            } else {
                undefined;
            }
        }
        return _$3pvblock;
        return;
    }
    function $480(__$ctx) {
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
            return $519(__$ctx);
        }
    }
    function $485(__$ctx) {
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
                    return $509(__$ctx);
                } else {
                    return $519(__$ctx);
                }
            }
        }
    }
    function $509(__$ctx) {
        var _$3pjparams = __$ctx.ctx.params || {}, _$3pjiGlobal = __$ctx['i-global'], _$3pjisTldChanged = _$3pjparams.tld && _$3pjparams.tld !== _$3pjiGlobal.tld, _$3pjtld, _$3pjxYaDomain, _$3pjyaDomain;
        if (_$3pjisTldChanged) {
            _$3pjtld = _$3pjparams.tld;
            _$3pjxYaDomain = _$3pjtld === 'tr' ? 'yandex.com.tr' : 'yandex.' + _$3pjtld;
            _$3pjyaDomain = [
                'ua',
                'by',
                'kz'
            ].indexOf(_$3pjtld) != -1 ? 'yandex.ru' : _$3pjxYaDomain;
            _$3pjiGlobal['content-region'] = _$3pjtld;
            _$3pjiGlobal['click-host'] = '//clck.' + _$3pjyaDomain;
            _$3pjiGlobal['passport-host'] = 'https://passport.' + _$3pjyaDomain;
            _$3pjiGlobal['pass-host'] = '//pass.' + _$3pjxYaDomain;
            _$3pjiGlobal['social-host'] = '//social.' + _$3pjxYaDomain;
            _$3pjiGlobal['export-host'] = '//export.' + _$3pjxYaDomain;
        } else {
            undefined;
        }
        for (var _$3pjp in _$3pjparams) {
            _$3pjiGlobal[_$3pjp] = _$3pjparams[_$3pjp];
        }
        return;
    }
    function $512(__$ctx) {
        if (!!$$elem === false) {
            return {};
            return;
        } else {
            return $519(__$ctx);
        }
    }
    function $519(__$ctx) {
        var __t = $$mode;
        if (__t === '') {
            return $520(__$ctx);
        } else if (__t === 'content') {
            return __$ctx.ctx.content;
            return;
        } else if (__t === 'mix' || __t === 'bem' || __t === 'jsAttr' || __t === 'js' || __t === 'cls' || __t === 'attrs' || __t === 'tag') {
            return undefined;
            return;
        } else {
            return $541(__$ctx);
        }
    }
    function $520(__$ctx) {
        if (!!__$ctx['i-global'] === false) {
            return $522(__$ctx);
        } else {
            return $541(__$ctx);
        }
    }
    function $522(__$ctx) {
        var __r0, __r1, __r2, __r3, __r4, __r5, __r6;
        var _$3phps = {}, _$3phes = [
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
            ], _$3phe;
        while (_$3phe = _$3phes.shift()) {
            _$3phps[_$3phe] = ('', __r0 = $$mode, $$mode = 'default', __r1 = $$block, $$block = 'i-global', __r2 = $$elem, $$elem = _$3phe, __r3 = $485(__$ctx), $$mode = __r0, $$block = __r1, $$elem = __r2, '', __r3);
        }
        __$ctx['i-global'] = __$ctx._.extend(_$3phps, ('', __r4 = $$mode, $$mode = 'env', __r5 = $$block, $$block = 'i-global', __r6 = $512(__$ctx), $$mode = __r4, $$block = __r5, '', __r6));
        applyc(__$ctx);
        undefined;
        return;
    }
    function $541(__$ctx) {
        if (!__$ctx.ctx === false) {
            if (!__$ctx.ctx.link === false) {
                if (!!__$ctx._.isSimple(__$ctx.ctx) === false) {
                    return $545(__$ctx);
                } else {
                    return $550(__$ctx);
                }
            } else {
                return $550(__$ctx);
            }
        } else {
            return $550(__$ctx);
        }
    }
    function $545(__$ctx) {
        var __r0, __r1;
        function _$3p8follow() {
            if (this.ctx.link === 'no-follow') {
                return undefined;
            } else {
                undefined;
            }
            var data = this._links[this.ctx.link];
            return '', __r0 = this.ctx, this.ctx = data, __r1 = $1(__$ctx), this.ctx = __r0, '', __r1;
        }
        if (!cache || !__$ctx._cacheLog) {
            return _$3p8follow.call(__$ctx);
        } else {
            undefined;
        }
        var _$3p8contents = __$ctx._buf.slice(__$ctx._cachePos).join('');
        __$ctx._cachePos = __$ctx._buf.length;
        __$ctx._cacheLog.push(_$3p8contents, {
            log: __$ctx._localLog.slice(),
            link: __$ctx.ctx.link
        });
        var _$3p8res = _$3p8follow.call(__$ctx);
        __$ctx._cachePos = __$ctx._buf.length;
        return _$3p8res;
        return;
    }
    function $550(__$ctx) {
        if (!cache === false) {
            if (!__$ctx.ctx === false) {
                if (!__$ctx.ctx.cache === false) {
                    return $554(__$ctx);
                } else {
                    return $559(__$ctx);
                }
            } else {
                return $559(__$ctx);
            }
        } else {
            return $559(__$ctx);
        }
    }
    function $554(__$ctx) {
        var _$3p7cached;
        function _$3p7setProperty(obj, key, value) {
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
        if (_$3p7cached = cache.get(__$ctx.ctx.cache)) {
            var _$3p7oldLinks = __$ctx._links;
            if (__$ctx.ctx.links) {
                __$ctx._links = __$ctx.ctx.links;
            } else {
                undefined;
            }
            for (var _$3p7i = 0; _$3p7i < _$3p7cached.log.length; _$3p7i++) {
                if (typeof _$3p7cached.log[_$3p7i] === 'string') {
                    __$ctx._buf.push(_$3p7cached.log[_$3p7i]);
                    continue;
                } else {
                    undefined;
                }
                var _$3p7log = _$3p7cached.log[_$3p7i], _$3p7reverseLog;
                _$3p7reverseLog = _$3p7log.log.map(function (entry) {
                    return {
                        key: entry[0],
                        value: _$3p7setProperty(this, entry[0], entry[1])
                    };
                }, __$ctx).reverse();
                {
                    '';
                    var __r0 = __$ctx.ctx, __r1 = __r0.cache;
                    __r0.cache = null;
                    var __r2 = __$ctx._cacheLog;
                    __$ctx._cacheLog = null;
                    var __r3 = __$ctx.ctx, __r4 = __r3.link;
                    __r3.link = _$3p7log.link;
                    $1(__$ctx);
                    __r0.cache = __r1;
                    __$ctx._cacheLog = __r2;
                    __r3.link = __r4;
                    '';
                }
                undefined;
                _$3p7reverseLog.forEach(function (entry) {
                    _$3p7setProperty(this, entry.key, entry.value);
                }, __$ctx);
            }
            __$ctx._links = _$3p7oldLinks;
            return _$3p7cached.res;
        } else {
            undefined;
        }
        var _$3p7cacheLog = [], _$3p7res;
        {
            '';
            var __r5 = __$ctx.ctx, __r6 = __r5.cache;
            __r5.cache = null;
            var __r7 = __$ctx._cachePos;
            __$ctx._cachePos = __$ctx._buf.length;
            var __r8 = __$ctx._cacheLog;
            __$ctx._cacheLog = _$3p7cacheLog;
            var __r9 = __$ctx._localLog;
            __$ctx._localLog = [];
            {
                _$3p7res = $1(__$ctx);
                var _$3p7tail = __$ctx._buf.slice(__$ctx._cachePos).join('');
                if (_$3p7tail) {
                    _$3p7cacheLog.push(_$3p7tail);
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
            log: _$3p7cacheLog,
            res: _$3p7res
        });
        return _$3p7res;
        return;
    }
    function $559(__$ctx) {
        var __t = $$mode;
        if (__t === 'default') {
            return $561(__$ctx);
        } else if (__t === '') {
            if (!__$ctx._.isSimple(__$ctx.ctx) === false) {
                __$ctx._listLength--;
                var _$3p5ctx = __$ctx.ctx;
                (_$3p5ctx && _$3p5ctx !== true || _$3p5ctx === 0) && __$ctx._buf.push(_$3p5ctx);
                return;
            } else {
                if (!!__$ctx.ctx === false) {
                    __$ctx._listLength--;
                    return;
                } else {
                    if (!__$ctx._.isArray(__$ctx.ctx) === false) {
                        return $570(__$ctx);
                    } else {
                        if (!true === false) {
                            return $573(__$ctx);
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
    function $561(__$ctx) {
        var __r13, __r0, __r4, __r5, __r6, __r7, __r8, __r9, __r10, __r11, __r12, __r1, __r14, __r15, __r16, __r17, __r20, __r21, __r22, __r23, __r24, __r25;
        var _$3p6BEM_ = __$ctx.BEM, _$3p6v = __$ctx.ctx, _$3p6buf = __$ctx._buf, _$3p6tag;
        _$3p6tag = ('', __r0 = $$mode, $$mode = 'tag', __r1 = $1(__$ctx), $$mode = __r0, '', __r1);
        typeof _$3p6tag != 'undefined' || (_$3p6tag = _$3p6v.tag);
        typeof _$3p6tag != 'undefined' || (_$3p6tag = 'div');
        if (_$3p6tag) {
            var _$3p6jsParams, _$3p6js;
            if ($$block && _$3p6v.js !== false) {
                _$3p6js = ('', __r4 = $$mode, $$mode = 'js', __r5 = $1(__$ctx), $$mode = __r4, '', __r5);
                _$3p6js = _$3p6js ? __$ctx._.extend(_$3p6v.js, _$3p6js === true ? {} : _$3p6js) : _$3p6v.js === true ? {} : _$3p6v.js;
                _$3p6js && ((_$3p6jsParams = {})[_$3p6BEM_.INTERNAL.buildClass($$block, _$3p6v.elem)] = _$3p6js);
            } else {
                undefined;
            }
            _$3p6buf.push('<', _$3p6tag);
            var _$3p6isBEM = ('', __r6 = $$mode, $$mode = 'bem', __r7 = $1(__$ctx), $$mode = __r6, '', __r7);
            typeof _$3p6isBEM != 'undefined' || (_$3p6isBEM = typeof _$3p6v.bem != 'undefined' ? _$3p6v.bem : _$3p6v.block || _$3p6v.elem);
            var _$3p6cls = ('', __r8 = $$mode, $$mode = 'cls', __r9 = $1(__$ctx), $$mode = __r8, '', __r9);
            _$3p6cls || (_$3p6cls = _$3p6v.cls);
            var _$3p6addJSInitClass = _$3p6v.block && _$3p6jsParams;
            if (_$3p6isBEM || _$3p6cls) {
                _$3p6buf.push(' class="');
                if (_$3p6isBEM) {
                    _$3p6BEM_.INTERNAL.buildClasses($$block, _$3p6v.elem, _$3p6v.elemMods || _$3p6v.mods, _$3p6buf);
                    var _$3p6mix = ('', __r10 = $$mode, $$mode = 'mix', __r11 = $1(__$ctx), $$mode = __r10, '', __r11);
                    _$3p6v.mix && (_$3p6mix = _$3p6mix ? _$3p6mix.concat(_$3p6v.mix) : _$3p6v.mix);
                    if (_$3p6mix) {
                        var _$3p6visited = {};
                        function _$3p6visitedKey(block, elem) {
                            return (block || '') + '__' + (elem || '');
                        }
                        _$3p6visited[_$3p6visitedKey($$block, $$elem)] = true;
                        if (!__$ctx._.isArray(_$3p6mix)) {
                            _$3p6mix = [_$3p6mix];
                        } else {
                            undefined;
                        }
                        for (var _$3p6i = 0; _$3p6i < _$3p6mix.length; _$3p6i++) {
                            var _$3p6mixItem = _$3p6mix[_$3p6i];
                            if (!_$3p6mixItem) {
                                continue;
                            } else {
                                undefined;
                            }
                            var _$3p6hasItem = _$3p6mixItem.block || _$3p6mixItem.elem, _$3p6block = _$3p6mixItem.block || _$3p6mixItem._block || $$block, _$3p6elem = _$3p6mixItem.elem || _$3p6mixItem._elem || $$elem, _$3p6mods = _$3p6mixItem.mods || $$mods, _$3p6elemMods = _$3p6mixItem.elemMods || {};
                            _$3p6hasItem && _$3p6buf.push(' ');
                            _$3p6BEM_.INTERNAL[_$3p6hasItem ? 'buildClasses' : 'buildModsClasses'](_$3p6block, _$3p6mixItem.elem || _$3p6mixItem._elem || (_$3p6mixItem.block ? undefined : $$elem), _$3p6mixItem.elemMods || _$3p6mixItem.mods, _$3p6buf);
                            if (_$3p6mixItem.js) {
                                (_$3p6jsParams || (_$3p6jsParams = {}))[_$3p6BEM_.INTERNAL.buildClass(_$3p6block, _$3p6mixItem.elem)] = _$3p6mixItem.js === true ? {} : _$3p6mixItem.js;
                                _$3p6addJSInitClass || (_$3p6addJSInitClass = _$3p6block && !_$3p6mixItem.elem);
                            } else {
                                undefined;
                            }
                            if (_$3p6hasItem && !_$3p6visited[_$3p6visitedKey(_$3p6block, _$3p6elem)]) {
                                _$3p6visited[_$3p6visitedKey(_$3p6block, _$3p6elem)] = true;
                                var _$3p6nestedMix = ('', __r12 = $$block, $$block = _$3p6block, __r13 = $$elem, $$elem = _$3p6elem, __r14 = $$mods, $$mods = _$3p6mods, __r15 = $$elemMods, $$elemMods = _$3p6elemMods, __r16 = $$mode, $$mode = 'mix', __r17 = $1(__$ctx), $$block = __r12, $$elem = __r13, $$mods = __r14, $$elemMods = __r15, $$mode = __r16, '', __r17);
                                if (_$3p6nestedMix) {
                                    for (var _$3p6j = 0; _$3p6j < _$3p6nestedMix.length; _$3p6j++) {
                                        var _$3p6nestedItem = _$3p6nestedMix[_$3p6j];
                                        if (!_$3p6nestedItem.block && !_$3p6nestedItem.elem || !_$3p6visited[_$3p6visitedKey(_$3p6nestedItem.block, _$3p6nestedItem.elem)]) {
                                            _$3p6nestedItem._block = _$3p6block;
                                            _$3p6nestedItem._elem = _$3p6elem;
                                            _$3p6mix.splice(_$3p6i + 1, 0, _$3p6nestedItem);
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
                _$3p6cls && _$3p6buf.push(_$3p6isBEM ? ' ' : '', _$3p6cls);
                _$3p6addJSInitClass && _$3p6buf.push(' i-bem');
                _$3p6buf.push('"');
            } else {
                undefined;
            }
            if (_$3p6jsParams) {
                var _$3p6jsAttr = ('', __r20 = $$mode, $$mode = 'jsAttr', __r21 = $1(__$ctx), $$mode = __r20, '', __r21);
                _$3p6buf.push(' ', _$3p6jsAttr || 'data-bem', '="', __$ctx._.attrEscape(JSON.stringify(_$3p6jsParams)), '"');
            } else {
                undefined;
            }
            var _$3p6attrs = ('', __r22 = $$mode, $$mode = 'attrs', __r23 = $1(__$ctx), $$mode = __r22, '', __r23);
            _$3p6attrs = __$ctx._.extend(_$3p6attrs, _$3p6v.attrs);
            if (_$3p6attrs) {
                var _$3p6name;
                for (_$3p6name in _$3p6attrs) {
                    if (_$3p6attrs[_$3p6name] === undefined) {
                        continue;
                    } else {
                        undefined;
                    }
                    _$3p6buf.push(' ', _$3p6name, '="', __$ctx._.attrEscape(_$3p6attrs[_$3p6name]), '"');
                }
            } else {
                undefined;
            }
        } else {
            undefined;
        }
        if (__$ctx._.isShortTag(_$3p6tag)) {
            _$3p6buf.push('/>');
        } else {
            _$3p6tag && _$3p6buf.push('>');
            var _$3p6content = ('', __r24 = $$mode, $$mode = 'content', __r25 = $1(__$ctx), $$mode = __r24, '', __r25);
            if (_$3p6content || _$3p6content === 0) {
                var _$3p6isBEM = $$block || $$elem;
                {
                    '';
                    var __r26 = __$ctx._notNewList;
                    __$ctx._notNewList = false;
                    var __r27 = __$ctx.position;
                    __$ctx.position = _$3p6isBEM ? 1 : __$ctx.position;
                    var __r28 = __$ctx._listLength;
                    __$ctx._listLength = _$3p6isBEM ? 1 : __$ctx._listLength;
                    var __r29 = __$ctx.ctx;
                    __$ctx.ctx = _$3p6content;
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
            _$3p6tag && _$3p6buf.push('</', _$3p6tag, '>');
        }
        return;
    }
    function $570(__$ctx) {
        var _$3p3v = __$ctx.ctx, _$3p3l = _$3p3v.length, _$3p3i = 0, _$3p3prevPos = __$ctx.position, _$3p3prevNotNewList = __$ctx._notNewList;
        if (_$3p3prevNotNewList) {
            __$ctx._listLength += _$3p3l - 1;
        } else {
            __$ctx.position = 0;
            __$ctx._listLength = _$3p3l;
        }
        __$ctx._notNewList = true;
        while (_$3p3i < _$3p3l) {
            var _$3p3newCtx = _$3p3v[_$3p3i++];
            {
                '';
                var __r0 = __$ctx.ctx;
                __$ctx.ctx = _$3p3newCtx == null ? '' : _$3p3newCtx;
                $1(__$ctx);
                __$ctx.ctx = __r0;
                '';
            }
            undefined;
        }
        _$3p3prevNotNewList || (__$ctx.position = _$3p3prevPos);
        return;
    }
    function $573(__$ctx) {
        var _$3p2vBlock = __$ctx.ctx.block, _$3p2vElem = __$ctx.ctx.elem, _$3p2block = __$ctx._currBlock || $$block;
        __$ctx.ctx || (__$ctx.ctx = {});
        {
            '';
            var __r0 = $$mode;
            $$mode = 'default';
            var __r1 = __$ctx._links;
            __$ctx._links = __$ctx.ctx.links || __$ctx._links;
            var __r2 = $$block;
            $$block = _$3p2vBlock || (_$3p2vElem ? _$3p2block : undefined);
            var __r3 = __$ctx._currBlock;
            __$ctx._currBlock = _$3p2vBlock || _$3p2vElem ? undefined : _$3p2block;
            var __r4 = $$elem;
            $$elem = __$ctx.ctx.elem;
            var __r5 = $$mods;
            $$mods = (_$3p2vBlock ? __$ctx.ctx.mods : $$mods) || {};
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
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-bem/i-bem.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-ecma/__object/i-ecma__object.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-ecma/__array/i-ecma__array.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-ecma/__function/i-ecma__function.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-bem/__internal/i-bem__internal.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-jquery/__cookie/i-jquery__cookie.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-jquery/__decodeuri/i-jquery__decodeuri.js*/;
/*borschik:include:../../../../libs/islands-romochka/desktop.blocks/i-bem/html/i-bem__html.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-ecma/__json/i-ecma__json.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-bem/__dom/i-bem__dom.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-ecma/__string/i-ecma__string.js*/;
/*borschik:include:../../../../libs/islands-romochka/common.blocks/i-common/check-session/i-common__check-session.js*/;
/*borschik:include:../../../../libs/islands-romochka/common.blocks/i-global/i-global.js*/;
/*borschik:include:../../../../libs/islands-romochka/common.blocks/i-counter/i-counter.js*/;
/*borschik:include:../../../../libs/islands-romochka/common.blocks/i-common/cookie/i-common__cookie.js*/;
/*borschik:include:../../../../libs/islands-romochka/common.blocks/i-common/init/i-common__init.js*/;
/*borschik:include:../../../../libs/islands-romochka/common.blocks/i-common/i-common.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-bem/__dom/_init/i-bem__dom_init_auto.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-common/i-ua/_interaction/i-ua_interaction_yes.js*/;
/*borschik:include:../../../../libs/islands-romochka/desktop.blocks/i-oframebust/i-oframebust.js*/;
/*borschik:include:../../../../libs/islands-romochka/desktop.blocks/i-oframebust/_type/i-oframebust_type_referrer.js*/;
/*borschik:include:../../../../common.blocks/suggest/suggest.examples/10-simple.blocks/example/example.js*/;
/*borschik:include:../../../../libs/bem-bl/blocks-desktop/i-jquery/__leftclick/i-jquery__leftclick.js*/;
/*borschik:include:../../../../common.blocks/suggest/suggest.js*/;
/*borschik:include:../../../../desktop.blocks/suggest/suggest.js*/;
/*borschik:include:../../../../libs/islands-romochka/common.blocks/i-request/i-request.js*/;
/*borschik:include:../../../../libs/islands-romochka/common.blocks/i-request/_type/i-request_type_ajax.js*/;
/*borschik:include:../../../../common.blocks/suggest/__provider/suggest__provider.js*/;
/*borschik:include:../../../../common.blocks/suggest-item/suggest-item.js*/;
/*borschik:include:../../../../desktop.blocks/suggest-item/suggest-item.js*/;
/*borschik:include:../../../../common.blocks/suggest-item/_nav/suggest-item_nav_yes.js*/;
/*borschik:include:../../../../common.blocks/link/link.js*/;
/*borschik:include:../../../../common.blocks/popup/popup.js*/;
/*borschik:include:../../../../common.blocks/popup/_autoclosable/popup_autoclosable_yes.js*/;
/*borschik:include:../../../../common.blocks/popup/_adaptive/popup_adaptive_yes.js*/;
/*borschik:include:../../../../common.blocks/popup/_animate/popup_animate_yes.js*/;
/*borschik:include:../../../../common.blocks/popup/__under/popup__under.js*/;
/*borschik:include:../../../../common.blocks/input/input.js*/;
/*borschik:include:../../../../desktop.blocks/input/input.js*/;
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


BEM.I18N.decl('suggest', {"fact": 'Факты',"group": 'Группа подсказок',"nah": 'Вы искали',"nav": 'Сайт',"text": 'Поиск',"traffic": 'Пробки',"weather": 'Погода'}, {
"lang": "ru"
});

BEM.I18N.decl('suggest-item', {"quick-answer": 'Быстрый ответ'}, {
"lang": "ru"
});

BEM.I18N.lang('ru');
