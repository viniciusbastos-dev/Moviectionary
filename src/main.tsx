import ReactDOM from "react-dom/client";
import AppRoutes from "./routes.tsx";
import { register } from "swiper/element/bundle";
import "./index.css";
import "swiper/css";
import "swiper/css/navigation";

register();

ReactDOM.createRoot(document.getElementById("root")!).render(<AppRoutes />);
