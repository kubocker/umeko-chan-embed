import FixedBanner from "../lib/FixedBanner.svelte";


/**
 * ターゲット先
 */
const target = document.getElementById('umeko__fixedBanner')!;


/**
 * プロパティ群
 */
const imageUrl = target?.dataset.imageUrl;
const url = target?.dataset.url;
const text = target?.dataset.text;
const width = target?.dataset.width;
const position = target?.dataset.position;



const app = new FixedBanner({
  target,
  props: {
    imageUrl,
    url,
    text,
    width,
    position,
  }
})


export default app;
