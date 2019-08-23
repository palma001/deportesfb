<template>
  <div id="home">
    <iframe data-aa="1231421" src="//ad.a-ads.com/1231421?size=336x280" scrolling="no" style="width:336px; height:280px; border:0px; padding:0; overflow:hidden" allowtransparency="true"></iframe>
    <articles>
      <banner />
    </articles>

    <about />

    <subscribe />

    <social />
  </div>
</template>

<script>
export default {
  name: 'Home',

  components: {
    About: () => import('@/components/home/About'),
    Articles: () => import('@/components/home/Articles'),
    Banner: () => import('@/components/home/Banner'),
    Social: () => import('@/components/home/Social'),
    Subscribe: () => import('@/components/home/Subscribe')
  }
}
</script>
