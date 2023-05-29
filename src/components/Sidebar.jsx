import { PencilLine } from "@phosphor-icons/react";

import styles from './Sidebar.module.css';

export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img 
                src="https://images.unsplash.com/photo-1568832359672-e36cf5d74f54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmVyZGV8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60" 
                alt="Imagem de capa do usuário" 
                className={styles.cover}/>
            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/ligiapretel.png" alt="Imagem de perfil do usuário" />
                <strong>Ligia Pretel Eimantas</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href='#'>
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}