<template>
  <div class="maps-dialog">
    <el-dialog @close="closeDialog" :model-value="dialogVisible" width="55%">
      <Map @closedDialog="closeDialog" />
    </el-dialog>
  </div>
</template>
  
  <script>
import { ElNotification } from "element-plus";
import { Search } from "@element-plus/icons-vue";
import Map from "./Map.vue";

export default {
  components: {
    Map,
  },
  props: ["dialogVisible"],
  data() {
    return {
      Search,
      search: "",
      map: null,
      coordinates: {
        lat: 0,
        lng: 0,
      },
      mapCoordinates: {
        lat: 0,
        lng: 0,
      },
      center: {
        lat: 10,
        lng: 10,
      },
      cuurentPlace: null,
      markers: [],
      places: [],
      streetRef: "",
      selectedLocation: null,
      selectedCity: null,
      currentStep: 1,
      unit: "",
      block: "",
      addressName: "",
      latitude: "",
      longtitude: "",
    };
  },
  methods: {
    closeDialog(event) {
      this.$emit("closedDialog", event);
      this.selectedLocation = null;
      this.selectedCity = null;
      this.latitude = "";
      this.longtitude = "";
      this.currentStep = 1;
      console.log("unmounted");
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
      console.log(this.center);
    },
    saveLocation() {
      if (!this.selectedLocation) {
        ElNotification({
          title: "Error",
          message: "Please Select a Location!",
          type: "error",
        });
        return;
      }
      this.currentStep = 2;
    },
    saveAddress() {
      if ([this.unit, this.block, this.addressName].includes("")) {
        ElNotification({
          title: "Error",
          message: "Please fill all the fields!",
          type: "error",
        });
        return;
      }
      const data = {
        name: this.selectedCity,
        unit: this.unit,
        building: this.block,
        longtitude: this.longtitude,
        latitude: this.latitude,
      };

      this.$store
        .dispatch("auth/checkAccessToken")
        .then(() => {
          this.$store.dispatch("profile/saveAddress", data).then(() => {
            this.$store.dispatch("profile/getAddresses");
            this.$emit("closedDialog", false);
          });
        })
        .catch(() => {
          this.$store
            .dispatch("auth/checkRefreshToken")
            .then(() => {
              this.$store.dispatch("profile/saveAddress", data).then(() => {
                this.$store.dispatch("profile/getAddresses");
                this.$emit("closedDialog", false);
              });
            })
            .catch(() => {
              ElNotification({
                title: "Error",
                message: "Token Expired! Please Login Again!",
                type: "Error",
              });
              this.$emit("closedDialog", false);
              this.$store.dispatch("auth/logout");
              this.$router.replace("/");
            });
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
.maps-dialog :deep(.el-dialog) {
  border-radius: 8px;
}

.maps-dialog :deep(.el-dialog .el-dialog__headerbtn .el-icon) {
  color: #fe5d1f;
}

.maps-dialog :deep(.el-dialog__body) {
  padding: 1rem;
}

.maps-dialog :deep(.el-input__wrapper) {
  background: #f2f2f2;
  border-radius: 8px;
}

.maps-dialog .el-button {
  background: #fe5d1f;
  border-radius: 8px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #ffffff;
  border-color: #fe5d1f;
  display: flex;
  margin-left: auto;
  padding: 1.2rem;
  margin-top: 1rem;
}
.map h3 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #141414;
  margin-bottom: 1rem;
}

.map :deep(.vue-map) {
  width: 100% !important;
  height: 600px !important;
  margin: 1rem 0;
}

.map input {
  background: #f2f2f2;
  border-radius: 8px;
  border: none;
  box-shadow: 0 0 0 1px var(--el-input-border-color, var(--el-border-color))
    inset;
  padding: 0.5rem 1.5rem;
  outline: none;
  width: 100%;
  margin-top: 1rem;
}

.map input:focus-visible {
  box-shadow: 0 0 0 1px #409eff inset;
  border: none;
}

.map .location {
  display: flex;
  align-items: center;
  margin-top: 0.3rem;
}

.map .location img {
  margin-right: 1rem;
  width: 1rem;
}

.map .location p {
  font-family: "Inter";
  font-style: normal;
  letter-spacing: -0.02em;
}

.map .location p:first-of-type {
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #141414;
  margin: 0.3rem 0;
}

.map .location p:last-of-type {
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: rgba(20, 20, 20, 0.6);
}
.map .el-button {
  background: #fe5d1f;
  border-radius: 8px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #ffffff;
  border-color: #fe5d1f;
  display: flex;
  margin-left: auto;
  padding: 1.2rem;
  margin-top: 1rem;
}

.map .el-row .el-col .el-input {
  margin-top: 1rem;
}

.map .el-row .el-col :deep(.el-input__wrapper) {
  background: #fff;
}

@media screen and (max-width: 991px) {
  .maps-dialog :deep(.el-dialog) {
    width: 95%;
  }
}
</style>
  
  <style>
.pac-container.pac-logo {
  z-index: 20006;
}
</style>