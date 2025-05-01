globalThis.process ??= {}; globalThis.process.env ??= {};
import { _ as __vite_glob_0_0 } from '../chunks/neon_abyss_Dbu5ODZ7.mjs';
import { _ as __vite_glob_0_1 } from '../chunks/phoenix_wright_ace_attorney_CcP1b8kE.mjs';
import { _ as __vite_glob_0_2 } from '../chunks/phoenix_wright_ace_attorney_justice_for_all_RJJH5DY-.mjs';
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_a9s_z6v2.mjs';
import { $ as $$BaseLayout } from '../chunks/MarkdownPostLayout_Cnn4dejN.mjs';
export { renderers } from '../renderers.mjs';

const $$ReviewDirectory = createComponent(($$result, $$props, $$slots) => {
  const allPosts = Object.values([__vite_glob_0_0,__vite_glob_0_1,__vite_glob_0_2]);
  const pageTitle = "reviews";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex center"> <h2>reviews</h2> <div class="bottom"> <p>these are my reviews, sorted alphabetically!</p> </div> </div> <div class="flex center"> ${allPosts.map((post) => renderTemplate`<div class="bottom"><p><a${addAttribute(post.url, "href")}>${post.frontmatter.title}</a><br><span class="smaller">${post.frontmatter.date}<br>${post.frontmatter.description}</span></p></div>`)} </div> ` })}`;
}, "C:/Users/willi/OneDrive/Desktop/NEW WEBSITE/NEW WEBSITE/src/pages/review_directory.astro", void 0);

const $$file = "C:/Users/willi/OneDrive/Desktop/NEW WEBSITE/NEW WEBSITE/src/pages/review_directory.astro";
const $$url = "/review_directory";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$ReviewDirectory,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
