<template>
  <q-page>
    <div class="q-py-lg q-px-md row items-end q-col-gutter-md">
      <div class="col">
        <q-input
          v-model="newTwittoContent"
          class="new-twitt"
          bottom-slots
          placeholder="Write your thoughts"
          counter
          autogrow
          maxlength="300"
        >
          <template v-slot:before>
            <q-avatar size="xl">
              <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
            </q-avatar>
          </template>
        </q-input>
      </div>
      <div class="col col-shrink">
        <q-btn
          class="q-mb-lg"
          unelevated
          rounded
          color="primary"
          label="Twitt"
          no-caps
          :disable="!newTwittoContent"
        />
      </div>
    </div>
    <q-separator class="divider" size="10px" color="grey-2" />

    <q-list>
      <q-item class="q-py-md">
        <q-item-section avatar top>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
          </q-avatar>
        </q-item-section>

        <q-item-section class="text-subtitle1">
          <q-item-label>
            <strong>Brad Traversy</strong>
            <span class="text-grey-7"> @bradtraversy</span>
          </q-item-label>
          <q-item-label class="twitt-content text-body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            ratione eum distinctio, inventore eos voluptatem blanditiis neque
            illum nostrum hic vel, quaerat architecto recusandae sequi.
          </q-item-label>
        </q-item-section>

        <q-item-section side top>
          1 min ago
        </q-item-section>
      </q-item>

      <!-- <q-separator inset="item" /> -->
    </q-list>
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
<style lang="sass">
.new-twitt
  textarea
    font-size: 19px
    line-height: 1.5
.divider
  border-top: 1px solid
  border-bottom: 1px solid
  border-color: $grey-4
.twitt-content
  white-space: pre-line
</style>
