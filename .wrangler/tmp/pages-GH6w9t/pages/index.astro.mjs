globalThis.process ??= {}; globalThis.process.env ??= {};
import '../chunks/neon_abyss_Dbu5ODZ7.mjs';
import '../chunks/phoenix_wright_ace_attorney_CcP1b8kE.mjs';
import '../chunks/phoenix_wright_ace_attorney_justice_for_all_RJJH5DY-.mjs';
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_a9s_z6v2.mjs';
/* empty css                                      */
import { $ as $$BaseLayout } from '../chunks/MarkdownPostLayout_Cnn4dejN.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const recentTitle = "neon abyss";
  const recentDate = "4/28/25";
  const recentDesc = "it's pretty good, and i'm perfectly okay with that!";
  const recentURL = "/posts/neon_abyss";
  const pageTitle = "home";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex center"> <h2>hello</h2> <div class="bottom"> <p>
hi hi hello! i am
<span class="bold">FUNKIRBO,</span>
a player of games!
<br> <br>
i like video games. a lot. i write reviews on here, then
				throw together video versions for youtube! you can check out
				the most recent one just below, or all of them in the
<a href="https://www.funkirbo.net/reviews/review_directory">
review directory
</a> </p> </div> </div> <div class="flex center"> <h2>recent review</h2> <div class="bottom"> <div class="bottom"> <p> <a${addAttribute(recentURL, "href")}>${recentTitle}</a><br> <span class="smaller">${recentDate}<br>${recentDesc}</span> </p> </div> </div> </div> <div class="flex center rows"> <div class="bottom"> <h3>socials</h3> <ul> <li class="nb"> <a href="https://backloggd.com/u/funkirbo/">
backloggd
</a> </li> <li class="nb"> <a href="https://twitter.com/funkirbo/">twitter</a> </li> <li class="nb"> <a href="https://bsky.app/profile/funkirbo.bsky.social">
bluesky
</a> </li> <li class="nb"> <a href="https://twitch.tv/funkirbo/">twitch</a> </li> <li class="nb bottom"> <a href="https://youtube.com/@funkirbo">youtube</a> </li> </ul> </div> </div> <div class="flex center"> <h2>my spreadsheet</h2> <div class="bottom"> <p>
basically this sheet has my collection, plus my notes on my
				finished games and stuff like that. it's not super
				interesting, and honestly most of the info is on my
				backloggd, but hey. if you want, it's there haha
</p> <p> <a href="https://docs.google.com/spreadsheets/d/1_Fm6rutdAl4gkdnQVCC6XJj9DMk3xo4alC3jTgTJgeo/edit?usp=sharing">
the spreadsheet
</a> </p> </div> </div> <div class="flex center"> <h2>i am chillin B)</h2> <div class="bottom"> <img src="../../public/kirby_chillin.png" style="max-width:100%;height:auto;margin-bottom:-4px;"> </div> </div> ` })}`;
}, "C:/Users/willi/OneDrive/Desktop/NEW WEBSITE/NEW WEBSITE/src/pages/index.astro", void 0);

const $$file = "C:/Users/willi/OneDrive/Desktop/NEW WEBSITE/NEW WEBSITE/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
