import { defineStore } from 'pinia';

export const useProductStore = defineStore('Product', {
    state: () => ({
      count: 0  
    })
});
