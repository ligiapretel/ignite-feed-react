import { useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({author, content, publishedAt}){
    const [comments, setComments] = useState([
        'Top demais!'
    ]);

    const [newComment, setNewComment] = useState('');

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH'h'mm", {
        locale: ptBR,
    })

    const publishedRelativeDate = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateNewComment(event){
        event.preventDefault();

        setComments([...comments, newComment]);
        setNewComment('');
    }

    function handleNewCommentChange(event){
        event.target.setCustomValidity('');

        setNewComment(event.target.value);
    }

    function handleSetInvalidMessage(event){
        event.target.setCustomValidity('Campo obrigatório');
    }

    function deleteComment(commentToDelete){
        const commentsWithoutDeletedOne = comments.filter(comment=>{
            return comment !== commentToDelete;
        });

        setComments(commentsWithoutDeletedOne);
    }

    const isNewCommentEmpty = newComment.length === 0;

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
                        return <p key={item.content}>{item.content}</p>
                    }else if(item.type === 'link'){
                        return <p key={item.content}><a href="">{item.content}</a></p>
                    }else if(item.type === 'tag'){
                        return (
                            <p key={item.content}>
                                {item.content.map(tag=>{
                                    return <a key={tag} href="" className={styles.tag}>{tag}</a>
                                })}
                            </p>
                        )
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    name='comment'
                    value={newComment}
                    placeholder='Escreva seu comentário'
                    onChange={handleNewCommentChange}
                    onInvalid={handleSetInvalidMessage}
                    required
                />
                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(item=>{
                    return (
                        <Comment 
                            key={item}
                            content={item}
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>

        </article>
    )
}