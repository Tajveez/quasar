<template>
  <q-page>
    <div class="q-py-lg q-px-md">
      <q-input
        v-model="newTwittoContent"
        bottom-slots
        placeholder="Write your thoughts"
        counter
        maxlength="300"
      >
        <template v-slot:before>
          <q-avatar size="xl">
            <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
          </q-avatar>
        </template>

        <template v-slot:after>
          <q-btn
            unelevated
            rounded
            color="primary"
            label="Twitt"
            no-caps
            :disable="!newTwittoContent"
          />
          <!-- <q-btn round dense flat icon="send" /> -->
        </template>
      </q-input>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageHome",
  data() {
    return {
      newTwittoContent
    };
  }
};
</script>
