import comics from '../comics';
import ComicCard from '../components/comicCard'; 

// crea funzione per mostrare card dinamiche
function MainContent () {
    return (
        <main>
            {comics.map((comic) => (
                <ComicCard
                key={comic.id}
                title={comic.title}
                thumb={comic.thumb}
                />
            ))}
        </main>
    );
}

export default MainContent;