<template>
  <div class="grid gap-x-8 grid-cols-3" >
    <ProductCard v-for="(product,index) in products" :key="index" :name="product.name" :des="product.des" :price="product.price">
      <template #footer>
        <button class="bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
      </template>  
    </ProductCard>

  </div>

  
</template>
<script>
import ProductCard from './cards/productCard.vue';

export default {
    components:{
        ProductCard
    },
  data() {
    return {
      products: [
        {
          name: "Wireless Headphones",
          des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          price: 49.99,
        },
        {
          name: "Smartphone",
          des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          price: 699.99,
        },
        {
          name: "Laptop",
          des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          price: 999.99,
        },
        {
          name: "Wireless Headphones",
          des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          price: 49.99,
        },
        {
          name: "Wireless Headphones",
          des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          price: 49.99,
        },
        {
          name: "Wireless Headphones",
          des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          price: 49.99,
        },
      ],
    };
  },
};
</script>
