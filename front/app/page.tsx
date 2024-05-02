import Link from "next/link";
import style from "./style.module.css"
import SlideHome from "@/components/SlideHome/SlideHome";

export default function Home() {
  return (
      <article  className={style.article}> 
        <SlideHome >
            <main className={style.main}>
                <h1>Welcome to Gm_Route!</h1>
                    <p>
                        Your destiny to find the  best electronic products
                        for home, fashion and more! 
                        with a wide range of products and fast delivery we will make your shopping experience something different and exciting.
                    </p>
                    <p>
                        Explore our shop today and let us take you to 
                        your next shopping route
                    </p>
                    <b>but first</b>

                    <p >are you new here?<Link className={style.link} href="/auth/register"> Register</Link></p> 
                    
                    <p >we know you? <Link className={style.link} href="/auth/login"> Login</Link></p>
            </main>

        </SlideHome>
      </article>
);}
