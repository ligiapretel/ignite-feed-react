import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';

export function Comment(){
    return (
        <div className={styles.comment}>
            <img src="https://github.com/diego3g.png" alt="Imagem de perfil do usuário" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title='29 de Maio às 10h33' dateTime='2023-05-29 10:33:22'>Cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>Muito bom, parabéns!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Curtir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}