<template>
  <section class="delivery-address">
    <base-card>
      <h3>{{ $t("delivery_address") }}</h3>
      <el-row :gutter="15" v-if="addresses.length > 0">
        <el-col v-for="item in addresses" :key="item" :span="12">
          <div class="inner-card">
            <div class="top">
              <p>{{ item.name }}</p>
              <div class="more">
                <img @click="openMore(item)" src="../assets/more.png" alt="" />
                <div v-if="item.isVisible" class="more-content">
                  <p @click="editAddress(item.id)">{{ $t("edit") }}</p>
                  <p @click="deleteAddress(item.id)">{{ $t("delete") }}</p>
                </div>
              </div>
            </div>
            <p>
              {{ item.building }} - {{ item.unit }}
            </p>
          </div>
        </el-col>
      </el-row>
      <base-button @click="dialogVisible = true">{{
        $t("add_new_address")
      }}</base-button>
    </base-card>
    <MapsDialog
      @closedDialog="dialogVisible = $event"
      :dialog-visible="dialogVisible"
    />
  </section>
</template>
  
  <script>
import MapsDialog from "@/components/delivery-address/MapsDialog.vue";
import { ElNotification } from "element-plus";
export default {
  components: { MapsDialog },
  data() {
    return {
      dialogVisible: false,
      info: [
        {
          isVisible: false,
        },
        {
          isVisible: false,
        },
        {
          isVisible: false,
        },
        {
          isVisible: false,
        },
      ],
    };
  },
  methods: {
    openMore(item) {
      item.isVisible = !item.isVisible;
    },
    async deleteAddress(id) {
      this.$store.dispatch('profile/deleteAddress', id).then(() => {
        this.$store.dispatch('profile/getAddresses')
        ElNotification({
          title: 'Success',
          message: 'Address Deleted',
          type: 'success'
        })
      }).catch(err => {
        ElNotification({
          title: 'Error',
          message: err.response.data.message,
          type: 'error'
        })
      })
    },
    editAddress(id) {
      this.$store.commit('profile/STORE_ADDRESS_ID', id)
      this.dialogVisible = true
    }
  },
  computed: {
    addresses() {
      return this.$store.getters['profile/addresses']
    }
  },
  created() {
    this.$store.dispatch('profile/getAddresses')
  }
};
</script>
  
  <style scoped>
.delivery-address h3 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #141414;
  margin-bottom: 1.5rem;
}

.delivery-address .el-col {
  margin-bottom: 15px;
}

.delivery-address .inner-card {
  background: #ffffff;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  padding: 1rem;
}

.delivery-address .inner-card .top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.delivery-address .inner-card .top p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #141414;
}

.delivery-address .inner-card .top img {
  width: 1.3rem;
  cursor: pointer;
}

.delivery-address .inner-card p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: rgba(20, 20, 20, 0.6);
}

.delivery-address .inner-card .more {
  position: relative;
}

.delivery-address .inner-card .more .more-content {
  position: absolute;
  background: #fff;
  width: 7rem;
  /* height: 3rem; */
  border-radius: 8px;
  box-shadow: 2px 2px 4px #f2f2f2;
  padding: 1rem;
  top: 1.7rem;
  left: 50%;
  transform: translateX(-50%);
}

.delivery-address .inner-card .more .more-content p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #141414;
  text-align: center;
  cursor: pointer;
}

.delivery-address .inner-card .more .more-content p:first-of-type {
  margin-bottom: 0.5rem;
}

.delivery-address .el-button {
  padding: 1.4rem;
  width: 11rem;
}
</style>