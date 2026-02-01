import kenyaSafaris from "../../../pages/Destinations/kenya/Safaris/safarisinfo.json";
import tanzaniaSafaris from "../../../pages/Destinations/Tanzania/Safaris/safarisinfo.json";
import ugandaSafaris from "../../../pages/Destinations/Uganda/Safaris/safarisinfo.json";
import rwandaSafaris from "../../../pages/Destinations/Rwanda/Safaris/safarisinfo.json"
import zanzibarSafaris from "../../../pages/Destinations/Zanzibar/Safaris/safarisinfo.json";;

import { flattenSafaris } from "./flattenSafaris";

export const ALL_SAFARIS = [
  ...flattenSafaris(kenyaSafaris, "kenya"),
  ...flattenSafaris(tanzaniaSafaris, "tanzania"),
  ...flattenSafaris(ugandaSafaris, "uganda"),
  ...flattenSafaris(rwandaSafaris, "rwanda"),
  ...flattenSafaris(zanzibarSafaris, "zanzibar"),
];
