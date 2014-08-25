var BEMHTML = function() {
  var $$mode, $$block, $$elem, $$elemMods, $$mods;
  var cache,
      exports = {},
      xjst = (function (exports) {
    function $1(__$ctx) {
        var __t = $$mode;
        if (__t === 'default') {
            return $2(__$ctx);
        } else if (__t === 'country-flag') {
            if ($$block === 'lang-switcher') {
                if ($$elem === 'flag') {
                    return $83(__$ctx);
                } else {
                    return $259(__$ctx);
                }
            } else {
                return $259(__$ctx);
            }
        } else if (__t === 'content') {
            return $110(__$ctx);
        } else if (__t === 'attrs') {
            return $137(__$ctx);
        } else if (__t === 'tag') {
            return $192(__$ctx);
        } else if (__t === 'js') {
            return $219(__$ctx);
        } else if (__t === 'mix') {
            return $243(__$ctx);
        } else {
            return $259(__$ctx);
        }
    }
    function $2(__$ctx) {
        var __t = $$block;
        if (__t === 'i-jquery') {
            if (!(__$ctx['__$anflg17'] !== true) === false) {
                if (!!$$elem === false) {
                    return $6(__$ctx);
                } else {
                    return $9(__$ctx);
                }
            } else {
                return $9(__$ctx);
            }
        } else if (__t === 'lang-switcher') {
            var __t = $$elem;
            if (__t === 'flag') {
                if (!(__$ctx['__$anflg15'] !== true) === false) {
                    if (!__$ctx._withFlags === false) {
                        return $21(__$ctx);
                    } else {
                        return $31(__$ctx);
                    }
                } else {
                    return $31(__$ctx);
                }
            } else if (__t === 'lang') {
                if (!(__$ctx['__$anflg14'] !== true) === false) {
                    return $28(__$ctx);
                } else {
                    return $31(__$ctx);
                }
            } else {
                return $31(__$ctx);
            }
        } else if (__t === 'dropdown-menu') {
            var __t = $$elem;
            if (__t === 'switcher') {
                if (!(__$ctx['__$anflg10'] !== true) === false) {
                    return $42(__$ctx);
                } else {
                    return $55(__$ctx);
                }
            } else if (__t === 'popup') {
                if (!(__$ctx['__$anflg9'] !== true) === false) {
                    return $47(__$ctx);
                } else {
                    return $55(__$ctx);
                }
            } else if (__t === 'menu') {
                if (!(__$ctx['__$anflg8'] !== true) === false) {
                    return $52(__$ctx);
                } else {
                    return $55(__$ctx);
                }
            } else {
                return $55(__$ctx);
            }
        } else if (__t === 'dropdown') {
            if ($$elem === 'popup') {
                if (!(__$ctx['__$anflg6'] !== true) === false) {
                    return $66(__$ctx);
                } else {
                    return $259(__$ctx);
                }
            } else {
                return $259(__$ctx);
            }
        } else if (__t === 'popup') {
            return $71(__$ctx);
        } else {
            return $259(__$ctx);
        }
    }
    function $6(__$ctx) {
        var __r0, __r4, __r1, __r2, __r3;
        return '', __r0 = __$ctx['__$anflg17'], __$ctx['__$anflg17'] = true, __r4 = ('', __r1 = __$ctx.ctx, __$ctx.ctx = {
            block: 'b-page',
            elem: 'js',
            url: __$ctx.ctx.url || (__$ctx.ctx.protocol ? __$ctx.ctx.protocol + ':' : '') + '//yastatic.net/jquery/' + $$mods.version + '/jquery.min.js'
        }, __r2 = $$mode, $$mode = '', __r3 = $366(__$ctx), __$ctx.ctx = __r1, $$mode = __r2, '', __r3), __$ctx['__$anflg17'] = __r0, '', __r4;
        return;
    }
    function $9(__$ctx) {
        if (!(__$ctx['__$anflg16'] !== true) === false) {
            if (!!$$elem === false) {
                return $12(__$ctx);
            } else {
                return $259(__$ctx);
            }
        } else {
            return $259(__$ctx);
        }
    }
    function $12(__$ctx) {
        var __r0, __r4, __r1, __r2, __r3;
        return '', __r0 = __$ctx['__$anflg16'], __$ctx['__$anflg16'] = true, __r4 = ('', __r1 = __$ctx.ctx, __$ctx.ctx = {
            block: 'b-page',
            elem: 'js',
            url: __$ctx.ctx.url || (__$ctx.ctx.protocol ? __$ctx.ctx.protocol + ':' : '') + '//yastatic.net/jquery/' + $$mods.version + '/jquery.min.js'
        }, __r2 = $$mode, $$mode = '', __r3 = $366(__$ctx), __$ctx.ctx = __r1, $$mode = __r2, '', __r3), __$ctx['__$anflg16'] = __r0, '', __r4;
        return;
    }
    function $21(__$ctx) {
        var __r0, __r1;
        var _$2xflag = ('', __r0 = $$mode, $$mode = 'country-flag', __r1 = $83(__$ctx), $$mode = __r0, '', __r1);
        {
            '';
            var __r2 = __$ctx['__$anflg15'];
            __$ctx['__$anflg15'] = true;
            {
                '';
                var __r3 = __$ctx.ctx;
                __$ctx.ctx = {
                    block: 'country-flag',
                    mods: { s16: _$2xflag },
                    mix: [{
                            block: 'lang-switcher',
                            elem: 'flag'
                        }],
                    alt: ''
                };
                var __r4 = $$mode;
                $$mode = '';
                $366(__$ctx);
                __$ctx.ctx = __r3;
                $$mode = __r4;
                '';
            }
            __$ctx['__$anflg15'] = __r2;
            '';
        }
        undefined;
        return;
    }
    function $28(__$ctx) {
        var _$2wlang = __$ctx.ctx.lang, _$2wparams;
        if (_$2wlang.code) {
            _$2wparams = { short_ename: _$2wlang.code == 'en' ? 'com' : _$2wlang.code };
        } else {
            if (_$2wlang.langCode) {
                _$2wparams = { lang: _$2wlang.langCode };
            } else {
                if (_$2wlang.region) {
                    _$2wparams = _$2wlang.region;
                } else {
                    undefined;
                }
            }
        }
        var _$2wregion = __$ctx['i-geodata'].getRegion(_$2wparams), _$2wctx = __$ctx.ctx;
        _$2wctx._lang = {
            lang: _$2wregion.lang,
            name: __$ctx.ctx.lang.name
        };
        if (!__$ctx.ctx._isCurrentLang) {
            __$ctx.position = __$ctx.position - 1;
            if (__$ctx._hasLinkToAll && __$ctx.position === __$ctx._listLength - 2) {
                __$ctx.position = __$ctx._listLength - 1;
            } else {
                undefined;
            }
            _$2wctx = {
                block: 'b-menu-vert',
                elem: 'layout-unit',
                content: __$ctx._.extend(__$ctx.ctx, { block: $$block })
            };
        } else {
            undefined;
        }
        {
            '';
            var __r0 = __$ctx['__$anflg14'];
            __$ctx['__$anflg14'] = true;
            {
                '';
                var __r1 = __$ctx.ctx;
                __$ctx.ctx = _$2wctx;
                var __r2 = $$mode;
                $$mode = '';
                $366(__$ctx);
                __$ctx.ctx = __r1;
                $$mode = __r2;
                '';
            }
            __$ctx['__$anflg14'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $31(__$ctx) {
        if (!(__$ctx['__$anflg11'] !== true) === false) {
            if (!!$$elem === false) {
                return $34(__$ctx);
            } else {
                return $259(__$ctx);
            }
        } else {
            return $259(__$ctx);
        }
    }
    function $34(__$ctx) {
        __$ctx._withFlags = !(__$ctx.ctx.mods && __$ctx.ctx.mods.noflags);
        {
            '';
            var __r0 = __$ctx['__$anflg11'];
            __$ctx['__$anflg11'] = true;
            {
                '';
                var __r1 = __$ctx.ctx;
                __$ctx.ctx = {
                    block: 'dropdown-menu',
                    mix: (__$ctx.ctx.mix || []).concat(__$ctx._.extend(__$ctx.ctx, { js: true })),
                    content: [
                        {
                            elem: 'switcher',
                            content: {
                                block: 'lang-switcher',
                                mix: [{
                                        block: 'link',
                                        mods: { pseudo: 'yes' },
                                        js: true
                                    }],
                                elem: 'lang',
                                lang: __$ctx.ctx.lang,
                                mods: { selected: 'yes' },
                                attrs: {
                                    role: 'button',
                                    tabindex: 0
                                },
                                _isCurrentLang: true
                            }
                        },
                        {
                            elem: 'popup',
                            mix: [{
                                    block: 'lang-switcher',
                                    elem: 'popup-content'
                                }],
                            content: {
                                block: $$block,
                                mods: $$mods,
                                tag: '',
                                content: __$ctx._.isArray(__$ctx.ctx.content) && __$ctx.ctx.content.length < 4 && __$ctx.ctx.noMore !== true ? (__$ctx._hasLinkToAll = true, __$ctx.ctx.content.concat([{
                                        block: 'b-menu-vert',
                                        elem: 'layout-unit',
                                        mix: [{
                                                block: 'lang-switcher',
                                                elem: 'all'
                                            }],
                                        content: {
                                            block: 'link',
                                            url: __$ctx['i-services'].serviceUrl('tune') + '/lang/',
                                            content: __$ctx.ctx.moreText || BEM.I18N('lang-switcher', 'all')
                                        }
                                    }])) : __$ctx.ctx.content
                            }
                        }
                    ]
                };
                var __r2 = $$mode;
                $$mode = '';
                $366(__$ctx);
                __$ctx.ctx = __r1;
                $$mode = __r2;
                '';
            }
            __$ctx['__$anflg11'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $42(__$ctx) {
        var _$2hctx = __$ctx.ctx.content;
        _$2hctx.mix = (_$2hctx.mix || []).concat([{
                block: 'dropdown-menu',
                elem: 'switcher'
            }]);
        {
            '';
            var __r0 = __$ctx['__$anflg10'];
            __$ctx['__$anflg10'] = true;
            {
                '';
                var __r1 = __$ctx.ctx;
                __$ctx.ctx = _$2hctx;
                var __r2 = $$mode;
                $$mode = '';
                $366(__$ctx);
                __$ctx.ctx = __r1;
                $$mode = __r2;
                '';
            }
            __$ctx['__$anflg10'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $47(__$ctx) {
        var _$2gctx = __$ctx.ctx;
        {
            '';
            var __r0 = __$ctx['__$anflg9'];
            __$ctx['__$anflg9'] = true;
            {
                '';
                var __r1 = __$ctx.ctx;
                __$ctx.ctx = {
                    block: 'dropdown',
                    elem: 'popup',
                    js: __$ctx.ctx.js,
                    mix: (_$2gctx.mix || []).concat({
                        block: 'dropdown-menu',
                        elem: 'popup',
                        mods: __$ctx._.extend({ size: __$ctx.dropdownMenuSize }, _$2gctx.mods)
                    }),
                    attrs: _$2gctx.attrs,
                    content: {
                        block: 'dropdown-menu',
                        elem: 'menu',
                        title: _$2gctx.menuTitle,
                        type: _$2gctx.type,
                        mods: _$2gctx.menuMods,
                        mix: _$2gctx.menuMix,
                        content: _$2gctx.content
                    }
                };
                var __r2 = $$mode;
                $$mode = '';
                $366(__$ctx);
                __$ctx.ctx = __r1;
                $$mode = __r2;
                '';
            }
            __$ctx['__$anflg9'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $52(__$ctx) {
        var _$2dctx = __$ctx.ctx, _$2dtype = _$2dctx.type || 'vert', _$2dmenuMods = _$2dctx.mods || {};
        _$2dmenuMods.theme || (_$2dmenuMods.theme = 'ffffff');
        {
            '';
            var __r0 = __$ctx['__$anflg8'];
            __$ctx['__$anflg8'] = true;
            {
                '';
                var __r1 = __$ctx.ctx;
                __$ctx.ctx = (__$ctx._inDropdownMenu = true, {
                    block: 'b-menu-' + _$2dtype,
                    mix: (_$2dctx.mix || []).concat({
                        block: 'dropdown-menu',
                        elem: 'menu',
                        mods: _$2dmenuMods
                    }),
                    title: _$2dctx.title,
                    content: _$2dctx.content
                });
                var __r2 = $$mode;
                $$mode = '';
                $366(__$ctx);
                __$ctx.ctx = __r1;
                $$mode = __r2;
                '';
            }
            __$ctx['__$anflg8'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $55(__$ctx) {
        if (!(__$ctx['__$anflg7'] !== true) === false) {
            if (!!$$elem === false) {
                return $58(__$ctx);
            } else {
                return $259(__$ctx);
            }
        } else {
            return $259(__$ctx);
        }
    }
    function $58(__$ctx) {
        var _$2cctx = __$ctx.ctx, _$2cmods = _$2cctx.mods || (_$2cctx.mods = {});
        _$2cmods.theme || (_$2cmods.theme = 'ffffff');
        __$ctx.dropdownMenuSize = _$2cmods.size;
        {
            '';
            var __r0 = __$ctx['__$anflg7'];
            __$ctx['__$anflg7'] = true;
            {
                '';
                var __r1 = __$ctx.ctx;
                __$ctx.ctx = _$2cctx;
                var __r2 = $$mode;
                $$mode = '';
                $366(__$ctx);
                __$ctx.ctx = __r1;
                $$mode = __r2;
                '';
            }
            __$ctx['__$anflg7'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $66(__$ctx) {
        var _$2actx = __$ctx.ctx, _$2amix = [{
                    block: 'dropdown',
                    elem: 'popup'
                }];
        _$2actx.mix && (_$2amix = _$2amix.concat(_$2actx.mix));
        {
            '';
            var __r0 = __$ctx['__$anflg6'];
            __$ctx['__$anflg6'] = true;
            {
                '';
                var __r1 = __$ctx.ctx;
                __$ctx.ctx = {
                    block: 'popup',
                    mix: _$2amix,
                    mods: _$2actx.mods,
                    attrs: _$2actx.attrs,
                    js: _$2actx.js,
                    content: [
                        { elem: 'tail' },
                        {
                            elem: 'content',
                            content: _$2actx.content
                        }
                    ]
                };
                var __r2 = $$mode;
                $$mode = '';
                $366(__$ctx);
                __$ctx.ctx = __r1;
                $$mode = __r2;
                '';
            }
            __$ctx['__$anflg6'] = __r0;
            '';
        }
        return;
    }
    function $71(__$ctx) {
        if (!!__$ctx._popupDefaults === false) {
            if (!!$$elem === false) {
                return $74(__$ctx);
            } else {
                return $259(__$ctx);
            }
        } else {
            return $259(__$ctx);
        }
    }
    function $74(__$ctx) {
        var _$25ctx = __$ctx.ctx;
        _$25ctx.mods = $$mods = __$ctx.extend({
            theme: 'ffffff',
            autoclosable: 'yes',
            adaptive: 'yes',
            animate: 'yes'
        }, $$mods);
        if (_$25ctx.zIndex) {
            var _$25attrs = _$25ctx.attrs || (_$25ctx.attrs = {});
            _$25attrs.style = (_$25attrs.style || '') + ';z-index:' + _$25ctx.zIndex + ';';
        } else {
            undefined;
        }
        {
            '';
            var __r0 = __$ctx._popupDefaults;
            __$ctx._popupDefaults = true;
            $71(__$ctx);
            __$ctx._popupDefaults = __r0;
            '';
        }
        undefined;
        return;
    }
    function $83(__$ctx) {
        if (!($$elemMods && $$elemMods.icon === 'uk') === false) {
            return 'ua';
            return;
        } else {
            if (!($$elemMods && $$elemMods.icon === 'tt') === false) {
                return 'tt';
                return;
            } else {
                if (!($$elemMods && $$elemMods.icon === 'tr') === false) {
                    return 'tr';
                    return;
                } else {
                    if (!($$elemMods && $$elemMods.icon === 'ru') === false) {
                        return 'ru';
                        return;
                    } else {
                        if (!($$elemMods && $$elemMods.icon === 'kk') === false) {
                            return 'kz';
                            return;
                        } else {
                            if (!($$elemMods && $$elemMods.icon === 'en') === false) {
                                return 'gb';
                                return;
                            } else {
                                if (!($$elemMods && $$elemMods.icon === 'be') === false) {
                                    return 'by';
                                    return;
                                } else {
                                    return 'gb';
                                    return;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    function $110(__$ctx) {
        var __t = $$block;
        if (__t === 'lang-switcher') {
            if ($$elem === 'lang') {
                var _$2vcode = __$ctx.ctx._lang.lang;
                return [
                    {
                        elem: 'flag',
                        elemMods: { icon: _$2vcode }
                    },
                    {
                        elem: 'lang-name',
                        tag: 'span',
                        content: __$ctx.ctx._lang.name
                    }
                ];
                return;
            } else {
                return $259(__$ctx);
            }
        } else if (__t === 'link') {
            if (!($$mods && $$mods.pseudo === 'yes') === false) {
                if (!!__$ctx.ctx._wrap === false) {
                    if (!!$$elem === false) {
                        if (!!$$mods.inner === false) {
                            {
                                '';
                                var __r0 = $$mode;
                                $$mode = '';
                                var __r1 = __$ctx.ctx;
                                __$ctx.ctx = {
                                    elem: 'inner',
                                    content: __$ctx.ctx.content,
                                    _wrap: true
                                };
                                $366(__$ctx);
                                $$mode = __r0;
                                __$ctx.ctx = __r1;
                                '';
                            }
                            undefined;
                            return;
                        } else {
                            return $259(__$ctx);
                        }
                    } else {
                        return $259(__$ctx);
                    }
                } else {
                    return $259(__$ctx);
                }
            } else {
                return $259(__$ctx);
            }
        } else if (__t === 'popup') {
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
                return $259(__$ctx);
            }
        } else {
            return $259(__$ctx);
        }
    }
    function $137(__$ctx) {
        var __t = $$block;
        if (__t === 'lang-switcher') {
            if ($$elem === 'lang') {
                if (!($$elemMods.selected != 'yes') === false) {
                    if (!!$$mods.selected === false) {
                        var _$2uctx = __$ctx.ctx, _$2ulang = __$ctx.ctx._lang.lang, _$2uGlob = __$ctx['i-global'];
                        return {
                            href: _$2uctx.url || __$ctx['i-services'].serviceUrl('tune') + (_$2uGlob['secret-key'] ? '/api/lang/v1.1/save.xml?intl=' + _$2ulang + (_$2uGlob.retpath ? '&retpath=' + encodeURIComponent(_$2uGlob.retpath) : '') + '&sk=' + _$2uGlob['secret-key'] : '/lang/'),
                            role: 'button',
                            tabindex: 0
                        };
                        return;
                    } else {
                        return $172(__$ctx);
                    }
                } else {
                    return $172(__$ctx);
                }
            } else {
                return $172(__$ctx);
            }
        } else if (__t === 'link') {
            return $149(__$ctx);
        } else {
            return $172(__$ctx);
        }
    }
    function $149(__$ctx) {
        if (!($$mods && $$mods.pseudo === 'yes') === false) {
            if (!!$$elem === false) {
                if (!!__$ctx.ctx.url === false) {
                    var _$2qdisabled = (__$ctx.ctx.mods || {}).disabled === 'yes', _$2qa = {
                            role: 'button',
                            tabindex: 0
                        };
                    if (_$2qdisabled) {
                        _$2qa['aria-disabled'] = true;
                        delete _$2qa.tabindex;
                    } else {
                        undefined;
                    }
                    return _$2qa;
                    return;
                } else {
                    return $158(__$ctx);
                }
            } else {
                return $158(__$ctx);
            }
        } else {
            return $158(__$ctx);
        }
    }
    function $158(__$ctx) {
        if (!(__$ctx['__$anflg12'] !== true) === false) {
            if (!($$mods && $$mods.disabled === 'yes') === false) {
                if (!!$$elem === false) {
                    var __r0, __r1;
                    var _$2mattrs = ('', __r0 = __$ctx['__$anflg12'], __$ctx['__$anflg12'] = true, __r1 = $149(__$ctx), __$ctx['__$anflg12'] = __r0, '', __r1) || {};
                    _$2mattrs.tabindex = -1;
                    _$2mattrs['aria-disabled'] = true;
                    return _$2mattrs;
                    return;
                } else {
                    return $167(__$ctx);
                }
            } else {
                return $167(__$ctx);
            }
        } else {
            return $167(__$ctx);
        }
    }
    function $167(__$ctx) {
        if (!!$$elem === false) {
            return $169(__$ctx);
        } else {
            return $172(__$ctx);
        }
    }
    function $169(__$ctx) {
        var _$2lctx = __$ctx.ctx, _$2lattrs = {};
        [
            'title',
            'target',
            'id',
            'tabindex'
        ].forEach(function (param) {
            if (_$2lctx.hasOwnProperty(param)) {
                _$2lattrs[param] = String(_$2lctx[param]);
            } else {
                undefined;
            }
        });
        if (_$2lctx.url !== null && typeof _$2lctx.url !== 'undefined') {
            if (__$ctx.isSimple(_$2lctx.url)) {
                _$2lattrs.href = String(_$2lctx.url);
            } else {
                var _$2lbuf = [];
                {
                    '';
                    var __r0 = $$mode;
                    $$mode = '';
                    var __r1 = __$ctx._buf;
                    __$ctx._buf = _$2lbuf;
                    var __r2 = __$ctx.ctx;
                    __$ctx.ctx = _$2lctx.url;
                    $366(__$ctx);
                    $$mode = __r0;
                    __$ctx._buf = __r1;
                    __$ctx.ctx = __r2;
                    '';
                }
                undefined;
                _$2lattrs.href = _$2lbuf.join('');
            }
        } else {
            _$2lattrs.role = 'button';
            if (!_$2lattrs.tabindex) {
                _$2lattrs.tabindex = '0';
            } else {
                undefined;
            }
        }
        return _$2lattrs;
        return;
    }
    function $172(__$ctx) {
        if ($$elem === 'item') {
            if (!($$block === 'b-menu-vert' || $$block === 'b-menu-horiz') === false) {
                if (!__$ctx._inDropdownMenu === false) {
                    return { role: 'menuitem' };
                    return;
                } else {
                    return $181(__$ctx);
                }
            } else {
                return $181(__$ctx);
            }
        } else {
            return $181(__$ctx);
        }
    }
    function $181(__$ctx) {
        if (!($$block === 'b-menu-vert' || $$block === 'b-menu-horiz') === false) {
            if (!__$ctx._inDropdownMenu === false) {
                if (!!$$elem === false) {
                    return { role: 'menu' };
                    return;
                } else {
                    return $259(__$ctx);
                }
            } else {
                return $259(__$ctx);
            }
        } else {
            return $259(__$ctx);
        }
    }
    function $192(__$ctx) {
        var __t = $$block;
        if (__t === 'lang-switcher') {
            if ($$elem === 'lang') {
                if (!($$elemMods.selected != 'yes') === false) {
                    if (!!$$mods.selected === false) {
                        return 'a';
                        return;
                    } else {
                        return $201(__$ctx);
                    }
                } else {
                    return $201(__$ctx);
                }
            } else {
                return $259(__$ctx);
            }
        } else if (__t === 'link') {
            if ($$elem === 'inner') {
                return 'span';
                return;
            } else {
                if (!!$$elem === false) {
                    return __$ctx.ctx.url ? 'a' : 'span';
                    return;
                } else {
                    return $259(__$ctx);
                }
            }
        } else if (__t === 'popup') {
            if ($$elem === 'tail') {
                return 'i';
                return;
            } else {
                return $259(__$ctx);
            }
        } else {
            return $259(__$ctx);
        }
    }
    function $201(__$ctx) {
        return 'span';
        return;
    }
    function $219(__$ctx) {
        var __t = $$block;
        if (__t === 'link') {
            if (!($$mods && $$mods.pseudo === 'yes') === false) {
                if (!!$$elem === false) {
                    return true;
                    return;
                } else {
                    return $226(__$ctx);
                }
            } else {
                return $226(__$ctx);
            }
        } else if (__t === 'dropdown-menu' || __t === 'dropdown') {
            if (!!$$elem === false) {
                return true;
                return;
            } else {
                return $259(__$ctx);
            }
        } else {
            return $259(__$ctx);
        }
    }
    function $226(__$ctx) {
        if (!__$ctx.ctx.hasOwnProperty('tabindex') === false) {
            return { origTabindex: String(__$ctx.ctx.tabindex) };
            return;
        } else {
            return $259(__$ctx);
        }
    }
    function $243(__$ctx) {
        var __t = $$block;
        if (__t === 'link') {
            return $244(__$ctx);
        } else if (__t === 'dropdown') {
            if (!!$$elem === false) {
                return [{ mods: { action: 'closed' } }];
                return;
            } else {
                return $259(__$ctx);
            }
        } else {
            return $259(__$ctx);
        }
    }
    function $244(__$ctx) {
        if (!(__$ctx['__$anflg13'] !== true) === false) {
            if (!!$$elem === false) {
                var __r0, __r1;
                var _$2omix = ('', __r0 = __$ctx['__$anflg13'], __$ctx['__$anflg13'] = true, __r1 = $244(__$ctx), __$ctx['__$anflg13'] = __r0, '', __r1) || [];
                _$2omix.push({
                    block: 'i-pressed-controller',
                    js: true
                });
                return _$2omix;
                return;
            } else {
                return $259(__$ctx);
            }
        } else {
            return $259(__$ctx);
        }
    }
    function $259(__$ctx) {
        if ($$block === 'popup') {
            if (!($$mode === '' && __$ctx._popupDefaults) === false) {
                delete __$ctx._popupDefaults;
                applyc(__$ctx);
                undefined;
                return;
            } else {
                return $265(__$ctx);
            }
        } else {
            return $265(__$ctx);
        }
    }
    function $265(__$ctx) {
        var __t = $$mode;
        if (__t === 'service-url') {
            if ($$block === 'i-services') {
                return $267(__$ctx);
            } else {
                return $544(__$ctx);
            }
        } else if (__t === 'content') {
            var __t = $$block;
            if (__t === 'i-geodata') {
                var __t = $$elem;
                if (__t === 'region-parent') {
                    return __$ctx._userRegion.parent;
                    return;
                } else if (__t === 'region-name') {
                    return __$ctx._userRegion.name;
                    return;
                } else if (__t === 'region-short-ename') {
                    return __$ctx._userRegion['short_ename'];
                    return;
                } else if (__t === 'region-ename') {
                    return __$ctx._userRegion.ename;
                    return;
                } else if (__t === 'region-lang') {
                    return __$ctx._userRegion.lang;
                    return;
                } else if (__t === 'region-id') {
                    return __$ctx._userRegion.id;
                    return;
                } else {
                    return $422(__$ctx);
                }
            } else if (__t === 'i-ua') {
                return $410(__$ctx);
            } else {
                return $422(__$ctx);
            }
        } else if (__t === 'mix') {
            if ($$block === 'b-page') {
                return $424(__$ctx);
            } else {
                return $439(__$ctx);
            }
        } else if (__t === 'attrs') {
            if ($$block === 'b-page') {
                var __t = $$elem;
                if (__t === 'root') {
                    return { lang: __$ctx['i-global'].lang || 'ru' };
                    return;
                } else if (__t === 'js') {
                    return __$ctx.ctx.url ? { src: __$ctx.ctx.url } : {};
                    return;
                } else if (__t === 'css') {
                    if (!__$ctx.ctx.url === false) {
                        return {
                            rel: 'stylesheet',
                            href: __$ctx.ctx.url
                        };
                        return;
                    } else {
                        return $456(__$ctx);
                    }
                } else if (__t === 'meta') {
                    return __$ctx.ctx.attrs;
                    return;
                } else {
                    return $456(__$ctx);
                }
            } else {
                return $456(__$ctx);
            }
        } else if (__t === 'regions') {
            if ($$block === 'i-geodata') {
                return $387(__$ctx);
            } else {
                return $544(__$ctx);
            }
        } else if (__t === 'bem') {
            var __t = $$block;
            if (__t === 'b-page') {
                var __t = $$elem;
                if (__t === 'js' || __t === 'css' || __t === 'meta' || __t === 'link' || __t === 'head' || __t === 'root') {
                    return false;
                    return;
                } else {
                    return $507(__$ctx);
                }
            } else if (__t === 'i-ua') {
                if (!!$$elem === false) {
                    return false;
                    return;
                } else {
                    return $507(__$ctx);
                }
            } else {
                return $507(__$ctx);
            }
        } else if (__t === 'cls') {
            if ($$block === 'b-page') {
                if ($$elem === 'root') {
                    return 'i-ua_js_no i-ua_css_standard';
                    return;
                } else {
                    return $515(__$ctx);
                }
            } else {
                return $515(__$ctx);
            }
        } else if (__t === 'env') {
            if ($$block === 'i-global') {
                return $517(__$ctx);
            } else {
                return $544(__$ctx);
            }
        } else if (__t === 'js-params') {
            if ($$block === 'b-page') {
                return $525(__$ctx);
            } else {
                return $544(__$ctx);
            }
        } else if (__t === 'public-params') {
            if ($$block === 'i-global') {
                return $533(__$ctx);
            } else {
                return $544(__$ctx);
            }
        } else if (__t === '') {
            return $366(__$ctx);
        } else if (__t === 'jsAttr') {
            return undefined;
            return;
        } else if (__t === 'default') {
            var __t = $$block;
            if (__t === 'i-services') {
                var __t = $$elem;
                if (__t === 'url') {
                    __$ctx._buf.push(__$ctx['i-services'].serviceUrl(__$ctx.ctx.id, __$ctx.ctx.region));
                    return;
                } else if (__t === 'name') {
                    __$ctx._buf.push(__$ctx['i-services'].serviceName(__$ctx.ctx.id));
                    return;
                } else {
                    if (!$$elem === false) {
                        return '';
                        return;
                    } else {
                        return $544(__$ctx);
                    }
                }
            } else if (__t === 'i-geodata') {
                return $285(__$ctx);
            } else if (__t === 'b-page') {
                var __t = $$elem;
                if (__t === 'css') {
                    if (!__$ctx.ctx.ie === false) {
                        if (!__$ctx.ctx.url === false) {
                            if (!!__$ctx._IE === false) {
                                {
                                    '';
                                    var __r0 = $$mode;
                                    $$mode = '';
                                    var __r1 = __$ctx._IE;
                                    __$ctx._IE = true;
                                    var __r2 = __$ctx.ctx;
                                    __$ctx.ctx = [
                                        '<!--[if gte IE 9]>',
                                        __$ctx.ctx,
                                        '<![endif]-->'
                                    ];
                                    $366(__$ctx);
                                    $$mode = __r0;
                                    __$ctx._IE = __r1;
                                    __$ctx.ctx = __r2;
                                    '';
                                }
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
                } else if (__t === 'icon') {
                    return $315(__$ctx);
                } else {
                    return $316(__$ctx);
                }
            } else if (__t === 'i-bem') {
                if ($$elem === 'i18n') {
                    return $326(__$ctx);
                } else {
                    return $544(__$ctx);
                }
            } else if (__t === 'i-global') {
                return $329(__$ctx);
            } else if (__t === 'i-jquery') {
                if ($$elem === 'core') {
                    if (!(__$ctx['__$anflg1'] !== true) === false) {
                        return $359(__$ctx);
                    } else {
                        return $544(__$ctx);
                    }
                } else {
                    return $544(__$ctx);
                }
            } else {
                return $544(__$ctx);
            }
        } else if (__t === 'js') {
            return undefined;
            return;
        } else if (__t === 'tag') {
            var __t = $$block;
            if (__t === 'b-page') {
                var __t = $$elem;
                if (__t === 'js') {
                    return 'script';
                    return;
                } else if (__t === 'css') {
                    if (!__$ctx.ctx.url === false) {
                        return 'link';
                        return;
                    } else {
                        return 'style';
                        return;
                    }
                } else if (__t === 'meta') {
                    return 'meta';
                    return;
                } else if (__t === 'link') {
                    return 'link';
                    return;
                } else if (__t === 'body') {
                    return 'body';
                    return;
                } else if (__t === 'head') {
                    return 'head';
                    return;
                } else if (__t === 'root') {
                    return 'html';
                    return;
                } else {
                    return $484(__$ctx);
                }
            } else if (__t === 'i-ua') {
                if (!!$$elem === false) {
                    return 'script';
                    return;
                } else {
                    return $484(__$ctx);
                }
            } else {
                return $484(__$ctx);
            }
        } else {
            return $544(__$ctx);
        }
    }
    function $267(__$ctx) {
        if (!!$$elem === false) {
            return $269(__$ctx);
        } else {
            return $544(__$ctx);
        }
    }
    function $269(__$ctx) {
        return {
            serp: function (reg) {
                if (reg === 'ru') {
                    return 'http://yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'http://yandex.ua';
                } else {
                    undefined;
                }
                if (reg === 'by') {
                    return 'http://yandex.by';
                } else {
                    undefined;
                }
                if (reg === 'kz') {
                    return 'http://yandex.kz';
                } else {
                    undefined;
                }
                if (reg === 'com') {
                    return 'http://www.yandex.com';
                } else {
                    undefined;
                }
                if (reg === 'tr') {
                    return 'http://www.yandex.com.tr';
                } else {
                    undefined;
                }
                return 'http://yandex.ru';
            },
            mail: function (reg) {
                if (reg === 'ru') {
                    return 'https://mail.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'https://mail.yandex.ua';
                } else {
                    undefined;
                }
                if (reg === 'by') {
                    return 'https://mail.yandex.by';
                } else {
                    undefined;
                }
                if (reg === 'kz') {
                    return 'https://mail.yandex.kz';
                } else {
                    undefined;
                }
                if (reg === 'com') {
                    return 'https://mail.yandex.com';
                } else {
                    undefined;
                }
                if (reg === 'tr') {
                    return 'https://mail.yandex.com.tr';
                } else {
                    undefined;
                }
                return 'https://mail.yandex.ru';
            },
            pdd: function (reg) {
                if (reg === 'ru') {
                    return 'http://pdd.yandex.ru';
                } else {
                    undefined;
                }
                return 'http://pdd.yandex.ru';
            },
            zakladki: function (reg) {
                if (reg === 'ru') {
                    return 'http://zakladki.yandex.ru';
                } else {
                    undefined;
                }
                return 'http://zakladki.yandex.ru';
            },
            fotki: function (reg) {
                if (reg === 'ru') {
                    return 'http://fotki.yandex.ru';
                } else {
                    undefined;
                }
                return 'http://fotki.yandex.ru';
            },
            moikrug: function (reg) {
                if (reg === 'ru') {
                    return 'http://moikrug.ru';
                } else {
                    undefined;
                }
                return 'http://moikrug.ru';
            },
            direct: function (reg) {
                if (reg === 'ru') {
                    return 'http://direct.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'http://direct.yandex.ua';
                } else {
                    undefined;
                }
                if (reg === 'by') {
                    return 'http://direct.yandex.by';
                } else {
                    undefined;
                }
                if (reg === 'kz') {
                    return 'http://direct.yandex.kz';
                } else {
                    undefined;
                }
                if (reg === 'com') {
                    return 'http://direct.yandex.com';
                } else {
                    undefined;
                }
                return 'http://direct.yandex.ru';
            },
            money: function (reg) {
                if (reg === 'ru') {
                    return 'https://money.yandex.ru';
                } else {
                    undefined;
                }
                return 'https://money.yandex.ru';
            },
            lenta: function (reg) {
                if (reg === 'ru') {
                    return 'http://lenta.yandex.ru';
                } else {
                    undefined;
                }
                return 'http://lenta.yandex.ru';
            },
            market: function (reg) {
                if (reg === 'ru') {
                    return 'http://market.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'http://market.yandex.ua';
                } else {
                    undefined;
                }
                if (reg === 'by') {
                    return 'http://market.yandex.by';
                } else {
                    undefined;
                }
                if (reg === 'kz') {
                    return 'http://market.yandex.kz';
                } else {
                    undefined;
                }
                return 'http://market.yandex.ru';
            },
            'market.advertising': function (reg) {
                if (reg === 'ru') {
                    return 'http://welcome.advertising.yandex.ru/market/';
                } else {
                    undefined;
                }
                return 'http://welcome.advertising.yandex.ru/market/';
            },
            wow: function (reg) {
                if (reg === 'ru') {
                    return 'http://my.ya.ru';
                } else {
                    undefined;
                }
                return 'http://my.ya.ru';
            },
            tv: function (reg) {
                if (reg === 'ru') {
                    return 'http://tv.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'http://tv.yandex.ua';
                } else {
                    undefined;
                }
                if (reg === 'by') {
                    return 'http://tv.yandex.by';
                } else {
                    undefined;
                }
                if (reg === 'kz') {
                    return 'http://tv.yandex.kz';
                } else {
                    undefined;
                }
                return 'http://tv.yandex.ru';
            },
            afisha: function (reg) {
                if (reg === 'ru') {
                    return 'http://afisha.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'http://afisha.yandex.ua';
                } else {
                    undefined;
                }
                if (reg === 'by') {
                    return 'http://afisha.yandex.by';
                } else {
                    undefined;
                }
                if (reg === 'kz') {
                    return 'http://afisha.yandex.kz';
                } else {
                    undefined;
                }
                if (reg === 'tr') {
                    return 'http://afis.yandex.com.tr';
                } else {
                    undefined;
                }
                return 'http://afisha.yandex.ru';
            },
            calendar: function (reg) {
                if (reg === 'ru') {
                    return 'http://calendar.yandex.ru';
                } else {
                    undefined;
                }
                return 'http://calendar.yandex.ru';
            },
            nahodki: function (reg) {
                if (reg === 'ru') {
                    return 'http://nahodki.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'http://nahodki.yandex.ua';
                } else {
                    undefined;
                }
                if (reg === 'kz') {
                    return 'http://nahodki.yandex.kz';
                } else {
                    undefined;
                }
                return 'http://nahodki.yandex.ru';
            },
            weather: function (reg) {
                if (reg === 'ru') {
                    return 'http://pogoda.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'http://pogoda.yandex.ua';
                } else {
                    undefined;
                }
                if (reg === 'by') {
                    return 'http://pogoda.yandex.by';
                } else {
                    undefined;
                }
                if (reg === 'kz') {
                    return 'http://pogoda.yandex.kz';
                } else {
                    undefined;
                }
                if (reg === 'tr') {
                    return 'http://hava.yandex.com.tr';
                } else {
                    undefined;
                }
                return 'http://pogoda.yandex.ru';
            },
            kuda: function (reg) {
                if (reg === 'ru') {
                    return 'http://kuda.yandex.ru';
                } else {
                    undefined;
                }
                return 'http://kuda.yandex.ru';
            },
            video: function (reg) {
                if (reg === 'ru') {
                    return 'http://www.yandex.ru/video/';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'http://www.yandex.ua/video/';
                } else {
                    undefined;
                }
                if (reg === 'by') {
                    return 'http://www.yandex.by/video/';
                } else {
                    undefined;
                }
                if (reg === 'kz') {
                    return 'http://www.yandex.kz/video/';
                } else {
                    undefined;
                }
                if (reg === 'com') {
                    return 'http://www.yandex.com/video/';
                } else {
                    undefined;
                }
                if (reg === 'tr') {
                    return 'http://www.yandex.com.tr/video/';
                } else {
                    undefined;
                }
                return 'http://yandex.ru/video/';
            },
            'video-com': function (reg) {
                if (reg === 'ru') {
                    return 'http://video.yandex.com';
                } else {
                    undefined;
                }
                return 'http://video.yandex.com';
            },
            music: function (reg) {
                if (reg === 'ru') {
                    return 'http://music.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'http://music.yandex.ua';
                } else {
                    undefined;
                }
                if (reg === 'by') {
                    return 'http://music.yandex.by';
                } else {
                    undefined;
                }
                if (reg === 'kz') {
                    return 'http://music.yandex.kz';
                } else {
                    undefined;
                }
                return 'http://music.yandex.ru';
            },
            'music-partner': function (reg) {
                if (reg === 'ru') {
                    return 'http://music-partner.yandex.ru';
                } else {
                    undefined;
                }
                return 'http://music-partner.yandex.ru';
            },
            www: function (reg) {
                if (reg === 'ru') {
                    return 'http://www.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'http://www.yandex.ua';
                } else {
                    undefined;
                }
                if (reg === 'com') {
                    return 'http://www.yandex.com';
                } else {
                    undefined;
                }
                if (reg === 'by') {
                    return 'http://www.yandex.by';
                } else {
                    undefined;
                }
                if (reg === 'kz') {
                    return 'http://www.yandex.kz';
                } else {
                    undefined;
                }
                if (reg === 'tr') {
                    return 'http://www.yandex.com.tr';
                } else {
                    undefined;
                }
                return 'http://www.yandex.ru';
            },
            search: function (reg) {
                if (reg === 'ru') {
                    return 'http://yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'http://yandex.ua';
                } else {
                    undefined;
                }
                if (reg === 'com') {
                    return 'http://yandex.com';
                } else {
                    undefined;
                }
                if (reg === 'by') {
                    return 'http://yandex.by';
                } else {
                    undefined;
                }
                if (reg === 'kz') {
                    return 'http://yandex.kz';
                } else {
                    undefined;
                }
                if (reg === 'tr') {
                    return 'http://yandex.com.tr';
                } else {
                    undefined;
                }
                return 'http://yandex.ru';
            },
            review: function (reg) {
                if (reg === 'ru') {
                    return 'http://yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'http://yandex.ua';
                } else {
                    undefined;
                }
                if (reg === 'by') {
                    return 'http://yandex.by';
                } else {
                    undefined;
                }
                if (reg === 'kz') {
                    return 'http://yandex.kz';
                } else {
                    undefined;
                }
                if (reg === 'com') {
                    return 'http://www.yandex.com';
                } else {
                    undefined;
                }
                if (reg === 'tr') {
                    return 'http://www.yandex.com.tr';
                } else {
                    undefined;
                }
                return 'http://yandex.ru';
            },
            fresh: function (reg) {
                if (reg === 'ru') {
                    return 'http://yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'http://yandex.ua';
                } else {
                    undefined;
                }
                if (reg === 'by') {
                    return 'http://yandex.by';
                } else {
                    undefined;
                }
                if (reg === 'kz') {
                    return 'http://yandex.kz';
                } else {
                    undefined;
                }
                if (reg === 'com') {
                    return 'http://www.yandex.com';
                } else {
                    undefined;
                }
                if (reg === 'tr') {
                    return 'http://www.yandex.com.tr';
                } else {
                    undefined;
                }
                return 'http://yandex.ru';
            },
            news: function (reg) {
                if (reg === 'ru') {
                    return 'http://news.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'http://news.yandex.ua';
                } else {
                    undefined;
                }
                if (reg === 'by') {
                    return 'http://news.yandex.by';
                } else {
                    undefined;
                }
                if (reg === 'kz') {
                    return 'http://news.yandex.kz';
                } else {
                    undefined;
                }
                if (reg === 'tr') {
                    return 'http://haber.yandex.com.tr';
                } else {
                    undefined;
                }
                return 'http://news.yandex.ru';
            },
            'news-com': function (reg) {
                if (reg === 'ru') {
                    return 'http://news.yandex.com';
                } else {
                    undefined;
                }
                return 'http://news.yandex.com';
            },
            maps: function (reg) {
                if (reg === 'ru') {
                    return 'http://maps.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'http://maps.yandex.ua';
                } else {
                    undefined;
                }
                if (reg === 'tr') {
                    return 'http://harita.yandex.com.tr';
                } else {
                    undefined;
                }
                return 'http://maps.yandex.ru';
            },
            'maps-com': function (reg) {
                if (reg === 'ru') {
                    return 'http://maps.yandex.com';
                } else {
                    undefined;
                }
                return 'http://maps.yandex.com';
            },
            probki: function (reg) {
                if (reg === 'ru') {
                    return 'http://probki.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'http://probki.yandex.ua';
                } else {
                    undefined;
                }
                return 'http://probki.yandex.ru';
            },
            slovari: function (reg) {
                if (reg === 'ru') {
                    return 'http://slovari.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'http://slovari.yandex.ua';
                } else {
                    undefined;
                }
                if (reg === 'by') {
                    return 'http://slovari.yandex.by';
                } else {
                    undefined;
                }
                if (reg === 'kz') {
                    return 'http://slovari.yandex.kz';
                } else {
                    undefined;
                }
                return 'http://slovari.yandex.ru';
            },
            images: function (reg) {
                if (reg === 'ru') {
                    return 'http://www.yandex.ru/images/';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'http://www.yandex.ua/images/';
                } else {
                    undefined;
                }
                if (reg === 'by') {
                    return 'http://www.yandex.by/images/';
                } else {
                    undefined;
                }
                if (reg === 'kz') {
                    return 'http://www.yandex.kz/images/';
                } else {
                    undefined;
                }
                if (reg === 'com') {
                    return 'http://www.yandex.com/images/';
                } else {
                    undefined;
                }
                if (reg === 'tr') {
                    return 'http://www.yandex.com.tr/gorsel/';
                } else {
                    undefined;
                }
                return 'http://yandex.ru/images/';
            },
            'images-com': function () {
                return 'http://www.yandex.com/images/';
            },
            blogs: function (reg) {
                if (reg === 'ru') {
                    return 'http://blogs.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'http://blogs.yandex.ua';
                } else {
                    undefined;
                }
                if (reg === 'by') {
                    return 'http://blogs.yandex.by';
                } else {
                    undefined;
                }
                if (reg === 'kz') {
                    return 'http://blogs.yandex.kz';
                } else {
                    undefined;
                }
                return 'http://blogs.yandex.ru';
            },
            auto: function (reg) {
                if (reg === 'ua') {
                    return 'http://auto.yandex.ua';
                } else {
                    undefined;
                }
                if (reg === 'ru') {
                    return 'http://auto.yandex.ru';
                } else {
                    undefined;
                }
                return 'http://auto.yandex.ru';
            },
            adresa: function (reg) {
                if (reg === 'ru') {
                    return 'http://adresa.yandex.ru';
                } else {
                    undefined;
                }
                return 'http://adresa.yandex.ru';
            },
            games: function (reg) {
                if (reg === 'ru') {
                    return 'http://games.yandex.ru';
                } else {
                    undefined;
                }
                return 'http://games.yandex.ru';
            },
            yaca: function (reg) {
                if (reg === 'ru') {
                    return 'http://yaca.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'http://yaca.yandex.ua';
                } else {
                    undefined;
                }
                if (reg === 'by') {
                    return 'http://yaca.yandex.by';
                } else {
                    undefined;
                }
                return 'http://yaca.yandex.ru';
            },
            rasp: function (reg) {
                if (reg === 'ru') {
                    return 'http://rasp.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'http://rasp.yandex.ua';
                } else {
                    undefined;
                }
                if (reg === 'by') {
                    return 'http://rasp.yandex.by';
                } else {
                    undefined;
                }
                if (reg === 'kz') {
                    return 'http://rasp.yandex.kz';
                } else {
                    undefined;
                }
                if (reg === 'tr') {
                    return 'http://seferler.yandex.com.tr';
                } else {
                    undefined;
                }
                return 'http://rasp.yandex.ru';
            },
            avia: function (reg) {
                if (reg === 'ru') {
                    return 'http://ticket.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'http://ticket.yandex.ua';
                } else {
                    undefined;
                }
                return 'http://ticket.yandex.ru';
            },
            ticket: function (reg) {
                return 'http://ticket.yandex.ru';
            },
            pvo: function (reg) {
                if (reg === 'ru') {
                    return 'http://ask.yandex.ru';
                } else {
                    undefined;
                }
                return 'http://ask.yandex.ru';
            },
            online: function (reg) {
                if (reg === 'ru') {
                    return 'http://online.yandex.ru';
                } else {
                    undefined;
                }
                return 'http://online.yandex.ru';
            },
            books: function (reg) {
                if (reg === 'ru') {
                    return 'http://books.yandex.ru';
                } else {
                    undefined;
                }
                return 'http://books.yandex.ru';
            },
            site: function (reg) {
                if (reg === 'ru') {
                    return 'http://site.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'http://site.yandex.ua';
                } else {
                    undefined;
                }
                if (reg === 'tr') {
                    return 'http://ozel.yandex.com.tr';
                } else {
                    undefined;
                }
                return 'http://site.yandex.ru';
            },
            bar: function (reg) {
                if (reg === 'ru') {
                    return 'http://bar.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'http://bar.yandex.ua';
                } else {
                    undefined;
                }
                if (reg === 'by') {
                    return 'http://bar.yandex.by';
                } else {
                    undefined;
                }
                if (reg === 'kz') {
                    return 'http://bar.yandex.kz';
                } else {
                    undefined;
                }
                if (reg === 'tr') {
                    return 'http://bar.yandex.com.tr';
                } else {
                    undefined;
                }
                return 'http://bar.yandex.ru';
            },
            widgets: function (reg) {
                if (reg === 'ru') {
                    return 'http://widgets.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'http://widgets.yandex.ua';
                } else {
                    undefined;
                }
                if (reg === 'by') {
                    return 'http://widgets.yandex.by';
                } else {
                    undefined;
                }
                if (reg === 'kz') {
                    return 'http://widgets.yandex.kz';
                } else {
                    undefined;
                }
                if (reg === 'tr') {
                    return 'http://widgets.yandex.com.tr';
                } else {
                    undefined;
                }
                return 'http://widgets.yandex.ru';
            },
            wdgt: function (reg) {
                if (reg === 'ru') {
                    return 'http://wdgt.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'http://wdgt.yandex.ua';
                } else {
                    undefined;
                }
                if (reg === 'by') {
                    return 'http://wdgt.yandex.by';
                } else {
                    undefined;
                }
                if (reg === 'kz') {
                    return 'http://wdgt.yandex.kz';
                } else {
                    undefined;
                }
                if (reg === 'tr') {
                    return 'http://wdgt.yandex.com.tr';
                } else {
                    undefined;
                }
                return 'http://wdgt.yandex.ru';
            },
            interests: function (reg) {
                if (reg === 'ru') {
                    return 'http://interests.yandex.ru';
                } else {
                    undefined;
                }
                return 'http://interests.yandex.ru';
            },
            kraski: function (reg) {
                if (reg === 'ru') {
                    return 'http://kraski.yandex.ru';
                } else {
                    undefined;
                }
                return 'http://kraski.yandex.ru';
            },
            local: function (reg) {
                if (reg === 'ru') {
                    return 'http://local.yandex.ru';
                } else {
                    undefined;
                }
                return 'http://local.yandex.ru';
            },
            museums: function (reg) {
                if (reg === 'ru') {
                    return 'http://18.yandex.ru';
                } else {
                    undefined;
                }
                return 'http://18.yandex.ru';
            },
            collection: function (reg) {
                if (reg === 'ru') {
                    return 'http://collection.yandex.ru';
                } else {
                    undefined;
                }
                return 'http://collection.yandex.ru';
            },
            company: function (reg) {
                if (reg === 'ru') {
                    return 'http://company.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'com') {
                    return 'http://company.yandex.com';
                } else {
                    undefined;
                }
                if (reg === 'tr') {
                    return 'http://company.yandex.com.tr';
                } else {
                    undefined;
                }
                return 'http://company.yandex.ru';
            },
            tests: function (reg) {
                if (reg === 'ru') {
                    return 'http://tests.yandex.ru';
                } else {
                    undefined;
                }
                return 'http://tests.yandex.ru';
            },
            referats: function (reg) {
                if (reg === 'ru') {
                    return 'http://referats.yandex.ru';
                } else {
                    undefined;
                }
                return 'http://referats.yandex.ru';
            },
            terms: function (reg) {
                if (reg === 'ru') {
                    return 'http://terms.yandex.ru';
                } else {
                    undefined;
                }
                return 'http://terms.yandex.ru';
            },
            tune: function (reg) {
                if (reg === 'ru') {
                    return 'http://tune.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'http://tune.yandex.ua';
                } else {
                    undefined;
                }
                if (reg === 'com') {
                    return 'http://tune.yandex.com';
                } else {
                    undefined;
                }
                if (reg === 'by') {
                    return 'http://tune.yandex.by';
                } else {
                    undefined;
                }
                if (reg === 'kz') {
                    return 'http://tune.yandex.kz';
                } else {
                    undefined;
                }
                if (reg === 'tr') {
                    return 'http://tune.yandex.com.tr';
                } else {
                    undefined;
                }
                return 'http://tune.yandex.ru';
            },
            api: function (reg) {
                if (reg === 'ru') {
                    return 'http://api.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'com') {
                    return 'http://api.yandex.com';
                } else {
                    undefined;
                }
                return 'http://api.yandex.ru';
            },
            punto: function (reg) {
                if (reg === 'ru') {
                    return 'http://punto.yandex.ru';
                } else {
                    undefined;
                }
                return 'http://punto.yandex.ru';
            },
            opinion: function (reg) {
                if (reg === 'ru') {
                    return 'http://opinion.yandex.ru';
                } else {
                    undefined;
                }
                return 'http://opinion.yandex.ru';
            },
            perevod: function (reg) {
                if (reg === 'ru') {
                    return 'http://perevod.yandex.ru';
                } else {
                    undefined;
                }
                return 'http://perevod.yandex.ru';
            },
            rabota: function (reg) {
                if (reg === 'ru') {
                    return 'http://rabota.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'http://rabota.yandex.ua';
                } else {
                    undefined;
                }
                if (reg === 'by') {
                    return 'http://rabota.yandex.by';
                } else {
                    undefined;
                }
                if (reg === 'kz') {
                    return 'http://rabota.yandex.kz';
                } else {
                    undefined;
                }
                return 'http://rabota.yandex.ru';
            },
            sprav: function (reg) {
                if (reg === 'ru') {
                    return 'http://sprav.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'http://sprav.yandex.ua';
                } else {
                    undefined;
                }
                if (reg === 'by') {
                    return 'http://sprav.yandex.by';
                } else {
                    undefined;
                }
                if (reg === 'kz') {
                    return 'http://sprav.yandex.kz';
                } else {
                    undefined;
                }
                if (reg === 'tr') {
                    return 'http://rehber.yandex.com.tr';
                } else {
                    undefined;
                }
                return 'http://sprav.yandex.ru';
            },
            realty: function (reg) {
                if (reg === 'ru') {
                    return 'http://realty.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'http://realty.yandex.ua';
                } else {
                    undefined;
                }
                if (reg === 'by') {
                    return 'http://realty.yandex.by';
                } else {
                    undefined;
                }
                if (reg === 'kz') {
                    return 'http://realty.yandex.kz';
                } else {
                    undefined;
                }
                return 'http://realty.yandex.ru';
            },
            advertising: function (reg) {
                if (reg === 'ru') {
                    return 'http://advertising.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'http://advertising.yandex.ua';
                } else {
                    undefined;
                }
                if (reg === 'com') {
                    return 'http://advertising.yandex.com';
                } else {
                    undefined;
                }
                if (reg === 'by') {
                    return 'http://advertising.yandex.by';
                } else {
                    undefined;
                }
                if (reg === 'kz') {
                    return 'http://advertising.yandex.kz';
                } else {
                    undefined;
                }
                return 'http://advertising.yandex.ru';
            },
            expert: function (reg) {
                if (reg === 'ru') {
                    return 'http://expert.yandex.ru';
                } else {
                    undefined;
                }
                return 'http://expert.yandex.ru';
            },
            'direct.market': function (reg) {
                if (reg === 'ru') {
                    return 'http://partner.market.yandex.ru/yandex.market/';
                } else {
                    undefined;
                }
                return 'http://partner.market.yandex.ru/yandex.market/';
            },
            ba: function (reg) {
                if (reg === 'ru') {
                    return 'http://ba.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'http://ba.yandex.ua';
                } else {
                    undefined;
                }
                if (reg === 'com') {
                    return 'http://ba.yandex.com';
                } else {
                    undefined;
                }
                if (reg === 'by') {
                    return 'http://ba.yandex.by';
                } else {
                    undefined;
                }
                if (reg === 'kz') {
                    return 'http://ba.yandex.kz';
                } else {
                    undefined;
                }
                return 'http://ba.yandex.ru';
            },
            bayan: function (reg) {
                if (reg === 'ru') {
                    return 'http://bayan.yandex.ru';
                } else {
                    undefined;
                }
                return 'http://bayan.yandex.ru';
            },
            partners: function (reg) {
                if (reg === 'ru') {
                    return 'http://partner.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'http://partner.yandex.ua';
                } else {
                    undefined;
                }
                if (reg === 'com') {
                    return 'http://partner.yandex.com';
                } else {
                    undefined;
                }
                if (reg === 'by') {
                    return 'http://partner.yandex.by';
                } else {
                    undefined;
                }
                if (reg === 'kz') {
                    return 'http://partner.yandex.kz';
                } else {
                    undefined;
                }
                return 'http://partner.yandex.ru';
            },
            metrika: function (reg) {
                if (reg === 'ru') {
                    return 'https://metrika.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'https://metrika.yandex.ua';
                } else {
                    undefined;
                }
                if (reg === 'com') {
                    return 'https://metrica.yandex.com';
                } else {
                    undefined;
                }
                if (reg === 'by') {
                    return 'https://metrika.yandex.by';
                } else {
                    undefined;
                }
                if (reg === 'kz') {
                    return 'https://metrika.yandex.kz';
                } else {
                    undefined;
                }
                if (reg === 'tr') {
                    return 'https://metrica.yandex.com.tr';
                } else {
                    undefined;
                }
                return 'https://metrika.yandex.ru';
            },
            balance: function (reg) {
                if (reg === 'ru') {
                    return 'http://balance.yandex.ru';
                } else {
                    undefined;
                }
                return 'http://balance.yandex.ru';
            },
            wordstat: function (reg) {
                if (reg === 'ru') {
                    return 'http://wordstat.yandex.ru';
                } else {
                    undefined;
                }
                return 'http://wordstat.yandex.ru';
            },
            webmaster: function (reg) {
                if (reg === 'ru') {
                    return 'http://webmaster.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'http://webmaster.yandex.ua';
                } else {
                    undefined;
                }
                if (reg === 'com') {
                    return 'http://webmaster.yandex.com';
                } else {
                    undefined;
                }
                if (reg === 'tr') {
                    return 'http://webmaster.yandex.com.tr';
                } else {
                    undefined;
                }
                return 'http://webmaster.yandex.ru';
            },
            server: function (reg) {
                if (reg === 'ru') {
                    return 'http://company.yandex.ru/technology/server/';
                } else {
                    undefined;
                }
                return 'http://company.yandex.ru/technology/server/';
            },
            stat: function (reg) {
                if (reg === 'ru') {
                    return 'http://stat.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'http://stat.yandex.ua';
                } else {
                    undefined;
                }
                if (reg === 'by') {
                    return 'http://stat.yandex.by';
                } else {
                    undefined;
                }
                return 'http://stat.yandex.ru';
            },
            mobile: function (reg) {
                if (reg === 'ru') {
                    return 'http://mobile.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'http://mobile.yandex.ua';
                } else {
                    undefined;
                }
                if (reg === 'tr') {
                    return 'http://mobil.yandex.com.tr';
                } else {
                    undefined;
                }
                return 'http://mobile.yandex.ru';
            },
            help: function (reg) {
                if (reg === 'ru') {
                    return 'http://help.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'http://help.yandex.ua';
                } else {
                    undefined;
                }
                if (reg === 'com') {
                    return 'http://help.yandex.com';
                } else {
                    undefined;
                }
                if (reg === 'tr') {
                    return 'http://yardim.yandex.com.tr';
                } else {
                    undefined;
                }
                return 'http://help.yandex.ru';
            },
            feedback: function (reg) {
                if (reg === 'ru') {
                    return 'http://feedback.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'http://feedback.yandex.ua';
                } else {
                    undefined;
                }
                if (reg === 'com') {
                    return 'http://feedback.yandex.com';
                } else {
                    undefined;
                }
                if (reg === 'by') {
                    return 'http://feedback.yandex.by';
                } else {
                    undefined;
                }
                if (reg === 'kz') {
                    return 'http://feedback.yandex.kz';
                } else {
                    undefined;
                }
                if (reg === 'tr') {
                    return 'http://contact.yandex.com.tr';
                } else {
                    undefined;
                }
                return 'http://feedback.yandex.ru';
            },
            feedback2: function (reg) {
                if (reg === 'ru') {
                    return 'http://feedback2.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'http://feedback2.yandex.ua';
                } else {
                    undefined;
                }
                if (reg === 'com') {
                    return 'http://feedback2.yandex.com';
                } else {
                    undefined;
                }
                if (reg === 'by') {
                    return 'http://feedback2.yandex.by';
                } else {
                    undefined;
                }
                if (reg === 'kz') {
                    return 'http://feedback2.yandex.kz';
                } else {
                    undefined;
                }
                if (reg === 'tr') {
                    return 'http://contact2.yandex.com.tr';
                } else {
                    undefined;
                }
                return 'http://feedback2.yandex.ru';
            },
            start: function (reg) {
                if (reg === 'ru') {
                    return 'http://help.yandex.ru/start/';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'http://help.yandex.ua/start/';
                } else {
                    undefined;
                }
                if (reg === 'com') {
                    return 'http://help.yandex.com/start/';
                } else {
                    undefined;
                }
                if (reg === 'tr') {
                    return 'http://yardim.yandex.com.tr/start';
                } else {
                    undefined;
                }
                return 'http://help.yandex.ru/start/';
            },
            cityday: function (reg) {
                if (reg === 'ru') {
                    return 'http://cityday.yandex.ru';
                } else {
                    undefined;
                }
                return 'http://cityday.yandex.ru';
            },
            openid: function (reg) {
                if (reg === 'ru') {
                    return 'http://openid.yandex.ru';
                } else {
                    undefined;
                }
                return 'http://openid.yandex.ru';
            },
            oauth: function (reg) {
                if (reg === 'ru') {
                    return 'http://oauth.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'com') {
                    return 'http://oauth.yandex.com';
                } else {
                    undefined;
                }
                return 'http://oauth.yandex.ru';
            },
            nano: function (reg) {
                if (reg === 'ru') {
                    return 'http://nano.yandex.ru';
                } else {
                    undefined;
                }
                return 'http://nano.yandex.ru';
            },
            partnersearch: function (reg) {
                if (reg === 'ru') {
                    return 'http://yandex.ru';
                } else {
                    undefined;
                }
                return 'http://yandex.ru';
            },
            city: function (reg) {
                if (reg === 'ru') {
                    return 'http://city.yandex.ru';
                } else {
                    undefined;
                }
                return 'http://city.yandex.ru';
            },
            goroda: function (reg) {
                if (reg === 'ru') {
                    return 'http://goroda.yandex.ru';
                } else {
                    undefined;
                }
                return 'http://goroda.yandex.ru';
            },
            toster: function (reg) {
                if (reg === 'ru') {
                    return 'http://toster.yandex.ru';
                } else {
                    undefined;
                }
                return 'http://toster.yandex.ru';
            },
            love: function (reg) {
                if (reg === 'ru') {
                    return 'http://love.yandex.ru';
                } else {
                    undefined;
                }
                return 'http://love.yandex.ru';
            },
            rk: function (reg) {
                if (reg === 'ru') {
                    return 'http://rk.yandex.ru';
                } else {
                    undefined;
                }
                return 'http://rk.yandex.ru';
            },
            lost: function (reg) {
                if (reg === 'ru') {
                    return 'http://lost.yandex.ru';
                } else {
                    undefined;
                }
                return 'http://lost.yandex.ru';
            },
            soft: function (reg) {
                if (reg === 'ru') {
                    return 'http://soft.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'http://soft.yandex.ua';
                } else {
                    undefined;
                }
                if (reg === 'tr') {
                    return 'http://soft.yandex.com.tr';
                } else {
                    undefined;
                }
                return 'http://soft.yandex.ru';
            },
            passport: function (reg) {
                if (reg === 'ru') {
                    return 'https://passport.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'com') {
                    return 'https://passport.yandex.com';
                } else {
                    undefined;
                }
                if (reg === 'tr') {
                    return 'https://passport.yandex.com.tr';
                } else {
                    undefined;
                }
                return 'https://passport.yandex.ru';
            },
            'maps-wiki': function (reg) {
                if (reg === 'ru') {
                    return 'http://nk.yandex.ru';
                } else {
                    undefined;
                }
                return 'http://nk.yandex.ru';
            },
            '404': function (reg) {
                if (reg === 'ru') {
                    return 'http://404.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'http://404.yandex.ua';
                } else {
                    undefined;
                }
                if (reg === 'com') {
                    return 'http://404.yandex.com';
                } else {
                    undefined;
                }
                if (reg === 'by') {
                    return 'http://404.yandex.by';
                } else {
                    undefined;
                }
                if (reg === 'kz') {
                    return 'http://404.yandex.kz';
                } else {
                    undefined;
                }
                if (reg === 'tr') {
                    return 'http://404.yandex.com.tr';
                } else {
                    undefined;
                }
                return 'http://404.yandex.ru';
            },
            i: function (reg) {
                if (reg === 'ru') {
                    return 'http://i.yandex.ru';
                } else {
                    undefined;
                }
                return 'http://i.yandex.ru';
            },
            desktop: function (reg) {
                if (reg === 'ru') {
                    return 'http://desktop.yandex.ru';
                } else {
                    undefined;
                }
                return 'http://desktop.yandex.ru';
            },
            ff: function (reg) {
                if (reg === 'ru') {
                    return 'http://ff.yandex.ru';
                } else {
                    undefined;
                }
                return 'http://ff.yandex.ru';
            },
            fx: function (reg) {
                if (reg === 'ru') {
                    return 'http://fx.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'http://fx.yandex.ua';
                } else {
                    undefined;
                }
                if (reg === 'tr') {
                    return 'http://fx.yandex.com.tr';
                } else {
                    undefined;
                }
                return 'http://fx.yandex.ru';
            },
            ie: function (reg) {
                if (reg === 'ru') {
                    return 'http://ie.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'http://ie.yandex.ua';
                } else {
                    undefined;
                }
                if (reg === 'tr') {
                    return 'http://ie.yandex.com.tr';
                } else {
                    undefined;
                }
                return 'http://ie.yandex.ru';
            },
            'bar-ie': function (reg) {
                if (reg === 'ru') {
                    return 'http://bar.yandex.ru/ie';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'http://bar.yandex.ua/ie';
                } else {
                    undefined;
                }
                if (reg === 'com') {
                    return 'http://bar.yandex.com/ie';
                } else {
                    undefined;
                }
                if (reg === 'by') {
                    return 'http://bar.yandex.by/ie';
                } else {
                    undefined;
                }
                if (reg === 'kz') {
                    return 'http://bar.yandex.kz/ie';
                } else {
                    undefined;
                }
                if (reg === 'tr') {
                    return 'http://bar.yandex.com.tr/ie';
                } else {
                    undefined;
                }
                return 'http://bar.yandex.ru/ie';
            },
            'bar-ie9': function (reg) {
                if (reg === 'ru') {
                    return 'http://bar.yandex.ru/ie';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'http://bar.yandex.ua/ie';
                } else {
                    undefined;
                }
                if (reg === 'com') {
                    return 'http://bar.yandex.com/ie';
                } else {
                    undefined;
                }
                if (reg === 'by') {
                    return 'http://bar.yandex.by/ie';
                } else {
                    undefined;
                }
                if (reg === 'kz') {
                    return 'http://bar.yandex.kz/ie';
                } else {
                    undefined;
                }
                if (reg === 'tr') {
                    return 'http://bar.yandex.com.tr/ie';
                } else {
                    undefined;
                }
                return 'http://bar.yandex.ru/ie';
            },
            internet: function (reg) {
                if (reg === 'ru') {
                    return 'http://internet.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'com') {
                    return 'http://internet.yandex.com';
                } else {
                    undefined;
                }
                if (reg === 'tr') {
                    return 'http://internet.yandex.com.tr';
                } else {
                    undefined;
                }
                return 'http://internet.yandex.ru';
            },
            keyboard: function (reg) {
                if (reg === 'ru') {
                    return 'http://www.yandex.ru/index_engl_qwerty.html';
                } else {
                    undefined;
                }
                return 'http://www.yandex.ru/index_engl_qwerty.html';
            },
            metro: function (reg) {
                if (reg === 'ru') {
                    return 'http://metro.yandex.ru';
                } else {
                    undefined;
                }
                return 'http://metro.yandex.ru';
            },
            pulse: function (reg) {
                if (reg === 'ru') {
                    return 'http://blogs.yandex.ru/pulse';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'http://blogs.yandex.ua/pulse';
                } else {
                    undefined;
                }
                if (reg === 'by') {
                    return 'http://blogs.yandex.by/pulse';
                } else {
                    undefined;
                }
                if (reg === 'kz') {
                    return 'http://blogs.yandex.kz/pulse';
                } else {
                    undefined;
                }
                return 'http://blogs.yandex.ru/pulse';
            },
            school: function (reg) {
                if (reg === 'ru') {
                    return 'http://school.yandex.ru';
                } else {
                    undefined;
                }
                return 'http://school.yandex.ru';
            },
            so: function (reg) {
                if (reg === 'ru') {
                    return 'http://so.yandex.ru';
                } else {
                    undefined;
                }
                return 'http://so.yandex.ru';
            },
            time: function (reg) {
                if (reg === 'ru') {
                    return 'http://time.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'http://time.yandex.ua';
                } else {
                    undefined;
                }
                if (reg === 'com') {
                    return 'http://time.yandex.com';
                } else {
                    undefined;
                }
                if (reg === 'by') {
                    return 'http://time.yandex.by';
                } else {
                    undefined;
                }
                if (reg === 'kz') {
                    return 'http://time.yandex.kz';
                } else {
                    undefined;
                }
                if (reg === 'tr') {
                    return 'http://saat.yandex.com.tr';
                } else {
                    undefined;
                }
                return 'http://time.yandex.ru';
            },
            xmlsearch: function (reg) {
                if (reg === 'ru') {
                    return 'http://xml.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'http://xml.yandex.ua';
                } else {
                    undefined;
                }
                if (reg === 'com') {
                    return 'http://xml.yandex.com';
                } else {
                    undefined;
                }
                if (reg === 'by') {
                    return 'http://xml.yandex.by';
                } else {
                    undefined;
                }
                if (reg === 'kz') {
                    return 'http://xml.yandex.kz';
                } else {
                    undefined;
                }
                if (reg === 'tr') {
                    return 'http://xml.yandex.com.tr';
                } else {
                    undefined;
                }
                return 'http://xml.yandex.ru';
            },
            catalogwdgt: function (reg) {
                if (reg === 'ru') {
                    return 'http://www.yandex.ru/catalog';
                } else {
                    undefined;
                }
                return 'http://www.yandex.ru/catalog';
            },
            opera: function (reg) {
                if (reg === 'ru') {
                    return 'http://opera.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'tr') {
                    return 'http://opera.yandex.com.tr';
                } else {
                    undefined;
                }
                return 'http://opera.yandex.ru';
            },
            uslugi: function (reg) {
                if (reg === 'ru') {
                    return 'http://uslugi.yandex.ru';
                } else {
                    undefined;
                }
                return 'http://uslugi.yandex.ru';
            },
            backapv: function (reg) {
                if (reg === 'ru') {
                    return 'http://backapv.yandex.ru';
                } else {
                    undefined;
                }
                return 'http://backapv.yandex.ru';
            },
            chrome: function (reg) {
                if (reg === 'ru') {
                    return 'http://chrome.yandex.ru';
                } else {
                    undefined;
                }
                return 'http://chrome.yandex.ru';
            },
            browser: function (reg) {
                if (reg === 'ru') {
                    return 'http://browser.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'http://browser.yandex.ua';
                } else {
                    undefined;
                }
                if (reg === 'com') {
                    return 'http://browser.yandex.com';
                } else {
                    undefined;
                }
                if (reg === 'by') {
                    return 'http://browser.yandex.by';
                } else {
                    undefined;
                }
                if (reg === 'kz') {
                    return 'http://browser.yandex.kz';
                } else {
                    undefined;
                }
                if (reg === 'tr') {
                    return 'http://browser.yandex.com.tr';
                } else {
                    undefined;
                }
                return 'http://browser.yandex.ru';
            },
            aziada: function (reg) {
                if (reg === 'ru') {
                    return 'http://aziada2011.yandex.kz';
                } else {
                    undefined;
                }
                return 'http://aziada2011.yandex.kz';
            },
            translate: function (reg) {
                if (reg === 'ru') {
                    return 'http://translate.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'http://translate.yandex.ua';
                } else {
                    undefined;
                }
                if (reg === 'com') {
                    return 'http://translate.yandex.com';
                } else {
                    undefined;
                }
                if (reg === 'by') {
                    return 'http://translate.yandex.by';
                } else {
                    undefined;
                }
                if (reg === 'kz') {
                    return 'http://translate.yandex.kz';
                } else {
                    undefined;
                }
                if (reg === 'tr') {
                    return 'http://ceviri.yandex.com.tr';
                } else {
                    undefined;
                }
                return 'http://translate.yandex.ru';
            },
            subs: function (reg) {
                if (reg === 'ru') {
                    return 'http://subs.yandex.ru';
                } else {
                    undefined;
                }
                return 'http://subs.yandex.ru';
            },
            all: function (reg) {
                if (reg === 'ru') {
                    return 'http://www.yandex.ru/all';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'http://www.yandex.ua/all';
                } else {
                    undefined;
                }
                if (reg === 'com') {
                    return 'http://www.yandex.com/all';
                } else {
                    undefined;
                }
                if (reg === 'by') {
                    return 'http://www.yandex.by/all';
                } else {
                    undefined;
                }
                if (reg === 'kz') {
                    return 'http://www.yandex.kz/all';
                } else {
                    undefined;
                }
                if (reg === 'tr') {
                    return 'http://www.yandex.com.tr/all';
                } else {
                    undefined;
                }
                return 'http://www.yandex.ru/all';
            },
            large: function (reg) {
                if (reg === 'ru') {
                    return 'http://large.yandex.ru';
                } else {
                    undefined;
                }
                return 'http://large.yandex.ru';
            },
            geocontext: function (reg) {
                if (reg === 'ru') {
                    return 'http://geocontext.yandex.ru';
                } else {
                    undefined;
                }
                return 'http://geocontext.yandex.ru';
            },
            root: function (reg) {
                if (reg === 'ru') {
                    return 'http://root.yandex.ru';
                } else {
                    undefined;
                }
                return 'http://root.yandex.ru';
            },
            yamb: function (reg) {
                if (reg === 'ru') {
                    return 'https://yamb.yandex.ru';
                } else {
                    undefined;
                }
                return 'https://yamb.yandex.ru';
            },
            legal: function (reg) {
                if (reg === 'ru') {
                    return 'http://legal.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'http://legal.yandex.ua';
                } else {
                    undefined;
                }
                if (reg === 'com') {
                    return 'http://legal.yandex.com';
                } else {
                    undefined;
                }
                if (reg === 'tr') {
                    return 'http://legal.yandex.com.tr';
                } else {
                    undefined;
                }
                return 'http://legal.yandex.ru';
            },
            taxi: function (reg) {
                if (reg === 'ru') {
                    return 'https://taxi.yandex.ru';
                } else {
                    undefined;
                }
                return 'https://taxi.yandex.ru';
            },
            social: function (reg) {
                if (reg === 'ru') {
                    return 'https://social.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'https://social.yandex.ua';
                } else {
                    undefined;
                }
                if (reg === 'com') {
                    return 'https://social.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'by') {
                    return 'https://social.yandex.by';
                } else {
                    undefined;
                }
                if (reg === 'kz') {
                    return 'https://social.yandex.kz';
                } else {
                    undefined;
                }
                if (reg === 'tr') {
                    return 'https://social.yandex.com.tr';
                } else {
                    undefined;
                }
                return 'https://social.yandex.ru';
            },
            contest: function (reg) {
                if (reg === 'ru') {
                    return 'http://contest.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'com') {
                    return 'http://contest.yandex.com';
                } else {
                    undefined;
                }
                return 'http://contest.yandex.ru';
            },
            peoplesearch: function (reg) {
                if (reg === 'ru') {
                    return 'http://people.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'http://people.yandex.ua';
                } else {
                    undefined;
                }
                return 'http://people.yandex.ru';
            },
            disk: function (reg) {
                if (reg === 'ru') {
                    return 'https://disk.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'com') {
                    return 'https://disk.yandex.com';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'https://disk.yandex.ua';
                } else {
                    undefined;
                }
                if (reg === 'kz') {
                    return 'https://disk.yandex.kz';
                } else {
                    undefined;
                }
                if (reg === 'by') {
                    return 'https://disk.yandex.by';
                } else {
                    undefined;
                }
                if (reg === 'tr') {
                    return 'https://disk.yandex.com.tr';
                } else {
                    undefined;
                }
                return 'https://disk.yandex.ru';
            },
            sport: function (reg) {
                if (reg === 'ru') {
                    return 'http://sport.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'by') {
                    return 'http://sport.yandex.by';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'http://sport.yandex.ua';
                } else {
                    undefined;
                }
                if (reg === 'kz') {
                    return 'http://sport.yandex.kz';
                } else {
                    undefined;
                }
                if (reg === 'tr') {
                    return 'http://spor.yandex.com.tr';
                } else {
                    undefined;
                }
                return 'http://sport.yandex.ru';
            },
            literacy: function (reg) {
                if (reg === 'ru') {
                    return 'http://literacy.yandex.ru';
                } else {
                    undefined;
                }
                return 'http://literacy.yandex.ru';
            },
            appsearch: function (reg) {
                if (reg === 'ru') {
                    return '//appsearch.yandex.ru';
                } else {
                    undefined;
                }
                return '//appsearch.yandex.ru';
            },
            ege: function (reg) {
                if (reg === 'ru') {
                    return '//ege.yandex.ru';
                } else {
                    undefined;
                }
                return '//ege.yandex.ru';
            },
            vno: function (reg) {
                if (reg === 'ru') {
                    return '//zno.yandex.ua';
                } else {
                    undefined;
                }
                return '//zno.yandex.ua';
            },
            notifications: function (reg) {
                if (reg === 'ru') {
                    return 'https://notifications.yandex.ru';
                } else {
                    undefined;
                }
                if (reg === 'ua') {
                    return 'https://notifications.yandex.ua';
                } else {
                    undefined;
                }
                if (reg === 'by') {
                    return 'https://notifications.yandex.by';
                } else {
                    undefined;
                }
                if (reg === 'kz') {
                    return 'https://notifications.yandex.kz';
                } else {
                    undefined;
                }
                if (reg === 'com') {
                    return 'https://notifications.yandex.com';
                } else {
                    undefined;
                }
                if (reg === 'tr') {
                    return 'https://notifications.yandex.com.tr';
                } else {
                    undefined;
                }
                return 'https://notifications.yandex.ru';
            }
        };
        return;
    }
    function $285(__$ctx) {
        if (!!__$ctx._userRegion === false) {
            if (!!$$elem === false) {
                {
                    '';
                    var __r0 = __$ctx._userRegion;
                    __$ctx._userRegion = __$ctx['i-geodata'].getRegion(__$ctx.ctx.region);
                    $285(__$ctx);
                    __$ctx._userRegion = __r0;
                    '';
                }
                undefined;
                return;
            } else {
                return $544(__$ctx);
            }
        } else {
            return $544(__$ctx);
        }
    }
    function $303(__$ctx) {
        if (!__$ctx.ctx.url === false) {
            if (!!__$ctx._notIE === false) {
                if (!!__$ctx.ctx.ie === false) {
                    {
                        '';
                        var __r0 = $$mode;
                        $$mode = '';
                        var __r1 = __$ctx._notIE;
                        __$ctx._notIE = true;
                        var __r2 = __$ctx.ctx;
                        __$ctx.ctx = [__$ctx.ctx];
                        $366(__$ctx);
                        $$mode = __r0;
                        __$ctx._notIE = __r1;
                        __$ctx.ctx = __r2;
                        '';
                    }
                    return;
                } else {
                    return $316(__$ctx);
                }
            } else {
                return $316(__$ctx);
            }
        } else {
            return $316(__$ctx);
        }
    }
    function $315(__$ctx) {
        {
            '';
            var __r0 = $$mode;
            $$mode = '';
            var __r1 = __$ctx.ctx;
            __$ctx.ctx = [
                __$ctx.ctx.src16 && {
                    elem: 'link',
                    attrs: {
                        rel: 'shortcut icon',
                        href: __$ctx.ctx.src16
                    }
                },
                __$ctx.ctx.src152 && {
                    elem: 'link',
                    attrs: {
                        rel: 'apple-touch-icon-precomposed',
                        sizes: '152x152',
                        href: __$ctx.ctx.src152
                    }
                },
                __$ctx.ctx.src144 && {
                    elem: 'link',
                    attrs: {
                        rel: 'apple-touch-icon-precomposed',
                        sizes: '144x144',
                        href: __$ctx.ctx.src144
                    }
                },
                __$ctx.ctx.src120 && {
                    elem: 'link',
                    attrs: {
                        rel: 'apple-touch-icon-precomposed',
                        sizes: '120x120',
                        href: __$ctx.ctx.src120
                    }
                },
                __$ctx.ctx.src114 && {
                    elem: 'link',
                    attrs: {
                        rel: 'apple-touch-icon-precomposed',
                        sizes: '114x114',
                        href: __$ctx.ctx.src114
                    }
                },
                __$ctx.ctx.src76 && {
                    elem: 'link',
                    attrs: {
                        rel: 'apple-touch-icon-precomposed',
                        sizes: '76x76',
                        href: __$ctx.ctx.src76
                    }
                },
                __$ctx.ctx.src72 && {
                    elem: 'link',
                    attrs: {
                        rel: 'apple-touch-icon-precomposed',
                        sizes: '72x72',
                        href: __$ctx.ctx.src72
                    }
                },
                __$ctx.ctx.src57 && {
                    elem: 'link',
                    attrs: {
                        rel: 'apple-touch-icon-precomposed',
                        href: __$ctx.ctx.src57
                    }
                }
            ];
            $366(__$ctx);
            $$mode = __r0;
            __$ctx.ctx = __r1;
            '';
        }
        return;
    }
    function $316(__$ctx) {
        if (!(__$ctx['__$anflg3'] !== true) === false) {
            if (!!$$elem === false) {
                return $319(__$ctx);
            } else {
                return $544(__$ctx);
            }
        } else {
            return $544(__$ctx);
        }
    }
    function $319(__$ctx) {
        var __r1, __r2;
        __$ctx._buf.push('<!DOCTYPE html>');
        {
            '';
            var __r0 = __$ctx['__$anflg3'];
            __$ctx['__$anflg3'] = true;
            {
                '';
                var __r3 = __$ctx.ctx;
                __$ctx.ctx = {
                    elem: 'root',
                    content: [
                        {
                            elem: 'head',
                            content: [
                                {
                                    elem: 'meta',
                                    attrs: { charset: 'utf-8' }
                                },
                                {
                                    tag: 'title',
                                    content: __$ctx.ctx.title
                                },
                                {
                                    elem: 'meta',
                                    attrs: {
                                        name: 'viewport',
                                        content: __$ctx.ctx.zoom ? 'width=device-width,initial-scale=1' : 'width=device-width,maximum-scale=1,initial-scale=1,user-scalable=0'
                                    }
                                },
                                {
                                    elem: 'meta',
                                    attrs: {
                                        name: 'format-detection',
                                        content: 'telephone=no'
                                    }
                                },
                                {
                                    elem: 'link',
                                    attrs: {
                                        name: 'apple-mobile-web-app-capable',
                                        content: 'yes'
                                    }
                                },
                                {
                                    block: 'i-ua',
                                    js: true
                                },
                                __$ctx.ctx.head
                            ]
                        },
                        {
                            elem: 'body',
                            mix: [
                                __$ctx.ctx,
                                {
                                    block: 'i-ua',
                                    js: true
                                }
                            ].concat(('', __r1 = $$mode, $$mode = 'mix', __r2 = $424(__$ctx), $$mode = __r1, '', __r2) || [], __$ctx.ctx.mix || []),
                            content: __$ctx.ctx.content
                        }
                    ]
                };
                var __r4 = $$mode;
                $$mode = '';
                $366(__$ctx);
                __$ctx.ctx = __r3;
                $$mode = __r4;
                '';
            }
            __$ctx['__$anflg3'] = __r0;
            '';
        }
        return;
    }
    function $326(__$ctx) {
        var __r0, __r1, __r2, __r3;
        if (!__$ctx.ctx) {
            return '';
        } else {
            undefined;
        }
        var _$10ctx = __$ctx.ctx, _$10keyset = _$10ctx.keyset, _$10key = _$10ctx.key, _$10params = _$10ctx.params || {};
        if (!(_$10keyset || _$10key)) {
            return '';
        } else {
            undefined;
        }
        if (_$10ctx.content) {
            var _$10cnt;
            _$10params.content = (_$10cnt = [], '', __r0 = __$ctx._buf, __$ctx._buf = _$10cnt, __r1 = $$mode, $$mode = '', __r2 = __$ctx.ctx, __$ctx.ctx = _$10ctx.content, __r3 = $366(__$ctx), __$ctx._buf = __r0, $$mode = __r1, __$ctx.ctx = __r2, '', __r3, _$10cnt.join(''));
        } else {
            undefined;
        }
        __$ctx._buf.push(BEM.I18N(_$10keyset, _$10key, _$10params));
        return;
    }
    function $329(__$ctx) {
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
                    return $353(__$ctx);
                } else {
                    return $544(__$ctx);
                }
            }
        }
    }
    function $353(__$ctx) {
        var _$mparams = __$ctx.ctx.params || {}, _$miGlobal = __$ctx['i-global'], _$misTldChanged = _$mparams.tld && _$mparams.tld !== _$miGlobal.tld, _$mtld, _$mxYaDomain, _$myaDomain;
        if (_$misTldChanged) {
            _$mtld = _$mparams.tld;
            _$mxYaDomain = _$mtld === 'tr' ? 'yandex.com.tr' : 'yandex.' + _$mtld;
            _$myaDomain = [
                'ua',
                'by',
                'kz'
            ].indexOf(_$mtld) != -1 ? 'yandex.ru' : _$mxYaDomain;
            _$miGlobal['content-region'] = _$mtld;
            _$miGlobal['click-host'] = '//clck.' + _$myaDomain;
            _$miGlobal['passport-host'] = 'https://passport.' + _$myaDomain;
            _$miGlobal['pass-host'] = '//pass.' + _$mxYaDomain;
            _$miGlobal['social-host'] = '//social.' + _$mxYaDomain;
            _$miGlobal['export-host'] = '//export.' + _$mxYaDomain;
        } else {
            undefined;
        }
        for (var _$mp in _$mparams) {
            _$miGlobal[_$mp] = _$mparams[_$mp];
        }
        return;
    }
    function $359(__$ctx) {
        var __r0, __r4, __r1, __r2, __r3;
        return '', __r0 = __$ctx['__$anflg1'], __$ctx['__$anflg1'] = true, __r4 = ('', __r1 = __$ctx.ctx, __$ctx.ctx = {
            block: 'b-page',
            elem: 'js',
            url: 'http://yastatic.net/jquery/1.8.3/jquery.min.js'
        }, __r2 = $$mode, $$mode = '', __r3 = $366(__$ctx), __$ctx.ctx = __r1, $$mode = __r2, '', __r3), __$ctx['__$anflg1'] = __r0, '', __r4;
        return;
    }
    function $366(__$ctx) {
        if (!__$ctx['i-global'] === false) {
            if (!!__$ctx['i-services'] === false) {
                return $369(__$ctx);
            } else {
                return $372(__$ctx);
            }
        } else {
            return $372(__$ctx);
        }
    }
    function $369(__$ctx) {
        var __r0, __r1, __r2;
        var _$1z_ctx = __$ctx['i-services'] = {}, _$1zparams = __$ctx['i-global'];
        _$1z_ctx._data = ('', __r0 = $$block, $$block = 'i-services', __r1 = $$mode, $$mode = 'service-url', __r2 = $267(__$ctx), $$block = __r0, $$mode = __r1, '', __r2);
        _$1z_ctx.serviceName = function (id) {
            return BEM.I18N('i-services', id || _$1zparams.id);
        };
        _$1z_ctx.serviceUrl = function (id, region) {
            id || (id = _$1zparams.id);
            return _$1z_ctx._data[id](region || _$1zparams['content-region']);
        };
        applyc(__$ctx);
        undefined;
        return;
    }
    function $372(__$ctx) {
        if (!(__$ctx['__$anflg5'] !== true) === false) {
            if (!__$ctx['i-global'] === false) {
                if (!!__$ctx['i-geodata'] === false) {
                    return $376(__$ctx);
                } else {
                    return $381(__$ctx);
                }
            } else {
                return $381(__$ctx);
            }
        } else {
            return $381(__$ctx);
        }
    }
    function $376(__$ctx) {
        var __r0, __r1, __r2;
        var _$1q_ctx = __$ctx['i-geodata'] = {}, _$1qiGlobal = __$ctx['i-global'], _$1q_this = __$ctx;
        _$1q_ctx._data = ('', __r0 = $$block, $$block = 'i-geodata', __r1 = $$mode, $$mode = 'regions', __r2 = $387(__$ctx), $$block = __r0, $$mode = __r1, '', __r2);
        _$1q_ctx._getRegionLang = function (region) {
            return region.lang || _$1q_ctx._getRegionLang(_$1q_ctx._data[region.parent]);
        };
        _$1q_ctx.getRegion = function (region) {
            if (!region) {
                region = { short_ename: _$1qiGlobal['user-region'] || _$1qiGlobal['content-region'] };
            } else {
                undefined;
            }
            var id;
            if (!region.id) {
                var regId, field;
                for (regId in _$1q_ctx._data) {
                    for (field in region) {
                        if (region.hasOwnProperty(field) && region[field] === _$1q_ctx._data[regId][field] && !_$1q_ctx._data[regId].hidden) {
                            id = _$1q_ctx._data[regId].id;
                            break;
                        } else {
                            undefined;
                        }
                        if (id) {
                            break;
                        } else {
                            undefined;
                        }
                    }
                }
            } else {
                id = region.id;
            }
            var reg = _$1q_ctx._data[id];
            if (!reg.lang) {
                reg.lang = _$1q_ctx._getRegionLang(reg);
            } else {
                undefined;
            }
            return reg;
        };
        _$1q_ctx.isRegionIn = function (items, field, region) {
            if (field && !_$1q_this._.isSimple(field) && !region) {
                region = field;
                field = false;
            } else {
                undefined;
            }
            if (!field) {
                field = 'short_ename';
            } else {
                undefined;
            }
            region = _$1q_ctx.getRegion(region);
            for (var i in items) {
                if (items.hasOwnProperty(i) && items[i] == region[field]) {
                    return region;
                } else {
                    undefined;
                }
            }
            if (region.parent) {
                return _$1q_ctx.isRegionIn(items, field, { id: region.parent });
            } else {
                undefined;
            }
            return false;
        };
        {
            '';
            var __r3 = __$ctx['__$anflg5'];
            __$ctx['__$anflg5'] = true;
            $259(__$ctx);
            __$ctx['__$anflg5'] = __r3;
            '';
        }
        undefined;
        return;
    }
    function $381(__$ctx) {
        if (!!__$ctx['i-global'] === false) {
            return $383(__$ctx);
        } else {
            return $544(__$ctx);
        }
    }
    function $383(__$ctx) {
        var __r0, __r1, __r2, __r3, __r4, __r5, __r6;
        var _$kps = {}, _$kes = [
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
            ], _$ke;
        while (_$ke = _$kes.shift()) {
            _$kps[_$ke] = ('', __r0 = $$mode, $$mode = 'default', __r1 = $$block, $$block = 'i-global', __r2 = $$elem, $$elem = _$ke, __r3 = $329(__$ctx), $$mode = __r0, $$block = __r1, $$elem = __r2, '', __r3);
        }
        __$ctx['i-global'] = __$ctx._.extend(_$kps, ('', __r4 = $$mode, $$mode = 'env', __r5 = $$block, $$block = 'i-global', __r6 = $517(__$ctx), $$mode = __r4, $$block = __r5, '', __r6));
        applyc(__$ctx);
        undefined;
        return;
    }
    function $387(__$ctx) {
        if (!!$$elem === false) {
            return $389(__$ctx);
        } else {
            return $544(__$ctx);
        }
    }
    function $389(__$ctx) {
        return {
            '10000': {
                id: '10000',
                lang: 'en',
                ename: 'Earth',
                short_ename: 'com',
                name: '\u0417\u0435\u043C\u043B\u044F',
                parent: 0
            },
            '225': {
                id: '225',
                lang: 'ru',
                ename: 'Russia',
                short_ename: 'ru',
                name: '\u0420\u043E\u0441\u0441\u0438\u044F',
                parent: '10000'
            },
            '213': {
                id: '213',
                ename: 'Moscow',
                short_ename: 'msk',
                name: '\u041C\u043E\u0441\u043A\u0432\u0430',
                parent: '225'
            },
            '9999': {
                id: '9999',
                ename: 'Yandex',
                short_ename: 'yndx',
                name: '\u042F\u043D\u0434\u0435\u043A\u0441',
                parent: '213'
            },
            '187': {
                id: '187',
                lang: 'uk',
                ename: 'Ukraine',
                short_ename: 'ua',
                name: '\u0423\u043A\u0440\u0430\u0438\u043D\u0430',
                parent: '10000'
            },
            '149': {
                id: '149',
                lang: 'be',
                ename: 'Belarus',
                short_ename: 'by',
                name: '\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C',
                parent: '10000'
            },
            '159': {
                id: '159',
                lang: 'kk',
                ename: 'Kazakhstan',
                short_ename: 'kz',
                name: '\u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D',
                parent: '10000'
            },
            '11119': {
                id: '11119',
                lang: 'tt',
                ename: 'Tatarstan',
                short_ename: 'tt',
                name: '\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043D',
                parent: '10000'
            },
            '167': {
                id: '167',
                lang: 'az',
                ename: 'Azerbaijan',
                short_ename: 'az',
                name: '\u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043D',
                parent: '10000'
            },
            '983': {
                id: '983',
                lang: 'tr',
                ename: 'Turkey',
                short_ename: 'tr',
                name: '\u0422\u0443\u0440\u0446\u0438\u044F',
                parent: '10000'
            },
            '20730': {
                id: '20730',
                lang: 'en',
                ename: 'Mars',
                short_ename: 'mars',
                name: '\u041C\u0430\u0440\u0441',
                parent: 0,
                hidden: true
            }
        };
        return;
    }
    function $410(__$ctx) {
        if (!(__$ctx['__$anflg2'] !== true) === false) {
            if (!!$$elem === false) {
                var __r0, __r1;
                var _$jc = ('', __r0 = __$ctx['__$anflg2'], __$ctx['__$anflg2'] = true, __r1 = $410(__$ctx), __$ctx['__$anflg2'] = __r0, '', __r1);
                _$jc += [
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
                return _$jc;
                return;
            } else {
                return $416(__$ctx);
            }
        } else {
            return $416(__$ctx);
        }
    }
    function $416(__$ctx) {
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
            return $422(__$ctx);
        }
    }
    function $422(__$ctx) {
        return __$ctx.ctx.content;
        return;
    }
    function $424(__$ctx) {
        if ($$elem === 'body') {
            return $425(__$ctx);
        } else {
            return $430(__$ctx);
        }
    }
    function $425(__$ctx) {
        if (!!__$ctx.ctx._iGlobal === false) {
            return $427(__$ctx);
        } else {
            return $430(__$ctx);
        }
    }
    function $427(__$ctx) {
        var __r0, __r1, __r2, __r3, __r4, __r5;
        var _$1pmix = ('', __r0 = __$ctx.ctx, __r1 = __r0._iGlobal, __r0._iGlobal = true, __r2 = $425(__$ctx), __r0._iGlobal = __r1, '', __r2), _$1pjsParams = ('', __r3 = $$mode, $$mode = 'js-params', __r4 = $$elem, $$elem = '', __r5 = $525(__$ctx), $$mode = __r3, $$elem = __r4, '', __r5);
        _$1pmix ? _$1pmix.push(_$1pjsParams) : _$1pmix = [_$1pjsParams];
        return _$1pmix;
        return;
    }
    function $430(__$ctx) {
        if (!(__$ctx['__$anflg4'] !== true) === false) {
            if (!!$$elem === false) {
                var __r0, __r1;
                var _$1nmix = ('', __r0 = __$ctx['__$anflg4'], __$ctx['__$anflg4'] = true, __r1 = $424(__$ctx), __$ctx['__$anflg4'] = __r0, '', __r1) || [];
                _$1nmix.push({
                    block: 'i-ua',
                    mods: { interaction: 'yes' },
                    js: true
                });
                return _$1nmix;
                return;
            } else {
                return $439(__$ctx);
            }
        } else {
            return $439(__$ctx);
        }
    }
    function $439(__$ctx) {
        return undefined;
        return;
    }
    function $456(__$ctx) {
        return undefined;
        return;
    }
    function $484(__$ctx) {
        return undefined;
        return;
    }
    function $507(__$ctx) {
        return undefined;
        return;
    }
    function $515(__$ctx) {
        return undefined;
        return;
    }
    function $517(__$ctx) {
        if (!!$$elem === false) {
            return {
                'secret-key': 'secret-key-test',
                retpath: 'retpath'
            };
            return;
        } else {
            return $544(__$ctx);
        }
    }
    function $525(__$ctx) {
        if (!!$$elem === false) {
            return $527(__$ctx);
        } else {
            return $544(__$ctx);
        }
    }
    function $527(__$ctx) {
        var __r0, __r1, __r2, __r3;
        var _$y_this = __$ctx['i-global'], _$yjs = {}, _$yblock = {
                block: 'i-global',
                js: _$yjs
            }, _$ye;
        for (_$ye in _$y_this) {
            if (_$y_this.hasOwnProperty(_$ye) && ('', __r0 = $$mode, $$mode = 'public-params', __r1 = $$block, $$block = 'i-global', __r2 = $$elem, $$elem = _$ye, __r3 = $533(__$ctx), $$mode = __r0, $$block = __r1, $$elem = __r2, '', __r3)) {
                _$yjs[_$ye] = _$y_this[_$ye];
            } else {
                undefined;
            }
        }
        return _$yblock;
        return;
    }
    function $533(__$ctx) {
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
            return $544(__$ctx);
        }
    }
    function $544(__$ctx) {
        if (!__$ctx.ctx === false) {
            if (!__$ctx.ctx.link === false) {
                if (!!__$ctx._.isSimple(__$ctx.ctx) === false) {
                    return $548(__$ctx);
                } else {
                    return $553(__$ctx);
                }
            } else {
                return $553(__$ctx);
            }
        } else {
            return $553(__$ctx);
        }
    }
    function $548(__$ctx) {
        var __r0, __r1;
        function _$6follow() {
            if (this.ctx.link === 'no-follow') {
                return undefined;
            } else {
                undefined;
            }
            var data = this._links[this.ctx.link];
            return '', __r0 = this.ctx, this.ctx = data, __r1 = $1(__$ctx), this.ctx = __r0, '', __r1;
        }
        if (!cache || !__$ctx._cacheLog) {
            return _$6follow.call(__$ctx);
        } else {
            undefined;
        }
        var _$6contents = __$ctx._buf.slice(__$ctx._cachePos).join('');
        __$ctx._cachePos = __$ctx._buf.length;
        __$ctx._cacheLog.push(_$6contents, {
            log: __$ctx._localLog.slice(),
            link: __$ctx.ctx.link
        });
        var _$6res = _$6follow.call(__$ctx);
        __$ctx._cachePos = __$ctx._buf.length;
        return _$6res;
        return;
    }
    function $553(__$ctx) {
        if (!cache === false) {
            if (!__$ctx.ctx === false) {
                if (!__$ctx.ctx.cache === false) {
                    return $557(__$ctx);
                } else {
                    return $562(__$ctx);
                }
            } else {
                return $562(__$ctx);
            }
        } else {
            return $562(__$ctx);
        }
    }
    function $557(__$ctx) {
        var _$5cached;
        function _$5setProperty(obj, key, value) {
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
        if (_$5cached = cache.get(__$ctx.ctx.cache)) {
            var _$5oldLinks = __$ctx._links;
            if (__$ctx.ctx.links) {
                __$ctx._links = __$ctx.ctx.links;
            } else {
                undefined;
            }
            for (var _$5i = 0; _$5i < _$5cached.log.length; _$5i++) {
                if (typeof _$5cached.log[_$5i] === 'string') {
                    __$ctx._buf.push(_$5cached.log[_$5i]);
                    continue;
                } else {
                    undefined;
                }
                var _$5log = _$5cached.log[_$5i], _$5reverseLog;
                _$5reverseLog = _$5log.log.map(function (entry) {
                    return {
                        key: entry[0],
                        value: _$5setProperty(this, entry[0], entry[1])
                    };
                }, __$ctx).reverse();
                {
                    '';
                    var __r0 = __$ctx.ctx, __r1 = __r0.cache;
                    __r0.cache = null;
                    var __r2 = __$ctx._cacheLog;
                    __$ctx._cacheLog = null;
                    var __r3 = __$ctx.ctx, __r4 = __r3.link;
                    __r3.link = _$5log.link;
                    $1(__$ctx);
                    __r0.cache = __r1;
                    __$ctx._cacheLog = __r2;
                    __r3.link = __r4;
                    '';
                }
                undefined;
                _$5reverseLog.forEach(function (entry) {
                    _$5setProperty(this, entry.key, entry.value);
                }, __$ctx);
            }
            __$ctx._links = _$5oldLinks;
            return _$5cached.res;
        } else {
            undefined;
        }
        var _$5cacheLog = [], _$5res;
        {
            '';
            var __r5 = __$ctx.ctx, __r6 = __r5.cache;
            __r5.cache = null;
            var __r7 = __$ctx._cachePos;
            __$ctx._cachePos = __$ctx._buf.length;
            var __r8 = __$ctx._cacheLog;
            __$ctx._cacheLog = _$5cacheLog;
            var __r9 = __$ctx._localLog;
            __$ctx._localLog = [];
            {
                _$5res = $1(__$ctx);
                var _$5tail = __$ctx._buf.slice(__$ctx._cachePos).join('');
                if (_$5tail) {
                    _$5cacheLog.push(_$5tail);
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
            log: _$5cacheLog,
            res: _$5res
        });
        return _$5res;
        return;
    }
    function $562(__$ctx) {
        var __t = $$mode;
        if (__t === 'default') {
            return $564(__$ctx);
        } else if (__t === '') {
            if (!__$ctx._.isSimple(__$ctx.ctx) === false) {
                __$ctx._listLength--;
                var _$3ctx = __$ctx.ctx;
                (_$3ctx && _$3ctx !== true || _$3ctx === 0) && __$ctx._buf.push(_$3ctx);
                return;
            } else {
                if (!!__$ctx.ctx === false) {
                    __$ctx._listLength--;
                    return;
                } else {
                    if (!__$ctx._.isArray(__$ctx.ctx) === false) {
                        return $573(__$ctx);
                    } else {
                        if (!true === false) {
                            return $576(__$ctx);
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
    function $564(__$ctx) {
        var __r13, __r0, __r4, __r5, __r6, __r7, __r8, __r9, __r10, __r11, __r12, __r1, __r14, __r15, __r16, __r17, __r20, __r21, __r22, __r23, __r24, __r25;
        var _$4BEM_ = __$ctx.BEM, _$4v = __$ctx.ctx, _$4buf = __$ctx._buf, _$4tag;
        _$4tag = ('', __r0 = $$mode, $$mode = 'tag', __r1 = $192(__$ctx), $$mode = __r0, '', __r1);
        typeof _$4tag != 'undefined' || (_$4tag = _$4v.tag);
        typeof _$4tag != 'undefined' || (_$4tag = 'div');
        if (_$4tag) {
            var _$4jsParams, _$4js;
            if ($$block && _$4v.js !== false) {
                _$4js = ('', __r4 = $$mode, $$mode = 'js', __r5 = $219(__$ctx), $$mode = __r4, '', __r5);
                _$4js = _$4js ? __$ctx._.extend(_$4v.js, _$4js === true ? {} : _$4js) : _$4v.js === true ? {} : _$4v.js;
                _$4js && ((_$4jsParams = {})[_$4BEM_.INTERNAL.buildClass($$block, _$4v.elem)] = _$4js);
            } else {
                undefined;
            }
            _$4buf.push('<', _$4tag);
            var _$4isBEM = ('', __r6 = $$mode, $$mode = 'bem', __r7 = $259(__$ctx), $$mode = __r6, '', __r7);
            typeof _$4isBEM != 'undefined' || (_$4isBEM = typeof _$4v.bem != 'undefined' ? _$4v.bem : _$4v.block || _$4v.elem);
            var _$4cls = ('', __r8 = $$mode, $$mode = 'cls', __r9 = $259(__$ctx), $$mode = __r8, '', __r9);
            _$4cls || (_$4cls = _$4v.cls);
            var _$4addJSInitClass = _$4v.block && _$4jsParams;
            if (_$4isBEM || _$4cls) {
                _$4buf.push(' class="');
                if (_$4isBEM) {
                    _$4BEM_.INTERNAL.buildClasses($$block, _$4v.elem, _$4v.elemMods || _$4v.mods, _$4buf);
                    var _$4mix = ('', __r10 = $$mode, $$mode = 'mix', __r11 = $243(__$ctx), $$mode = __r10, '', __r11);
                    _$4v.mix && (_$4mix = _$4mix ? _$4mix.concat(_$4v.mix) : _$4v.mix);
                    if (_$4mix) {
                        var _$4visited = {};
                        function _$4visitedKey(block, elem) {
                            return (block || '') + '__' + (elem || '');
                        }
                        _$4visited[_$4visitedKey($$block, $$elem)] = true;
                        if (!__$ctx._.isArray(_$4mix)) {
                            _$4mix = [_$4mix];
                        } else {
                            undefined;
                        }
                        for (var _$4i = 0; _$4i < _$4mix.length; _$4i++) {
                            var _$4mixItem = _$4mix[_$4i];
                            if (!_$4mixItem) {
                                continue;
                            } else {
                                undefined;
                            }
                            var _$4hasItem = _$4mixItem.block || _$4mixItem.elem, _$4block = _$4mixItem.block || _$4mixItem._block || $$block, _$4elem = _$4mixItem.elem || _$4mixItem._elem || $$elem, _$4mods = _$4mixItem.mods || $$mods, _$4elemMods = _$4mixItem.elemMods || {};
                            _$4hasItem && _$4buf.push(' ');
                            _$4BEM_.INTERNAL[_$4hasItem ? 'buildClasses' : 'buildModsClasses'](_$4block, _$4mixItem.elem || _$4mixItem._elem || (_$4mixItem.block ? undefined : $$elem), _$4mixItem.elemMods || _$4mixItem.mods, _$4buf);
                            if (_$4mixItem.js) {
                                (_$4jsParams || (_$4jsParams = {}))[_$4BEM_.INTERNAL.buildClass(_$4block, _$4mixItem.elem)] = _$4mixItem.js === true ? {} : _$4mixItem.js;
                                _$4addJSInitClass || (_$4addJSInitClass = _$4block && !_$4mixItem.elem);
                            } else {
                                undefined;
                            }
                            if (_$4hasItem && !_$4visited[_$4visitedKey(_$4block, _$4elem)]) {
                                _$4visited[_$4visitedKey(_$4block, _$4elem)] = true;
                                var _$4nestedMix = ('', __r12 = $$block, $$block = _$4block, __r13 = $$elem, $$elem = _$4elem, __r14 = $$mods, $$mods = _$4mods, __r15 = $$elemMods, $$elemMods = _$4elemMods, __r16 = $$mode, $$mode = 'mix', __r17 = $243(__$ctx), $$block = __r12, $$elem = __r13, $$mods = __r14, $$elemMods = __r15, $$mode = __r16, '', __r17);
                                if (_$4nestedMix) {
                                    for (var _$4j = 0; _$4j < _$4nestedMix.length; _$4j++) {
                                        var _$4nestedItem = _$4nestedMix[_$4j];
                                        if (!_$4nestedItem.block && !_$4nestedItem.elem || !_$4visited[_$4visitedKey(_$4nestedItem.block, _$4nestedItem.elem)]) {
                                            _$4nestedItem._block = _$4block;
                                            _$4nestedItem._elem = _$4elem;
                                            _$4mix.splice(_$4i + 1, 0, _$4nestedItem);
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
                _$4cls && _$4buf.push(_$4isBEM ? ' ' : '', _$4cls);
                _$4addJSInitClass && _$4buf.push(' i-bem');
                _$4buf.push('"');
            } else {
                undefined;
            }
            if (_$4jsParams) {
                var _$4jsAttr = ('', __r20 = $$mode, $$mode = 'jsAttr', __r21 = $259(__$ctx), $$mode = __r20, '', __r21);
                _$4buf.push(' ', _$4jsAttr || 'data-bem', '="', __$ctx._.attrEscape(JSON.stringify(_$4jsParams)), '"');
            } else {
                undefined;
            }
            var _$4attrs = ('', __r22 = $$mode, $$mode = 'attrs', __r23 = $137(__$ctx), $$mode = __r22, '', __r23);
            _$4attrs = __$ctx._.extend(_$4attrs, _$4v.attrs);
            if (_$4attrs) {
                var _$4name;
                for (_$4name in _$4attrs) {
                    if (_$4attrs[_$4name] === undefined) {
                        continue;
                    } else {
                        undefined;
                    }
                    _$4buf.push(' ', _$4name, '="', __$ctx._.attrEscape(_$4attrs[_$4name]), '"');
                }
            } else {
                undefined;
            }
        } else {
            undefined;
        }
        if (__$ctx._.isShortTag(_$4tag)) {
            _$4buf.push('/>');
        } else {
            _$4tag && _$4buf.push('>');
            var _$4content = ('', __r24 = $$mode, $$mode = 'content', __r25 = $110(__$ctx), $$mode = __r24, '', __r25);
            if (_$4content || _$4content === 0) {
                var _$4isBEM = $$block || $$elem;
                {
                    '';
                    var __r26 = __$ctx._notNewList;
                    __$ctx._notNewList = false;
                    var __r27 = __$ctx.position;
                    __$ctx.position = _$4isBEM ? 1 : __$ctx.position;
                    var __r28 = __$ctx._listLength;
                    __$ctx._listLength = _$4isBEM ? 1 : __$ctx._listLength;
                    var __r29 = __$ctx.ctx;
                    __$ctx.ctx = _$4content;
                    var __r30 = $$mode;
                    $$mode = '';
                    $259(__$ctx);
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
            _$4tag && _$4buf.push('</', _$4tag, '>');
        }
        return;
    }
    function $573(__$ctx) {
        var _$1v = __$ctx.ctx, _$1l = _$1v.length, _$1i = 0, _$1prevPos = __$ctx.position, _$1prevNotNewList = __$ctx._notNewList;
        if (_$1prevNotNewList) {
            __$ctx._listLength += _$1l - 1;
        } else {
            __$ctx.position = 0;
            __$ctx._listLength = _$1l;
        }
        __$ctx._notNewList = true;
        while (_$1i < _$1l) {
            var _$1newCtx = _$1v[_$1i++];
            {
                '';
                var __r0 = __$ctx.ctx;
                __$ctx.ctx = _$1newCtx == null ? '' : _$1newCtx;
                $259(__$ctx);
                __$ctx.ctx = __r0;
                '';
            }
            undefined;
        }
        _$1prevNotNewList || (__$ctx.position = _$1prevPos);
        return;
    }
    function $576(__$ctx) {
        var _$0vBlock = __$ctx.ctx.block, _$0vElem = __$ctx.ctx.elem, _$0block = __$ctx._currBlock || $$block;
        __$ctx.ctx || (__$ctx.ctx = {});
        {
            '';
            var __r0 = $$mode;
            $$mode = 'default';
            var __r1 = __$ctx._links;
            __$ctx._links = __$ctx.ctx.links || __$ctx._links;
            var __r2 = $$block;
            $$block = _$0vBlock || (_$0vElem ? _$0block : undefined);
            var __r3 = __$ctx._currBlock;
            __$ctx._currBlock = _$0vBlock || _$0vElem ? undefined : _$0block;
            var __r4 = $$elem;
            $$elem = __$ctx.ctx.elem;
            var __r5 = $$mods;
            $$mods = (_$0vBlock ? __$ctx.ctx.mods : $$mods) || {};
            var __r6 = $$elemMods;
            $$elemMods = __$ctx.ctx.elemMods || {};
            {
                $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
                $2(__$ctx);
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
    undefined;
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
typeof exports === "undefined" || (exports.BEMHTML = BEMHTML);