interface Props {
  film: Film;
}

const NamesLoading = ({ film }: Props) => {
  return (
    <>
      {Array.from({ length: film.characters.length }, (_, index) => {
        return <p key={index}>{!index ? 'Loading...' : '...'}</p>;
      })}
    </>
  );
};

export default NamesLoading;
