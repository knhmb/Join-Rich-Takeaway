<template>
  <div class="filter-dialog">
    <el-dialog @close="closeDialog" :model-value="filterDialog" width="55%">
      <div class="header">
        <h3>{{ $t("filter") }}</h3>
        <img @click="closeDialog" src="../assets/Cross.png" alt="" />
      </div>
      <FilterMap @closedDialog="closeDialog" />
    </el-dialog>
  </div>
</template>
  
  <script>
// import { GoogleMap, Marker } from "vue3-google-map";
import FilterMap from "./FilterMap.vue";

export default {
  props: ["filterDialog"],
  components: {
    // GoogleMap,
    // Marker,
    FilterMap,
  },
  data() {
    return {
      center: {
        lat: 10,
        lng: 10,
      },
      cuurentPlace: null,
      markers: [],
      places: [],
      restaurantDistance: "",
      restaurantType: "",
      latitude: "",
      longtitude: "",
    };
  },
  methods: {
    closeDialog() {
      this.$emit("closedDialog", false);
    },
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
    setPlace(place) {
      this.currentPlace = place;
      console.log(place);
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
    // const originAutocomplete = new window.google.maps.places.Autocomplete(
    //   this.$refs["origin"],
    //   {
    //     bounds: new window.google.maps.LatLngBounds(
    //       new window.google.maps.LatLng(45.4215296, -75.6971931)
    //     ),
    //   }
    // );
    // originAutocomplete.addListener("place_changed", () => {
    //   console.log(originAutocomplete.getPlace());
    //   this.currentPlace = originAutocomplete.getPlace();
    //   console.log(originAutocomplete);
    //   if (this.currentPlace) {
    //     const marker = {
    //       lat: this.currentPlace.geometry.location.lat(),
    //       lng: this.currentPlace.geometry.location.lng(),
    //     };
    //     this.markers.push({ position: marker });
    //     this.places.push(this.currentPlace);
    //     this.center = marker;
    //     this.currentPlace = null;
    //     // this.selectedLocation = originAutocomplete.getPlace().formatted_address;
    //     // this.selectedCity = originAutocomplete.getPlace().name;
    //     this.latitude = originAutocomplete.getPlace().geometry.location.lat();
    //     this.longtitude = originAutocomplete.getPlace().geometry.location.lng();
    //     console.log(this.selectedLocation);
    //     console.log(this.selectedCity);
    //   }
    // });
  },
};
</script>
  
  <style scoped>
.filter-dialog :deep(.el-dialog) {
  border-radius: 8px;
}

.filter-dialog :deep(.el-dialog__header) {
  display: none;
}

.filter-dialog h3 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #141414;
}

.filter-dialog .header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  align-items: center;
}

.filter-dialog .header img {
  width: 1rem;
  cursor: pointer;
}

.filter-dialog .map-content {
  margin-bottom: 1rem;
}

.filter-dialog :deep(.el-form-item.asterisk-left) {
  flex-direction: column;
  align-items: flex-start;
}

.filter-dialog :deep(.el-form-item__content) {
  width: 100%;
}

.filter-dialog :deep(.el-form-item__label) {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  /* line-height: 20px; */
  color: rgba(20, 20, 20, 0.6);
}

.filter-dialog .el-button {
  background: #fe5d1f;
  border-radius: 8px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #ffffff;
  width: 100%;
  padding: 1.3rem;
  border-color: #fe5d1f;
}

.filter-dialog :deep(.el-input__wrapper),
.filter-dialog input {
  background: #f5f5f5;
  border-radius: 8px;
  padding: 0.3rem 1rem;
}

.filter-dialog input {
  background: #f2f2f2;
  border-radius: 8px;
  border: none;
  box-shadow: 0 0 0 1px var(--el-input-border-color, var(--el-border-color))
    inset;
  padding: 0.7rem 1rem;
  outline: none;
  width: 100%;
}

.filter-dialog input:focus-visible {
  box-shadow: 0 0 0 1px #409eff inset;
  border: none;
}
</style>