import styles from './page.module.css';
import { getFilms } from '../api/swapi';
import FilmCard from '@/components/filmCard/filmCard';
import FilmModal from '@/components/filmModal/filmModal';

interface Props {
  searchParams: Record<string, string> | undefined;
}

export default async function Home({ searchParams }: Props) {
  const films: Film[] = await getFilms();

  // Make sure films are sorted on release date
  films.sort((a, b) => {
    if (a.release_date < b.release_date) {
      return -1;
    }
    return 1;
  });

  // Url contains search param "film=" if modal should be open
  const activeFilm = films.find(
    (film) => film.episode_id == searchParams?.film
  );

  return (
    <>
      <div className={styles.cardGrid}>
        {films.map((film, index) => (
          <FilmCard key={index} film={film} />
        ))}
      </div>
      {activeFilm && <FilmModal film={activeFilm} />}
    </>
  );
}
