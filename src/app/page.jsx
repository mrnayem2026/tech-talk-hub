import CategoryList from "@/components/categoryList/CategoryList";
import Featured from "@/components/featured/Featured";
import styles from './homepage.module.css'


export default function Home() {
  return (
    <main className={styles.container}>  
      <Featured/>
      <CategoryList/>
      <div className={styles.content}>
        {/* <CardList page={page}/> */}
        card list
      </div>
    </main>
  );
}
