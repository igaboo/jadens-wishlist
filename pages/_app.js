import "../scss/globals.scss";

const { library } = require("@fortawesome/fontawesome-svg-core");
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
