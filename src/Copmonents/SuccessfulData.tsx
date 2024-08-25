interface props {
  useJsonFetch: (url: string, options?: RequestInit | undefined) => any;
}

export default function SuccessfulData({ useJsonFetch }: props) {
  const [data, loading, error] = useJsonFetch("http://localhost:7070/data");

  return (
    <>
      <div className="result_box">
        <h3 className="tilte_box">Успешное получение данных</h3>
        <div className="data">data: {data}</div>
        <div className="loading">loading: {loading}</div>
        <div className="error">error: {error}</div>
      </div>
    </>
  );
}
