<script setup>

const isVisible = ref(false); // 처음엔 숨김

function fixBtnClick() {
  isVisible.value = !isVisible.value; // 보이게 처리
}

const boxOpenId = ref(null);
const textBoxes = ref([]);

const list = ref([
  {
    id:1,
    title: '이동과 번역: 국경을 넘은 큐비즘 1912-1914',
    content: '조르주 브라크와 파블로 피카소가 발전시킨 큐비즘은 곧 프랑스 국경을 넘어 널리 확산되었고, 이러한 국제적 확산은 파리에 체류하던 많은 외국인 예술가들과 수집가들 덕분이었습니다. 동시에 큐비즘 작품들이 유럽, 제정 러시아, 미국에서 열린 전시들을 순회하며 각 지역 미술계에 자극을 주고 새로운 큐비즘 중심지의 형성을 촉진했습니다. 이탈리아 화가 지노 세베리니와 알베르토 마넬리를 비롯해 러시아의 ‘입체미래주의’ 작가들, 나탈리아 곤차로바, 미하일 라리오노프, 장 푸니, 조르주 야쿨로프는 이러한 국제적 교류에서 중요한 역할을 했습니다. 이들은 각기 다른 방식으로 독창적인 종합을 이루며 미래주의의 속도 숭배와 강렬한 색채를 큐비즘의 해체 및 콜라주와 결합했습니다.'
  },
  {
    id:2,
    title: '색채, 리듬, 추상: 오르픽 큐비즘 1912–1914',
    content: '조르주 브라크와 파블로 피카소가 발전시킨 큐비즘은 곧 프랑스 국경을 넘어 널리 확산되었고, 이러한 국제적 확산은 파리에 체류하던 많은 외국인 예술가들과 수집가들 덕분이었습니다. 동시에 큐비즘 작품들이 유럽, 제정 러시아, 미국에서 열린 전시들을 순회하며 각 지역 미술계에 자극을 주고 새로운 큐비즘 중심지의 형성을 촉진했습니다. 이탈리아 화가 지노 세베리니와 알베르토 마넬리를 비롯해 러시아의 ‘입체미래주의’ 작가들, 나탈리아 곤차로바, 미하일 라리오노프, 장 푸니, 조르주 야쿨로프는 이러한 국제적 교류에서 중요한 역할을 했습니다. 이들은 각기 다른 방식으로 독창적인 종합을 이루며 미래주의의 속도 숭배와 강렬한 색채를 큐비즘의 해체 및 콜라주와 결합했습니다.'
  },
])


function listClick(id) {
  // 리스트 클릭시 ref. https://www.centrepompidou-hanwha.kr/exhibition/detail?seq=96&status=INACTIVE
  const el = textBoxes.value[id]
  if (boxOpenId.value === id) {
    // 이미 열림
    el.style.height= 0;
    boxOpenId.value = null
  }else {
    // 다른거 닫힘
    el.style.height = el.scrollHeight + 'px';
    boxOpenId.value = id;
  }
}

</script>

<template>
  <main>
    <ul class="text-list">
      <li v-for="(item,index) in list" :key="item.id" @click="listClick(index)" :class="boxOpenId == item.id ? 'active' : ''">
        <p class="title">{{item.title}}</p>
        <div class="text-box" ref="textBoxes">
          <div>{{item.content}}</div>
        </div>
        <div class="bg01"/>
      </li>
    </ul>
    <button type="button" class="fix-btn" @click="fixBtnClick"/>
    <div v-show="isVisible" class="fix-content" :class="{'is-visible': isVisible}">
      버튼 클릭시 보이는 요소
    </div>
  </main>
</template>

<style scoped>
  .text-list li {
    position: relative;
    border-bottom: 1px solid #000;
  }

  .text-list li.active .text-box {
    overflow: visible;
  }

  .text-list li.active [class^="bg"] {
    opacity: 1;
  }

  .title {
    padding: 20px 0;
    font-size:18px;
  }

  .text-box {
    transition: height 0.3s ease;
    overflow:hidden;
  }

  [class^="bg"] {
    position: absolute;
    z-index: -1;
    top: 0;
    left:0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    background-color:#fff;
    transition: all 0.3s;
  }

  .bg01 {
    background-image:url(~/assets/images/content/list_bg.png);
  }

  .text-box > div {
    padding: 30px;
  }

  .fix-btn {
    position: fixed;
    z-index: 10;
    bottom: 130px;
    right: 20px;
    width: 44px;
    height: 44px;
    border-radius: 8px;
    border:none;
    background: #638773;
  }

  .fix-content {
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background: aliceblue;
  }
</style>