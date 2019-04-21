<template>
  <div class="container">
    <h1 class="title">Dashboard</h1>
    <div class="tile is-ancestor">
      <tile codeType="1" />
      <tile codeType="2" />
      <tile codeType="3" />
      <tile codeType="4" />
    </div> <!-- is-ancestor -->
    <div class="columns">
      <div class="column">
        <panel title="Faturas" panelType="invoices" />
      </div>
      <!-- <div class="column">
        <panel title="5 Produtos mais vendidos" panelType="pie" />
      </div> -->
      <div class="column">
        <panel title="Faturamento mensal" panelType="line" />
      </div>
    </div>
    <message />
    <p @click="reload">{{ msg }}</p>
  </div>

</template>

<script>
import Tile from './Tile.vue'
import Panel from './Panel.vue'
import Message from './Message.vue'

export default {
  name: 'Dashboard',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: { Tile, Panel, Message },
  methods: {
    reload: function () {
      console.log('clicked')
    }
  }
}

</script>

<style scoped>
</style>

