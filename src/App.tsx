 import { Header} from './components/Header';
 import {Post} from "./components/Post"
 import { Sidebar } from './components/Sidebar';

 import styles from './App.module.css';

 import './global.css';

 const posts = [ {
      id: 1,
      author:{
        avatarUrl: 'https://avatars.githubusercontent.com/u/33937166?v=4',
        name:'Renato Lôbo',
        role: 'CTO @ Minhavida',
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { type: 'link', content: '👉 jane.design/doctorcare' },
      ],
      publishedAt: new Date('2022-07-18 19:00:00')
  },
  {
    id: 2,
    author:{
      avatarUrl: 'https://avatars.githubusercontent.com/u/11760617?v=4',
      name:'Mathues Lôbo',
      role: 'Novato @ Minhavida',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-10 23:00:00')
},
 ]

 export function App() {

  return (
    <>
      <Header/>
      <div className={styles.wrapper} >
        <Sidebar /> 
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>   
    </>
   
  )
}
