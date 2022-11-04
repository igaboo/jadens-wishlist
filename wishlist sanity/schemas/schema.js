import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import item from "./item";
import stockingItem from "./stockingItem";
import settings from "./settings";
import giftCard from "./giftCard";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([item, stockingItem, settings, giftCard]),
});
