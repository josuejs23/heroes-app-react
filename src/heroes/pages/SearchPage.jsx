import { HeroCard } from "../components/HeroCard"
import queryString from 'query-string'
import { useForm } from '../../hooks'
import { useLocation, useNavigate } from "react-router-dom"
import { getHeroesByName } from "../helpers"


export const SearchPage = () => {

  
  const { searchText, onInputChange, onResetForm } = useForm({
    searchText: ''
  })
  
  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search)

  const heroes = getHeroesByName(q);

  const showSearch = (q.length===0)
  const showError = (q.length>0) && heroes.length == 0;

  const onSearchSubmit = (event) => {
    event.preventDefault();
    // if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`)
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">

        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search hero..."
              className="form-control"
              value={searchText}
              onChange={onInputChange}
              autoComplete="off"
              name="searchText"
              id=""

            />
            <button className="btn btn-primary mt-1">
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results:</h4>
          <hr />
        
          <div className="alert alert-danger"  style={{display:showError? '':'none'}}>
            There's is no hero: {q}
          </div>
          
          <div className="alert alert-primary" style={{display:showSearch? '':'none'}}>
            Search a hero
          </div>
          {
            heroes.map(hero=><HeroCard key={hero.id} hero={hero}/>)
          }
        
        </div>
      </div>
    </>
  )
}
