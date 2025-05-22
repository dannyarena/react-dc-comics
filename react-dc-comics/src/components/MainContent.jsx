import comics from '../react-dc-comics/comics';
import comicCard from '../components/comicCard'; 

function MainContent () {
    return (
        <main>
            {comics.map((comic) => (
                <comicCard
                key={comic.id}
                title={comic.title}
                thumb={comic.thumb}
                />
            ))}
        </main>
    );
}

export default MainContent;