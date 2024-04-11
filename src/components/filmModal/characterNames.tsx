import { getPerson } from '@/api/swapi';

interface Props {
  film: Film;
}

const CharacterNames = async ({ film }: Props) => {
  const people = await Promise.all(
    film.characters.map((personUrl) => getPerson(personUrl))
  );

  return (
    <>
      {people.map((person, index) => {
        return <p key={index}>{person.name}</p>;
      })}
    </>
  );
};

export default CharacterNames;
