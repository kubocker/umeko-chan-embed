import InformationBar from "../lib/InformationBar.svelte";


/**
 * ターゲット先
 */
const target = document.getElementById('umeko__informationBar')!;


/**
 * プロパティ群
 */
const text = target?.dataset.text;
const url = target?.dataset.url;
const category = target?.dataset.category;
const position = target?.dataset.position;


const app = new InformationBar({
  target,
  props: {
    text,
    url,
    category,
    position,
  }
})

export default app;
