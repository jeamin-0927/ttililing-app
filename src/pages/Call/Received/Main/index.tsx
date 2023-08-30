import React from "react";
import { Image } from "react-native";

import styles from "./styles";

const src = "https://s3-alpha-sig.figma.com/img/26a1/9cb3/b8d724ac8074bb487ce2f0e167a5914b?Expires=1694390400&Signature=oit~3svyozE-Z4W2ZDJs966ooFUhOXVoyZrmOPjGU2gDU6kSw-rF6DR0cO4tpeQdutlZwuAdObZyg76V1D3c7xtR3zri3RWw--kGLoFlb2OYMbVXPaU0Psa-zgX95daNXWaeMhUcCqah4wAODPuB7lpNspuovByfrLRcMTe0nXsf6CJ9irq9XeH5cu3b0fItZCYW8~RrOPkaqs1q3-kAZ4HE5IrVklqz6lNOmWU77-k2xyIGo10Er9YMahTK9uvCVD4pqPoM7vm8t99DEJN8nLwNF6ANPHQXSJnuRABSC8SDkI-QCkX0wv99uEzTbMqW1-oeFeJkfdVrMjkOanLamQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

const Main = () => {
  return (
    <Image source={{ uri: src }} style={styles.image} />
  );
};

export default Main;