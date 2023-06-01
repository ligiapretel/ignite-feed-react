import { Avatar } from './Avatar';
import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';

export function Comment({content, onDeleteComment}){

    function deleteComment(){
        onDeleteComment(content);    
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/diego3g.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title='29 de Maio às 10h33' dateTime='2023-05-29 10:33:22'>Cerca de 1h atrás</time>
                        </div>
                        <button onClick={deleteComment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
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