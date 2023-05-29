import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/ligiapretel.png" alt="Imagem de perfil do autor da publicação" />
                    <div className={styles.authorInfo}>
                        <strong>Ligia Pretel Eimantas</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title='29 de Maio às 10h13' dateTime='2023-05-29 10:13:20'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala pessoal, blz?</p>
                <p>Bora codar mais um pouquinho hoje? É dia de aprender mais sobre React.</p>
                <p>Se liguem: <a href="">react/projetotop</a></p>
                <p>
                    <a href="" className={styles.tag}>#reactjs</a>
                    <a href="" className={styles.tag}>#boracodar</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    placeholder='Escreva seu comentário'
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>

        </article>
    )
}