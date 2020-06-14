<template>
  <div>
    <div class="flex flex-wrap justify-center mt-3">
      <div class="flex-1 m-1">
        <div class="info-wrapper bg-monokai-red">
          <div class="text-center" v-if="global.fetching">
            Loading...
          </div>
          <div v-else>
            <p class="tittle">{{ global.data ? numberWithCommas(global.data.meninggal) : 0 }}</p>
            <p class="desc">Meninggal</p>
          </div>
        </div>
      </div>

      <div class="flex-1 m-1">
        <div class="info-wrapper bg-monokai-green">
          <p class="tittle">{{ global.data ? numberWithCommas(global.data.sembuh) : 0 }}</p>
          <p class="desc">Sembuh</p>
        </div>
      </div>

      <div class="flex-1 m-1">
        <div class="info-wrapper bg-monokai-orange">
          <p class="tittle">{{ global.data ? numberWithCommas(global.data.perawatan) : 0 }}</p>
          <p class="desc">Perawatan</p>
        </div>
      </div>

      <div class="flex-1 m-1">
        <div class="info-wrapper bg-monokai-blue">
          <p class="tittle">{{ global.data ? numberWithCommas(global.data.jumlahKasus) : 0 }}</p>
          <p class="desc">Jumlah Kasus</p>
        </div>
      </div>
    </div>

    <div class="mt-8">
      <div class="mb-2">
        <h3 class="font-bold text-2xl text-white">Update Harian</h3>
      </div>

      <div v-if="!harian.fetching">
        <div 
        class="bg-monokai-purple rounded-lg p-4 mb-2" 
        v-for="(item, index) in harian.data"
        :key="index">
          <span class="font-bold text-lg text-white">Tanggal : {{ formatTgl(item.tanggal) }}  </span>
          <div class="flex flex-wrap mt-2">
            <div class="flex-1 info-wrapper-harian">
              <p class="tittle">{{ item.jumlahKasusMeninggalperHari ? numberWithCommas(item.jumlahKasusMeninggalperHari) : 0 }}</p>
              <p class="desc">Meninggal</p>
            </div>

            <div class="flex-1 info-wrapper-harian">
              <p class="tittle">{{ item.jumlahKasusSembuhperHari ? numberWithCommas(item.jumlahKasusSembuhperHari) : 0 }}</p>
              <p class="desc">Sembuh</p>
            </div>

            <div class="flex-1 info-wrapper-harian">
              <p class="tittle">{{ item.jumlahKasusDirawatperHari ? numberWithCommas(item.jumlahKasusDirawatperHari) : 0 }}</p>
              <p class="desc">Dirawat</p>
            </div>

            <div class="flex-1 info-wrapper-harian">
              <p class="tittle">{{ item.jumlahKasusBaruperHari ? numberWithCommas(item.jumlahKasusBaruperHari) : 0 }}</p>
              <p class="desc">Kasus Baru</p>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center" v-else>
        <h3 v-if="harian.data.length > 0">Mendapatkan data...</h3>
        <h3 v-else>Tidak ada data</h3>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import moment from 'moment'

export default {
  asyncData({ store }) {
    store.dispatch('covid/getGlobal')
    store.dispatch('covid/getHarian')
  },
  methods: {
    formatTgl: (tgl) => moment(tgl).format('YYYY/MM/DD'),
    numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
  },
  computed: {
    ...mapState({
      global: state => state.covid.global,
      harian: state => state.covid.harian
    })
  }
}
</script>

<style>
  .info-wrapper{
    @apply rounded-lg text-center p-5;  
  }
  .info-wrapper .tittle{
    @apply text-white font-bold text-2xl;
  }
  .info-wrapper .desc{
    @apply text-monokai-black font-bold;
  }

  .info-wrapper-harian{
    @apply text-center p-5;  
  }
  .info-wrapper-harian .tittle{
    @apply text-white font-bold;
  }
  .info-wrapper-harian .desc{
    @apply text-white;
  }
</style>
