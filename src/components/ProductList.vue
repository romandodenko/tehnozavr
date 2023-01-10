<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable max-len -->
<template>
  <ul class="catalog__list">
    <li class="catalog__item" v-for="( product, index ) in product" :key="index">
    <ProductsItem :product="product" />
  </li>
  </ul>
</template>

<script>

import ProductsItem from './ProductItem.vue';

export default {
  components: {
    ProductsItem,
  },
  props: ['product'],
};
</script>
