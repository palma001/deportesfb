<template>
  <div id="home">
    <center>
      <iframe data-aa="1231421" src="//ad.a-ads.com/1231421?size=728x90" scrolling="no" style="width:728px; height:90px; border:0px; padding:0; overflow:hidden" allowtransparency="true"></iframe>
    </center>
    <articles>
      <banner />
    </articles>

    <about />

    <subscribe />

    <social />
    <a href="https://publipaid.com/r5OSE8"><img src="https://cdn.publipaid.com/static/banners/es/publipaid-g-468x60.gif"></a>
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
