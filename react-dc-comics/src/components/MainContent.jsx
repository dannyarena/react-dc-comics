import comics from '../comics';
import ComicCard from '../components/comicCard'; 

// crea funzione per mostrare card dinamiche
function MainContent () {
    return (
        <main className="comics-wrapper">
            <div className='main-wrapper'>
            <div className="section-header">
                <h2 className='section-title'>Current Series</h2>
            </div>
        <div className="comics-grid">
            {comics.map((comic) => (
                <ComicCard
                key={comic.id}
                title={comic.title}
                thumb={comic.thumb}
                />
            ))}
        </div>

        <div className='load-more-wrapper'>
        <button className='load-more'>Load More</button>
        </div>
        </div>
        </main>
    );
}

export default MainContent;