import Vue from 'vue'
import Router from 'vue-router'
import NewSong from '@/views/new-song/new-song'
import Rank from '@/views/rank/rank'
import Search from '@/views/search/search'
import NavBar from '@/components/navbar'
import SearchBar from '@/components/search-bar'
import singer from '@/components/singer'
import bbf from '@/components/bbf'
import popular from '@/components/popular/popular'
import singerinfo from '@/components/popular/singerinfo/singerinfo'
import RankingSongList from '@/views/rank/RankingSongList/RankingSongList'
import songlist from '@/components/songlist/songlist'
// import Music from '@/views/Music'
// import hhc from '@/components/search-Bar'
// import Find from '@/components/Find'
import pilst from '@/components/pilst'
import ftPlayer from '@/views/ftPlayer'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'NewSong',
      components: {
        nav: NavBar,
        default: NewSong
      },
      meta: {
        nav: true
      }
    },
    {
      path: '/rank',
      name: 'Rank',
      components: {
        nav: NavBar,
        default: Rank
      },
      meta: {
        nav: true
      }
    },
    {
      path: '/search',
      name: 'Search',
      components: {
        nav: SearchBar,
        default: Search
      }
    },
    {
      path: '/singer',
      name: 'singer',
      components: {
        nav: NavBar,
        default: singer
      },
      meta: {
        nav: true
      }
    },
    {
      path: '/pilst',
      name: 'pilst',
      components: {
        nav: NavBar,
        default: pilst
      },
      meta: {
        nav: true
      }
    },
    {
      path: '/',
      name: 'bbf',
      components: bbf
    },
    {
      path: '/popular',
      name: 'popular',
      components: {
        nav: SearchBar,
        default: popular
      }
    },
    {
      path: '/singerinfo',
      name: 'singerinfo',
      components: {
        nav: SearchBar,
        default: singerinfo
      }
    },
    {
      path: '/RankingSongList',
      name: 'RankingSongList',
      components: {
        nav: SearchBar,
        default: RankingSongList
      }
    },
    {
      path: '/songlist',
      name: 'songlist',
      components: {
        nav: SearchBar,
        default: songlist
      }
    },
    {
      path: '/ftPlayer',
      name: 'ftPlayer',
      components: {
        nav: SearchBar,
        default: ftPlayer
      }
    }
    // {
    //   path: '/Music',
    //   name: 'Music',
    //   components: {
    //     nav: SearchBar,
    //     default: Music
    //   }
    // }
  ]
  // mode: 'history'
})
