globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, m as maybeRenderHead, a as renderTemplate, r as renderComponent, d as createAstro, e as renderHead, f as renderSlot, b as addAttribute } from './astro/server_a9s_z6v2.mjs';
/* empty css                              */

const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex center smaller" style="padding-bottom: 10px;"> <h1 class="main_page">funkirbo talks games</h1> <div> <ul class="nav"> <li class="nav bold"> <a class="nav" href="/">home</a> </li> <li class="nav bold"> <a class="nav" href="/review_directory">
reviews
</a> </li> </ul> </div> </div>`;
}, "C:/Users/willi/OneDrive/Desktop/NEW WEBSITE/NEW WEBSITE/src/components/navigation.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header> <nav> ${renderComponent($$result, "Navigation", $$Navigation, {})} </nav> </header>`;
}, "C:/Users/willi/OneDrive/Desktop/NEW WEBSITE/NEW WEBSITE/src/components/header.astro", void 0);

const $$Astro$1 = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { pageTitle } = Astro2.props;
  return renderTemplate`<html> <head><meta charset="utf-8"><title>${pageTitle}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/willi/OneDrive/Desktop/NEW WEBSITE/NEW WEBSITE/src/layouts/BaseLayout.astro", void 0);

const $$Astro = createAstro();
const $$MarkdownPostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarkdownPostLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": frontmatter.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex center"> <h2>${frontmatter.title}</h2> <p class="smaller center" style="text-align:center;">${frontmatter.release}</p> <div> ${renderSlot($$result2, $$slots["default"])} </div> <p style="text-align:center;"><span class="bold">${frontmatter.score}/10</span> played on ${frontmatter.platform} <br> <a${addAttribute(frontmatter.video, "href")}>video review</a> <br> <span class="smaller">${frontmatter.date}</span></p> </div> ` })}`;
}, "C:/Users/willi/OneDrive/Desktop/NEW WEBSITE/NEW WEBSITE/src/layouts/MarkdownPostLayout.astro", void 0);

export { $$BaseLayout as $, $$MarkdownPostLayout as a };
