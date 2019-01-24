<template>
    <div class="news-item">
    <div class="news-header">
        <div class="img-wrapper"><img :src="newsItem.image" :alt="newsItem.title"></div>
    </div>
    <div class="news-footer">
        <div class="film-title">{{newsItem.title}}</div>
        <div class="notice">{{newsItem.notice}}</div>
        <div class="news-date">{{newsItem.date}}</div>
    </div>
    </div>
</template>

<script>
export default {
  props: {
    newsItem: {
      type: Object
    }
  },
  methods: {}
};
</script>


<style>

.news-header,
.news-footer {
  height: 100px;
}

.img-wrapper {
  height: 100%;
  margin: 5px;
  background-color: lightgrey;
}

.film-title {
  font-weight: bold;
}

.news-date {
  color: grey;
  font-size: 10px;
  
}

</style>
