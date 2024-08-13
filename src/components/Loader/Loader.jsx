import { Circles } from "react-loader-spinner";

export default function Loader() {
  return (
    <Circles
      height="80"
      width="80"
      color="#808080"
      ariaLabel="circles-loading"
      wrapperStyle={{ justifyContent: "center", marginTop: "16px" }}
      wrapperClass=""
      visible={true}
    />
  );
}
