globalThis.process ??= {}; globalThis.process.env ??= {};
import '../chunks/neon_abyss_Dbu5ODZ7.mjs';
import '../chunks/phoenix_wright_ace_attorney_CcP1b8kE.mjs';
import '../chunks/phoenix_wright_ace_attorney_justice_for_all_RJJH5DY-.mjs';
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_a9s_z6v2.mjs';
import { $ as $$BaseLayout } from '../chunks/MarkdownPostLayout_Cnn4dejN.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "reviews";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex center"> <h2>404</h2> </div> ` })}`;
}, "C:/Users/willi/OneDrive/Desktop/NEW WEBSITE/NEW WEBSITE/src/pages/404.astro", void 0);

const $$file = "C:/Users/willi/OneDrive/Desktop/NEW WEBSITE/NEW WEBSITE/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
