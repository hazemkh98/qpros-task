import React , {useState ,useEffect} from 'react'

function LeftSection() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourRotation = (hours % 12) * (360 / 12) + (minutes / 12) * (360 / 60);
  const minRotation = minutes * (360 / 60) + (seconds / 60) * (360 / 60);
  const secRotation = seconds * (360 / 60);

  return (
    <div className="w-full md:w-2/5 bg-emerald-500 p-8">
    <div className="text-center">
      <h2 className="text-white text-4xl mb-12">User Information </h2>
      <div className="clock-container">
      <div className="clock" style={{ background: "white", borderRadius: "50%" }}>
        <div className="hand hour_hand" style={{ transform: `rotate(${hourRotation}deg)`, background: "black" }} />
        <div className="hand min_hand" style={{ transform: `rotate(${minRotation}deg)`, background: "black" }} />
        <div className="hand sec_hand" style={{ transform: `rotate(${secRotation}deg)`, background: "red" }} />

        <div>
          <div className="flagCountryInside">
            <img src={`https://flagcdn.com/w40/jo.png`} alt="Flag" />
          </div>
        </div>

        <div className="Show_AM_PM" style={{ opacity: "1", color: "black" }}>
          AM
        </div>
        <span className="twelve" style={{ color: "black" }}>
      12
    </span>
    <span className="one" style={{ color: "black" }}>
      1
    </span>
    <span className="two" style={{ color: "black" }}>
      2
    </span>
    <span className="three" style={{ color: "black" }}>
      3
    </span>
    <span className="four" style={{ color: "black" }}>
      4
    </span>
    <span className="five" style={{ color: "black" }}>
      5
    </span>
    <span className="six" style={{ color: "black" }}>
      6
    </span>
    <span className="seven" style={{ color: "black" }}>
      7
    </span>
    <span className="eight" style={{ color: "black" }}>
      8
    </span>
    <span className="nine" style={{ color: "black" }}>
      9
    </span>
    <span className="ten" style={{ color: "black" }}>
      10
    </span>
    <span className="eleven" style={{ color: "black" }}>
      11
    </span>
      </div>
    </div>

      <p className="text-white ">
        es simplemente el texto de relleno de las imprentas y archivos de
        texto. Lorem Ipsum ha sido el texto de relleno estándar de las
        industrias desde el año 1500, cuando un impresor (N. del T. persona
        que se dedica a la imprenta) desconocido usó una galería de textos y
        los mezcló de tal manera que logró hacer un libro de textos
        especimen. No sólo sobrevivió 500 años, sino que tambien ingresó
        como texto de relleno en documentos electrónicos, quedando
        esencialmente igual al original. Fue popularizado en los 60s con la
        creación de las hojas "Letraset"
      </p>
    </div>
  </div>
  )
}

export default LeftSection