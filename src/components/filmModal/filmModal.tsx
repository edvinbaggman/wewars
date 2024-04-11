import Link from 'next/link';
import styles from './filmModal.module.css';
import { Suspense } from 'react';
import CharacterNames from './characterNames';
import NamesLoading from './namesLoading';

interface Props {
  film: Film;
}

const FilmModal = async ({ film }: Props) => {
  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <Link href='/' className={styles.closeBtn}>
          Close
        </Link>
        <h1>{film.title}</h1>
        <h2>Characters</h2>

        {/* Holds all names. Calculates how many row is needed to fit all character names in 3 columns */}
        <div
          className={styles.nameContainer}
          style={{
            gridTemplateRows: `repeat(${Math.ceil(
              film.characters.length / 3
            )}, 1fr)`,
          }}
        >
          <Suspense fallback={<NamesLoading film={film} />}>
            <CharacterNames film={film} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default FilmModal;
