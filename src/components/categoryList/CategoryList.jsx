import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

// const getData = async () => {
//   const res = await fetch("http://localhost:3000/api/categories", {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed");
//   }

//   return res.json();
// };

const data = [
  {
    "_id": "1",
    "slug": "coding",
    "img": "https://plus.unsplash.com/premium_photo-1678566153919-86c4ba4216f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nfGVufDB8fDB8fHww",
    "title": "Coding"
  },
  {
    "_id": "2",
    "slug": "technology",
    "img": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D",
    "title": "Technology"
  },
  {
    "_id": "3",
    "slug": "saas",
    "img": "https://plus.unsplash.com/premium_photo-1678565202188-f69b2e593998?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFNhYVN8ZW58MHx8MHx8fDA%3D",
    "title": "SaaS"
  },
  {
    "_id": "4",
    "slug": "marketing",
    "img": "https://plus.unsplash.com/premium_photo-1661292033733-17272453224b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFya2V0aW5nfGVufDB8fDB8fHww",
    "title": "Marketing"
  },
  {
    "_id": "5",
    "slug": "tech-startups",
    "img": "https://plus.unsplash.com/premium_photo-1677087123392-3a3c03b69790?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHN0YXJ0dXBzfGVufDB8fDB8fHww",
    "title": "Tech Startups"
  },
  {
    "_id": "6",
    "slug": "creativity",
    "img": "https://images.unsplash.com/photo-1486303954368-398fea0e72cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3JldGl2aXR5fGVufDB8fDB8fHww",
    "title": "Cretivity"
  }
]

const CategoryList = async () => {
  // const data = await getData();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map((item) => (
          <Link
            href="/blog?cat=style"
            className={`${styles.category} ${styles[item.slug]}`}
            key={item._id}
          >
            {item.img && (
              <Image
                src={item.img}
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
