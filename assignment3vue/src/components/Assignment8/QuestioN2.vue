<template>
  <div>
    <QuestioN2>
      <template v-slot:main>
        <p>Custom Main</p>
      </template>
      <template v-slot:aside>
        <p>Custom Aside</p>
      </template>
      <div>
        <p>Custom Content</p>
      </div>
    </QuestioN2>
  </div>
</template>

<script>
import QuestioN2 from './QuestioN2a.vue';

export default {
  components: {
    QuestioN2
  }
}
</script>