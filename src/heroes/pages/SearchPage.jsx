import { useNavigate, useSearchParams } from 'react-router-dom';
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../components'
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const { q = '' } = Object.fromEntries([...searchParams]);

    const { searchHero, onInputChange } = useForm({
        searchHero: q,
    })
    
    const heroes = getHeroesByName(q);

    const showSearch = (q.length === 0);

    const showError = (q.length > 0) && heroes.length === 0;


    const handleSearchSubmit = (e) => {
        e.preventDefault();

        // if (searchHero.trim().length <= 1) return;

        setSearchParams({ q : searchHero });
    }

    return (
        <>
            <h1 className="fs-1">Search</h1>
            <hr />

            <div className="row mt-3">
                <div className="col-5">
                    <h4 className="fs-3">Searching</h4>
                    <hr />

                    <form onSubmit={handleSearchSubmit}>
                        <input
                            type="text"
                            name="searchHero"
                            className='form-control mt-2'
                            placeholder='Search a hero'
                            autoComplete='off'
                            value={searchHero}
                            onChange={onInputChange}
                        />

                        <button type='submit' className="btn btn-outline-primary mt-1">
                            Search
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr />
                    {/* {
                        ( q === '')
                            ? <div className="alert alert-primary">Search a hero.</div>
                            : (heroes.length === 0) && <div className="alert alert-danger">No results found of <b>{q}</b></div>
                    } */}

                    <div className="alert alert-primary" style={{display: showSearch ? '' : 'none' }}>
                        Search a hero.
                    </div>

                    <div className="alert alert-danger" style={{ display: showError ? '' : 'none' }}>
                        No results found of <b>{q}</b>
                    </div>

                    {
                        heroes.map(hero => (
                            <HeroCard key={ hero.id } {...hero} />
                        ))
                    }
                    {/* <HeroCard {...hero} /> */}
                </div>
            </div>

        </>
    )
}
