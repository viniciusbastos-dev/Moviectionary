import {
  MediaDetails,
  MediaObject,
  getMediaDetails,
} from "../../services/getMediaDetails";
import { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MediaInfo from "../../components/MediaInfo";

const Details = () => {
  const { type = "", id = "" } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [mediaDetails, setMediaDetails] = useState<MediaDetails>(MediaObject);

  useLayoutEffect(() => {
    const fetchData = async () => {
      const response = await getMediaDetails({
        media_type: type,
        id: id,
      });
      if (response.code === "success") {
        setMediaDetails(response.data);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [type, id]);

  return isLoading ? (
    ""
  ) : (
    <>
      <MediaInfo mediaDetails={mediaDetails} />
    </>
  );
};

export default Details;
