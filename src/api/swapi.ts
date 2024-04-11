// Returns array of all films. Note: if more than 10 films exists, one would need to fetch multiple pages (e.g. /films/?page=2) and combine the results.
export async function getFilms() {
  const res = await fetch('https://swapi.py4e.com/api/films/', {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch films :(');
  }

  const data = await res.json();

  const films: Film[] = data.results;

  return films;
}

// Takes Url to film and returns json of film.
export async function getFilm(filmUrl: string) {
  const res = await fetch(filmUrl, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch film :(');
  }

  const film: Film = await res.json();

  return film;
}

// Takes Url to person and returns json of person.
export async function getPerson(personUrl: string) {
  const res = await fetch(personUrl, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch person :(');
  }

  const person: Person = await res.json();

  return person;
}
