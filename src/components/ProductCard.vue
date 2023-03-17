<template>
  <div class="card px-[20px] mx-auto justify-center w-full flex flex-wrap items-top mt-[60px]">
    <div v-for="product in products" :key="product"
      class="card-details bg-[#fff] rounded-[8px] mb-[30px] mr-[50px] border border-blue-900 px-[6px] pt-[30px] pb-[8px] shadow-xl w-[20%]">
      <router-link :to="{ name: 'ProductDetails', params: { id: product.id } }">
        <div class="card-image">
          <img :src="product.images[0]" class="w-full h-[100px]" alt="image" />
        </div>
        <div class="font-[300] mb-[8px] text-[17px]">
          <span class="font-[600] text-[20px]">Brand:</span> {{ product.brand }}
        </div>
        <p class="text-[17px] font-[400] text-gray-400">{{ product.title }}</p>
        <div
          class="relative bg-[blue] text-[#fff] py-[6px] px-[20px] text-center w-fit mt-[10px] bottom-[0px] font-[600]">$
          {{ product.price }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ProductCard",
  created() {
    this.getProducts()
  },
  data() {
    return {
      products: [],
    }
  },
  methods: {
    async getProducts() {
      try {
        const res = await axios.get("http://dummyjson.com/products");
        console.log(res.data.products)
        this.products = res.data.products
      } catch (err) {
        console.log(err)
      }
    },
  },
};
</script>
