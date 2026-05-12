<script setup>
const current = ref(0);
const isClosing = ref(null);

function videoTabClick(index) {
  if(current.value == index) {

  }else{
      isClosing.value = current.value;
    current.value = index;
    clearTimeout(timer);
    let timer = setTimeout(()=>{
      isClosing.value = null;
    },1000)
  }
}

const slide = [
  {
    id:1,
    content:'/section-04-01.mp4'
  },
  {
    id:2,
    content:'/section-04-02.mp4'
  },
  {
    id:3,
    content:'/section-04-01.mp4'
  }
]

</script>

<template>
  <div class="video-wrap">
    <ul class="video-btn">
      <li @click="videoTabClick(0)"><button type="button">버튼 1</button></li>
      <li @click="videoTabClick(1)"><button type="button">버튼 2</button></li>
      <li @click="videoTabClick(2)"><button type="button">버튼 3</button></li>
    </ul>
    <div class="slide" v-for="(item,index) in slide"   :class="{ active: current  === index, leaving: isClosing === index }" >
      <video>
        <source :src="item.content" type="video/mp4"/>
      </video>
    </div>
  </div>
</template>

<style scoped>
  .video-wrap {
    position: relative;
    width: 100%;
    height: 500px;
    overflow: hidden;
  }

  .video-btn {
    position: absolute;
    z-index: 10;
    inset: 0;
    width: 100px;
    display: flex;
    flex-direction: column;
  }

  .video-btn li {
    flex: 1;
    width: 100%;
  }

  .video-btn li button {
    width:100%;
    height: 100%;
    border:none;
    background: gray;
    opacity: 0.5;
  }

  .slide {
    position:absolute;
    inset: 0;
    width: 100%;
    height:100%;
    overflow: hidden;
    z-index: 0;
    clip-path: inset(0%);
    transition: clip-path 1s ease-in-out;

    video {
      width:100%;
      height:100%;
      object-fit: cover;
    }
  }

  .slide.active {
    z-index: 1;
  }

  .slide.leaving {
    z-index: 2;
    clip-path: inset(0% 0% 100% 0%);
    transition: clip-path 1s ease-in-out;
  }
</style>