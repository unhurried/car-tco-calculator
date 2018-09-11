<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <h2>整備費用設定</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <div class="row">
          <div class="col-sm">
            <label>オイル交換</label>
          </div>
        </div>
        <div class="row">
          <div class="col-md input-group">
            <input v-model="oilChangePrice" type="number" class="form-control">
            <div class="input-group-append">
              <span class="input-group-text">円/回</span>
            </div>
          </div>
          <div class="col-md input-group">
            <input v-model="oilChangeMileage" type="number" class="form-control">
            <div class="input-group-append">
              <span class="input-group-text">kmごと</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm">
        <div class="row">
          <div class="col-sm">
            <label>オイルフィルター交換</label>
          </div>
        </div>
        <div class="row">
          <div class="col-md input-group">
            <input v-model="oilFilterPrice" type="number" class="form-control">
            <div class="input-group-append">
              <span class="input-group-text">円/回</span>
            </div>
          </div>
          <div class="col-md input-group">
            <input v-model="oilFilterMileage" type="number" class="form-control">
            <div class="input-group-append">
              <span class="input-group-text">kmごと</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <div class="row">
          <div class="col-sm">
            <label>バッテリ交換</label>
          </div>
        </div>
        <div class="row">
          <div class="col-md input-group">
            <input v-model="batteryPrice" type="number" class="form-control">
            <div class="input-group-append">
              <span class="input-group-text">円/回</span>
            </div>
          </div>
          <div class="col-md input-group">
            <input v-model="batteryYear" type="number" class="form-control">
            <div class="input-group-append">
              <span class="input-group-text">年ごと</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm">
        <div class="row">
          <div class="col-sm">
            <label>LLC交換</label>
          </div>
        </div>
        <div class="row">
          <div class="col-md input-group">
            <input v-model="llcPrice" type="number" class="form-control">
            <div class="input-group-append">
              <span class="input-group-text">円/回</span>
            </div>
          </div>
          <div class="col-md input-group">
            <input v-model="llcYear" type="number" class="form-control">
            <div class="input-group-append">
              <span class="input-group-text">年ごと</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <div class="row">
          <div class="col-sm">
            <label>ブレーキフルード交換</label>
          </div>
        </div>
        <div class="row">
          <div class="col-md input-group">
            <input v-model="brakeFluidPrice" type="number" class="form-control">
            <div class="input-group-append">
              <span class="input-group-text">円/回</span>
            </div>
          </div>
          <div class="col-md input-group">
            <input v-model="brakeFluidYear" type="number" class="form-control">
            <div class="input-group-append">
              <span class="input-group-text">年ごと</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm">
        <div class="row">
          <div class="col-sm">
            <label>スパークプラグ交換</label>
          </div>
        </div>
        <div class="row">
          <div class="col-md input-group">
            <input v-model="sparkPlugPrice" type="number" class="form-control">
            <div class="input-group-append">
              <span class="input-group-text">円/回</span>
            </div>
          </div>
          <div class="col-md input-group">
            <input v-model="sparkPlugMileage" type="number" class="form-control">
            <div class="input-group-append">
              <span class="input-group-text">kmごと</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <div class="row">
          <div class="col-sm">
            <label>タイヤ交換</label>
          </div>
        </div>
        <div class="row">
          <div class="col-md input-group">
            <input v-model="tirePrice" type="number" class="form-control">
            <div class="input-group-append">
              <span class="input-group-text">円/回</span>
            </div>
          </div>
          <div class="col-md input-group">
            <input v-model="tireMileage" type="number" class="form-control">
            <div class="input-group-append">
              <span class="input-group-text">kmごと</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm">
        <div class="row">
          <div class="col-sm">
            <label>ブレーキパッド交換</label>
          </div>
        </div>
        <div class="row">
          <div class="col-md input-group">
            <input v-model="brakePadPrice" type="number" class="form-control">
            <div class="input-group-append">
              <span class="input-group-text">円/回</span>
            </div>
          </div>
          <div class="col-md input-group">
            <input v-model="brakePadMileage" type="number" class="form-control">
            <div class="input-group-append">
              <span class="input-group-text">kmごと</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <div class="row">
          <div class="col-sm">
            <label>ATフルード交換</label>
          </div>
        </div>
        <div class="row">
          <div class="col-md input-group">
            <input v-model="atFluidPrice" type="number" class="form-control">
            <div class="input-group-append">
              <span class="input-group-text">円/回</span>
            </div>
          </div>
          <div class="col-md input-group">
            <input v-model="atFluidMileage" type="number" class="form-control">
            <div class="input-group-append">
              <span class="input-group-text">kmごと</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm">
        <div class="row">
          <div class="col-sm">
            <label>エアフィルター交換</label>
          </div>
        </div>
        <div class="row">
          <div class="col-md input-group">
            <input v-model="airFilterPrice" type="number" class="form-control">
            <div class="input-group-append">
              <span class="input-group-text">円/回</span>
            </div>
          </div>
          <div class="col-md input-group">
            <input v-model="airFilterYear" type="number" class="form-control">
            <div class="input-group-append">
              <span class="input-group-text">年ごと</span>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div class="row">
      <div class="col-sm-6">
        <div class="row">
          <div class="col-sm">
            <label>ワイパー交換</label>
          </div>
        </div>
        <div class="row">
          <div class="col-md input-group">
            <input v-model="wiperPrice" type="number" class="form-control">
            <div class="input-group-append">
              <span class="input-group-text">円/回</span>
            </div>
          </div>
          <div class="col-md input-group">
            <input v-model="wiperYear" type="number" class="form-control">
            <div class="input-group-append">
              <span class="input-group-text">年ごと</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";

export default {
  name: "Maintenance",
  computed: mapFields([
    "config.maintenance.oilChangePrice",
    "config.maintenance.oilChangeMileage",
    "config.maintenance.oilFilterPrice",
    "config.maintenance.oilFilterMileage",
    "config.maintenance.batteryPrice",
    "config.maintenance.batteryYear",
    "config.maintenance.llcPrice",
    "config.maintenance.llcYear",
    "config.maintenance.brakeFluidPrice",
    "config.maintenance.brakeFluidYear",
    "config.maintenance.sparkPlugPrice",
    "config.maintenance.sparkPlugMileage",
    "config.maintenance.tirePrice",
    "config.maintenance.tireMileage",
    "config.maintenance.brakePadPrice",
    "config.maintenance.brakePadMileage",
    "config.maintenance.atFluidPrice",
    "config.maintenance.atFluidMileage",
    "config.maintenance.airFilterPrice",
    "config.maintenance.airFilterYear",
    "config.maintenance.wiperPrice",
    "config.maintenance.wiperYear"
  ])
};
</script>

<style scoped>
label {
  margin: 0.6rem 0 0 0;
}

.input-group {
  margin-top: 0.6rem;
}
</style>
