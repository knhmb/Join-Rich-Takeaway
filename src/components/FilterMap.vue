<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="filter-map">
    <GoogleMap
      api-key="AIzaSyA_C47k8nUTryyy5VSf-ddIIKVPyLrQ0R4"
      style="width: 100%; height: 500px"
      :center="center"
      :zoom="15"
    >
      <Marker :options="{ position: center }" />
    </GoogleMap>
    <!-- <template> -->
    <div class="input-content">
      <p class="label">{{ $t("restaurant_distance") }}</p>
      <input type="text" :placeholder="$t('enter_your_address')" ref="origin" />
    </div>
    <div class="input-content">
      <p class="label">{{ $t("restaurant_type") }}</p>
      <el-select v-model="type" :placeholder="$t('select_restaurant_type')">
        <!-- <el-option
            v-for="option in options"
            :key="option.id"
            :label="option.name"
            :value="option.slug"
          ></el-option> -->
      </el-select>
      <base-button>{{ $t("apply") }}</base-button>
    </div>
    <!-- </template> -->
  </div>
</template>
  
  <script>
import { GoogleMap, Marker } from "vue3-google-map";

export default {
  components: {
    GoogleMap,
    Marker,
  },
  data() {
    return {
      search: "",
      type: "",
      map: null,
      center: {
        lat: 10,
        lng: 10,
      },
      markers: [],
      places: [],
      selectedLocation: null,
      selectedCity: null,
      latitude: "",
      longtitude: "",
    };
  },
  //   computed: {
  //     options() {
  //       return this.$store.getters["dashboard/options"];
  //     },
  //   },
  methods: {
    // filter() {
    //   this.$store
    //     .dispatch("dashboard/filterRestaurants", this.type)
    //     .then(() => {
    //       this.$emit("closedDialog", false);
    //       this.$router.push("/search");
    //       this.type = "";
    //     });
    // },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
  },
  mounted() {
    this.geolocate();
    const originAutocomplete = new window.google.maps.places.Autocomplete(
      this.$refs["origin"],
      {
        bounds: new window.google.maps.LatLngBounds(
          new window.google.maps.LatLng(45.4215296, -75.6971931)
        ),
      }
    );
    originAutocomplete.addListener("place_changed", () => {
      console.log(originAutocomplete.getPlace());
      this.currentPlace = originAutocomplete.getPlace();
      console.log(originAutocomplete);
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
        this.selectedLocation = originAutocomplete.getPlace().formatted_address;
        this.selectedCity = originAutocomplete.getPlace().name;
        this.latitude = originAutocomplete.getPlace().geometry.location.lat();
        this.longtitude = originAutocomplete.getPlace().geometry.location.lng();
        console.log(this.selectedLocation);
        console.log(this.selectedCity);
      }
    });
  },
};
</script>
  
  <style scoped>
.filter-map h3 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #141414;
  margin-bottom: 1rem;
}

.filter-map :deep(.vue-map) {
  width: 100% !important;
  height: 600px !important;
  margin: 1rem 0;
}

.filter-map input {
  background: #f2f2f2;
  border-radius: 8px;
  border: none;
  box-shadow: 0 0 0 1px var(--el-input-border-color, var(--el-border-color))
    inset;
  padding: 0.7rem 1rem;
  outline: none;
  width: 100%;
  /* margin-top: 1rem; */
}

.filter-map .el-select {
  width: 100%;
}

.filter-map input:focus-visible {
  box-shadow: 0 0 0 1px #409eff inset;
  border: none;
}

.filter-map .location {
  display: flex;
  align-items: center;
  margin-top: 0.3rem;
}

.filter-map .location img {
  margin-right: 1rem;
  width: 1rem;
}

.filter-map .location p {
  font-family: "Inter";
  font-style: normal;
  letter-spacing: -0.02em;
}

.filter-map .location p:first-of-type {
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #141414;
  margin: 0.3rem 0;
}

.filter-map .location p:last-of-type {
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: rgba(20, 20, 20, 0.6);
}
.filter-map .el-button {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #ffffff;
  display: flex;
  /* margin-left: auto; */
  padding: 1.5rem;
  margin-top: 1rem;
  width: 100%;
}

.filter-map .el-row .el-col .el-input {
  margin-top: 1rem;
}

.filter-map .el-row .el-col :deep(.el-input__wrapper) {
  background: #fff;
}

.filter-map p.label {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: rgba(20, 20, 20, 0.6);
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}
</style>
  
  <style>
.pac-container.pac-logo {
  z-index: 20006;
}
</style>