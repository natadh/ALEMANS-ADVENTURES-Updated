import kenya from "../../../pages/Destinations/kenya/Safaris/safarisinfo.json";
import tanzania from "../../../pages/Destinations/Tanzania/Safaris/safarisinfo.json";
import uganda from "../../../pages/Destinations/Uganda/Safaris/safarisinfo.json";
import rwanda from "../../../pages/Destinations/Rwanda/Safaris/safarisinfo.json"
import zanzibar from "../../../pages/Destinations/Zanzibar/Safaris/safarisinfo.json";;

import { buildSafariIndex } from "./buildSafariSearchIndex";

export const SAFARI_SEARCH_INDEX = [
  ...buildSafariIndex(kenya, "kenya"),
  ...buildSafariIndex(tanzania, "tanzania"),
  ...buildSafariIndex(uganda, "uganda"),
  ...buildSafariIndex(rwanda, "rwanda"),
  ...buildSafariIndex(zanzibar, "zanzibar"),
];
