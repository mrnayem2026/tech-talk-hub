import CategoryList from "@/components/categoryList/CategoryList";
import Featured from "@/components/featured/Featured";
import styles from './homepage.module.css'
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";


export default function Home() {
  const page = [
    {
      "key": "1",
      "img": "https://plus.unsplash.com/premium_photo-1674374442634-70c4cd7864e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vdGl2YXRpb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      "createdAt": "2023-10-01T12:34:56Z",
      "catSlug": "technology",
      "slug": "post-1",
      "title": "First Post",
      "desc": "This is a brief description of the first post. It provides an overview of the content."
    },
    {
      "key": "2",
      "img": "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vdGl2YXRpb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      "createdAt": "2023-10-02T12:34:56Z",
      "catSlug": "lifestyle",
      "slug": "post-2",
      "title": "Second Post",
      "desc": "This is a brief description of the second post. It provides an overview of the content."
    },
    {
      "key": "3",
      "img": "https://plus.unsplash.com/premium_photo-1687067885966-d755107af021?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW90aXZhdGlvbmFsfGVufDB8fDB8fHww",
      "createdAt": "2023-10-03T12:34:56Z",
      "catSlug": "health",
      "slug": "post-3",
      "title": "Third Post",
      "desc": "This is a brief description of the third post. It provides an overview of the content."
    },
    {
      "key": "4",
      "img": "https://plus.unsplash.com/premium_photo-1671599016130-7882dbff302f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW90aXZhdGlvbmFsfGVufDB8fDB8fHww",
      "createdAt": "2023-10-04T12:34:56Z",
      "catSlug": "travel",
      "slug": "post-4",
      "title": "Fourth Post",
      "desc": "This is a brief description of the fourth post. It provides an overview of the content."
    },
    {
      "key": "5",
      "img": "https://images.unsplash.com/photo-1605514449459-5a9cfa0b9955?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW90aXZhdGlvbmFsfGVufDB8fDB8fHww",
      "createdAt": "2023-10-05T12:34:56Z",
      "catSlug": "food",
      "slug": "post-5",
      "title": "Fifth Post",
      "desc": "This is a brief description of the fifth post. It provides an overview of the content."
    },
    {
      "key": "6",
      "img": "https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW90aXZhdGlvbmFsfGVufDB8fDB8fHww",
      "createdAt": "2023-10-06T12:34:56Z",
      "catSlug": "fashion",
      "slug": "post-6",
      "title": "Sixth Post",
      "desc": "This is a brief description of the sixth post. It provides an overview of the content."
    }
  ]
  return (
    <main className={styles.container}>  
      <Featured/>
      <CategoryList/>
      <div className={styles.content}>
        <CardList page={page}/>
        <Menu/>
      </div>
    </main>
  );
}
