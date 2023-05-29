import styles from './App.module.css';
import './global.css';

import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

export function App() {
  
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author='Ligia Pretel Eimantas' 
            content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque tempore et incidunt expedita magni, dolor enim adipisci eveniet maiores perferendis laudantium doloribus, quas corrupti. Itaque ducimus consequatur natus a quasi!'
          />
          <Post 
            author='Marcia Pretel Eimantas' 
            content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque tempore et incidunt expedita magni, dolor enim adipisci eveniet maiores perferendis laudantium doloribus, quas corrupti. Itaque ducimus consequatur natus a quasi!'
          />
        </main>
      </div>
    </div>
  )
}