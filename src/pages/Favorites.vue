<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="favorites">
    <base-card v-if="bookmarks.resources.restaurants.length > 0">
      <h3>{{ $t("favorites") }}</h3>
      <el-row :gutter="10">
        <el-col :xs="24" :sm="12" v-for="item in bookmarks.resources.restaurants" :key="item">
          <div class="inner-card">
            <div class="top">
              <img src="../assets/Restaurant.png" alt="" />
              <img @click="removeBookmark(item.slug)" class="remove" src="../assets/bookmark-on.png" alt="" />
            </div>
            <p class="name">{{ item.name }}</p>
            <p class="description">{{ item.description }}</p>
          </div>
        </el-col>
      </el-row>
    </base-card>
  </section>
</template>

<script>
import { ElNotification } from 'element-plus'

  export default {
    computed: {
      bookmarks() {
        return this.$store.getters['auth/bookmarks']
      }
    },
    methods: {
      removeBookmark(slug) {
        this.$store.dispatch('auth/removeBookmark', slug).then(() => {
          ElNotification({
            title: "Success",
            message: 'Item removed',
            type: 'success'
          })
        }).catch(err => {
          ElNotification({
            title: "Error",
            message: err.response.data.message,
            type: 'error'
          })
        })
      },
    },
    created() {
    this.$store.dispatch('auth/getBookmarks').then(() => {console.log(this.bookmarks);}).catch(err => {
      ElNotification({
        title: 'Error',
        message: err.response.data.message,
        type: 'error'
      })
    })
  }
  }
</script>

<style scoped>
.favorites .card {
  padding: 2rem 1.5rem;
}

.favorites h3 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #141414;
  margin-bottom: 1rem;
}

.favorites .inner-card {
  background: #ffffff;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  padding: 1rem;
}

.favorites .top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.favorites .top img {
  width: 1rem;
}

.favorites p {
  font-family: "Inter";
  font-style: normal;
  text-align: start;
}

.favorites p.name {
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #141414;
  margin: 0.5rem 0;
}

.favorites p.description {
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: rgba(20, 20, 20, 0.6);
}

.favorites .inner-card {
  margin-bottom: 0.7rem;
}

img.remove {
  cursor: pointer;
}
</style>