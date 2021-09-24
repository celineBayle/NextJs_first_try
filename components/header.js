import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./header.module.css"

export const Header = () => {
    const router = useRouter()    

    return(
        <div className={styles.header} >
            <Link href="/" passHref>
                <span className={router.pathname === "/" ? styles.active : styles.link}>Home</span> 
            </Link>   
            <Link href="/blog" passHref>       
                <span className={router.pathname === "/blog" ? styles.active : styles.link}>Blog</span>
            </Link> 
            <Link href="/profile" passHref>           
                <span className={router.pathname === "/profile" ? styles.active : styles.link}>Profile</span>
            </Link>
            <Link href="/blog/items" passHref>
                <span className={router.pathname === "/blog/items" ? styles.active : styles.link}>Items</span>
            </Link>
            <Link href="/blog/categories" passHref>
                <span className={router.pathname === "/blog/categories" ? styles.active : styles.link} >Categories</span>
            </Link>
            <Link href="/departements" passHref>
                <span className={router.pathname === "/departements" ? styles.active : styles.link} >Départements</span>
            </Link>
        </div>
    )
}