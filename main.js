var app3 = new Vue({
  el: '#app',
  data: {
    title: 'Áo thun nam thể thao hàng VNXK vải dày mịn - Vải Đốm',
    url: 'https://vuejs.org/v2/guide/instance.html',
    target: '_blank',
    price: 20000,
    sale: 0.2,
    indexProduct: 1,
    cartNumber: 0,
    listProduct: [
      {
        images: './images/black.jpg',
        quantity: 2,
        color: 'Màu đen'
      },
      {
        images: './images/red.jpg',
        quantity: 0,
        color: 'Màu đỏ'
      },
      {
        images: './images/blue.jpg',
        quantity: 0,
        color: 'Màu xanh'
      }
    ],
    listDesc: [
      'Chất liệu: polyester và thun',
      'Thoát mồ hôi tốt',
      'Áo thun cổ tròn thể thao Hiye chuyên được may từ chất liệu nilon thoáng mát',
      'Kết hợp thêm sợi thun tạo độ co giãn giúp người tiêu dùng thoải mái khi mặc',
      'Chất liệu: polyester và thun'
    ],
    description: '<p>Mô tả: Áo thun cổ tròn thể&nbsp;thao Hiye chuyên được may từ chất liệu nilon thoáng mát và thoát mồ hôi tốt, kết hợp thêm sợi thun tạo độ co giãn giúp người tiêu dùng thoải mái khi mặc</p>'
  },
  methods: {
    isActive(index) {
      return {
        active: this.indexProduct === index
      }
    },
    chooseColor(e, index) {
      console.log(e.target);
      this.indexProduct = index
    },
    handleAddToCart(e) {
      console.log(e.target);
      if (this.cartNumber + 1 > this.getProduct.quantity) {
        alert('So luong san pham khong du!');
      } else {
        this.cartNumber++;
      }
    }
  },
  computed: {
    formatOriginalPrice() {
      var number = this.price;
      return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
    },
    formatSalePrice() {
      var number = this.price - this.price * this.sale;
      return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
    },
    getProduct() {
      let index = this.indexProduct;
      return this.listProduct[index];
    }
  }
})
