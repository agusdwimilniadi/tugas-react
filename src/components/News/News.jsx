import { useEffect, useState } from "react";

const News = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [topData, setTopData] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=4cc4bc7145ac465c851767c282faef08"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setTopData(result.articles);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <>
        <div className="container mt-5">
          <h1 className="m-4 text-center">Loading....</h1>
        </div>
      </>
    );
  } else {
    return (
      <>
        {console.log("toppp", topData)}
        <div className="container mt-5">
          <h1 className="m-4 text-center"> Alterra Academy News</h1>
          <div className="row">
            {topData.map((x) => (
              <div className="col-4 align-self-center">
                <div className="card m-auto mt-3" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top"
                    src={x.urlToImage}
                    alt={x.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{x.title}</h5>
                    <p className="card-text">{x.description}</p>
                    <a href={x.url} className="btn btn-primary">
                      Baca berita..
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
};
export default News;
