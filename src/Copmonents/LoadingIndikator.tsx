interface props {
  useJsonFetch: (url: string, options?: RequestInit | undefined) => string[];
}

export default function LoadingIndikator({ useJsonFetch }: props) {
  const [data, loading, error] = useJsonFetch("http://localhost:7070/loading");

  console.log(useJsonFetch("http://localhost:7070/loading"));

  return (
    <>
      <div className="result_box">
        <h3 className="tilte_box">Индикатор загрузки</h3>
        <div className="data">data: {data}</div>
        <div className="loading">loading: {loading}</div>
        <div className="error">error: {error}</div>
      </div>
    </>
  );
}
