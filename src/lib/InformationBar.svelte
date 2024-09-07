<script lang="ts">

  export let text: string = '';
  export let url: string = '';
  export let category: string = 'primary';
  export let position: string = 'fixed';

</script>

<h-information-bar
  text={text}
  url={url}
  category={category}
  position={position}
></h-information-bar>