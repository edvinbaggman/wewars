import Link from 'next/link';
import styles from './filmCard.module.css';

interface Props {
  film: Film;
}

const FilmCard = ({ film }: Props) => {
  return (
    <Link href={`/?film=${film.episode_id}`}>
      <div className={styles.card}>
        <h4>{film.title}</h4>
        <p>{film.release_date}</p>
      </div>
    </Link>
  );
};

export default FilmCard;
