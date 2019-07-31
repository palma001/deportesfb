<template>
  <h1>{{this.$route.path.split('/').filter(element => { return element !== '' })}}</h1>
</template>
