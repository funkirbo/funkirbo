// <define:__ROUTES__>
var define_ROUTES_default = {
  version: 1,
  include: [
    "/*"
  ],
  exclude: [
    "/_astro/*",
    "/cookiebox-reference.png",
    "/favicon.png",
    "/kirby_chillin.png",
    "/nekowebutton.jpg",
    "/site-thing.png",
    "/wave_haha.gif",
    "/fonts/Lexend-Light.ttf",
    "/fonts/Lexend-SemiBold.ttf"
  ]
};

// node_modules/wrangler/templates/pages-dev-pipeline.ts
import worker from "C:\\Users\\willi\\OneDrive\\Desktop\\NEW WEBSITE\\NEW WEBSITE\\.wrangler\\tmp\\pages-GH6w9t\\bundledWorker-0.8438434297563895.mjs";
import { isRoutingRuleMatch } from "C:\\Users\\willi\\OneDrive\\Desktop\\NEW WEBSITE\\NEW WEBSITE\\node_modules\\wrangler\\templates\\pages-dev-util.ts";
export * from "C:\\Users\\willi\\OneDrive\\Desktop\\NEW WEBSITE\\NEW WEBSITE\\.wrangler\\tmp\\pages-GH6w9t\\bundledWorker-0.8438434297563895.mjs";
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        const workerAsHandler = worker;
        if (workerAsHandler.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return workerAsHandler.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};
export {
  pages_dev_pipeline_default as default
};
//# sourceMappingURL=x0g6bfzpsln.js.map
