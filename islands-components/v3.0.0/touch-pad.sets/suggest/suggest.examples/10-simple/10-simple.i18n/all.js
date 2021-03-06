({
    "all": {
        "": "\n/* global BEM, i18n */\n(function(global_, bem_, undefined) {\n\n// Check if BEM.I18N was already initialized\nif(typeof bem_.I18N === 'function' && bem_.I18N._proto) {\n    return bem_.I18N;\n}\n\n/**\n * Support tanker-like syntax of keys in `i-bem__i18n`\n * @example\n *  i18n['prj']['keyset']['key'](params)\n */\nif(typeof i18n === 'undefined') {\n    /* jshint -W020 */\n    i18n = {};\n    /* jshint +W020 */\n}\n\n/* jshint -W020 */\nBEM = bem_;\n/* jshint +W020 */\n\nvar MOD_DELIM = '_',\n    ELEM_DELIM = '__',\n    DEFAULT_LANG = 'ru',\n    cache = {},\n    // {String[]} A stack used for restoring context of dynamic keysets\n    stack = [],\n    debug = false,\n    // @see http://whattheheadsaid.com/2011/04/internet-explorer-9s-problematic-console-object\n    hasConsole = typeof console !== 'undefined' && typeof console.log === 'function';\n\nfunction log() {\n    if(debug && hasConsole) {\n        console.log.apply(console, arguments);\n    }\n}\n\nfunction bemName(decl) {\n    typeof decl === 'string' && (decl = { block: decl });\n\n    return decl.block +\n        (decl.elem ? (ELEM_DELIM + decl.elem) : '') +\n        (decl.modName ? MOD_DELIM + decl.modName + MOD_DELIM + decl.modVal : '');\n}\n\nfunction bemParse(name) {\n    var bemitem = {};\n\n    name.split(ELEM_DELIM).forEach(function(item, i) {\n        var keys = [ i ? 'elem' : 'block', 'mod', 'val' ];\n\n        item.split(MOD_DELIM).forEach(function(part, j) {\n            bemitem[keys[j]] = part;\n        });\n    });\n\n    return bemitem;\n}\n\nfunction _pushStack(name) {\n    if(!name) return false;\n    return stack.push(name);\n}\n\nfunction _popStack() {\n    return stack.length && stack.pop();\n}\n\n\n/**\n * @constructor\n */\nfunction _i18n() {\n    this._lang = '';\n    this._prj = 'lego'; // FIXME: bem-bl?\n    this._keyset = '';\n    this._key = '';\n}\n\n_i18n.prototype = {\n\n    lang : function(name) {\n        this._lang = name;\n        return this;\n    },\n\n    project : function(name) {\n        this._prj = name;\n        return this;\n    },\n\n    keyset : function(name, saveCtx) {\n        saveCtx && _pushStack(this._keyset);\n\n        this._keyset = bemName(name);\n        return this;\n    },\n\n    key : function(name) {\n        this._key = name;\n        return this;\n    },\n\n    /**\n     * FIXME: Move legacy-syntax support into separat method\n     * @param {Object|Function} v\n     */\n    decl : function(v) {\n        var bemitem = bemParse(this._keyset),\n            // tanker legacy syntax\n            prj = bemitem.block === 'i-tanker' ? 'tanker' : this._prj,\n            keyset = bemitem.elem || this._keyset,\n            key = this._key;\n\n        prj = i18n[prj] || (i18n[prj] = {});\n        keyset = prj[keyset] || (prj[keyset] = {});\n        keyset[key] = typeof v === 'function' ? v : (function(p) { return (v); });\n\n        // `BEM.I18N` syntax\n        var l = cache[this._lang] || (cache[this._lang] = {}),\n            k = l[this._keyset] || (l[this._keyset] = {});\n\n        k[key] = v;\n    },\n\n    val : function(params, ctx) {\n        var value = cache[this._lang] && cache[this._lang][this._keyset],\n            debugString = 'keyset: ' + this._keyset + ' key: ' + this._key + ' (lang: ' + this._lang + ')';\n\n        if(!value) {\n            log('[I18N_NO_KEYSET] %s', debugString);\n            return '';\n        }\n\n        value = value[this._key];\n\n        var valtype = typeof value;\n        if(valtype === 'undefined') {\n            log(\"[I18N_NO_VALUE] %s\", debugString);\n            return '';\n        }\n\n        if(valtype === 'string') {\n            return value;\n        }\n\n        ctx || (ctx = this);\n        // TODO: try/catch\n        return value.call(ctx, params);\n    },\n\n    _cache : function() { return cache; }\n\n};\n\n/**\n * @namespace\n * @lends BEM.I18N\n */\nbem_.I18N = (function(base) {\n\n    /**\n     * Shortcut to get key value\n     *\n     * @param {String|Object} keyset\n     * @param {String} key\n     * @param {Object} [params]\n     * @returns {String}\n     */\n    var klass = function(keyset, key, params) {\n        return klass.keyset(keyset).key(key, params);\n    };\n\n    klass._proto = base;\n\n    /**\n     * @param {String} name\n     * @returns {BEM.I18N}\n     */\n    klass.project = function(name) {\n        this._proto.project(name);\n        return this;\n    };\n\n    /**\n     * @param {String} name\n     * @returns {BEM.I18N}\n     */\n    klass.keyset = function(name) {\n        this._proto.keyset(name, true);\n        return this;\n    };\n\n    /**\n     * @param {String} name Key name\n     * @param {Object} params\n     * @returns {String}\n     */\n    klass.key = function(name, params) {\n        var proto = this._proto,\n            result,\n            ksetRestored;\n\n        proto.lang(this._lang).key(name);\n\n        // TODO: kiss\n        result = proto.val.call(proto, params, klass);\n\n        // restoring keyset's context\n        // NOTE: should not save current ctx, `saveCtx = false`\n        ksetRestored = _popStack();\n        ksetRestored && proto.keyset(ksetRestored, false);\n\n        return result;\n    };\n\n    /**\n     * Declaration of translations\n     *\n     * @param {String|Object} bemitem\n     * @param {Object} keysets\n     * @param {Object} [params] declaration params\n     * @returns {BEM.I18N}\n     */\n    klass.decl = function(bemitem, keysets, params) {\n        var proto = this._proto,\n            k;\n\n        params || (params = {});\n        params.lang && proto.lang(params.lang);\n\n        proto.keyset(bemitem);\n\n        for(k in keysets) {\n            if(keysets.hasOwnProperty(k)) {\n                proto.key(k).decl(keysets[k]);\n            }\n        }\n\n        return this;\n    };\n\n    /**\n     * Get/set current language\n     *\n     * @param {String} [lang]\n     * @returns {String}\n     */\n    klass.lang = function(lang) {\n        typeof lang !== 'undefined' && (this._lang = lang);\n        return this._lang;\n    };\n\n    klass.debug = function(flag) {\n        debug = !!flag;\n    };\n\n    klass.lang(DEFAULT_LANG);\n\n    return klass;\n\n}(new _i18n()));\n\n})(this, typeof BEM === 'undefined' ? {} : BEM);\n\n"
    },
    "ru": {
        "suggest": {
            "fact": "Факты",
            "group": "Группа подсказок",
            "nah": "Вы искали",
            "nav": "Сайт",
            "text": "Поиск",
            "traffic": "Пробки",
            "weather": "Погода"
        },
        "suggest-item": {
            "quick-answer": "Быстрый ответ"
        }
    },
    "en": {
        "suggest": {
            "fact": "Facts",
            "group": "Group of suggestions",
            "nah": "You searched for",
            "nav": "Site",
            "text": "Search",
            "traffic": "Traffic",
            "weather": "Weather"
        },
        "suggest-item": {
            "quick-answer": "Quick answer"
        }
    },
    "tr": {
        "suggest": {
            "fact": "Gerçekler",
            "group": "İpucu grubu",
            "nah": "Önceki aramalar",
            "nav": "Site",
            "text": "Web",
            "traffic": "Trafik",
            "weather": "Hava durumu"
        },
        "suggest-item": {
            "quick-answer": "Hızlı yanıt"
        }
    }
})
