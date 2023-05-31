import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({author, content, publishedAt}){

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH'h'mm", {
        locale: ptBR,
    })

    const publishedRelativeDate = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })


    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedRelativeDate}</time>
            </header>

            <div className={styles.content}>
                {content.map(item=>{
                    if(item.type === 'paragraph'){
                        return <p>{item.content}</p>
                    }else if(item.type === 'link'){
                        return <p><a href="">{item.content}</a></p>
                    }else if(item.type === 'tag'){
                        return (
                            <p>
                                {item.content.map(tag=>{
                                    return <a href="" className={styles.tag}>{tag}</a>
                                })}
                            </p>
                        )
                    }
                })}
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