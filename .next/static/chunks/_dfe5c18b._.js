(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/ui/select.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Select": (()=>Select)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use clients";
;
;
const Select = (props)=>{
    const { label, value, options, onChange, className, selectClassname, noDefault = true, ...rest } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-1", className),
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "text-sm font-semibold",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 31,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    onChange: onChange,
                    value: value ?? "",
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(selectClassname, "disabled:!bg-gray-100 w-full px-3 py-2 border-input border rounded-md focus:outline-hidden custom-select appearence-none pr-12 bg-no-repeat"),
                    ...rest,
                    children: [
                        noDefault && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: "",
                            children: "Select"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/select.tsx",
                            lineNumber: 42,
                            columnNumber: 25
                        }, this),
                        options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: option.value,
                                children: option.label
                            }, option.value, false, {
                                fileName: "[project]/src/components/ui/select.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
};
_c = Select;
var _c;
__turbopack_context__.k.register(_c, "Select");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/config/endpoints.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "endpoints": (()=>endpoints)
});
const endpoints = {
    favourites: "/api/favourites",
    taxonomy: "/api/taxonomy"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/api-client.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "api": (()=>api)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/ky/distribution/index.js [app-client] (ecmascript) <locals>");
;
const api = {
    get: (url, opts)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].get(url, opts).json(),
    post: (url, opts)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].post(url, opts).json()
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/inventory/taxonomy-filters.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "TaxonomyFilters": (()=>TaxonomyFilters)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/endpoints.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api-client.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const TaxonomyFilters = (props)=>{
    _s();
    const { searchParams, handleChange } = props;
    // States for storing filter options
    const [makes, setMakes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [models, setModels] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [modelVariants, setModelVariants] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TaxonomyFilters.useEffect": ()=>{
            // Fetch filter options
            const fetchMakesOptions = {
                "TaxonomyFilters.useEffect.fetchMakesOptions": async ()=>{
                    try {
                        const params = new URLSearchParams();
                        for (const [key, value] of Object.entries(searchParams)){
                            if (value) params.set(key, value);
                        }
                        const url = new URL(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endpoints"].taxonomy, window.location.href);
                        url.search = params.toString();
                        const data = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(url.toString());
                        setMakes(data.makes);
                        setModels(data.models);
                        setModelVariants(data.modelVariants);
                    } catch (error) {
                        console.error("Failed to fetch taxonomy options:", error);
                    }
                }
            }["TaxonomyFilters.useEffect.fetchMakesOptions"];
            fetchMakesOptions();
        }
    }["TaxonomyFilters.useEffect"], [
        searchParams
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                label: "Make",
                name: "make",
                value: searchParams?.make,
                onChange: handleChange,
                options: makes
            }, void 0, false, {
                fileName: "[project]/src/components/inventory/taxonomy-filters.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                label: "Model",
                name: "model",
                value: searchParams?.model,
                onChange: handleChange,
                options: models,
                disabled: !models.length
            }, void 0, false, {
                fileName: "[project]/src/components/inventory/taxonomy-filters.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                label: "Model Variant",
                name: "modelVariant",
                value: searchParams?.modelVariant,
                onChange: handleChange,
                options: modelVariants,
                disabled: !modelVariants.length
            }, void 0, false, {
                fileName: "[project]/src/components/inventory/taxonomy-filters.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
_s(TaxonomyFilters, "g571gIzGng/OI0r2tKPbC7Kk3yk=");
_c = TaxonomyFilters;
var _c;
__turbopack_context__.k.register(_c, "TaxonomyFilters");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/homepage/homepage-filters.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "HomepageTaxonomyFilters": (()=>HomepageTaxonomyFilters)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/nuqs/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$inventory$2f$taxonomy$2d$filters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/inventory/taxonomy-filters.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const HomepageTaxonomyFilters = ({ searchParams })=>{
    _s();
    const [, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryStates"])({
        make: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAsString"].withDefault(""),
        model: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAsString"].withDefault(""),
        modelVariant: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAsString"].withDefault(""),
        minYear: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAsString"].withDefault(""),
        maxYear: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAsString"].withDefault(""),
        minPrice: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAsString"].withDefault(""),
        maxPrice: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAsString"].withDefault("")
    }, {
        shallow: false
    });
    const handlechange = async (e)=>{
        const { name, value } = e.target;
        switch(name){
            case "make":
                await setState({
                    make: value,
                    model: null,
                    modelVariant: null
                });
                break;
            case "model":
                await setState({
                    model: value,
                    modelVariant: null
                });
                break;
            default:
                await setState({
                    [name]: value
                });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$inventory$2f$taxonomy$2d$filters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TaxonomyFilters"], {
            handleChange: handlechange,
            searchParams: searchParams
        }, void 0, false, {
            fileName: "[project]/src/components/homepage/homepage-filters.tsx",
            lineNumber: 38,
            columnNumber: 13
        }, this)
    }, void 0, false);
};
_s(HomepageTaxonomyFilters, "avz3FuaZOSGr8C+q9AbJqmIaZOI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryStates"]
    ];
});
_c = HomepageTaxonomyFilters;
var _c;
__turbopack_context__.k.register(_c, "HomepageTaxonomyFilters");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/nuqs/dist/chunk-6YKAEXDW.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "FLUSH_RATE_LIMIT_MS": (()=>FLUSH_RATE_LIMIT_MS),
    "enqueueQueryStringUpdate": (()=>enqueueQueryStringUpdate),
    "getQueuedValue": (()=>getQueuedValue),
    "resetQueue": (()=>resetQueue),
    "safeParse": (()=>safeParse),
    "scheduleFlushToURL": (()=>scheduleFlushToURL)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$chunk$2d$5WWTJYGR$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/nuqs/dist/chunk-5WWTJYGR.js [app-client] (ecmascript)");
;
// src/utils.ts
function safeParse(parser, value, key) {
    try {
        return parser(value);
    } catch (error2) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$chunk$2d$5WWTJYGR$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warn"])("[nuqs] Error while parsing value `%s`: %O" + (key ? " (for key `%s`)" : ""), value, error2, key);
        return null;
    }
}
function getDefaultThrottle() {
    if (typeof window === "undefined") return 50;
    const isSafari = Boolean(window.GestureEvent);
    if (!isSafari) {
        return 50;
    }
    try {
        const match = navigator.userAgent?.match(/version\/([\d\.]+) safari/i);
        return parseFloat(match[1]) >= 17 ? 120 : 320;
    } catch  {
        return 320;
    }
}
// src/update-queue.ts
var FLUSH_RATE_LIMIT_MS = getDefaultThrottle();
var updateQueue = /* @__PURE__ */ new Map();
var queueOptions = {
    history: "replace",
    scroll: false,
    shallow: true,
    throttleMs: FLUSH_RATE_LIMIT_MS
};
var transitionsQueue = /* @__PURE__ */ new Set();
var lastFlushTimestamp = 0;
var flushPromiseCache = null;
function getQueuedValue(key) {
    return updateQueue.get(key);
}
function resetQueue() {
    updateQueue.clear();
    transitionsQueue.clear();
    queueOptions.history = "replace";
    queueOptions.scroll = false;
    queueOptions.shallow = true;
    queueOptions.throttleMs = FLUSH_RATE_LIMIT_MS;
}
function enqueueQueryStringUpdate(key, value, serialize, options) {
    const serializedOrNull = value === null ? null : serialize(value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$chunk$2d$5WWTJYGR$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"])("[nuqs queue] Enqueueing %s=%s %O", key, serializedOrNull, options);
    updateQueue.set(key, serializedOrNull);
    if (options.history === "push") {
        queueOptions.history = "push";
    }
    if (options.scroll) {
        queueOptions.scroll = true;
    }
    if (options.shallow === false) {
        queueOptions.shallow = false;
    }
    if (options.startTransition) {
        transitionsQueue.add(options.startTransition);
    }
    queueOptions.throttleMs = Math.max(options.throttleMs ?? FLUSH_RATE_LIMIT_MS, Number.isFinite(queueOptions.throttleMs) ? queueOptions.throttleMs : 0);
    return serializedOrNull;
}
function getSearchParamsSnapshotFromLocation() {
    return new URLSearchParams(location.search);
}
function scheduleFlushToURL({ getSearchParamsSnapshot = getSearchParamsSnapshotFromLocation, updateUrl, rateLimitFactor = 1 }) {
    if (flushPromiseCache === null) {
        flushPromiseCache = new Promise((resolve, reject)=>{
            if (!Number.isFinite(queueOptions.throttleMs)) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$chunk$2d$5WWTJYGR$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"])("[nuqs queue] Skipping flush due to throttleMs=Infinity");
                resolve(getSearchParamsSnapshot());
                setTimeout(()=>{
                    flushPromiseCache = null;
                }, 0);
                return;
            }
            function flushNow() {
                lastFlushTimestamp = performance.now();
                const [search, error2] = flushUpdateQueue({
                    updateUrl,
                    getSearchParamsSnapshot
                });
                if (error2 === null) {
                    resolve(search);
                } else {
                    reject(search);
                }
                flushPromiseCache = null;
            }
            function runOnNextTick() {
                const now = performance.now();
                const timeSinceLastFlush = now - lastFlushTimestamp;
                const throttleMs = queueOptions.throttleMs;
                const flushInMs = rateLimitFactor * Math.max(0, Math.min(throttleMs, throttleMs - timeSinceLastFlush));
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$chunk$2d$5WWTJYGR$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"])("[nuqs queue] Scheduling flush in %f ms. Throttled at %f ms", flushInMs, throttleMs);
                if (flushInMs === 0) {
                    flushNow();
                } else {
                    setTimeout(flushNow, flushInMs);
                }
            }
            setTimeout(runOnNextTick, 0);
        });
    }
    return flushPromiseCache;
}
function flushUpdateQueue({ updateUrl, getSearchParamsSnapshot }) {
    const search = getSearchParamsSnapshot();
    if (updateQueue.size === 0) {
        return [
            search,
            null
        ];
    }
    const items = Array.from(updateQueue.entries());
    const options = {
        ...queueOptions
    };
    const transitions = Array.from(transitionsQueue);
    resetQueue();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$chunk$2d$5WWTJYGR$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"])("[nuqs queue] Flushing queue %O with options %O", items, options);
    for (const [key, value] of items){
        if (value === null) {
            search.delete(key);
        } else {
            search.set(key, value);
        }
    }
    try {
        compose(transitions, ()=>{
            updateUrl(search, {
                history: options.history,
                scroll: options.scroll,
                shallow: options.shallow
            });
        });
        return [
            search,
            null
        ];
    } catch (err) {
        console.error((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$chunk$2d$5WWTJYGR$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["error"])(429), items.map(([key])=>key).join(), err);
        return [
            search,
            err
        ];
    }
}
function compose(fns, final) {
    const recursiveCompose = (index)=>{
        if (index === fns.length) {
            return final();
        }
        const fn = fns[index];
        if (!fn) {
            throw new Error("Invalid transition function");
        }
        fn(()=>recursiveCompose(index + 1));
    };
    recursiveCompose(0);
}
;
}}),
"[project]/node_modules/mitt/dist/mitt.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
function __TURBOPACK__default__export__(n) {
    return {
        all: n = n || new Map,
        on: function(t, e) {
            var i = n.get(t);
            i ? i.push(e) : n.set(t, [
                e
            ]);
        },
        off: function(t, e) {
            var i = n.get(t);
            i && (e ? i.splice(i.indexOf(e) >>> 0, 1) : n.set(t, []));
        },
        emit: function(t, e) {
            var i = n.get(t);
            i && i.slice().map(function(n) {
                n(e);
            }), (i = n.get("*")) && i.slice().map(function(n) {
                n(t, e);
            });
        }
    };
} //# sourceMappingURL=mitt.mjs.map
}}),
"[project]/node_modules/nuqs/dist/index.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createLoader": (()=>createLoader),
    "createParser": (()=>createParser),
    "createSerializer": (()=>createSerializer),
    "parseAsArrayOf": (()=>parseAsArrayOf),
    "parseAsBoolean": (()=>parseAsBoolean),
    "parseAsFloat": (()=>parseAsFloat),
    "parseAsHex": (()=>parseAsHex),
    "parseAsIndex": (()=>parseAsIndex),
    "parseAsInteger": (()=>parseAsInteger),
    "parseAsIsoDate": (()=>parseAsIsoDate),
    "parseAsIsoDateTime": (()=>parseAsIsoDateTime),
    "parseAsJson": (()=>parseAsJson),
    "parseAsNumberLiteral": (()=>parseAsNumberLiteral),
    "parseAsString": (()=>parseAsString),
    "parseAsStringEnum": (()=>parseAsStringEnum),
    "parseAsStringLiteral": (()=>parseAsStringLiteral),
    "parseAsTimestamp": (()=>parseAsTimestamp),
    "useQueryState": (()=>useQueryState),
    "useQueryStates": (()=>useQueryStates)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$chunk$2d$6YKAEXDW$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/nuqs/dist/chunk-6YKAEXDW.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$chunk$2d$5WWTJYGR$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/nuqs/dist/chunk-5WWTJYGR.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mitt$2f$dist$2f$mitt$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mitt/dist/mitt.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
// src/loader.ts
function createLoader(parsers, { urlKeys = {} } = {}) {
    function loadSearchParams(input) {
        if (input instanceof Promise) {
            return input.then((i)=>loadSearchParams(i));
        }
        const searchParams = extractSearchParams(input);
        const result = {};
        for (const [key, parser] of Object.entries(parsers)){
            const urlKey = urlKeys[key] ?? key;
            const value = searchParams.get(urlKey);
            result[key] = parser.parseServerSide(value ?? void 0);
        }
        return result;
    }
    return loadSearchParams;
}
function extractSearchParams(input) {
    try {
        if (input instanceof Request) {
            if (input.url) {
                return new URL(input.url).searchParams;
            } else {
                return new URLSearchParams();
            }
        }
        if (input instanceof URL) {
            return input.searchParams;
        }
        if (input instanceof URLSearchParams) {
            return input;
        }
        if (typeof input === "object") {
            const entries = Object.entries(input);
            const searchParams = new URLSearchParams();
            for (const [key, value] of entries){
                if (Array.isArray(value)) {
                    for (const v of value){
                        searchParams.append(key, v);
                    }
                } else if (value !== void 0) {
                    searchParams.set(key, value);
                }
            }
            return searchParams;
        }
        if (typeof input === "string") {
            if ("canParse" in URL && URL.canParse(input)) {
                return new URL(input).searchParams;
            }
            return new URLSearchParams(input);
        }
    } catch (e) {
        return new URLSearchParams();
    }
    return new URLSearchParams();
}
// src/parsers.ts
function createParser(parser) {
    function parseServerSideNullable(value) {
        if (typeof value === "undefined") {
            return null;
        }
        let str = "";
        if (Array.isArray(value)) {
            if (value[0] === void 0) {
                return null;
            }
            str = value[0];
        }
        if (typeof value === "string") {
            str = value;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$chunk$2d$6YKAEXDW$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeParse"])(parser.parse, str);
    }
    return {
        eq: (a, b)=>a === b,
        ...parser,
        parseServerSide: parseServerSideNullable,
        withDefault (defaultValue) {
            return {
                ...this,
                defaultValue,
                parseServerSide (value) {
                    return parseServerSideNullable(value) ?? defaultValue;
                }
            };
        },
        withOptions (options) {
            return {
                ...this,
                ...options
            };
        }
    };
}
var parseAsString = createParser({
    parse: (v)=>v,
    serialize: (v)=>`${v}`
});
var parseAsInteger = createParser({
    parse: (v)=>{
        const int = parseInt(v);
        if (Number.isNaN(int)) {
            return null;
        }
        return int;
    },
    serialize: (v)=>Math.round(v).toFixed()
});
var parseAsIndex = createParser({
    parse: (v)=>{
        const int = parseAsInteger.parse(v);
        if (int === null) {
            return null;
        }
        return int - 1;
    },
    serialize: (v)=>parseAsInteger.serialize(v + 1)
});
var parseAsHex = createParser({
    parse: (v)=>{
        const int = parseInt(v, 16);
        if (Number.isNaN(int)) {
            return null;
        }
        return int;
    },
    serialize: (v)=>{
        const hex = Math.round(v).toString(16);
        return hex.padStart(hex.length + hex.length % 2, "0");
    }
});
var parseAsFloat = createParser({
    parse: (v)=>{
        const float = parseFloat(v);
        if (Number.isNaN(float)) {
            return null;
        }
        return float;
    },
    serialize: (v)=>v.toString()
});
var parseAsBoolean = createParser({
    parse: (v)=>v === "true",
    serialize: (v)=>v ? "true" : "false"
});
function compareDates(a, b) {
    return a.valueOf() === b.valueOf();
}
var parseAsTimestamp = createParser({
    parse: (v)=>{
        const ms = parseInt(v);
        if (Number.isNaN(ms)) {
            return null;
        }
        return new Date(ms);
    },
    serialize: (v)=>v.valueOf().toString(),
    eq: compareDates
});
var parseAsIsoDateTime = createParser({
    parse: (v)=>{
        const date = new Date(v);
        if (Number.isNaN(date.valueOf())) {
            return null;
        }
        return date;
    },
    serialize: (v)=>v.toISOString(),
    eq: compareDates
});
var parseAsIsoDate = createParser({
    parse: (v)=>{
        const date = new Date(v.slice(0, 10));
        if (Number.isNaN(date.valueOf())) {
            return null;
        }
        return date;
    },
    serialize: (v)=>v.toISOString().slice(0, 10),
    eq: compareDates
});
function parseAsStringEnum(validValues) {
    return createParser({
        parse: (query)=>{
            const asEnum = query;
            if (validValues.includes(asEnum)) {
                return asEnum;
            }
            return null;
        },
        serialize: (value)=>value.toString()
    });
}
function parseAsStringLiteral(validValues) {
    return createParser({
        parse: (query)=>{
            const asConst = query;
            if (validValues.includes(asConst)) {
                return asConst;
            }
            return null;
        },
        serialize: (value)=>value.toString()
    });
}
function parseAsNumberLiteral(validValues) {
    return createParser({
        parse: (query)=>{
            const asConst = parseFloat(query);
            if (validValues.includes(asConst)) {
                return asConst;
            }
            return null;
        },
        serialize: (value)=>value.toString()
    });
}
function parseAsJson(runtimeParser) {
    return createParser({
        parse: (query)=>{
            try {
                const obj = JSON.parse(query);
                return runtimeParser(obj);
            } catch  {
                return null;
            }
        },
        serialize: (value)=>JSON.stringify(value),
        eq (a, b) {
            return a === b || JSON.stringify(a) === JSON.stringify(b);
        }
    });
}
function parseAsArrayOf(itemParser, separator = ",") {
    const itemEq = itemParser.eq ?? ((a, b)=>a === b);
    const encodedSeparator = encodeURIComponent(separator);
    return createParser({
        parse: (query)=>{
            if (query === "") {
                return [];
            }
            return query.split(separator).map((item, index)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$chunk$2d$6YKAEXDW$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeParse"])(itemParser.parse, item.replaceAll(encodedSeparator, separator), `[${index}]`)).filter((value)=>value !== null && value !== void 0);
        },
        serialize: (values)=>values.map((value)=>{
                const str = itemParser.serialize ? itemParser.serialize(value) : String(value);
                return str.replaceAll(separator, encodedSeparator);
            }).join(separator),
        eq (a, b) {
            if (a === b) {
                return true;
            }
            if (a.length !== b.length) {
                return false;
            }
            return a.every((value, index)=>itemEq(value, b[index]));
        }
    });
}
// src/serializer.ts
function createSerializer(parsers, { clearOnDefault = true, urlKeys = {} } = {}) {
    function serialize(arg1BaseOrValues, arg2values = {}) {
        const [base, search] = isBase(arg1BaseOrValues) ? splitBase(arg1BaseOrValues) : [
            "",
            new URLSearchParams()
        ];
        const values = isBase(arg1BaseOrValues) ? arg2values : arg1BaseOrValues;
        if (values === null) {
            for(const key in parsers){
                const urlKey = urlKeys[key] ?? key;
                search.delete(urlKey);
            }
            return base + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$chunk$2d$5WWTJYGR$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderQueryString"])(search);
        }
        for(const key in parsers){
            const parser = parsers[key];
            const value = values[key];
            if (!parser || value === void 0) {
                continue;
            }
            const urlKey = urlKeys[key] ?? key;
            const isMatchingDefault = parser.defaultValue !== void 0 && (parser.eq ?? ((a, b)=>a === b))(value, parser.defaultValue);
            if (value === null || (parser.clearOnDefault ?? clearOnDefault ?? true) && isMatchingDefault) {
                search.delete(urlKey);
            } else {
                search.set(urlKey, parser.serialize(value));
            }
        }
        return base + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$chunk$2d$5WWTJYGR$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderQueryString"])(search);
    }
    return serialize;
}
function isBase(base) {
    return typeof base === "string" || base instanceof URLSearchParams || base instanceof URL;
}
function splitBase(base) {
    if (typeof base === "string") {
        const [path = "", ...search] = base.split("?");
        return [
            path,
            new URLSearchParams(search.join("?"))
        ];
    } else if (base instanceof URLSearchParams) {
        return [
            "",
            new URLSearchParams(base)
        ];
    } else {
        return [
            base.origin + base.pathname,
            new URLSearchParams(base.searchParams)
        ];
    }
}
var emitter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mitt$2f$dist$2f$mitt$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
// src/useQueryState.ts
function useQueryState(key, { history = "replace", shallow = true, scroll = false, throttleMs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$chunk$2d$6YKAEXDW$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FLUSH_RATE_LIMIT_MS"], parse = (x)=>x, serialize = String, eq = (a, b)=>a === b, defaultValue = void 0, clearOnDefault = true, startTransition } = {
    history: "replace",
    scroll: false,
    shallow: true,
    throttleMs: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$chunk$2d$6YKAEXDW$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FLUSH_RATE_LIMIT_MS"],
    parse: (x)=>x,
    serialize: String,
    eq: (a, b)=>a === b,
    clearOnDefault: true,
    defaultValue: void 0
}) {
    const adapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$chunk$2d$5WWTJYGR$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdapter"])();
    const initialSearchParams = adapter.searchParams;
    const queryRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(initialSearchParams?.get(key) ?? null);
    const [internalState, setInternalState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useQueryState.useState": ()=>{
            const queuedQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$chunk$2d$6YKAEXDW$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getQueuedValue"])(key);
            const query = queuedQuery === void 0 ? initialSearchParams?.get(key) ?? null : queuedQuery;
            return query === null ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$chunk$2d$6YKAEXDW$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeParse"])(parse, query, key);
        }
    }["useQueryState.useState"]);
    const stateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(internalState);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$chunk$2d$5WWTJYGR$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"])("[nuqs `%s`] render - state: %O, iSP: %s", key, internalState, initialSearchParams?.get(key) ?? null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useQueryState.useEffect": ()=>{
            const query = initialSearchParams?.get(key) ?? null;
            if (query === queryRef.current) {
                return;
            }
            const state = query === null ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$chunk$2d$6YKAEXDW$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeParse"])(parse, query, key);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$chunk$2d$5WWTJYGR$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"])("[nuqs `%s`] syncFromUseSearchParams %O", key, state);
            stateRef.current = state;
            queryRef.current = query;
            setInternalState(state);
        }
    }["useQueryState.useEffect"], [
        initialSearchParams?.get(key),
        key
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useQueryState.useEffect": ()=>{
            function updateInternalState({ state, query }) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$chunk$2d$5WWTJYGR$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"])("[nuqs `%s`] updateInternalState %O", key, state);
                stateRef.current = state;
                queryRef.current = query;
                setInternalState(state);
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$chunk$2d$5WWTJYGR$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"])("[nuqs `%s`] subscribing to sync", key);
            emitter.on(key, updateInternalState);
            return ({
                "useQueryState.useEffect": ()=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$chunk$2d$5WWTJYGR$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"])("[nuqs `%s`] unsubscribing from sync", key);
                    emitter.off(key, updateInternalState);
                }
            })["useQueryState.useEffect"];
        }
    }["useQueryState.useEffect"], [
        key
    ]);
    const update = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useQueryState.useCallback[update]": (stateUpdater, options = {})=>{
            let newValue = isUpdaterFunction(stateUpdater) ? stateUpdater(stateRef.current ?? defaultValue ?? null) : stateUpdater;
            if ((options.clearOnDefault ?? clearOnDefault) && newValue !== null && defaultValue !== void 0 && eq(newValue, defaultValue)) {
                newValue = null;
            }
            const query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$chunk$2d$6YKAEXDW$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enqueueQueryStringUpdate"])(key, newValue, serialize, {
                // Call-level options take precedence over hook declaration options.
                history: options.history ?? history,
                shallow: options.shallow ?? shallow,
                scroll: options.scroll ?? scroll,
                throttleMs: options.throttleMs ?? throttleMs,
                startTransition: options.startTransition ?? startTransition
            });
            emitter.emit(key, {
                state: newValue,
                query
            });
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$chunk$2d$6YKAEXDW$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scheduleFlushToURL"])(adapter);
        }
    }["useQueryState.useCallback[update]"], [
        key,
        history,
        shallow,
        scroll,
        throttleMs,
        startTransition,
        adapter.updateUrl,
        adapter.getSearchParamsSnapshot,
        adapter.rateLimitFactor
    ]);
    return [
        internalState ?? defaultValue ?? null,
        update
    ];
}
function isUpdaterFunction(stateUpdater) {
    return typeof stateUpdater === "function";
}
var defaultUrlKeys = {};
function useQueryStates(keyMap, { history = "replace", scroll = false, shallow = true, throttleMs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$chunk$2d$6YKAEXDW$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FLUSH_RATE_LIMIT_MS"], clearOnDefault = true, startTransition, urlKeys = defaultUrlKeys } = {}) {
    const stateKeys = Object.keys(keyMap).join(",");
    const resolvedUrlKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useQueryStates.useMemo[resolvedUrlKeys]": ()=>Object.fromEntries(Object.keys(keyMap).map({
                "useQueryStates.useMemo[resolvedUrlKeys]": (key)=>[
                        key,
                        urlKeys[key] ?? key
                    ]
            }["useQueryStates.useMemo[resolvedUrlKeys]"]))
    }["useQueryStates.useMemo[resolvedUrlKeys]"], [
        stateKeys,
        JSON.stringify(urlKeys)
    ]);
    const adapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$chunk$2d$5WWTJYGR$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdapter"])();
    const initialSearchParams = adapter.searchParams;
    const queryRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const defaultValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useQueryStates.useMemo[defaultValues]": ()=>Object.fromEntries(Object.keys(keyMap).map({
                "useQueryStates.useMemo[defaultValues]": (key)=>[
                        key,
                        keyMap[key].defaultValue ?? null
                    ]
            }["useQueryStates.useMemo[defaultValues]"]))
    }["useQueryStates.useMemo[defaultValues]"], [
        Object.values(keyMap).map({
            "useQueryStates.useMemo[defaultValues]": ({ defaultValue })=>defaultValue
        }["useQueryStates.useMemo[defaultValues]"]).join(",")
    ]);
    const [internalState, setInternalState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useQueryStates.useState": ()=>{
            const source = initialSearchParams ?? new URLSearchParams();
            return parseMap(keyMap, urlKeys, source).state;
        }
    }["useQueryStates.useState"]);
    const stateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(internalState);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$chunk$2d$5WWTJYGR$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"])("[nuq+ `%s`] render - state: %O, iSP: %s", stateKeys, internalState, initialSearchParams);
    if (Object.keys(queryRef.current).join("&") !== Object.values(resolvedUrlKeys).join("&")) {
        const { state, hasChanged } = parseMap(keyMap, urlKeys, initialSearchParams, queryRef.current, stateRef.current);
        if (hasChanged) {
            stateRef.current = state;
            setInternalState(state);
        }
        queryRef.current = Object.fromEntries(Object.values(resolvedUrlKeys).map((urlKey)=>[
                urlKey,
                initialSearchParams?.get(urlKey) ?? null
            ]));
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useQueryStates.useEffect": ()=>{
            const { state, hasChanged } = parseMap(keyMap, urlKeys, initialSearchParams, queryRef.current, stateRef.current);
            if (hasChanged) {
                stateRef.current = state;
                setInternalState(state);
            }
        }
    }["useQueryStates.useEffect"], [
        Object.values(resolvedUrlKeys).map({
            "useQueryStates.useEffect": (key)=>`${key}=${initialSearchParams?.get(key)}`
        }["useQueryStates.useEffect"]).join("&")
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useQueryStates.useEffect": ()=>{
            function updateInternalState(state) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$chunk$2d$5WWTJYGR$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"])("[nuq+ `%s`] updateInternalState %O", stateKeys, state);
                stateRef.current = state;
                setInternalState(state);
            }
            const handlers = Object.keys(keyMap).reduce({
                "useQueryStates.useEffect.handlers": (handlers2, stateKey)=>{
                    handlers2[stateKey] = ({
                        "useQueryStates.useEffect.handlers": ({ state, query })=>{
                            const { defaultValue } = keyMap[stateKey];
                            const urlKey = resolvedUrlKeys[stateKey];
                            stateRef.current = {
                                ...stateRef.current,
                                [stateKey]: state ?? defaultValue ?? null
                            };
                            queryRef.current[urlKey] = query;
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$chunk$2d$5WWTJYGR$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"])("[nuq+ `%s`] Cross-hook key sync %s: %O (default: %O). Resolved: %O", stateKeys, urlKey, state, defaultValue, stateRef.current);
                            updateInternalState(stateRef.current);
                        }
                    })["useQueryStates.useEffect.handlers"];
                    return handlers2;
                }
            }["useQueryStates.useEffect.handlers"], {});
            for (const stateKey of Object.keys(keyMap)){
                const urlKey = resolvedUrlKeys[stateKey];
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$chunk$2d$5WWTJYGR$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"])("[nuq+ `%s`] Subscribing to sync for `%s`", stateKeys, urlKey);
                emitter.on(urlKey, handlers[stateKey]);
            }
            return ({
                "useQueryStates.useEffect": ()=>{
                    for (const stateKey of Object.keys(keyMap)){
                        const urlKey = resolvedUrlKeys[stateKey];
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$chunk$2d$5WWTJYGR$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"])("[nuq+ `%s`] Unsubscribing to sync for `%s`", stateKeys, urlKey);
                        emitter.off(urlKey, handlers[stateKey]);
                    }
                }
            })["useQueryStates.useEffect"];
        }
    }["useQueryStates.useEffect"], [
        stateKeys,
        resolvedUrlKeys
    ]);
    const update = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useQueryStates.useCallback[update]": (stateUpdater, callOptions = {})=>{
            const nullMap = Object.fromEntries(Object.keys(keyMap).map({
                "useQueryStates.useCallback[update].nullMap": (key)=>[
                        key,
                        null
                    ]
            }["useQueryStates.useCallback[update].nullMap"]));
            const newState = typeof stateUpdater === "function" ? stateUpdater(applyDefaultValues(stateRef.current, defaultValues)) ?? nullMap : stateUpdater ?? nullMap;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$chunk$2d$5WWTJYGR$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"])("[nuq+ `%s`] setState: %O", stateKeys, newState);
            for (let [stateKey, value] of Object.entries(newState)){
                const parser = keyMap[stateKey];
                const urlKey = resolvedUrlKeys[stateKey];
                if (!parser) {
                    continue;
                }
                if ((callOptions.clearOnDefault ?? parser.clearOnDefault ?? clearOnDefault) && value !== null && parser.defaultValue !== void 0 && (parser.eq ?? ({
                    "useQueryStates.useCallback[update]": (a, b)=>a === b
                })["useQueryStates.useCallback[update]"])(value, parser.defaultValue)) {
                    value = null;
                }
                const query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$chunk$2d$6YKAEXDW$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enqueueQueryStringUpdate"])(urlKey, value, parser.serialize ?? String, {
                    // Call-level options take precedence over individual parser options
                    // which take precedence over global options
                    history: callOptions.history ?? parser.history ?? history,
                    shallow: callOptions.shallow ?? parser.shallow ?? shallow,
                    scroll: callOptions.scroll ?? parser.scroll ?? scroll,
                    throttleMs: callOptions.throttleMs ?? parser.throttleMs ?? throttleMs,
                    startTransition: callOptions.startTransition ?? parser.startTransition ?? startTransition
                });
                emitter.emit(urlKey, {
                    state: value,
                    query
                });
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$chunk$2d$6YKAEXDW$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scheduleFlushToURL"])(adapter);
        }
    }["useQueryStates.useCallback[update]"], [
        stateKeys,
        history,
        shallow,
        scroll,
        throttleMs,
        startTransition,
        resolvedUrlKeys,
        adapter.updateUrl,
        adapter.getSearchParamsSnapshot,
        adapter.rateLimitFactor,
        defaultValues
    ]);
    const outputState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useQueryStates.useMemo[outputState]": ()=>applyDefaultValues(internalState, defaultValues)
    }["useQueryStates.useMemo[outputState]"], [
        internalState,
        defaultValues
    ]);
    return [
        outputState,
        update
    ];
}
function parseMap(keyMap, urlKeys, searchParams, cachedQuery, cachedState) {
    let hasChanged = false;
    const state = Object.keys(keyMap).reduce((out, stateKey)=>{
        const urlKey = urlKeys?.[stateKey] ?? stateKey;
        const { parse } = keyMap[stateKey];
        const queuedQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$chunk$2d$6YKAEXDW$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getQueuedValue"])(urlKey);
        const query = queuedQuery === void 0 ? searchParams?.get(urlKey) ?? null : queuedQuery;
        if (cachedQuery && cachedState && (cachedQuery[urlKey] ?? null) === query) {
            out[stateKey] = cachedState[stateKey] ?? null;
            return out;
        }
        hasChanged = true;
        const value = query === null ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nuqs$2f$dist$2f$chunk$2d$6YKAEXDW$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeParse"])(parse, query, stateKey);
        out[stateKey] = value ?? null;
        if (cachedQuery) {
            cachedQuery[urlKey] = query;
        }
        return out;
    }, {});
    if (!hasChanged) {
        const keyMapKeys = Object.keys(keyMap);
        const cachedStateKeys = Object.keys(cachedState ?? {});
        hasChanged = keyMapKeys.length !== cachedStateKeys.length || keyMapKeys.some((key)=>!cachedStateKeys.includes(key));
    }
    return {
        state,
        hasChanged
    };
}
function applyDefaultValues(state, defaults) {
    return Object.fromEntries(Object.keys(state).map((key)=>[
            key,
            state[key] ?? defaults[key] ?? null
        ]));
}
;
}}),
"[project]/node_modules/ky/distribution/errors/HTTPError.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "HTTPError": (()=>HTTPError)
});
class HTTPError extends Error {
    response;
    request;
    options;
    constructor(response, request, options){
        const code = response.status || response.status === 0 ? response.status : '';
        const title = response.statusText || '';
        const status = `${code} ${title}`.trim();
        const reason = status ? `status code ${status}` : 'an unknown error';
        super(`Request failed with ${reason}: ${request.method} ${request.url}`);
        this.name = 'HTTPError';
        this.response = response;
        this.request = request;
        this.options = options;
    }
} //# sourceMappingURL=HTTPError.js.map
}}),
"[project]/node_modules/ky/distribution/errors/TimeoutError.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "TimeoutError": (()=>TimeoutError)
});
class TimeoutError extends Error {
    request;
    constructor(request){
        super(`Request timed out: ${request.method} ${request.url}`);
        this.name = 'TimeoutError';
        this.request = request;
    }
} //# sourceMappingURL=TimeoutError.js.map
}}),
"[project]/node_modules/ky/distribution/core/constants.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "kyOptionKeys": (()=>kyOptionKeys),
    "maxSafeTimeout": (()=>maxSafeTimeout),
    "requestMethods": (()=>requestMethods),
    "requestOptionsRegistry": (()=>requestOptionsRegistry),
    "responseTypes": (()=>responseTypes),
    "stop": (()=>stop),
    "supportsAbortController": (()=>supportsAbortController),
    "supportsFormData": (()=>supportsFormData),
    "supportsRequestStreams": (()=>supportsRequestStreams),
    "supportsResponseStreams": (()=>supportsResponseStreams),
    "usualFormBoundarySize": (()=>usualFormBoundarySize)
});
const supportsRequestStreams = (()=>{
    let duplexAccessed = false;
    let hasContentType = false;
    const supportsReadableStream = typeof globalThis.ReadableStream === 'function';
    const supportsRequest = typeof globalThis.Request === 'function';
    if (supportsReadableStream && supportsRequest) {
        try {
            hasContentType = new globalThis.Request('https://empty.invalid', {
                body: new globalThis.ReadableStream(),
                method: 'POST',
                // @ts-expect-error - Types are outdated.
                get duplex () {
                    duplexAccessed = true;
                    return 'half';
                }
            }).headers.has('Content-Type');
        } catch (error) {
            // QQBrowser on iOS throws "unsupported BodyInit type" error (see issue #581)
            if (error instanceof Error && error.message === 'unsupported BodyInit type') {
                return false;
            }
            throw error;
        }
    }
    return duplexAccessed && !hasContentType;
})();
const supportsAbortController = typeof globalThis.AbortController === 'function';
const supportsResponseStreams = typeof globalThis.ReadableStream === 'function';
const supportsFormData = typeof globalThis.FormData === 'function';
const requestMethods = [
    'get',
    'post',
    'put',
    'patch',
    'head',
    'delete'
];
const validate = ()=>undefined;
validate();
const responseTypes = {
    json: 'application/json',
    text: 'text/*',
    formData: 'multipart/form-data',
    arrayBuffer: '*/*',
    blob: '*/*'
};
const maxSafeTimeout = 2_147_483_647;
const usualFormBoundarySize = new TextEncoder().encode('------WebKitFormBoundaryaxpyiPgbbPti10Rw').length;
const stop = Symbol('stop');
const kyOptionKeys = {
    json: true,
    parseJson: true,
    stringifyJson: true,
    searchParams: true,
    prefixUrl: true,
    retry: true,
    timeout: true,
    hooks: true,
    throwHttpErrors: true,
    onDownloadProgress: true,
    onUploadProgress: true,
    fetch: true
};
const requestOptionsRegistry = {
    method: true,
    headers: true,
    body: true,
    mode: true,
    credentials: true,
    cache: true,
    redirect: true,
    referrer: true,
    referrerPolicy: true,
    integrity: true,
    keepalive: true,
    signal: true,
    window: true,
    dispatcher: true,
    duplex: true,
    priority: true
}; //# sourceMappingURL=constants.js.map
}}),
"[project]/node_modules/ky/distribution/utils/body.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getBodySize": (()=>getBodySize),
    "streamRequest": (()=>streamRequest),
    "streamResponse": (()=>streamResponse)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ky/distribution/core/constants.js [app-client] (ecmascript)");
;
const getBodySize = (body)=>{
    if (!body) {
        return 0;
    }
    if (body instanceof FormData) {
        // This is an approximation, as FormData size calculation is not straightforward
        let size = 0;
        for (const [key, value] of body){
            size += __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usualFormBoundarySize"];
            size += new TextEncoder().encode(`Content-Disposition: form-data; name="${key}"`).length;
            size += typeof value === 'string' ? new TextEncoder().encode(value).length : value.size;
        }
        return size;
    }
    if (body instanceof Blob) {
        return body.size;
    }
    if (body instanceof ArrayBuffer) {
        return body.byteLength;
    }
    if (typeof body === 'string') {
        return new TextEncoder().encode(body).length;
    }
    if (body instanceof URLSearchParams) {
        return new TextEncoder().encode(body.toString()).length;
    }
    if ('byteLength' in body) {
        return body.byteLength;
    }
    if (typeof body === 'object' && body !== null) {
        try {
            const jsonString = JSON.stringify(body);
            return new TextEncoder().encode(jsonString).length;
        } catch  {
            return 0;
        }
    }
    return 0; // Default case, unable to determine size
};
const streamResponse = (response, onDownloadProgress)=>{
    const totalBytes = Number(response.headers.get('content-length')) || 0;
    let transferredBytes = 0;
    if (response.status === 204) {
        if (onDownloadProgress) {
            onDownloadProgress({
                percent: 1,
                totalBytes,
                transferredBytes
            }, new Uint8Array());
        }
        return new Response(null, {
            status: response.status,
            statusText: response.statusText,
            headers: response.headers
        });
    }
    return new Response(new ReadableStream({
        async start (controller) {
            const reader = response.body.getReader();
            if (onDownloadProgress) {
                onDownloadProgress({
                    percent: 0,
                    transferredBytes: 0,
                    totalBytes
                }, new Uint8Array());
            }
            async function read() {
                const { done, value } = await reader.read();
                if (done) {
                    controller.close();
                    return;
                }
                if (onDownloadProgress) {
                    transferredBytes += value.byteLength;
                    const percent = totalBytes === 0 ? 0 : transferredBytes / totalBytes;
                    onDownloadProgress({
                        percent,
                        transferredBytes,
                        totalBytes
                    }, value);
                }
                controller.enqueue(value);
                await read();
            }
            await read();
        }
    }), {
        status: response.status,
        statusText: response.statusText,
        headers: response.headers
    });
};
const streamRequest = (request, onUploadProgress)=>{
    const totalBytes = getBodySize(request.body);
    let transferredBytes = 0;
    return new Request(request, {
        // @ts-expect-error - Types are outdated.
        duplex: 'half',
        body: new ReadableStream({
            async start (controller) {
                const reader = request.body instanceof ReadableStream ? request.body.getReader() : new Response('').body.getReader();
                async function read() {
                    const { done, value } = await reader.read();
                    if (done) {
                        // Ensure 100% progress is reported when the upload is complete
                        if (onUploadProgress) {
                            onUploadProgress({
                                percent: 1,
                                transferredBytes,
                                totalBytes: Math.max(totalBytes, transferredBytes)
                            }, new Uint8Array());
                        }
                        controller.close();
                        return;
                    }
                    transferredBytes += value.byteLength;
                    let percent = totalBytes === 0 ? 0 : transferredBytes / totalBytes;
                    if (totalBytes < transferredBytes || percent === 1) {
                        percent = 0.99;
                    }
                    if (onUploadProgress) {
                        onUploadProgress({
                            percent: Number(percent.toFixed(2)),
                            transferredBytes,
                            totalBytes
                        }, value);
                    }
                    controller.enqueue(value);
                    await read();
                }
                await read();
            }
        })
    });
}; //# sourceMappingURL=body.js.map
}}),
"[project]/node_modules/ky/distribution/utils/is.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// eslint-disable-next-line @typescript-eslint/ban-types
__turbopack_context__.s({
    "isObject": (()=>isObject)
});
const isObject = (value)=>value !== null && typeof value === 'object'; //# sourceMappingURL=is.js.map
}}),
"[project]/node_modules/ky/distribution/utils/merge.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "deepMerge": (()=>deepMerge),
    "mergeHeaders": (()=>mergeHeaders),
    "mergeHooks": (()=>mergeHooks),
    "validateAndMerge": (()=>validateAndMerge)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ky/distribution/utils/is.js [app-client] (ecmascript)");
;
const validateAndMerge = (...sources)=>{
    for (const source of sources){
        if ((!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(source) || Array.isArray(source)) && source !== undefined) {
            throw new TypeError('The `options` argument must be an object');
        }
    }
    return deepMerge({}, ...sources);
};
const mergeHeaders = (source1 = {}, source2 = {})=>{
    const result = new globalThis.Headers(source1);
    const isHeadersInstance = source2 instanceof globalThis.Headers;
    const source = new globalThis.Headers(source2);
    for (const [key, value] of source.entries()){
        if (isHeadersInstance && value === 'undefined' || value === undefined) {
            result.delete(key);
        } else {
            result.set(key, value);
        }
    }
    return result;
};
function newHookValue(original, incoming, property) {
    return Object.hasOwn(incoming, property) && incoming[property] === undefined ? [] : deepMerge(original[property] ?? [], incoming[property] ?? []);
}
const mergeHooks = (original = {}, incoming = {})=>({
        beforeRequest: newHookValue(original, incoming, 'beforeRequest'),
        beforeRetry: newHookValue(original, incoming, 'beforeRetry'),
        afterResponse: newHookValue(original, incoming, 'afterResponse'),
        beforeError: newHookValue(original, incoming, 'beforeError')
    });
const deepMerge = (...sources)=>{
    let returnValue = {};
    let headers = {};
    let hooks = {};
    for (const source of sources){
        if (Array.isArray(source)) {
            if (!Array.isArray(returnValue)) {
                returnValue = [];
            }
            returnValue = [
                ...returnValue,
                ...source
            ];
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(source)) {
            for (let [key, value] of Object.entries(source)){
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(value) && key in returnValue) {
                    value = deepMerge(returnValue[key], value);
                }
                returnValue = {
                    ...returnValue,
                    [key]: value
                };
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(source.hooks)) {
                hooks = mergeHooks(hooks, source.hooks);
                returnValue.hooks = hooks;
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(source.headers)) {
                headers = mergeHeaders(headers, source.headers);
                returnValue.headers = headers;
            }
        }
    }
    return returnValue;
}; //# sourceMappingURL=merge.js.map
}}),
"[project]/node_modules/ky/distribution/utils/normalize.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "normalizeRequestMethod": (()=>normalizeRequestMethod),
    "normalizeRetryOptions": (()=>normalizeRetryOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ky/distribution/core/constants.js [app-client] (ecmascript)");
;
const normalizeRequestMethod = (input)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["requestMethods"].includes(input) ? input.toUpperCase() : input;
const retryMethods = [
    'get',
    'put',
    'head',
    'delete',
    'options',
    'trace'
];
const retryStatusCodes = [
    408,
    413,
    429,
    500,
    502,
    503,
    504
];
const retryAfterStatusCodes = [
    413,
    429,
    503
];
const defaultRetryOptions = {
    limit: 2,
    methods: retryMethods,
    statusCodes: retryStatusCodes,
    afterStatusCodes: retryAfterStatusCodes,
    maxRetryAfter: Number.POSITIVE_INFINITY,
    backoffLimit: Number.POSITIVE_INFINITY,
    delay: (attemptCount)=>0.3 * 2 ** (attemptCount - 1) * 1000
};
const normalizeRetryOptions = (retry = {})=>{
    if (typeof retry === 'number') {
        return {
            ...defaultRetryOptions,
            limit: retry
        };
    }
    if (retry.methods && !Array.isArray(retry.methods)) {
        throw new Error('retry.methods must be an array');
    }
    if (retry.statusCodes && !Array.isArray(retry.statusCodes)) {
        throw new Error('retry.statusCodes must be an array');
    }
    return {
        ...defaultRetryOptions,
        ...retry
    };
}; //# sourceMappingURL=normalize.js.map
}}),
"[project]/node_modules/ky/distribution/utils/timeout.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>timeout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$errors$2f$TimeoutError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ky/distribution/errors/TimeoutError.js [app-client] (ecmascript)");
;
async function timeout(request, init, abortController, options) {
    return new Promise((resolve, reject)=>{
        const timeoutId = setTimeout(()=>{
            if (abortController) {
                abortController.abort();
            }
            reject(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$errors$2f$TimeoutError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TimeoutError"](request));
        }, options.timeout);
        void options.fetch(request, init).then(resolve).catch(reject).then(()=>{
            clearTimeout(timeoutId);
        });
    });
} //# sourceMappingURL=timeout.js.map
}}),
"[project]/node_modules/ky/distribution/utils/delay.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// https://github.com/sindresorhus/delay/tree/ab98ae8dfcb38e1593286c94d934e70d14a4e111
__turbopack_context__.s({
    "default": (()=>delay)
});
async function delay(ms, { signal }) {
    return new Promise((resolve, reject)=>{
        if (signal) {
            signal.throwIfAborted();
            signal.addEventListener('abort', abortHandler, {
                once: true
            });
        }
        function abortHandler() {
            clearTimeout(timeoutId);
            reject(signal.reason);
        }
        const timeoutId = setTimeout(()=>{
            signal?.removeEventListener('abort', abortHandler);
            resolve();
        }, ms);
    });
} //# sourceMappingURL=delay.js.map
}}),
"[project]/node_modules/ky/distribution/utils/options.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "findUnknownOptions": (()=>findUnknownOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ky/distribution/core/constants.js [app-client] (ecmascript)");
;
const findUnknownOptions = (request, options)=>{
    const unknownOptions = {};
    for(const key in options){
        if (!(key in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["requestOptionsRegistry"]) && !(key in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kyOptionKeys"]) && !(key in request)) {
            unknownOptions[key] = options[key];
        }
    }
    return unknownOptions;
}; //# sourceMappingURL=options.js.map
}}),
"[project]/node_modules/ky/distribution/core/Ky.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Ky": (()=>Ky)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$errors$2f$HTTPError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ky/distribution/errors/HTTPError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$errors$2f$TimeoutError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ky/distribution/errors/TimeoutError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$body$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ky/distribution/utils/body.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ky/distribution/utils/merge.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ky/distribution/utils/normalize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$timeout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ky/distribution/utils/timeout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$delay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ky/distribution/utils/delay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$options$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ky/distribution/utils/options.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ky/distribution/core/constants.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
class Ky {
    static create(input, options) {
        const ky = new Ky(input, options);
        const function_ = async ()=>{
            if (typeof ky._options.timeout === 'number' && ky._options.timeout > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maxSafeTimeout"]) {
                throw new RangeError(`The \`timeout\` option cannot be greater than ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maxSafeTimeout"]}`);
            }
            // Delay the fetch so that body method shortcuts can set the Accept header
            await Promise.resolve();
            // Before using ky.request, _fetch clones it and saves the clone for future retries to use.
            // If retry is not needed, close the cloned request's ReadableStream for memory safety.
            let response = await ky._fetch();
            for (const hook of ky._options.hooks.afterResponse){
                // eslint-disable-next-line no-await-in-loop
                const modifiedResponse = await hook(ky.request, ky._options, ky._decorateResponse(response.clone()));
                if (modifiedResponse instanceof globalThis.Response) {
                    response = modifiedResponse;
                }
            }
            ky._decorateResponse(response);
            if (!response.ok && ky._options.throwHttpErrors) {
                let error = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$errors$2f$HTTPError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HTTPError"](response, ky.request, ky._options);
                for (const hook of ky._options.hooks.beforeError){
                    // eslint-disable-next-line no-await-in-loop
                    error = await hook(error);
                }
                throw error;
            }
            // If `onDownloadProgress` is passed, it uses the stream API internally
            if (ky._options.onDownloadProgress) {
                if (typeof ky._options.onDownloadProgress !== 'function') {
                    throw new TypeError('The `onDownloadProgress` option must be a function');
                }
                if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsResponseStreams"]) {
                    throw new Error('Streams are not supported in your environment. `ReadableStream` is missing.');
                }
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$body$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["streamResponse"])(response.clone(), ky._options.onDownloadProgress);
            }
            return response;
        };
        const isRetriableMethod = ky._options.retry.methods.includes(ky.request.method.toLowerCase());
        const result = (isRetriableMethod ? ky._retry(function_) : function_()).finally(async ()=>{
            // Now that we know a retry is not needed, close the ReadableStream of the cloned request.
            if (!ky.request.bodyUsed) {
                await ky.request.body?.cancel();
            }
        });
        for (const [type, mimeType] of Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["responseTypes"])){
            result[type] = async ()=>{
                // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
                ky.request.headers.set('accept', ky.request.headers.get('accept') || mimeType);
                const response = await result;
                if (type === 'json') {
                    if (response.status === 204) {
                        return '';
                    }
                    const arrayBuffer = await response.clone().arrayBuffer();
                    const responseSize = arrayBuffer.byteLength;
                    if (responseSize === 0) {
                        return '';
                    }
                    if (options.parseJson) {
                        return options.parseJson(await response.text());
                    }
                }
                return response[type]();
            };
        }
        return result;
    }
    request;
    abortController;
    _retryCount = 0;
    _input;
    _options;
    // eslint-disable-next-line complexity
    constructor(input, options = {}){
        this._input = input;
        this._options = {
            ...options,
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeHeaders"])(this._input.headers, options.headers),
            hooks: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeHooks"])({
                beforeRequest: [],
                beforeRetry: [],
                beforeError: [],
                afterResponse: []
            }, options.hooks),
            method: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeRequestMethod"])(options.method ?? this._input.method ?? 'GET'),
            // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
            prefixUrl: String(options.prefixUrl || ''),
            retry: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeRetryOptions"])(options.retry),
            throwHttpErrors: options.throwHttpErrors !== false,
            timeout: options.timeout ?? 10_000,
            fetch: options.fetch ?? globalThis.fetch.bind(globalThis)
        };
        if (typeof this._input !== 'string' && !(this._input instanceof URL || this._input instanceof globalThis.Request)) {
            throw new TypeError('`input` must be a string, URL, or Request');
        }
        if (this._options.prefixUrl && typeof this._input === 'string') {
            if (this._input.startsWith('/')) {
                throw new Error('`input` must not begin with a slash when using `prefixUrl`');
            }
            if (!this._options.prefixUrl.endsWith('/')) {
                this._options.prefixUrl += '/';
            }
            this._input = this._options.prefixUrl + this._input;
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsAbortController"]) {
            const originalSignal = this._options.signal ?? this._input.signal;
            this.abortController = new globalThis.AbortController();
            this._options.signal = originalSignal ? AbortSignal.any([
                originalSignal,
                this.abortController.signal
            ]) : this.abortController.signal;
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsRequestStreams"]) {
            // @ts-expect-error - Types are outdated.
            this._options.duplex = 'half';
        }
        if (this._options.json !== undefined) {
            this._options.body = this._options.stringifyJson?.(this._options.json) ?? JSON.stringify(this._options.json);
            this._options.headers.set('content-type', this._options.headers.get('content-type') ?? 'application/json');
        }
        this.request = new globalThis.Request(this._input, this._options);
        if (this._options.searchParams) {
            // eslint-disable-next-line unicorn/prevent-abbreviations
            const textSearchParams = typeof this._options.searchParams === 'string' ? this._options.searchParams.replace(/^\?/, '') : new URLSearchParams(this._options.searchParams).toString();
            // eslint-disable-next-line unicorn/prevent-abbreviations
            const searchParams = '?' + textSearchParams;
            const url = this.request.url.replace(/(?:\?.*?)?(?=#|$)/, searchParams);
            // To provide correct form boundary, Content-Type header should be deleted each time when new Request instantiated from another one
            if ((__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsFormData"] && this._options.body instanceof globalThis.FormData || this._options.body instanceof URLSearchParams) && !(this._options.headers && this._options.headers['content-type'])) {
                this.request.headers.delete('content-type');
            }
            // The spread of `this.request` is required as otherwise it misses the `duplex` option for some reason and throws.
            this.request = new globalThis.Request(new globalThis.Request(url, {
                ...this.request
            }), this._options);
        }
        // If `onUploadProgress` is passed, it uses the stream API internally
        if (this._options.onUploadProgress) {
            if (typeof this._options.onUploadProgress !== 'function') {
                throw new TypeError('The `onUploadProgress` option must be a function');
            }
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsRequestStreams"]) {
                throw new Error('Request streams are not supported in your environment. The `duplex` option for `Request` is not available.');
            }
            const originalBody = this.request.body;
            if (originalBody) {
                this.request = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$body$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["streamRequest"])(this.request, this._options.onUploadProgress);
            }
        }
    }
    _calculateRetryDelay(error) {
        this._retryCount++;
        if (this._retryCount > this._options.retry.limit || error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$errors$2f$TimeoutError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TimeoutError"]) {
            throw error;
        }
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$errors$2f$HTTPError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HTTPError"]) {
            if (!this._options.retry.statusCodes.includes(error.response.status)) {
                throw error;
            }
            const retryAfter = error.response.headers.get('Retry-After') ?? error.response.headers.get('RateLimit-Reset') ?? error.response.headers.get('X-RateLimit-Reset') // GitHub
             ?? error.response.headers.get('X-Rate-Limit-Reset'); // Twitter
            if (retryAfter && this._options.retry.afterStatusCodes.includes(error.response.status)) {
                let after = Number(retryAfter) * 1000;
                if (Number.isNaN(after)) {
                    after = Date.parse(retryAfter) - Date.now();
                } else if (after >= Date.parse('2024-01-01')) {
                    // A large number is treated as a timestamp (fixed threshold protects against clock skew)
                    after -= Date.now();
                }
                const max = this._options.retry.maxRetryAfter ?? after;
                return after < max ? after : max;
            }
            if (error.response.status === 413) {
                throw error;
            }
        }
        const retryDelay = this._options.retry.delay(this._retryCount);
        return Math.min(this._options.retry.backoffLimit, retryDelay);
    }
    _decorateResponse(response) {
        if (this._options.parseJson) {
            response.json = async ()=>this._options.parseJson(await response.text());
        }
        return response;
    }
    async _retry(function_) {
        try {
            return await function_();
        } catch (error) {
            const ms = Math.min(this._calculateRetryDelay(error), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maxSafeTimeout"]);
            if (this._retryCount < 1) {
                throw error;
            }
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$delay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ms, {
                signal: this._options.signal
            });
            for (const hook of this._options.hooks.beforeRetry){
                // eslint-disable-next-line no-await-in-loop
                const hookResult = await hook({
                    request: this.request,
                    options: this._options,
                    error: error,
                    retryCount: this._retryCount
                });
                // If `stop` is returned from the hook, the retry process is stopped
                if (hookResult === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stop"]) {
                    return;
                }
            }
            return this._retry(function_);
        }
    }
    async _fetch() {
        for (const hook of this._options.hooks.beforeRequest){
            // eslint-disable-next-line no-await-in-loop
            const result = await hook(this.request, this._options);
            if (result instanceof Request) {
                this.request = result;
                break;
            }
            if (result instanceof Response) {
                return result;
            }
        }
        const nonRequestOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$options$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findUnknownOptions"])(this.request, this._options);
        // Cloning is done here to prepare in advance for retries
        const mainRequest = this.request;
        this.request = mainRequest.clone();
        if (this._options.timeout === false) {
            return this._options.fetch(mainRequest, nonRequestOptions);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$timeout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mainRequest, nonRequestOptions, this.abortController, this._options);
    }
} //# sourceMappingURL=Ky.js.map
}}),
"[project]/node_modules/ky/distribution/index.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*! MIT License © Sindre Sorhus */ __turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$Ky$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ky/distribution/core/Ky.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ky/distribution/core/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ky/distribution/utils/merge.js [app-client] (ecmascript)");
;
;
;
const createInstance = (defaults)=>{
    // eslint-disable-next-line @typescript-eslint/promise-function-async
    const ky = (input, options)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$Ky$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ky"].create(input, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateAndMerge"])(defaults, options));
    for (const method of __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["requestMethods"]){
        // eslint-disable-next-line @typescript-eslint/promise-function-async
        ky[method] = (input, options)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$Ky$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ky"].create(input, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateAndMerge"])(defaults, options, {
                method
            }));
    }
    ky.create = (newDefaults)=>createInstance((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateAndMerge"])(newDefaults));
    ky.extend = (newDefaults)=>{
        if (typeof newDefaults === 'function') {
            newDefaults = newDefaults(defaults ?? {});
        }
        return createInstance((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateAndMerge"])(defaults, newDefaults));
    };
    ky.stop = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stop"];
    return ky;
};
const ky = createInstance();
const __TURBOPACK__default__export__ = ky;
;
;
 //# sourceMappingURL=index.js.map
}}),
}]);

//# sourceMappingURL=_dfe5c18b._.js.map