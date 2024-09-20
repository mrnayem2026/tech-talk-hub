import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.coding}`}
      >
        Coding
      </Link>
      <Link
        href="/blog"
        className={`${styles.categoryItem} ${styles.creativity}`}
      >
        Cretivity
      </Link>
      <Link
        href="/blog"
        className={`${styles.categoryItem} ${styles.techStartups}`}
      >
        Tech Startups
      </Link>
      <Link
        href="/blog"
        className={`${styles.categoryItem} ${styles.marketing}`}
      >
        Marketing
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.saas}`}>
        SaaS
      </Link>
      <Link
        href="/blog"
        className={`${styles.categoryItem} ${styles.technology}`}
      >
        Technology
      </Link>
    </div>
  );
};

export default MenuCategories;
