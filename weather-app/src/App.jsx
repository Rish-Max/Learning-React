import Alert from "./component/Alert";
import Card from "./component/Card";
import useWeather from "./hook/useWeather";

function App() {
  const [weatherInfo, loading] = useWeather();
  const { isLoading, msg, hasError } = loading;

  return (
    <div className="bg-slate-900 w-screen h-screen flex justify-center items-center ">
      {hasError ? (
        <Alert msg={msg} />
      ) : (
        <Card weatherInfo={weatherInfo} msg={msg} isLoading={isLoading} />
      )}
    </div>
  );
}

export default App;
