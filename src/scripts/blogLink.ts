import FixedBanner from "../lib/FixedBanner.svelte";
import BlogLink from "../lib/BlogLink.svelte";


/**
 * ターゲット先
 */
const target = document.getElementById('umeko__blogLink')!;


/**
 * プロパティ群
 */
const url = target.dataset.url;



const app = new BlogLink({
  target,
  props: {
    url,
  }
})


export default app;
