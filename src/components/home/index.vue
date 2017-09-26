<template>
  <div>
    <div class="container m-t-20 m-b-20">
      <case-list :case-arr="caseArr" :title-size="titleSize" :min-height="minHeight"></case-list>
    </div>
  </div>
</template>

<script>
import caseList from '@/components/core/caseList'
  export default {
    data () {
      return {
        titleSize: { 'font-size':'18px' },
        minHeight: {
          'min-height': '307px'
        },
        caseArr: [
          {
            src: 'static/img/img.png',
            title: '哥哥哥哥哥哥哥哥哥哥哥哥哥哥哥哥',
            text: 'Architects',
            time: '2014-04-14',
            particularsText: [
              { text: '111111学节装置设计哥本哈根Bloom自然科学节装置设计' },
              { text: 'Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' }
            ],
            particularsImg: [
              { src: 'static/img/xiangqing.png' },
              { src: 'static/img/xiangqing.png' },
            ],
            teamUnit: {
              unit: '广东省深圳市',
              address: 'github',
              team: '阿里巴巴',
              scale: '10000',
              time: '2017-12-11',
              user: '杨杨杨'
            },
            particularsLogo: 'static/img/logo.png',
            particularsName: '纬图设计',
            particularsAbout: [
              { text: '2222222然科学节装置设计哥本哈根Bloom自然科学节装置设计' },
              { text: 'Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' }
            ]
          },
          {
            src: 'static/img/img.png',
            title: '根Bloom自然科装置根Bloom自然科装置',
            text: 'Norm',
            time: '2017-08-17',
            particularsText: [
              { text: '3333333m自然科学节装置设计哥本哈根Bloom自然科学节装置设计' },
              { text: 'Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' }
            ],
            particularsImg: [
              { src: 'static/img/xiangqing.png' },
              { src: 'static/img/xiangqing.png' },
            ],
            teamUnit: {
              unit: '广东省深圳市',
              address: 'github',
              team: '阿里巴巴',
              scale: '10000',
              time: '2017-12-11',
              user: '杨杨杨'
            },
            particularsLogo: 'static/img/logo.png',
            particularsName: 'aaaaaa',
            particularsAbout: [
              { text: '4444444自然科学节装置设计哥本哈根Bloom自然科学节装置设计' },
              { text: 'Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' }
            ]
          },
          {
            src: 'static/img/img.png',
            title: '设计设计设计设计设计设计设计设计设计设计设计',
            text: 'Norm Architects',
            time: '2017-06-16',
            particularsText: [
              { text: '哥本哈根Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' },
              { text: 'Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' }
            ],
            particularsImg: [
              { src: 'static/img/xiangqing.png' },
              { src: 'static/img/xiangqing.png' },
            ],
            teamUnit: {
              unit: '广东省深圳市',
              address: 'github',
              team: '阿里巴巴',
              scale: '10000',
              time: '2017-12-11',
              user: '杨杨杨'
            },
            particularsLogo: 'static/img/logo.png',
            particularsName: '纬图设计',
            particularsAbout: [
              { text: '哥本哈根Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' },
              { text: 'Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' }
            ]
          },
          {
            src: 'static/img/img.png',
            title: '爱我中华爱我中华爱我中华爱我中华爱我中华',
            text: 'Norm Architects',
            time: '2018-08-17',
            particularsText: [
              { text: '哥本哈根Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' },
              { text: 'Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' }
            ],
            particularsImg: [
              { src: 'static/img/xiangqing.png' },
              { src: 'static/img/xiangqing.png' },
            ],
            teamUnit: {
              unit: '广东省深圳市',
              address: 'github',
              team: '阿里巴巴',
              scale: '10000',
              time: '2017-12-11',
              user: '杨杨杨'
            },
            particularsLogo: 'static/img/logo.png',
            particularsName: 'bbbbb',
            particularsAbout: [
              { text: '哥本哈根Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' },
              { text: 'Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' }
            ]
          },
          {
            src: 'static/img/img.png',
            title: '爱我中华爱我中华爱我中华爱我中华爱我中华',
            text: 'Norm Architects',
            time: '2018-08-17',
            particularsText: [
              { text: '哥本哈根Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' },
              { text: 'Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' }
            ],
            particularsImg: [
              { src: 'static/img/xiangqing.png' },
              { src: 'static/img/xiangqing.png' },
            ],
            teamUnit: {
              unit: '广东省深圳市',
              address: 'github',
              team: '阿里巴巴',
              scale: '10000',
              time: '2017-12-11',
              user: '杨杨杨'
            },
            particularsLogo: 'static/img/logo.png',
            particularsName: 'bbbbb',
            particularsAbout: [
              { text: '哥本哈根Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' },
              { text: 'Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' }
            ]
          },
          {
            src: 'static/img/img.png',
            title: '爱我中华爱我中华爱我中华爱我中华爱我中华',
            text: 'Norm Architects',
            time: '2018-08-17',
            particularsText: [
              { text: '哥本哈根Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' },
              { text: 'Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' }
            ],
            particularsImg: [
              { src: 'static/img/xiangqing.png' },
              { src: 'static/img/xiangqing.png' },
            ],
            teamUnit: {
              unit: '广东省深圳市',
              address: 'github',
              team: '阿里巴巴',
              scale: '10000',
              time: '2017-12-11',
              user: '杨杨杨'
            },
            particularsLogo: 'static/img/logo.png',
            particularsName: 'bbbbb',
            particularsAbout: [
              { text: '哥本哈根Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' },
              { text: 'Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' }
            ]
          },
          {
            src: 'static/img/img.png',
            title: '爱我中华爱我中华爱我中华爱我中华爱我中华',
            text: 'Norm Architects',
            time: '2018-08-17',
            particularsText: [
              { text: '哥本哈根Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' },
              { text: 'Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' }
            ],
            particularsImg: [
              { src: 'static/img/xiangqing.png' },
              { src: 'static/img/xiangqing.png' },
            ],
            teamUnit: {
              unit: '广东省深圳市',
              address: 'github',
              team: '阿里巴巴',
              scale: '10000',
              time: '2017-12-11',
              user: '杨杨杨'
            },
            particularsLogo: 'static/img/logo.png',
            particularsName: 'bbbbb',
            particularsAbout: [
              { text: '哥本哈根Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' },
              { text: 'Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' }
            ]
          },
          {
            src: 'static/img/img.png',
            title: '爱我中华爱我中华爱我中华爱我中华爱我中华',
            text: 'Norm Architects',
            time: '2018-08-17',
            particularsText: [
              { text: '哥本哈根Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' },
              { text: 'Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' }
            ],
            particularsImg: [
              { src: 'static/img/xiangqing.png' },
              { src: 'static/img/xiangqing.png' },
            ],
            teamUnit: {
              unit: '广东省深圳市',
              address: 'github',
              team: '阿里巴巴',
              scale: '10000',
              time: '2017-12-11',
              user: '杨杨杨'
            },
            particularsLogo: 'static/img/logo.png',
            particularsName: 'bbbbb',
            particularsAbout: [
              { text: '哥本哈根Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' },
              { text: 'Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' }
            ]
          },
          {
            src: 'static/img/img.png',
            title: '爱我中华爱我中华爱我中华爱我中华爱我中华',
            text: 'Norm Architects',
            time: '2018-08-17',
            particularsText: [
              { text: '哥本哈根Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' },
              { text: 'Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' }
            ],
            particularsImg: [
              { src: 'static/img/xiangqing.png' },
              { src: 'static/img/xiangqing.png' },
            ],
            teamUnit: {
              unit: '广东省深圳市',
              address: 'github',
              team: '阿里巴巴',
              scale: '10000',
              time: '2017-12-11',
              user: '杨杨杨'
            },
            particularsLogo: 'static/img/logo.png',
            particularsName: 'bbbbb',
            particularsAbout: [
              { text: '哥本哈根Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' },
              { text: 'Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' }
            ]
          },
          {
            src: 'static/img/img.png',
            title: '爱我中华爱我中华爱我中华爱我中华爱我中华',
            text: 'Norm Architects',
            time: '2018-08-17',
            particularsText: [
              { text: '哥本哈根Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' },
              { text: 'Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' }
            ],
            particularsImg: [
              { src: 'static/img/xiangqing.png' },
              { src: 'static/img/xiangqing.png' },
            ],
            teamUnit: {
              unit: '广东省深圳市',
              address: 'github',
              team: '阿里巴巴',
              scale: '10000',
              time: '2017-12-11',
              user: '杨杨杨'
            },
            particularsLogo: 'static/img/logo.png',
            particularsName: 'bbbbb',
            particularsAbout: [
              { text: '哥本哈根Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' },
              { text: 'Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' }
            ]
          },
          {
            src: 'static/img/img.png',
            title: '爱我中华爱我中华爱我中华爱我中华爱我中华',
            text: 'Norm Architects',
            time: '2018-08-17',
            particularsText: [
              { text: '哥本哈根Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' },
              { text: 'Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' }
            ],
            particularsImg: [
              { src: 'static/img/xiangqing.png' },
              { src: 'static/img/xiangqing.png' },
            ],
            teamUnit: {
              unit: '广东省深圳市',
              address: 'github',
              team: '阿里巴巴',
              scale: '10000',
              time: '2017-12-11',
              user: '杨杨杨'
            },
            particularsLogo: 'static/img/logo.png',
            particularsName: 'bbbbb',
            particularsAbout: [
              { text: '哥本哈根Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' },
              { text: 'Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' }
            ]
          },
          {
            src: 'static/img/img.png',
            title: '爱我中华爱我中华爱我中华爱我中华爱我中华',
            text: 'Norm Architects',
            time: '2018-08-17',
            particularsText: [
              { text: '哥本哈根Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' },
              { text: 'Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' }
            ],
            particularsImg: [
              { src: 'static/img/xiangqing.png' },
              { src: 'static/img/xiangqing.png' },
            ],
            teamUnit: {
              unit: '广东省深圳市',
              address: 'github',
              team: '阿里巴巴',
              scale: '10000',
              time: '2017-12-11',
              user: '杨杨杨'
            },
            particularsLogo: 'static/img/logo.png',
            particularsName: 'bbbbb',
            particularsAbout: [
              { text: '哥本哈根Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' },
              { text: 'Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' }
            ]
          },
          {
            src: 'static/img/img.png',
            title: '爱我中华爱我中华爱我中华爱我中华爱我中华',
            text: 'Norm Architects',
            time: '2018-08-17',
            particularsText: [
              { text: '哥本哈根Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' },
              { text: 'Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' }
            ],
            particularsImg: [
              { src: 'static/img/xiangqing.png' },
              { src: 'static/img/xiangqing.png' },
            ],
            teamUnit: {
              unit: '广东省深圳市',
              address: 'github',
              team: '阿里巴巴',
              scale: '10000',
              time: '2017-12-11',
              user: '杨杨杨'
            },
            particularsLogo: 'static/img/logo.png',
            particularsName: 'bbbbb',
            particularsAbout: [
              { text: '哥本哈根Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' },
              { text: 'Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' }
            ]
          },
          {
            src: 'static/img/img.png',
            title: '爱我中华爱我中华爱我中华爱我中华爱我中华',
            text: 'Norm Architects',
            time: '2018-08-17',
            particularsText: [
              { text: '哥本哈根Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' },
              { text: 'Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' }
            ],
            particularsImg: [
              { src: 'static/img/xiangqing.png' },
              { src: 'static/img/xiangqing.png' },
            ],
            teamUnit: {
              unit: '广东省深圳市',
              address: 'github',
              team: '阿里巴巴',
              scale: '10000',
              time: '2017-12-11',
              user: '杨杨杨'
            },
            particularsLogo: 'static/img/logo.png',
            particularsName: 'bbbbb',
            particularsAbout: [
              { text: '哥本哈根Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' },
              { text: 'Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' }
            ]
          },
          {
            src: 'static/img/img.png',
            title: '爱我中华爱我中华爱我中华爱我中华爱我中华',
            text: 'Norm Architects',
            time: '2018-08-17',
            particularsText: [
              { text: '哥本哈根Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' },
              { text: 'Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' }
            ],
            particularsImg: [
              { src: 'static/img/xiangqing.png' },
              { src: 'static/img/xiangqing.png' },
            ],
            teamUnit: {
              unit: '广东省深圳市',
              address: 'github',
              team: '阿里巴巴',
              scale: '10000',
              time: '2017-12-11',
              user: '杨杨杨'
            },
            particularsLogo: 'static/img/logo.png',
            particularsName: 'bbbbb',
            particularsAbout: [
              { text: '哥本哈根Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' },
              { text: 'Bloom自然科学节装置设计哥本哈根Bloom自然科学节装置设计' }
            ]
          }
        ]
      }
    },
    components: {
      caseList
    },
    methods: {
    },
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

@media (min-width: 768px) { 
 }

@media (min-width: 992px) {
}

@media (min-width: 1200) {

}
</style>