import { useParams } from "react-router-dom";

const Details = () => {
  const { id, type } = useParams();

  const params = {
    id: id ?? "",
    type: type ?? "",
  };

  return (
    <>
      <h1>
        {params.id} {params.type}
      </h1>
    </>
  );
};

export default Details;
