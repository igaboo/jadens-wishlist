import styles from "../scss/Home.module.scss";
import Head from "next/head";

import { client } from "../lib/client";
import { GiftCards } from "../components/GiftCards/GiftCards";
import { StockingStuffers } from "../components/StockingStuffers/StockingStuffers";
import { Hero } from "../components/Hero/Hero";
import { Wishlist } from "../components/Wishlist/Wishlist";

export default function Home({
  items,
  stockingItems,
  settings: {
    image,
    title,
    description,
    colors: { bgColor, cardColor, linkColor, darkFont },
  },
  giftCards,
}) {
  return (
    <div className={styles.container}>
      {/* custom colors rendered in ssr */}
      <style jsx global>{`
        body {
          background: ${bgColor.hex};
          color: ${darkFont ? "black" : "white"};
        }
        p a {
          color: ${linkColor.hex};
        }
      `}</style>

      <Head>
        <title>{title}</title>
        <meta name="description" content="A wishlist of plentiful things" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero
        image={image}
        title={title}
        description={description}
        linkColor={linkColor}
      />
      <Wishlist items={items} bgColor={bgColor} cardColor={cardColor} />
      <StockingStuffers stockingItems={stockingItems} />
      <GiftCards giftCards={giftCards} cardColor={cardColor} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const items = await client.fetch('*[_type == "item"]');
  const stockingItems = await client.fetch('*[_type == "stockingItem"]');
  const settings = await client.fetch('*[_type == "settings"]');
  const giftCards = await client.fetch('*[_type == "giftCard"]');

  return {
    props: { items, stockingItems, settings: settings[0], giftCards },
  };
};
