import axios from "axios";
import { useEffect, useState } from "react";

const News = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [topData, setTopData] = useState([]);

  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=bitcoin&apiKey=4cc4bc7145ac465c851767c282faef08"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          setTopData(result);
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
        {console.log("toppp", topData.articles)}
        <div className="container mt-5">
          <h1 className="m-4 text-center"> Alterra Academy News</h1>
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
            </div>
            <div className="carousel-inner rounded">
              <div className="carousel-item active">
                <img
                  src="https://picsum.photos/200/300"
                  className="d-block w-100 rounded"
                  alt="..."
                  height="350px"
                  style={{ objectFit: "cover" }}
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item rounded">
                <img
                  src="https://picsum.photos/100/300"
                  className="d-block w-100 rounded"
                  alt="..."
                  height="350px"
                  style={{ objectFit: "cover" }}
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>
                    Some representative placeholder content for the second
                    slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item rounded">
                <img
                  src="https://picsum.photos/200/100"
                  className="d-block w-100 rounded"
                  alt="..."
                  height="350px"
                  style={{ objectFit: "cover" }}
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>
                    Some representative placeholder content for the third slide.
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </>
    );
  }

  //   async function handleFetch() {
  //     try {
  //       result = await axios.get(`${URL}`);
  //       setNews(result.data.articles);
  //       console.log(result);
  //     } catch (error) {}
  //   }
};
export default News;
