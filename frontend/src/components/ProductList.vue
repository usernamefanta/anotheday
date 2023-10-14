<template>
    <div>
        <h2>Products</h2>
        <ul>
            <li v-for="product in products" :key="product._id">
                {{ product.name }} - ${{ product.price }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: [],
        };
    },
    mounted() {
        this.fetchProducts();
    },
    methods: {
        async fetchProducts() {
            try {
                const response = await this.$axios.get('/api/products');
                this.products = response.data;
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        },
    },
};
</script>
