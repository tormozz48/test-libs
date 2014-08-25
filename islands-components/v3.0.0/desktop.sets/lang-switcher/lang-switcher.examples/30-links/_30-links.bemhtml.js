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
                    return $94(__$ctx);
                } else {
                    return $286(__$ctx);
                }
            } else {
                return $286(__$ctx);
            }
        } else if (__t === 'content') {
            return $121(__$ctx);
        } else if (__t === 'attrs') {
            return $148(__$ctx);
        } else if (__t === 'tag') {
            return $203(__$ctx);
        } else if (__t === 'js') {
            return $238(__$ctx);
        } else if (__t === 'mix') {
            return $270(__$ctx);
        } else {
            return $286(__$ctx);
        }
    }
    function $2(__$ctx) {
        var __t = $$block;
        if (__t === 'i-jquery') {
            if (!(__$ctx['__$anflg18'] !== true) === false) {
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
                if (!(__$ctx['__$anflg16'] !== true) === false) {
                    if (!__$ctx._withFlags === false) {
                        return $21(__$ctx);
                    } else {
                        return $31(__$ctx);
                    }
                } else {
                    return $31(__$ctx);
                }
            } else if (__t === 'lang') {
                if (!(__$ctx['__$anflg15'] !== true) === false) {
                    return $28(__$ctx);
                } else {
                    return $31(__$ctx);
                }
            } else {
                return $31(__$ctx);
            }
        } else if (__t === 'b-menu-horiz') {
            if ($$elem === 'item') {
                if (!(__$ctx['__$anflg12'] !== true) === false) {
                    if (!$$mods === false) {
                        return $43(__$ctx);
                    } else {
                        return $286(__$ctx);
                    }
                } else {
                    return $286(__$ctx);
                }
            } else {
                return $286(__$ctx);
            }
        } else if (__t === 'dropdown-menu') {
            var __t = $$elem;
            if (__t === 'switcher') {
                if (!(__$ctx['__$anflg11'] !== true) === false) {
                    return $53(__$ctx);
                } else {
                    return $66(__$ctx);
                }
            } else if (__t === 'popup') {
                if (!(__$ctx['__$anflg10'] !== true) === false) {
                    return $58(__$ctx);
                } else {
                    return $66(__$ctx);
                }
            } else if (__t === 'menu') {
                if (!(__$ctx['__$anflg9'] !== true) === false) {
                    return $63(__$ctx);
                } else {
                    return $66(__$ctx);
                }
            } else {
                return $66(__$ctx);
            }
        } else if (__t === 'dropdown') {
            if ($$elem === 'popup') {
                if (!(__$ctx['__$anflg7'] !== true) === false) {
                    return $77(__$ctx);
                } else {
                    return $286(__$ctx);
                }
            } else {
                return $286(__$ctx);
            }
        } else if (__t === 'popup') {
            return $82(__$ctx);
        } else {
            return $286(__$ctx);
        }
    }
    function $6(__$ctx) {
        var __r0, __r4, __r1, __r2, __r3;
        return '', __r0 = __$ctx['__$anflg18'], __$ctx['__$anflg18'] = true, __r4 = ('', __r1 = __$ctx.ctx, __$ctx.ctx = {
            block: 'b-page',
            elem: 'js',
            url: __$ctx.ctx.url || (__$ctx.ctx.protocol ? __$ctx.ctx.protocol + ':' : '') + '//yastatic.net/jquery/' + $$mods.version + '/jquery.min.js'
        }, __r2 = $$mode, $$mode = '', __r3 = $495(__$ctx), __$ctx.ctx = __r1, $$mode = __r2, '', __r3), __$ctx['__$anflg18'] = __r0, '', __r4;
        return;
    }
    function $9(__$ctx) {
        if (!(__$ctx['__$anflg17'] !== true) === false) {
            if (!!$$elem === false) {
                return $12(__$ctx);
            } else {
                return $286(__$ctx);
            }
        } else {
            return $286(__$ctx);
        }
    }
    function $12(__$ctx) {
        var __r0, __r4, __r1, __r2, __r3;
        return '', __r0 = __$ctx['__$anflg17'], __$ctx['__$anflg17'] = true, __r4 = ('', __r1 = __$ctx.ctx, __$ctx.ctx = {
            block: 'b-page',
            elem: 'js',
            url: __$ctx.ctx.url || (__$ctx.ctx.protocol ? __$ctx.ctx.protocol + ':' : '') + '//yastatic.net/jquery/' + $$mods.version + '/jquery.min.js'
        }, __r2 = $$mode, $$mode = '', __r3 = $495(__$ctx), __$ctx.ctx = __r1, $$mode = __r2, '', __r3), __$ctx['__$anflg17'] = __r0, '', __r4;
        return;
    }
    function $21(__$ctx) {
        var __r0, __r1;
        var _$3dflag = ('', __r0 = $$mode, $$mode = 'country-flag', __r1 = $94(__$ctx), $$mode = __r0, '', __r1);
        {
            '';
            var __r2 = __$ctx['__$anflg16'];
            __$ctx['__$anflg16'] = true;
            {
                '';
                var __r3 = __$ctx.ctx;
                __$ctx.ctx = {
                    block: 'country-flag',
                    mods: { s16: _$3dflag },
                    mix: [{
                            block: 'lang-switcher',
                            elem: 'flag'
                        }],
                    alt: ''
                };
                var __r4 = $$mode;
                $$mode = '';
                $495(__$ctx);
                __$ctx.ctx = __r3;
                $$mode = __r4;
                '';
            }
            __$ctx['__$anflg16'] = __r2;
            '';
        }
        undefined;
        return;
    }
    function $28(__$ctx) {
        var _$3clang = __$ctx.ctx.lang, _$3cparams;
        if (_$3clang.code) {
            _$3cparams = { short_ename: _$3clang.code == 'en' ? 'com' : _$3clang.code };
        } else {
            if (_$3clang.langCode) {
                _$3cparams = { lang: _$3clang.langCode };
            } else {
                if (_$3clang.region) {
                    _$3cparams = _$3clang.region;
                } else {
                    undefined;
                }
            }
        }
        var _$3cregion = __$ctx['i-geodata'].getRegion(_$3cparams), _$3cctx = __$ctx.ctx;
        _$3cctx._lang = {
            lang: _$3cregion.lang,
            name: __$ctx.ctx.lang.name
        };
        if (!__$ctx.ctx._isCurrentLang) {
            __$ctx.position = __$ctx.position - 1;
            if (__$ctx._hasLinkToAll && __$ctx.position === __$ctx._listLength - 2) {
                __$ctx.position = __$ctx._listLength - 1;
            } else {
                undefined;
            }
            _$3cctx = {
                block: 'b-menu-vert',
                elem: 'layout-unit',
                content: __$ctx._.extend(__$ctx.ctx, { block: $$block })
            };
        } else {
            undefined;
        }
        {
            '';
            var __r0 = __$ctx['__$anflg15'];
            __$ctx['__$anflg15'] = true;
            {
                '';
                var __r1 = __$ctx.ctx;
                __$ctx.ctx = _$3cctx;
                var __r2 = $$mode;
                $$mode = '';
                $495(__$ctx);
                __$ctx.ctx = __r1;
                $$mode = __r2;
                '';
            }
            __$ctx['__$anflg15'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $31(__$ctx) {
        if (!(__$ctx['__$anflg13'] !== true) === false) {
            if (!!$$elem === false) {
                return $34(__$ctx);
            } else {
                return $286(__$ctx);
            }
        } else {
            return $286(__$ctx);
        }
    }
    function $34(__$ctx) {
        __$ctx._withFlags = !(__$ctx.ctx.mods && __$ctx.ctx.mods.noflags);
        {
            '';
            var __r0 = __$ctx['__$anflg13'];
            __$ctx['__$anflg13'] = true;
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
                $495(__$ctx);
                __$ctx.ctx = __r1;
                $$mode = __r2;
                '';
            }
            __$ctx['__$anflg13'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $43(__$ctx) {
        {
            '';
            var __r0 = __$ctx['__$anflg12'];
            __$ctx['__$anflg12'] = true;
            {
                '';
                var __r1 = $$mode;
                $$mode = '';
                var __r2 = __$ctx.position;
                __$ctx.position = __$ctx.position - 1;
                var __r3 = __$ctx.ctx;
                __$ctx.ctx = {
                    elem: 'layout-unit',
                    content: __$ctx.ctx
                };
                $495(__$ctx);
                $$mode = __r1;
                __$ctx.position = __r2;
                __$ctx.ctx = __r3;
                '';
            }
            __$ctx['__$anflg12'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $53(__$ctx) {
        var _$2uctx = __$ctx.ctx.content;
        _$2uctx.mix = (_$2uctx.mix || []).concat([{
                block: 'dropdown-menu',
                elem: 'switcher'
            }]);
        {
            '';
            var __r0 = __$ctx['__$anflg11'];
            __$ctx['__$anflg11'] = true;
            {
                '';
                var __r1 = __$ctx.ctx;
                __$ctx.ctx = _$2uctx;
                var __r2 = $$mode;
                $$mode = '';
                $495(__$ctx);
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
    function $58(__$ctx) {
        var _$2tctx = __$ctx.ctx;
        {
            '';
            var __r0 = __$ctx['__$anflg10'];
            __$ctx['__$anflg10'] = true;
            {
                '';
                var __r1 = __$ctx.ctx;
                __$ctx.ctx = {
                    block: 'dropdown',
                    elem: 'popup',
                    js: __$ctx.ctx.js,
                    mix: (_$2tctx.mix || []).concat({
                        block: 'dropdown-menu',
                        elem: 'popup',
                        mods: __$ctx._.extend({ size: __$ctx.dropdownMenuSize }, _$2tctx.mods)
                    }),
                    attrs: _$2tctx.attrs,
                    content: {
                        block: 'dropdown-menu',
                        elem: 'menu',
                        title: _$2tctx.menuTitle,
                        type: _$2tctx.type,
                        mods: _$2tctx.menuMods,
                        mix: _$2tctx.menuMix,
                        content: _$2tctx.content
                    }
                };
                var __r2 = $$mode;
                $$mode = '';
                $495(__$ctx);
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
    function $63(__$ctx) {
        var _$2qctx = __$ctx.ctx, _$2qtype = _$2qctx.type || 'vert', _$2qmenuMods = _$2qctx.mods || {};
        _$2qmenuMods.theme || (_$2qmenuMods.theme = 'ffffff');
        {
            '';
            var __r0 = __$ctx['__$anflg9'];
            __$ctx['__$anflg9'] = true;
            {
                '';
                var __r1 = __$ctx.ctx;
                __$ctx.ctx = (__$ctx._inDropdownMenu = true, {
                    block: 'b-menu-' + _$2qtype,
                    mix: (_$2qctx.mix || []).concat({
                        block: 'dropdown-menu',
                        elem: 'menu',
                        mods: _$2qmenuMods
                    }),
                    title: _$2qctx.title,
                    content: _$2qctx.content
                });
                var __r2 = $$mode;
                $$mode = '';
                $495(__$ctx);
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
    function $66(__$ctx) {
        if (!(__$ctx['__$anflg8'] !== true) === false) {
            if (!!$$elem === false) {
                return $69(__$ctx);
            } else {
                return $286(__$ctx);
            }
        } else {
            return $286(__$ctx);
        }
    }
    function $69(__$ctx) {
        var _$2pctx = __$ctx.ctx, _$2pmods = _$2pctx.mods || (_$2pctx.mods = {});
        _$2pmods.theme || (_$2pmods.theme = 'ffffff');
        __$ctx.dropdownMenuSize = _$2pmods.size;
        {
            '';
            var __r0 = __$ctx['__$anflg8'];
            __$ctx['__$anflg8'] = true;
            {
                '';
                var __r1 = __$ctx.ctx;
                __$ctx.ctx = _$2pctx;
                var __r2 = $$mode;
                $$mode = '';
                $495(__$ctx);
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
    function $77(__$ctx) {
        var _$2nctx = __$ctx.ctx, _$2nmix = [{
                    block: 'dropdown',
                    elem: 'popup'
                }];
        _$2nctx.mix && (_$2nmix = _$2nmix.concat(_$2nctx.mix));
        {
            '';
            var __r0 = __$ctx['__$anflg7'];
            __$ctx['__$anflg7'] = true;
            {
                '';
                var __r1 = __$ctx.ctx;
                __$ctx.ctx = {
                    block: 'popup',
                    mix: _$2nmix,
                    mods: _$2nctx.mods,
                    attrs: _$2nctx.attrs,
                    js: _$2nctx.js,
                    content: [
                        { elem: 'tail' },
                        {
                            elem: 'content',
                            content: _$2nctx.content
                        }
                    ]
                };
                var __r2 = $$mode;
                $$mode = '';
                $495(__$ctx);
                __$ctx.ctx = __r1;
                $$mode = __r2;
                '';
            }
            __$ctx['__$anflg7'] = __r0;
            '';
        }
        return;
    }
    function $82(__$ctx) {
        if (!!__$ctx._popupDefaults === false) {
            if (!!$$elem === false) {
                return $85(__$ctx);
            } else {
                return $286(__$ctx);
            }
        } else {
            return $286(__$ctx);
        }
    }
    function $85(__$ctx) {
        var _$2ictx = __$ctx.ctx;
        _$2ictx.mods = $$mods = __$ctx.extend({
            theme: 'ffffff',
            autoclosable: 'yes',
            adaptive: 'yes',
            animate: 'yes'
        }, $$mods);
        if (_$2ictx.zIndex) {
            var _$2iattrs = _$2ictx.attrs || (_$2ictx.attrs = {});
            _$2iattrs.style = (_$2iattrs.style || '') + ';z-index:' + _$2ictx.zIndex + ';';
        } else {
            undefined;
        }
        {
            '';
            var __r0 = __$ctx._popupDefaults;
            __$ctx._popupDefaults = true;
            $82(__$ctx);
            __$ctx._popupDefaults = __r0;
            '';
        }
        undefined;
        return;
    }
    function $94(__$ctx) {
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
    function $121(__$ctx) {
        var __t = $$block;
        if (__t === 'lang-switcher') {
            if ($$elem === 'lang') {
                var _$3bcode = __$ctx.ctx._lang.lang;
                return [
                    {
                        elem: 'flag',
                        elemMods: { icon: _$3bcode }
                    },
                    {
                        elem: 'lang-name',
                        tag: 'span',
                        content: __$ctx.ctx._lang.name
                    }
                ];
                return;
            } else {
                return $286(__$ctx);
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
                                $495(__$ctx);
                                $$mode = __r0;
                                __$ctx.ctx = __r1;
                                '';
                            }
                            undefined;
                            return;
                        } else {
                            return $286(__$ctx);
                        }
                    } else {
                        return $286(__$ctx);
                    }
                } else {
                    return $286(__$ctx);
                }
            } else {
                return $286(__$ctx);
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
                return $286(__$ctx);
            }
        } else {
            return $286(__$ctx);
        }
    }
    function $148(__$ctx) {
        var __t = $$block;
        if (__t === 'lang-switcher') {
            if ($$elem === 'lang') {
                if (!($$elemMods.selected != 'yes') === false) {
                    if (!!$$mods.selected === false) {
                        var _$3actx = __$ctx.ctx, _$3alang = __$ctx.ctx._lang.lang, _$3aGlob = __$ctx['i-global'];
                        return {
                            href: _$3actx.url || __$ctx['i-services'].serviceUrl('tune') + (_$3aGlob['secret-key'] ? '/api/lang/v1.1/save.xml?intl=' + _$3alang + (_$3aGlob.retpath ? '&retpath=' + encodeURIComponent(_$3aGlob.retpath) : '') + '&sk=' + _$3aGlob['secret-key'] : '/lang/'),
                            role: 'button',
                            tabindex: 0
                        };
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
        } else if (__t === 'link') {
            return $160(__$ctx);
        } else {
            return $183(__$ctx);
        }
    }
    function $160(__$ctx) {
        if (!($$mods && $$mods.pseudo === 'yes') === false) {
            if (!!$$elem === false) {
                if (!!__$ctx.ctx.url === false) {
                    var _$36disabled = (__$ctx.ctx.mods || {}).disabled === 'yes', _$36a = {
                            role: 'button',
                            tabindex: 0
                        };
                    if (_$36disabled) {
                        _$36a['aria-disabled'] = true;
                        delete _$36a.tabindex;
                    } else {
                        undefined;
                    }
                    return _$36a;
                    return;
                } else {
                    return $169(__$ctx);
                }
            } else {
                return $169(__$ctx);
            }
        } else {
            return $169(__$ctx);
        }
    }
    function $169(__$ctx) {
        if (!(__$ctx['__$anflg14'] !== true) === false) {
            if (!($$mods && $$mods.disabled === 'yes') === false) {
                if (!!$$elem === false) {
                    var __r0, __r1;
                    var _$33attrs = ('', __r0 = __$ctx['__$anflg14'], __$ctx['__$anflg14'] = true, __r1 = $160(__$ctx), __$ctx['__$anflg14'] = __r0, '', __r1) || {};
                    _$33attrs.tabindex = -1;
                    _$33attrs['aria-disabled'] = true;
                    return _$33attrs;
                    return;
                } else {
                    return $178(__$ctx);
                }
            } else {
                return $178(__$ctx);
            }
        } else {
            return $178(__$ctx);
        }
    }
    function $178(__$ctx) {
        if (!!$$elem === false) {
            return $180(__$ctx);
        } else {
            return $183(__$ctx);
        }
    }
    function $180(__$ctx) {
        var _$32ctx = __$ctx.ctx, _$32attrs = {};
        [
            'title',
            'target',
            'id',
            'tabindex'
        ].forEach(function (param) {
            if (_$32ctx.hasOwnProperty(param)) {
                _$32attrs[param] = String(_$32ctx[param]);
            } else {
                undefined;
            }
        });
        if (_$32ctx.url !== null && typeof _$32ctx.url !== 'undefined') {
            if (__$ctx.isSimple(_$32ctx.url)) {
                _$32attrs.href = String(_$32ctx.url);
            } else {
                var _$32buf = [];
                {
                    '';
                    var __r0 = $$mode;
                    $$mode = '';
                    var __r1 = __$ctx._buf;
                    __$ctx._buf = _$32buf;
                    var __r2 = __$ctx.ctx;
                    __$ctx.ctx = _$32ctx.url;
                    $495(__$ctx);
                    $$mode = __r0;
                    __$ctx._buf = __r1;
                    __$ctx.ctx = __r2;
                    '';
                }
                undefined;
                _$32attrs.href = _$32buf.join('');
            }
        } else {
            _$32attrs.role = 'button';
            if (!_$32attrs.tabindex) {
                _$32attrs.tabindex = '0';
            } else {
                undefined;
            }
        }
        return _$32attrs;
        return;
    }
    function $183(__$ctx) {
        if ($$elem === 'item') {
            if (!($$block === 'b-menu-vert' || $$block === 'b-menu-horiz') === false) {
                if (!__$ctx._inDropdownMenu === false) {
                    return { role: 'menuitem' };
                    return;
                } else {
                    return $192(__$ctx);
                }
            } else {
                return $192(__$ctx);
            }
        } else {
            return $192(__$ctx);
        }
    }
    function $192(__$ctx) {
        if (!($$block === 'b-menu-vert' || $$block === 'b-menu-horiz') === false) {
            if (!__$ctx._inDropdownMenu === false) {
                if (!!$$elem === false) {
                    return { role: 'menu' };
                    return;
                } else {
                    return $286(__$ctx);
                }
            } else {
                return $286(__$ctx);
            }
        } else {
            return $286(__$ctx);
        }
    }
    function $203(__$ctx) {
        var __t = $$block;
        if (__t === 'lang-switcher') {
            if ($$elem === 'lang') {
                if (!($$elemMods.selected != 'yes') === false) {
                    if (!!$$mods.selected === false) {
                        return 'a';
                        return;
                    } else {
                        return $212(__$ctx);
                    }
                } else {
                    return $212(__$ctx);
                }
            } else {
                return $286(__$ctx);
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
                    return $286(__$ctx);
                }
            }
        } else if (__t === 'b-menu-horiz') {
            if ($$elem === 'item-selector') {
                if (!$$mods === false) {
                    return 'span';
                    return;
                } else {
                    return $286(__$ctx);
                }
            } else {
                return $286(__$ctx);
            }
        } else if (__t === 'popup') {
            if ($$elem === 'tail') {
                return 'i';
                return;
            } else {
                return $286(__$ctx);
            }
        } else {
            return $286(__$ctx);
        }
    }
    function $212(__$ctx) {
        return 'span';
        return;
    }
    function $238(__$ctx) {
        var __t = $$block;
        if (__t === 'link') {
            if (!($$mods && $$mods.pseudo === 'yes') === false) {
                if (!!$$elem === false) {
                    return true;
                    return;
                } else {
                    return $245(__$ctx);
                }
            } else {
                return $245(__$ctx);
            }
        } else if (__t === 'b-menu-horiz') {
            if (!$$mods === false) {
                if (!!$$elem === false) {
                    return true;
                    return;
                } else {
                    return $286(__$ctx);
                }
            } else {
                return $286(__$ctx);
            }
        } else if (__t === 'dropdown-menu' || __t === 'dropdown') {
            if (!!$$elem === false) {
                return true;
                return;
            } else {
                return $286(__$ctx);
            }
        } else {
            return $286(__$ctx);
        }
    }
    function $245(__$ctx) {
        if (!__$ctx.ctx.hasOwnProperty('tabindex') === false) {
            return { origTabindex: String(__$ctx.ctx.tabindex) };
            return;
        } else {
            return $286(__$ctx);
        }
    }
    function $270(__$ctx) {
        var __t = $$block;
        if (__t === 'b-menu-horiz') {
            if ($$elem === 'layout-unit') {
                if (!$$mods === false) {
                    var _$2xmix = [];
                    __$ctx.isFirst() && _$2xmix.push({ elemMods: { position: 'first' } });
                    __$ctx.isLast() && _$2xmix.push({ elemMods: { position: 'last' } });
                    return _$2xmix;
                    return;
                } else {
                    return $286(__$ctx);
                }
            } else {
                return $286(__$ctx);
            }
        } else if (__t === 'dropdown') {
            if (!!$$elem === false) {
                return [{ mods: { action: 'closed' } }];
                return;
            } else {
                return $286(__$ctx);
            }
        } else {
            return $286(__$ctx);
        }
    }
    function $286(__$ctx) {
        if ($$block === 'popup') {
            if (!($$mode === '' && __$ctx._popupDefaults) === false) {
                delete __$ctx._popupDefaults;
                applyc(__$ctx);
                undefined;
                return;
            } else {
                return $292(__$ctx);
            }
        } else {
            return $292(__$ctx);
        }
    }
    function $292(__$ctx) {
        var __t = $$mode;
        if (__t === 'tag') {
            var __t = $$block;
            if (__t === 'b-menu-vert') {
                var __t = $$elem;
                if (__t === 'submenu') {
                    return 'ul';
                    return;
                } else if (__t === 'item-selector') {
                    return 'span';
                    return;
                } else if (__t === 'layout-unit') {
                    return 'li';
                    return;
                } else if (__t === 'layout') {
                    return 'ul';
                    return;
                } else if (__t === 'title') {
                    return 'h3';
                    return;
                } else {
                    return $336(__$ctx);
                }
            } else if (__t === 'b-page') {
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
                } else if (__t === 'body') {
                    return '';
                    return;
                } else if (__t === 'favicon') {
                    return 'link';
                    return;
                } else if (__t === 'meta') {
                    return 'meta';
                    return;
                } else if (__t === 'head') {
                    return 'head';
                    return;
                } else if (__t === 'root') {
                    return 'html';
                    return;
                } else {
                    if (!!$$elem === false) {
                        return 'body';
                        return;
                    } else {
                        return $336(__$ctx);
                    }
                }
            } else if (__t === 'i-ua') {
                if (!!$$elem === false) {
                    return 'script';
                    return;
                } else {
                    return $336(__$ctx);
                }
            } else {
                return $336(__$ctx);
            }
        } else if (__t === '') {
            return $495(__$ctx);
        } else if (__t === 'regions') {
            if ($$block === 'i-geodata') {
                return $516(__$ctx);
            } else {
                return $620(__$ctx);
            }
        } else if (__t === 'attrs') {
            if ($$block === 'b-page') {
                var __t = $$elem;
                if (__t === 'js') {
                    if (!__$ctx.ctx.url === false) {
                        return { src: __$ctx.ctx.url };
                        return;
                    } else {
                        return $544(__$ctx);
                    }
                } else if (__t === 'css') {
                    if (!__$ctx.ctx.url === false) {
                        return {
                            rel: 'stylesheet',
                            href: __$ctx.ctx.url
                        };
                        return;
                    } else {
                        return $544(__$ctx);
                    }
                } else if (__t === 'root') {
                    return { lang: __$ctx['i-global'].lang || 'ru' };
                    return;
                } else if (__t === 'favicon') {
                    return {
                        rel: 'shortcut icon',
                        href: __$ctx.ctx.url
                    };
                    return;
                } else if (__t === 'meta') {
                    return __$ctx.ctx.attrs;
                    return;
                } else {
                    return $544(__$ctx);
                }
            } else {
                return $544(__$ctx);
            }
        } else if (__t === 'service-url') {
            if ($$block === 'i-services') {
                return $488(__$ctx);
            } else {
                return $620(__$ctx);
            }
        } else if (__t === 'xUACompatible') {
            if ($$block === 'b-page') {
                if (!!$$elem === false) {
                    return $571(__$ctx);
                } else {
                    return $620(__$ctx);
                }
            } else {
                return $620(__$ctx);
            }
        } else if (__t === 'cls') {
            if ($$block === 'b-page') {
                if ($$elem === 'root') {
                    return 'i-ua_js_no i-ua_css_standard';
                    return;
                } else {
                    return $583(__$ctx);
                }
            } else {
                return $583(__$ctx);
            }
        } else if (__t === 'doctype') {
            if ($$block === 'b-page') {
                if (!!$$elem === false) {
                    return $587(__$ctx);
                } else {
                    return $620(__$ctx);
                }
            } else {
                return $620(__$ctx);
            }
        } else if (__t === 'env') {
            if ($$block === 'i-global') {
                return $593(__$ctx);
            } else {
                return $620(__$ctx);
            }
        } else if (__t === 'js-params') {
            if ($$block === 'b-page') {
                if (!!$$elem === false) {
                    return $603(__$ctx);
                } else {
                    return $620(__$ctx);
                }
            } else {
                return $620(__$ctx);
            }
        } else if (__t === 'content') {
            var __t = $$block;
            if (__t === 'b-menu-vert') {
                if (!!$$elem === false) {
                    return [
                        __$ctx.ctx.title,
                        {
                            elem: 'layout',
                            content: __$ctx.ctx.content
                        }
                    ];
                    return;
                } else {
                    return $486(__$ctx);
                }
            } else if (__t === 'i-geodata') {
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
                    return $486(__$ctx);
                }
            } else if (__t === 'b-page') {
                if (!!$$elem === false) {
                    return {
                        elem: 'body',
                        content: __$ctx.ctx.content
                    };
                    return;
                } else {
                    return $486(__$ctx);
                }
            } else if (__t === 'i-ua') {
                return $474(__$ctx);
            } else {
                return $486(__$ctx);
            }
        } else if (__t === 'public-params') {
            if ($$block === 'i-global') {
                return $609(__$ctx);
            } else {
                return $620(__$ctx);
            }
        } else if (__t === 'default') {
            var __t = $$block;
            if (__t === 'b-menu-vert') {
                if ($$elem === 'item') {
                    if (!(__$ctx['__$anflg6'] !== true) === false) {
                        return $366(__$ctx);
                    } else {
                        return $620(__$ctx);
                    }
                } else {
                    return $620(__$ctx);
                }
            } else if (__t === 'i-services') {
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
                        return $620(__$ctx);
                    }
                }
            } else if (__t === 'i-geodata') {
                return $381(__$ctx);
            } else if (__t === 'b-page') {
                if ($$elem === 'css') {
                    if (!__$ctx.ctx.hasOwnProperty('ie') === false) {
                        if (!!__$ctx.ctx._ieCommented === false) {
                            return $393(__$ctx);
                        } else {
                            return $398(__$ctx);
                        }
                    } else {
                        return $398(__$ctx);
                    }
                } else {
                    return $398(__$ctx);
                }
            } else if (__t === 'i-bem') {
                if ($$elem === 'i18n') {
                    return $408(__$ctx);
                } else {
                    return $620(__$ctx);
                }
            } else if (__t === 'i-jquery') {
                if ($$elem === 'core') {
                    if (!(__$ctx['__$anflg2'] !== true) === false) {
                        return $414(__$ctx);
                    } else {
                        return $620(__$ctx);
                    }
                } else {
                    return $620(__$ctx);
                }
            } else if (__t === 'i-global') {
                return $419(__$ctx);
            } else {
                return $620(__$ctx);
            }
        } else if (__t === 'jsAttr') {
            return undefined;
            return;
        } else if (__t === 'mix') {
            var __t = $$block;
            if (__t === 'b-menu-vert') {
                if ($$elem === 'layout-unit') {
                    var _$2emix = [];
                    __$ctx.isFirst() && _$2emix.push({ elemMods: { position: 'first' } });
                    __$ctx.isLast() && _$2emix.push({ elemMods: { position: 'last' } });
                    return _$2emix;
                    return;
                } else {
                    return $361(__$ctx);
                }
            } else if (__t === 'b-page') {
                return $343(__$ctx);
            } else {
                return $361(__$ctx);
            }
        } else if (__t === 'js') {
            return undefined;
            return;
        } else if (__t === 'bem') {
            var __t = $$block;
            if (__t === 'b-page') {
                var __t = $$elem;
                if (__t === 'js' || __t === 'css' || __t === 'favicon' || __t === 'meta' || __t === 'head' || __t === 'root') {
                    return false;
                    return;
                } else {
                    return $567(__$ctx);
                }
            } else if (__t === 'i-ua') {
                if (!!$$elem === false) {
                    return false;
                    return;
                } else {
                    return $567(__$ctx);
                }
            } else {
                return $567(__$ctx);
            }
        } else {
            return $620(__$ctx);
        }
    }
    function $336(__$ctx) {
        return undefined;
        return;
    }
    function $343(__$ctx) {
        if (!!__$ctx.ctx._iGlobal === false) {
            if (!!$$elem === false) {
                return $346(__$ctx);
            } else {
                return $349(__$ctx);
            }
        } else {
            return $349(__$ctx);
        }
    }
    function $346(__$ctx) {
        var __r0, __r1, __r2, __r3, __r4;
        var _$1lmix = ('', __r0 = __$ctx.ctx, __r1 = __r0._iGlobal, __r0._iGlobal = true, __r2 = $343(__$ctx), __r0._iGlobal = __r1, '', __r2), _$1ljsParams = ('', __r3 = $$mode, $$mode = 'js-params', __r4 = $603(__$ctx), $$mode = __r3, '', __r4);
        _$1lmix ? _$1lmix.push(_$1ljsParams) : _$1lmix = [_$1ljsParams];
        return _$1lmix;
        return;
    }
    function $349(__$ctx) {
        if (!(__$ctx['__$anflg4'] !== true) === false) {
            if (!!$$elem === false) {
                var __r0, __r1;
                var _$1hmix = ('', __r0 = __$ctx['__$anflg4'], __$ctx['__$anflg4'] = true, __r1 = $343(__$ctx), __$ctx['__$anflg4'] = __r0, '', __r1) || [];
                _$1hmix.push({
                    block: 'i-ua',
                    mods: { interaction: 'yes' },
                    js: true
                });
                return _$1hmix;
                return;
            } else {
                return $355(__$ctx);
            }
        } else {
            return $355(__$ctx);
        }
    }
    function $355(__$ctx) {
        if (!!$$elem === false) {
            return [{ elem: 'body' }];
            return;
        } else {
            return $361(__$ctx);
        }
    }
    function $361(__$ctx) {
        return undefined;
        return;
    }
    function $366(__$ctx) {
        {
            '';
            var __r0 = __$ctx['__$anflg6'];
            __$ctx['__$anflg6'] = true;
            {
                '';
                var __r1 = $$mode;
                $$mode = '';
                var __r2 = __$ctx.position;
                __$ctx.position = __$ctx.position - 1;
                var __r3 = __$ctx.ctx;
                __$ctx.ctx = {
                    elem: 'layout-unit',
                    content: [
                        __$ctx.ctx,
                        __$ctx.ctx['item-content']
                    ]
                };
                $495(__$ctx);
                $$mode = __r1;
                __$ctx.position = __r2;
                __$ctx.ctx = __r3;
                '';
            }
            __$ctx['__$anflg6'] = __r0;
            '';
        }
        undefined;
        return;
    }
    function $381(__$ctx) {
        if (!!__$ctx._userRegion === false) {
            if (!!$$elem === false) {
                {
                    '';
                    var __r0 = __$ctx._userRegion;
                    __$ctx._userRegion = __$ctx['i-geodata'].getRegion(__$ctx.ctx.region);
                    $381(__$ctx);
                    __$ctx._userRegion = __r0;
                    '';
                }
                undefined;
                return;
            } else {
                return $620(__$ctx);
            }
        } else {
            return $620(__$ctx);
        }
    }
    function $393(__$ctx) {
        var _$1pie = __$ctx.ctx.ie;
        if (_$1pie === true) {
            {
                '';
                var __r2 = $$mode;
                $$mode = '';
                var __r3 = __$ctx.ctx;
                __$ctx.ctx = [
                    6,
                    7,
                    8,
                    9
                ].map(function (v) {
                    return {
                        elem: 'css',
                        url: this.ctx.url + '.ie' + v + '.css',
                        ie: 'IE ' + v
                    };
                }, __$ctx);
                $495(__$ctx);
                $$mode = __r2;
                __$ctx.ctx = __r3;
                '';
            }
            undefined;
        } else {
            var _$1phideRule = !_$1pie ? [
                    'gt IE 9',
                    '<!-->',
                    '<!--'
                ] : _$1pie === '!IE' ? [
                    _$1pie,
                    '<!-->',
                    '<!--'
                ] : [
                    _$1pie,
                    '',
                    ''
                ];
            {
                '';
                var __r4 = $$mode;
                $$mode = '';
                var __r5 = __$ctx.ctx, __r6 = __r5._ieCommented;
                __r5._ieCommented = true;
                var __r7 = __$ctx.ctx;
                __$ctx.ctx = [
                    '<!--[if ' + _$1phideRule[0] + ']>',
                    _$1phideRule[1],
                    __$ctx.ctx,
                    _$1phideRule[2],
                    '<![endif]-->'
                ];
                $495(__$ctx);
                $$mode = __r4;
                __r5._ieCommented = __r6;
                __$ctx.ctx = __r7;
                '';
            }
            undefined;
        }
        return;
    }
    function $398(__$ctx) {
        if (!(__$ctx['__$anflg3'] !== true) === false) {
            if (!!$$elem === false) {
                return $401(__$ctx);
            } else {
                return $620(__$ctx);
            }
        } else {
            return $620(__$ctx);
        }
    }
    function $401(__$ctx) {
        var __r0, __r1, __r2, __r3;
        var _$13ctx = __$ctx.ctx, _$13dtype = ('', __r0 = $$mode, $$mode = 'doctype', __r1 = $587(__$ctx), $$mode = __r0, '', __r1), _$13xUA = ('', __r2 = $$mode, $$mode = 'xUACompatible', __r3 = $571(__$ctx), $$mode = __r2, '', __r3), _$13buf = [
                _$13dtype,
                {
                    elem: 'root',
                    content: [
                        {
                            elem: 'head',
                            content: [
                                {
                                    tag: 'meta',
                                    attrs: { charset: 'utf-8' }
                                },
                                _$13xUA,
                                {
                                    tag: 'title',
                                    content: _$13ctx.title
                                },
                                _$13ctx.favicon ? {
                                    elem: 'favicon',
                                    url: _$13ctx.favicon
                                } : '',
                                _$13ctx.meta,
                                { block: 'i-ua' },
                                _$13ctx.head
                            ]
                        },
                        _$13ctx
                    ]
                }
            ];
        {
            '';
            var __r4 = __$ctx['__$anflg3'];
            __$ctx['__$anflg3'] = true;
            {
                '';
                var __r5 = __$ctx.ctx;
                __$ctx.ctx = _$13buf;
                var __r6 = $$mode;
                $$mode = '';
                $495(__$ctx);
                __$ctx.ctx = __r5;
                $$mode = __r6;
                '';
            }
            __$ctx['__$anflg3'] = __r4;
            '';
        }
        undefined;
        return;
    }
    function $408(__$ctx) {
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
            _$10params.content = (_$10cnt = [], '', __r0 = __$ctx._buf, __$ctx._buf = _$10cnt, __r1 = $$mode, $$mode = '', __r2 = __$ctx.ctx, __$ctx.ctx = _$10ctx.content, __r3 = $495(__$ctx), __$ctx._buf = __r0, $$mode = __r1, __$ctx.ctx = __r2, '', __r3, _$10cnt.join(''));
        } else {
            undefined;
        }
        __$ctx._buf.push(BEM.I18N(_$10keyset, _$10key, _$10params));
        return;
    }
    function $414(__$ctx) {
        var __r0, __r4, __r1, __r2, __r3;
        return '', __r0 = __$ctx['__$anflg2'], __$ctx['__$anflg2'] = true, __r4 = ('', __r1 = __$ctx.ctx, __$ctx.ctx = {
            block: 'b-page',
            elem: 'js',
            url: '//yastatic.net/jquery/1.8.3/jquery.min.js'
        }, __r2 = $$mode, $$mode = '', __r3 = $495(__$ctx), __$ctx.ctx = __r1, $$mode = __r2, '', __r3), __$ctx['__$anflg2'] = __r0, '', __r4;
        return;
    }
    function $419(__$ctx) {
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
                    return $443(__$ctx);
                } else {
                    return $620(__$ctx);
                }
            }
        }
    }
    function $443(__$ctx) {
        var _$hparams = __$ctx.ctx.params || {}, _$hiGlobal = __$ctx['i-global'], _$hisTldChanged = _$hparams.tld && _$hparams.tld !== _$hiGlobal.tld, _$htld, _$hxYaDomain, _$hyaDomain;
        if (_$hisTldChanged) {
            _$htld = _$hparams.tld;
            _$hxYaDomain = _$htld === 'tr' ? 'yandex.com.tr' : 'yandex.' + _$htld;
            _$hyaDomain = [
                'ua',
                'by',
                'kz'
            ].indexOf(_$htld) != -1 ? 'yandex.ru' : _$hxYaDomain;
            _$hiGlobal['content-region'] = _$htld;
            _$hiGlobal['click-host'] = '//clck.' + _$hyaDomain;
            _$hiGlobal['passport-host'] = 'https://passport.' + _$hyaDomain;
            _$hiGlobal['pass-host'] = '//pass.' + _$hxYaDomain;
            _$hiGlobal['social-host'] = '//social.' + _$hxYaDomain;
            _$hiGlobal['export-host'] = '//export.' + _$hxYaDomain;
        } else {
            undefined;
        }
        for (var _$hp in _$hparams) {
            _$hiGlobal[_$hp] = _$hparams[_$hp];
        }
        return;
    }
    function $474(__$ctx) {
        if (!(__$ctx['__$anflg1'] !== true) === false) {
            if (!!$$elem === false) {
                var __r0, __r1;
                var _$yc = ('', __r0 = __$ctx['__$anflg1'], __$ctx['__$anflg1'] = true, __r1 = $474(__$ctx), __$ctx['__$anflg1'] = __r0, '', __r1);
                _$yc += [
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
                return _$yc;
                return;
            } else {
                return $480(__$ctx);
            }
        } else {
            return $480(__$ctx);
        }
    }
    function $480(__$ctx) {
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
            return $486(__$ctx);
        }
    }
    function $486(__$ctx) {
        return __$ctx.ctx.content;
        return;
    }
    function $488(__$ctx) {
        if (!!$$elem === false) {
            return $490(__$ctx);
        } else {
            return $620(__$ctx);
        }
    }
    function $490(__$ctx) {
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
    function $495(__$ctx) {
        if (!__$ctx['i-global'] === false) {
            if (!!__$ctx['i-services'] === false) {
                return $498(__$ctx);
            } else {
                return $501(__$ctx);
            }
        } else {
            return $501(__$ctx);
        }
    }
    function $498(__$ctx) {
        var __r0, __r1, __r2;
        var _$24_ctx = __$ctx['i-services'] = {}, _$24params = __$ctx['i-global'];
        _$24_ctx._data = ('', __r0 = $$block, $$block = 'i-services', __r1 = $$mode, $$mode = 'service-url', __r2 = $488(__$ctx), $$block = __r0, $$mode = __r1, '', __r2);
        _$24_ctx.serviceName = function (id) {
            return BEM.I18N('i-services', id || _$24params.id);
        };
        _$24_ctx.serviceUrl = function (id, region) {
            id || (id = _$24params.id);
            return _$24_ctx._data[id](region || _$24params['content-region']);
        };
        applyc(__$ctx);
        undefined;
        return;
    }
    function $501(__$ctx) {
        if (!(__$ctx['__$anflg5'] !== true) === false) {
            if (!__$ctx['i-global'] === false) {
                if (!!__$ctx['i-geodata'] === false) {
                    return $505(__$ctx);
                } else {
                    return $510(__$ctx);
                }
            } else {
                return $510(__$ctx);
            }
        } else {
            return $510(__$ctx);
        }
    }
    function $505(__$ctx) {
        var __r0, __r1, __r2;
        var _$1v_ctx = __$ctx['i-geodata'] = {}, _$1viGlobal = __$ctx['i-global'], _$1v_this = __$ctx;
        _$1v_ctx._data = ('', __r0 = $$block, $$block = 'i-geodata', __r1 = $$mode, $$mode = 'regions', __r2 = $516(__$ctx), $$block = __r0, $$mode = __r1, '', __r2);
        _$1v_ctx._getRegionLang = function (region) {
            return region.lang || _$1v_ctx._getRegionLang(_$1v_ctx._data[region.parent]);
        };
        _$1v_ctx.getRegion = function (region) {
            if (!region) {
                region = { short_ename: _$1viGlobal['user-region'] || _$1viGlobal['content-region'] };
            } else {
                undefined;
            }
            var id;
            if (!region.id) {
                var regId, field;
                for (regId in _$1v_ctx._data) {
                    for (field in region) {
                        if (region.hasOwnProperty(field) && region[field] === _$1v_ctx._data[regId][field] && !_$1v_ctx._data[regId].hidden) {
                            id = _$1v_ctx._data[regId].id;
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
            var reg = _$1v_ctx._data[id];
            if (!reg.lang) {
                reg.lang = _$1v_ctx._getRegionLang(reg);
            } else {
                undefined;
            }
            return reg;
        };
        _$1v_ctx.isRegionIn = function (items, field, region) {
            if (field && !_$1v_this._.isSimple(field) && !region) {
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
            region = _$1v_ctx.getRegion(region);
            for (var i in items) {
                if (items.hasOwnProperty(i) && items[i] == region[field]) {
                    return region;
                } else {
                    undefined;
                }
            }
            if (region.parent) {
                return _$1v_ctx.isRegionIn(items, field, { id: region.parent });
            } else {
                undefined;
            }
            return false;
        };
        {
            '';
            var __r3 = __$ctx['__$anflg5'];
            __$ctx['__$anflg5'] = true;
            $286(__$ctx);
            __$ctx['__$anflg5'] = __r3;
            '';
        }
        undefined;
        return;
    }
    function $510(__$ctx) {
        if (!!__$ctx['i-global'] === false) {
            return $512(__$ctx);
        } else {
            return $620(__$ctx);
        }
    }
    function $512(__$ctx) {
        var __r0, __r1, __r2, __r3, __r4, __r5, __r6;
        var _$fps = {}, _$fes = [
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
            ], _$fe;
        while (_$fe = _$fes.shift()) {
            _$fps[_$fe] = ('', __r0 = $$mode, $$mode = 'default', __r1 = $$block, $$block = 'i-global', __r2 = $$elem, $$elem = _$fe, __r3 = $419(__$ctx), $$mode = __r0, $$block = __r1, $$elem = __r2, '', __r3);
        }
        __$ctx['i-global'] = __$ctx._.extend(_$fps, ('', __r4 = $$mode, $$mode = 'env', __r5 = $$block, $$block = 'i-global', __r6 = $593(__$ctx), $$mode = __r4, $$block = __r5, '', __r6));
        applyc(__$ctx);
        undefined;
        return;
    }
    function $516(__$ctx) {
        if (!!$$elem === false) {
            return $518(__$ctx);
        } else {
            return $620(__$ctx);
        }
    }
    function $518(__$ctx) {
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
    function $544(__$ctx) {
        return undefined;
        return;
    }
    function $567(__$ctx) {
        return undefined;
        return;
    }
    function $571(__$ctx) {
        if (__$ctx.ctx['x-ua-compatible'] === false) {
            return false;
        } else {
            return {
                tag: 'meta',
                attrs: {
                    'http-equiv': 'X-UA-Compatible',
                    content: __$ctx.ctx['x-ua-compatible'] || 'IE=edge'
                }
            };
        }
        return;
    }
    function $583(__$ctx) {
        return undefined;
        return;
    }
    function $587(__$ctx) {
        return __$ctx.ctx.doctype || '<!DOCTYPE html>';
        return;
    }
    function $593(__$ctx) {
        if (!!$$elem === false) {
            return {
                'secret-key': 'secret-key-test',
                retpath: 'retpath'
            };
            return;
        } else {
            return $620(__$ctx);
        }
    }
    function $603(__$ctx) {
        var __r0, __r1, __r2, __r3;
        var _$t_this = __$ctx['i-global'], _$tjs = {}, _$tblock = {
                block: 'i-global',
                js: _$tjs
            }, _$te;
        for (_$te in _$t_this) {
            if (_$t_this.hasOwnProperty(_$te) && ('', __r0 = $$mode, $$mode = 'public-params', __r1 = $$block, $$block = 'i-global', __r2 = $$elem, $$elem = _$te, __r3 = $609(__$ctx), $$mode = __r0, $$block = __r1, $$elem = __r2, '', __r3)) {
                _$tjs[_$te] = _$t_this[_$te];
            } else {
                undefined;
            }
        }
        return _$tblock;
        return;
    }
    function $609(__$ctx) {
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
            return $620(__$ctx);
        }
    }
    function $620(__$ctx) {
        if (!__$ctx.ctx === false) {
            if (!__$ctx.ctx.link === false) {
                if (!!__$ctx._.isSimple(__$ctx.ctx) === false) {
                    return $624(__$ctx);
                } else {
                    return $629(__$ctx);
                }
            } else {
                return $629(__$ctx);
            }
        } else {
            return $629(__$ctx);
        }
    }
    function $624(__$ctx) {
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
    function $629(__$ctx) {
        if (!cache === false) {
            if (!__$ctx.ctx === false) {
                if (!__$ctx.ctx.cache === false) {
                    return $633(__$ctx);
                } else {
                    return $638(__$ctx);
                }
            } else {
                return $638(__$ctx);
            }
        } else {
            return $638(__$ctx);
        }
    }
    function $633(__$ctx) {
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
    function $638(__$ctx) {
        var __t = $$mode;
        if (__t === 'default') {
            return $640(__$ctx);
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
                        return $649(__$ctx);
                    } else {
                        if (!true === false) {
                            return $652(__$ctx);
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
    function $640(__$ctx) {
        var __r13, __r0, __r4, __r5, __r6, __r7, __r8, __r9, __r10, __r11, __r12, __r1, __r14, __r15, __r16, __r17, __r20, __r21, __r22, __r23, __r24, __r25;
        var _$4BEM_ = __$ctx.BEM, _$4v = __$ctx.ctx, _$4buf = __$ctx._buf, _$4tag;
        _$4tag = ('', __r0 = $$mode, $$mode = 'tag', __r1 = $203(__$ctx), $$mode = __r0, '', __r1);
        typeof _$4tag != 'undefined' || (_$4tag = _$4v.tag);
        typeof _$4tag != 'undefined' || (_$4tag = 'div');
        if (_$4tag) {
            var _$4jsParams, _$4js;
            if ($$block && _$4v.js !== false) {
                _$4js = ('', __r4 = $$mode, $$mode = 'js', __r5 = $238(__$ctx), $$mode = __r4, '', __r5);
                _$4js = _$4js ? __$ctx._.extend(_$4v.js, _$4js === true ? {} : _$4js) : _$4v.js === true ? {} : _$4v.js;
                _$4js && ((_$4jsParams = {})[_$4BEM_.INTERNAL.buildClass($$block, _$4v.elem)] = _$4js);
            } else {
                undefined;
            }
            _$4buf.push('<', _$4tag);
            var _$4isBEM = ('', __r6 = $$mode, $$mode = 'bem', __r7 = $286(__$ctx), $$mode = __r6, '', __r7);
            typeof _$4isBEM != 'undefined' || (_$4isBEM = typeof _$4v.bem != 'undefined' ? _$4v.bem : _$4v.block || _$4v.elem);
            var _$4cls = ('', __r8 = $$mode, $$mode = 'cls', __r9 = $286(__$ctx), $$mode = __r8, '', __r9);
            _$4cls || (_$4cls = _$4v.cls);
            var _$4addJSInitClass = _$4v.block && _$4jsParams;
            if (_$4isBEM || _$4cls) {
                _$4buf.push(' class="');
                if (_$4isBEM) {
                    _$4BEM_.INTERNAL.buildClasses($$block, _$4v.elem, _$4v.elemMods || _$4v.mods, _$4buf);
                    var _$4mix = ('', __r10 = $$mode, $$mode = 'mix', __r11 = $270(__$ctx), $$mode = __r10, '', __r11);
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
                                var _$4nestedMix = ('', __r12 = $$block, $$block = _$4block, __r13 = $$elem, $$elem = _$4elem, __r14 = $$mods, $$mods = _$4mods, __r15 = $$elemMods, $$elemMods = _$4elemMods, __r16 = $$mode, $$mode = 'mix', __r17 = $270(__$ctx), $$block = __r12, $$elem = __r13, $$mods = __r14, $$elemMods = __r15, $$mode = __r16, '', __r17);
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
                var _$4jsAttr = ('', __r20 = $$mode, $$mode = 'jsAttr', __r21 = $286(__$ctx), $$mode = __r20, '', __r21);
                _$4buf.push(' ', _$4jsAttr || 'data-bem', '="', __$ctx._.attrEscape(JSON.stringify(_$4jsParams)), '"');
            } else {
                undefined;
            }
            var _$4attrs = ('', __r22 = $$mode, $$mode = 'attrs', __r23 = $148(__$ctx), $$mode = __r22, '', __r23);
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
            var _$4content = ('', __r24 = $$mode, $$mode = 'content', __r25 = $121(__$ctx), $$mode = __r24, '', __r25);
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
                    $286(__$ctx);
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
    function $649(__$ctx) {
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
                $286(__$ctx);
                __$ctx.ctx = __r0;
                '';
            }
            undefined;
        }
        _$1prevNotNewList || (__$ctx.position = _$1prevPos);
        return;
    }
    function $652(__$ctx) {
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