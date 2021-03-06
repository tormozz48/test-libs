({
    "all": {
        "": "\n/* global BEM, i18n */\n(function(global_, bem_, undefined) {\n\n// Check if BEM.I18N was already initialized\nif(typeof bem_.I18N === 'function' && bem_.I18N._proto) {\n    return bem_.I18N;\n}\n\n/**\n * Support tanker-like syntax of keys in `i-bem__i18n`\n * @example\n *  i18n['prj']['keyset']['key'](params)\n */\nif(typeof i18n === 'undefined') {\n    /* jshint -W020 */\n    i18n = {};\n    /* jshint +W020 */\n}\n\n/* jshint -W020 */\nBEM = bem_;\n/* jshint +W020 */\n\nvar MOD_DELIM = '_',\n    ELEM_DELIM = '__',\n    DEFAULT_LANG = 'ru',\n    cache = {},\n    // {String[]} A stack used for restoring context of dynamic keysets\n    stack = [],\n    debug = false,\n    // @see http://whattheheadsaid.com/2011/04/internet-explorer-9s-problematic-console-object\n    hasConsole = typeof console !== 'undefined' && typeof console.log === 'function';\n\nfunction log() {\n    if(debug && hasConsole) {\n        console.log.apply(console, arguments);\n    }\n}\n\nfunction bemName(decl) {\n    typeof decl === 'string' && (decl = { block: decl });\n\n    return decl.block +\n        (decl.elem ? (ELEM_DELIM + decl.elem) : '') +\n        (decl.modName ? MOD_DELIM + decl.modName + MOD_DELIM + decl.modVal : '');\n}\n\nfunction bemParse(name) {\n    var bemitem = {};\n\n    name.split(ELEM_DELIM).forEach(function(item, i) {\n        var keys = [ i ? 'elem' : 'block', 'mod', 'val' ];\n\n        item.split(MOD_DELIM).forEach(function(part, j) {\n            bemitem[keys[j]] = part;\n        });\n    });\n\n    return bemitem;\n}\n\nfunction _pushStack(name) {\n    if(!name) return false;\n    return stack.push(name);\n}\n\nfunction _popStack() {\n    return stack.length && stack.pop();\n}\n\n\n/**\n * @constructor\n */\nfunction _i18n() {\n    this._lang = '';\n    this._prj = 'lego'; // FIXME: bem-bl?\n    this._keyset = '';\n    this._key = '';\n}\n\n_i18n.prototype = {\n\n    lang : function(name) {\n        this._lang = name;\n        return this;\n    },\n\n    project : function(name) {\n        this._prj = name;\n        return this;\n    },\n\n    keyset : function(name, saveCtx) {\n        saveCtx && _pushStack(this._keyset);\n\n        this._keyset = bemName(name);\n        return this;\n    },\n\n    key : function(name) {\n        this._key = name;\n        return this;\n    },\n\n    /**\n     * FIXME: Move legacy-syntax support into separat method\n     * @param {Object|Function} v\n     */\n    decl : function(v) {\n        var bemitem = bemParse(this._keyset),\n            // tanker legacy syntax\n            prj = bemitem.block === 'i-tanker' ? 'tanker' : this._prj,\n            keyset = bemitem.elem || this._keyset,\n            key = this._key;\n\n        prj = i18n[prj] || (i18n[prj] = {});\n        keyset = prj[keyset] || (prj[keyset] = {});\n        keyset[key] = typeof v === 'function' ? v : (function(p) { return (v); });\n\n        // `BEM.I18N` syntax\n        var l = cache[this._lang] || (cache[this._lang] = {}),\n            k = l[this._keyset] || (l[this._keyset] = {});\n\n        k[key] = v;\n    },\n\n    val : function(params, ctx) {\n        var value = cache[this._lang] && cache[this._lang][this._keyset],\n            debugString = 'keyset: ' + this._keyset + ' key: ' + this._key + ' (lang: ' + this._lang + ')';\n\n        if(!value) {\n            log('[I18N_NO_KEYSET] %s', debugString);\n            return '';\n        }\n\n        value = value[this._key];\n\n        var valtype = typeof value;\n        if(valtype === 'undefined') {\n            log(\"[I18N_NO_VALUE] %s\", debugString);\n            return '';\n        }\n\n        if(valtype === 'string') {\n            return value;\n        }\n\n        ctx || (ctx = this);\n        // TODO: try/catch\n        return value.call(ctx, params);\n    },\n\n    _cache : function() { return cache; }\n\n};\n\n/**\n * @namespace\n * @lends BEM.I18N\n */\nbem_.I18N = (function(base) {\n\n    /**\n     * Shortcut to get key value\n     *\n     * @param {String|Object} keyset\n     * @param {String} key\n     * @param {Object} [params]\n     * @returns {String}\n     */\n    var klass = function(keyset, key, params) {\n        return klass.keyset(keyset).key(key, params);\n    };\n\n    klass._proto = base;\n\n    /**\n     * @param {String} name\n     * @returns {BEM.I18N}\n     */\n    klass.project = function(name) {\n        this._proto.project(name);\n        return this;\n    };\n\n    /**\n     * @param {String} name\n     * @returns {BEM.I18N}\n     */\n    klass.keyset = function(name) {\n        this._proto.keyset(name, true);\n        return this;\n    };\n\n    /**\n     * @param {String} name Key name\n     * @param {Object} params\n     * @returns {String}\n     */\n    klass.key = function(name, params) {\n        var proto = this._proto,\n            result,\n            ksetRestored;\n\n        proto.lang(this._lang).key(name);\n\n        // TODO: kiss\n        result = proto.val.call(proto, params, klass);\n\n        // restoring keyset's context\n        // NOTE: should not save current ctx, `saveCtx = false`\n        ksetRestored = _popStack();\n        ksetRestored && proto.keyset(ksetRestored, false);\n\n        return result;\n    };\n\n    /**\n     * Declaration of translations\n     *\n     * @param {String|Object} bemitem\n     * @param {Object} keysets\n     * @param {Object} [params] declaration params\n     * @returns {BEM.I18N}\n     */\n    klass.decl = function(bemitem, keysets, params) {\n        var proto = this._proto,\n            k;\n\n        params || (params = {});\n        params.lang && proto.lang(params.lang);\n\n        proto.keyset(bemitem);\n\n        for(k in keysets) {\n            if(keysets.hasOwnProperty(k)) {\n                proto.key(k).decl(keysets[k]);\n            }\n        }\n\n        return this;\n    };\n\n    /**\n     * Get/set current language\n     *\n     * @param {String} [lang]\n     * @returns {String}\n     */\n    klass.lang = function(lang) {\n        typeof lang !== 'undefined' && (this._lang = lang);\n        return this._lang;\n    };\n\n    klass.debug = function(flag) {\n        debug = !!flag;\n    };\n\n    klass.lang(DEFAULT_LANG);\n\n    return klass;\n\n}(new _i18n()));\n\n})(this, typeof BEM === 'undefined' ? {} : BEM);\n\n"
    },
    "ru": {
        "human-date": {
            "H": "<i18n:param>count</i18n:param> ч",
            "M": "<i18n:param>count</i18n:param> мин",
            "d": "<i18n:param>count</i18n:param> д",
            "now": "сейчас",
            "today": "сегодня",
            "today-at": "сегодня в <i18n:param>time</i18n:param>",
            "tomorrow": "завтра",
            "tomorrow-at": "завтра в <i18n:param>time</i18n:param>",
            "yesterday": "вчера",
            "yesterday-at": "вчера в <i18n:param>time</i18n:param>"
        },
        "i-tanker__months": {
            "g1": "Января",
            "g10": "Октября",
            "g11": "Ноября",
            "g12": "Декабря",
            "g2": "Февраля",
            "g3": "Марта",
            "g4": "Апреля",
            "g5": "Мая",
            "g6": "Июня",
            "g7": "Июля",
            "g8": "Августа",
            "g9": "Сентября",
            "n1": "Январь",
            "n10": "Октябрь",
            "n11": "Ноябрь",
            "n12": "Декабрь",
            "n2": "Февраль",
            "n3": "Март",
            "n4": "Апрель",
            "n5": "Май",
            "n6": "Июнь",
            "n7": "Июль",
            "n8": "Август",
            "n9": "Сентябрь",
            "name": "<i18n:dynamic>\n   <i18n:js>\n       var month = i18n['tanker']['months'][(params['case'] || 'n') + params.month]();\n       return Boolean(params.lowercase) ? month.toLowerCase() : month;\n   </i18n:js>\n   <i18n:xsl>\n       <xsl:param name=\"month\"/>\n       <xsl:param name=\"case\" select=\"'n'\"/>\n       <xsl:param name=\"lowercase\" select=\"false()\"/>\n       <xsl:variable name=\"month-name\">\n           <xsl:choose>\n               <xsl:when test=\"$case = 'n'\">\n                   <xsl:choose>\n                       <xsl:when test=\"$month = 1\"><xsl:call-template name=\"i18n:tanker.months.n1\"/></xsl:when>\n                       <xsl:when test=\"$month = 2\"><xsl:call-template name=\"i18n:tanker.months.n2\"/></xsl:when>\n                       <xsl:when test=\"$month = 3\"><xsl:call-template name=\"i18n:tanker.months.n3\"/></xsl:when>\n                       <xsl:when test=\"$month = 4\"><xsl:call-template name=\"i18n:tanker.months.n4\"/></xsl:when>\n                       <xsl:when test=\"$month = 5\"><xsl:call-template name=\"i18n:tanker.months.n5\"/></xsl:when>\n                       <xsl:when test=\"$month = 6\"><xsl:call-template name=\"i18n:tanker.months.n6\"/></xsl:when>\n                       <xsl:when test=\"$month = 7\"><xsl:call-template name=\"i18n:tanker.months.n7\"/></xsl:when>\n                       <xsl:when test=\"$month = 8\"><xsl:call-template name=\"i18n:tanker.months.n8\"/></xsl:when>\n                       <xsl:when test=\"$month = 9\"><xsl:call-template name=\"i18n:tanker.months.n9\"/></xsl:when>\n                       <xsl:when test=\"$month = 10\"><xsl:call-template name=\"i18n:tanker.months.n10\"/></xsl:when>\n                       <xsl:when test=\"$month = 11\"><xsl:call-template name=\"i18n:tanker.months.n11\"/></xsl:when>\n                       <xsl:when test=\"$month = 12\"><xsl:call-template name=\"i18n:tanker.months.n12\"/></xsl:when>\n                   </xsl:choose>\n               </xsl:when>\n               <xsl:when test=\"$case = 'g'\">\n                   <xsl:choose>\n                       <xsl:when test=\"$month = 1\"><xsl:call-template name=\"i18n:tanker.months.g1\"/></xsl:when>\n                       <xsl:when test=\"$month = 2\"><xsl:call-template name=\"i18n:tanker.months.g2\"/></xsl:when>\n                       <xsl:when test=\"$month = 3\"><xsl:call-template name=\"i18n:tanker.months.g3\"/></xsl:when>\n                       <xsl:when test=\"$month = 4\"><xsl:call-template name=\"i18n:tanker.months.g4\"/></xsl:when>\n                       <xsl:when test=\"$month = 5\"><xsl:call-template name=\"i18n:tanker.months.g5\"/></xsl:when>\n                       <xsl:when test=\"$month = 6\"><xsl:call-template name=\"i18n:tanker.months.g6\"/></xsl:when>\n                       <xsl:when test=\"$month = 7\"><xsl:call-template name=\"i18n:tanker.months.g7\"/></xsl:when>\n                       <xsl:when test=\"$month = 8\"><xsl:call-template name=\"i18n:tanker.months.g8\"/></xsl:when>\n                       <xsl:when test=\"$month = 9\"><xsl:call-template name=\"i18n:tanker.months.g9\"/></xsl:when>\n                       <xsl:when test=\"$month = 10\"><xsl:call-template name=\"i18n:tanker.months.g10\"/></xsl:when>\n                       <xsl:when test=\"$month = 11\"><xsl:call-template name=\"i18n:tanker.months.g11\"/></xsl:when>\n                       <xsl:when test=\"$month = 12\"><xsl:call-template name=\"i18n:tanker.months.g12\"/></xsl:when>\n                   </xsl:choose>\n               </xsl:when>\n           </xsl:choose>\n       </xsl:variable>\n       <xsl:choose>\n           <xsl:when test=\"$lowercase\">\n               <xsl:value-of xmlns:x=\"http://www.yandex.ru/xscript\" select=\"x:tolower($month-name)\"/>\n           </xsl:when>\n           <xsl:otherwise>\n               <xsl:value-of select=\"$month-name\"/>\n           </xsl:otherwise>\n       </xsl:choose>\n   </i18n:xsl>\n   <i18n:tt2>\n       month_name = l10n('tanker.months.' _ (params.item('case') ? params.item('case') : 'n') _ params.month);\n       IF (params.lowercase); month_name FILTER lower; ELSE; month_name; END;\n   </i18n:tt2>\n</i18n:dynamic>",
            "short1": "янв",
            "short10": "окт",
            "short11": "ноя",
            "short12": "дек",
            "short2": "фев",
            "short3": "мар",
            "short4": "апр",
            "short5": "май",
            "short6": "июн",
            "short7": "июл",
            "short8": "авг",
            "short9": "сен"
        }
    },
    "en": {
        "human-date": {
            "H": "<i18n:param>count</i18n:param> hr",
            "M": "<i18n:param>count</i18n:param> min",
            "d": "<i18n:param>count</i18n:param> d",
            "now": "just now",
            "today": "today",
            "today-at": "today at <i18n:param>time</i18n:param>",
            "tomorrow": "tomorrow",
            "tomorrow-at": "tomorrow at <i18n:param>time</i18n:param>",
            "yesterday": "yesterday",
            "yesterday-at": "yesterday at <i18n:param>time</i18n:param>"
        },
        "i-tanker__months": {
            "g1": "January",
            "g10": "October",
            "g11": "November",
            "g12": "December",
            "g2": "February",
            "g3": "March",
            "g4": "April",
            "g5": "May",
            "g6": "June",
            "g7": "July",
            "g8": "August",
            "g9": "September",
            "n1": "January",
            "n10": "October",
            "n11": "November",
            "n12": "December",
            "n2": "February",
            "n3": "March",
            "n4": "April",
            "n5": "May",
            "n6": "June",
            "n7": "July",
            "n8": "August",
            "n9": "September",
            "name": "<i18n:dynamic>\n   <i18n:js>\n       var month = i18n['tanker']['months'][(params['case'] || 'n') + params.month]();\n       return Boolean(params.lowercase) ? month.toLowerCase() : month;\n   </i18n:js>\n   <i18n:xsl>\n       <xsl:param name=\"month\"/>\n       <xsl:param name=\"case\" select=\"'n'\"/>\n       <xsl:param name=\"lowercase\" select=\"false()\"/>\n       <xsl:variable name=\"month-name\">\n           <xsl:choose>\n               <xsl:when test=\"$case = 'n'\">\n                   <xsl:choose>\n                       <xsl:when test=\"$month = 1\"><xsl:call-template name=\"i18n:tanker.months.n1\"/></xsl:when>\n                       <xsl:when test=\"$month = 2\"><xsl:call-template name=\"i18n:tanker.months.n2\"/></xsl:when>\n                       <xsl:when test=\"$month = 3\"><xsl:call-template name=\"i18n:tanker.months.n3\"/></xsl:when>\n                       <xsl:when test=\"$month = 4\"><xsl:call-template name=\"i18n:tanker.months.n4\"/></xsl:when>\n                       <xsl:when test=\"$month = 5\"><xsl:call-template name=\"i18n:tanker.months.n5\"/></xsl:when>\n                       <xsl:when test=\"$month = 6\"><xsl:call-template name=\"i18n:tanker.months.n6\"/></xsl:when>\n                       <xsl:when test=\"$month = 7\"><xsl:call-template name=\"i18n:tanker.months.n7\"/></xsl:when>\n                       <xsl:when test=\"$month = 8\"><xsl:call-template name=\"i18n:tanker.months.n8\"/></xsl:when>\n                       <xsl:when test=\"$month = 9\"><xsl:call-template name=\"i18n:tanker.months.n9\"/></xsl:when>\n                       <xsl:when test=\"$month = 10\"><xsl:call-template name=\"i18n:tanker.months.n10\"/></xsl:when>\n                       <xsl:when test=\"$month = 11\"><xsl:call-template name=\"i18n:tanker.months.n11\"/></xsl:when>\n                       <xsl:when test=\"$month = 12\"><xsl:call-template name=\"i18n:tanker.months.n12\"/></xsl:when>\n                   </xsl:choose>\n               </xsl:when>\n               <xsl:when test=\"$case = 'g'\">\n                   <xsl:choose>\n                       <xsl:when test=\"$month = 1\"><xsl:call-template name=\"i18n:tanker.months.g1\"/></xsl:when>\n                       <xsl:when test=\"$month = 2\"><xsl:call-template name=\"i18n:tanker.months.g2\"/></xsl:when>\n                       <xsl:when test=\"$month = 3\"><xsl:call-template name=\"i18n:tanker.months.g3\"/></xsl:when>\n                       <xsl:when test=\"$month = 4\"><xsl:call-template name=\"i18n:tanker.months.g4\"/></xsl:when>\n                       <xsl:when test=\"$month = 5\"><xsl:call-template name=\"i18n:tanker.months.g5\"/></xsl:when>\n                       <xsl:when test=\"$month = 6\"><xsl:call-template name=\"i18n:tanker.months.g6\"/></xsl:when>\n                       <xsl:when test=\"$month = 7\"><xsl:call-template name=\"i18n:tanker.months.g7\"/></xsl:when>\n                       <xsl:when test=\"$month = 8\"><xsl:call-template name=\"i18n:tanker.months.g8\"/></xsl:when>\n                       <xsl:when test=\"$month = 9\"><xsl:call-template name=\"i18n:tanker.months.g9\"/></xsl:when>\n                       <xsl:when test=\"$month = 10\"><xsl:call-template name=\"i18n:tanker.months.g10\"/></xsl:when>\n                       <xsl:when test=\"$month = 11\"><xsl:call-template name=\"i18n:tanker.months.g11\"/></xsl:when>\n                       <xsl:when test=\"$month = 12\"><xsl:call-template name=\"i18n:tanker.months.g12\"/></xsl:when>\n                   </xsl:choose>\n               </xsl:when>\n           </xsl:choose>\n       </xsl:variable>\n       <xsl:choose>\n           <xsl:when test=\"$lowercase\">\n               <xsl:value-of xmlns:x=\"http://www.yandex.ru/xscript\" select=\"x:tolower($month-name)\"/>\n           </xsl:when>\n           <xsl:otherwise>\n               <xsl:value-of select=\"$month-name\"/>\n           </xsl:otherwise>\n       </xsl:choose>\n   </i18n:xsl>\n   <i18n:tt2>\n       month_name = l10n('tanker.months.' _ (params.item('case') ? params.item('case') : 'n') _ params.month);\n       IF (params.lowercase); month_name FILTER lower; ELSE; month_name; END;\n   </i18n:tt2>\n</i18n:dynamic>",
            "short1": "Jan",
            "short10": "Oct",
            "short11": "Nov",
            "short12": "Dec",
            "short2": "Feb",
            "short3": "Mar",
            "short4": "Apr",
            "short5": "May",
            "short6": "Jun",
            "short7": "Jul",
            "short8": "Aug",
            "short9": "Sep"
        }
    },
    "tr": {
        "human-date": {
            "H": "<i18n:param>count</i18n:param> s",
            "M": "<i18n:param>count</i18n:param> dk",
            "d": "<i18n:param>count</i18n:param> g",
            "now": "şimdi",
            "today": "bugün",
            "today-at": "bugün <i18n:param>time</i18n:param>",
            "tomorrow": "yarın",
            "tomorrow-at": "yarın <i18n:param>time</i18n:param>",
            "yesterday": "dün",
            "yesterday-at": "dün <i18n:param>time</i18n:param>"
        },
        "i-tanker__months": {
            "g1": "Ocak",
            "g10": "Ekim",
            "g11": "Kasım",
            "g12": "Aralık",
            "g2": "Şubat",
            "g3": "Mart",
            "g4": "Nisan",
            "g5": "Mayıs",
            "g6": "Haziran",
            "g7": "Temmuz",
            "g8": "Ağustos",
            "g9": "Eylül",
            "n1": "Ocak",
            "n10": "Ekim",
            "n11": "Kasım",
            "n12": "Aralık",
            "n2": "Şubat",
            "n3": "Mart",
            "n4": "Nisan",
            "n5": "Mayıs",
            "n6": "Haziran",
            "n7": "Temmuz",
            "n8": "Ağustos",
            "n9": "Eylül",
            "name": "<i18n:dynamic>\n   <i18n:js>\n       var month = i18n['tanker']['months'][(params['case'] || 'n') + params.month]();\n       return Boolean(params.lowercase) ? month.toLowerCase() : month;\n   </i18n:js>\n   <i18n:xsl>\n       <xsl:param name=\"month\"/>\n       <xsl:param name=\"case\" select=\"'n'\"/>\n       <xsl:param name=\"lowercase\" select=\"false()\"/>\n       <xsl:variable name=\"month-name\">\n           <xsl:choose>\n               <xsl:when test=\"$case = 'n'\">\n                   <xsl:choose>\n                       <xsl:when test=\"$month = 1\"><xsl:call-template name=\"i18n:tanker.months.n1\"/></xsl:when>\n                       <xsl:when test=\"$month = 2\"><xsl:call-template name=\"i18n:tanker.months.n2\"/></xsl:when>\n                       <xsl:when test=\"$month = 3\"><xsl:call-template name=\"i18n:tanker.months.n3\"/></xsl:when>\n                       <xsl:when test=\"$month = 4\"><xsl:call-template name=\"i18n:tanker.months.n4\"/></xsl:when>\n                       <xsl:when test=\"$month = 5\"><xsl:call-template name=\"i18n:tanker.months.n5\"/></xsl:when>\n                       <xsl:when test=\"$month = 6\"><xsl:call-template name=\"i18n:tanker.months.n6\"/></xsl:when>\n                       <xsl:when test=\"$month = 7\"><xsl:call-template name=\"i18n:tanker.months.n7\"/></xsl:when>\n                       <xsl:when test=\"$month = 8\"><xsl:call-template name=\"i18n:tanker.months.n8\"/></xsl:when>\n                       <xsl:when test=\"$month = 9\"><xsl:call-template name=\"i18n:tanker.months.n9\"/></xsl:when>\n                       <xsl:when test=\"$month = 10\"><xsl:call-template name=\"i18n:tanker.months.n10\"/></xsl:when>\n                       <xsl:when test=\"$month = 11\"><xsl:call-template name=\"i18n:tanker.months.n11\"/></xsl:when>\n                       <xsl:when test=\"$month = 12\"><xsl:call-template name=\"i18n:tanker.months.n12\"/></xsl:when>\n                   </xsl:choose>\n               </xsl:when>\n               <xsl:when test=\"$case = 'g'\">\n                   <xsl:choose>\n                       <xsl:when test=\"$month = 1\"><xsl:call-template name=\"i18n:tanker.months.g1\"/></xsl:when>\n                       <xsl:when test=\"$month = 2\"><xsl:call-template name=\"i18n:tanker.months.g2\"/></xsl:when>\n                       <xsl:when test=\"$month = 3\"><xsl:call-template name=\"i18n:tanker.months.g3\"/></xsl:when>\n                       <xsl:when test=\"$month = 4\"><xsl:call-template name=\"i18n:tanker.months.g4\"/></xsl:when>\n                       <xsl:when test=\"$month = 5\"><xsl:call-template name=\"i18n:tanker.months.g5\"/></xsl:when>\n                       <xsl:when test=\"$month = 6\"><xsl:call-template name=\"i18n:tanker.months.g6\"/></xsl:when>\n                       <xsl:when test=\"$month = 7\"><xsl:call-template name=\"i18n:tanker.months.g7\"/></xsl:when>\n                       <xsl:when test=\"$month = 8\"><xsl:call-template name=\"i18n:tanker.months.g8\"/></xsl:when>\n                       <xsl:when test=\"$month = 9\"><xsl:call-template name=\"i18n:tanker.months.g9\"/></xsl:when>\n                       <xsl:when test=\"$month = 10\"><xsl:call-template name=\"i18n:tanker.months.g10\"/></xsl:when>\n                       <xsl:when test=\"$month = 11\"><xsl:call-template name=\"i18n:tanker.months.g11\"/></xsl:when>\n                       <xsl:when test=\"$month = 12\"><xsl:call-template name=\"i18n:tanker.months.g12\"/></xsl:when>\n                   </xsl:choose>\n               </xsl:when>\n           </xsl:choose>\n       </xsl:variable>\n       <xsl:choose>\n           <xsl:when test=\"$lowercase\">\n               <xsl:value-of xmlns:x=\"http://www.yandex.ru/xscript\" select=\"x:tolower($month-name)\"/>\n           </xsl:when>\n           <xsl:otherwise>\n               <xsl:value-of select=\"$month-name\"/>\n           </xsl:otherwise>\n       </xsl:choose>\n   </i18n:xsl>\n   <i18n:tt2>\n       month_name = l10n('tanker.months.' _ (params.item('case') ? params.item('case') : 'n') _ params.month);\n       IF (params.lowercase); month_name FILTER lower; ELSE; month_name; END;\n   </i18n:tt2>\n</i18n:dynamic>",
            "short1": "Oca",
            "short10": "Eki",
            "short11": "Kas",
            "short12": "Ara",
            "short2": "Şub",
            "short3": "Mar",
            "short4": "Nis",
            "short5": "May",
            "short6": "Haz",
            "short7": "Tem",
            "short8": "Ağu",
            "short9": "Eyl"
        }
    }
})
