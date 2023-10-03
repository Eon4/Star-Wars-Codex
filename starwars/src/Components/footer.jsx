import style from "../Style/footer.module.scss";
import BlueSaber from  '../assets/images/bluelightsaber.png'
import GreenSaber from  '../assets/images/greenlightsaber.png'


export function Footer() {

    return (
      <footer className={style.autoFlow}>
        <article>
        <img className={style.blue} src={BlueSaber} alt="bluesaber" />
        <img className={style.green} src={GreenSaber} alt="bluesaber" />

          <h2>Created by Cecilia</h2> 
        </article>
 
      </footer>
    );
  }