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

    <q-list separator>
      <q-item class="q-py-md" v-for="twitt in twittsData" :key="twitt.date">
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
            {{ twitt.content }}
          </q-item-label>
          <div class="twitt-icons row justify-between">
            <q-btn flat round color="grey" size="sm" icon="far fa-comment" />
            <q-btn flat round color="grey" size="sm" icon="fas fa-retweet" />
            <q-btn flat round color="grey" size="sm" icon="far fa-heart" />
            <q-btn flat round color="grey" size="sm" icon="fas fa-trash" />
          </div>
        </q-item-section>

        <q-item-section side top>
          {{ twitt.date | relativeDate }}
        </q-item-section>
      </q-item>

      <!-- <q-separator inset="item" /> -->
    </q-list>
  </q-page>
</template>

<script>
import { formatDistance } from "date-fns";
export default {
  name: "PageHome",
  data() {
    return {
      newTwittoContent: "",
      twittsData: [
        {
          content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore commodi
        natus voluptate ipsam deleniti! Dicta magni aut doloremque maxime,
        quidem illo necessitatibus a quas ea molestias quibusdam quam architecto
        asperiores aliquam tempore labore voluptas. Esse, iure ipsum?
        Praesentium magnam animi illum consequatur voluptatum cumque fugiat
        obcaecati doloribus. Sequi, nostrum nisi.`,
          date: 1617213599658
        },
        {
          content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore commodi
        natus voluptate ipsam deleniti! Dicta magni aut doloremque maxime,
        quidem illo necessitatibus a quas ea molestias quibusdam quam architecto
        asperiores aliquam tempore labore voluptas. Esse, iure ipsum?
        Praesentium magnam animi illum consequatur voluptatum cumque fugiat
        obcaecati doloribus. Sequi, nostrum nisi.`,
          date: 1617213618455
        },
        {
          content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore commodi
        natus voluptate ipsam deleniti! Dicta magni aut doloremque maxime,
        quidem illo necessitatibus a quas ea molestias quibusdam quam architecto
        asperiores aliquam tempore labore voluptas. Esse, iure ipsum?
        Praesentium magnam animi illum consequatur voluptatum cumque fugiat
        obcaecati doloribus. Sequi, nostrum nisi.`,
          date: 1617213626668
        }
      ]
    };
  },
  filters: {
    relativeDate(value) {
      // converts dates into readable format
      return formatDistance(value, new Date());
    }
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
.twitt-icons
  margin-left: -5px
</style>
