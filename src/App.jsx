import { Post } from './Post';
import { Header } from './components/Header';

export function App() {
  
  return (
    <div>
      <Header />
      <Post 
        author='Ligia Pretel Eimantas' 
        content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque tempore et incidunt expedita magni, dolor enim adipisci eveniet maiores perferendis laudantium doloribus, quas corrupti. Itaque ducimus consequatur natus a quasi!'
      />
      <Post 
        author='Marcia Pretel Eimantas' 
        content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque tempore et incidunt expedita magni, dolor enim adipisci eveniet maiores perferendis laudantium doloribus, quas corrupti. Itaque ducimus consequatur natus a quasi!'
      />
    </div>
  )
}