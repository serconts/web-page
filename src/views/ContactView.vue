<template>
  <div>
    <div
      class="clearfix"
      style="margin-top: 5rem"
    ></div>
    <section
      id="call-to-action"
      style="
        background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)),
          url(https://i.postimg.cc/J79BJS1p/IMG-8325.jpg) no-repeat fixed center
            top;
        background-size: cover;
      "
    >
      <div class="container text-center">
        <h3>Contacto</h3>
        <p>
          Ponte en contacto con nosotros para cualquier consulta o colaboración.
        </p>
      </div>
    </section>
    <div id="map"></div>
  </div>
</template>
<script>
  import * as L from 'leaflet'

  import 'leaflet/dist/leaflet.css'
  import 'leaflet/dist/images/marker-icon-2x.png'

  export default {
    mounted() {
      const map = L.map('map', {
        scrollWheelZoom: false,
      }).setView([-12.043402159954477, -75.196868940433], 15)
      L.tileLayer('https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(map)
      L.marker([-12.043402159954477, -75.196868940433])
        .addTo(map)
        .bindPopup('<img src="/logo-final.svg" width="100" style="margin-bottom: 0.5rem"/><br /><b>SERCONTS S.A.C.</b><br />Pj. Cesar A. Salaverry  MZ.B LT.12- Av. San Carlos - Huancayo - Perú')
        .openPopup()
    },
  }
</script>
<style lang="css">
  #map {
    height: 400px;
    width: 100%;
  }
</style>
