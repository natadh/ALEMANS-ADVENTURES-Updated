import FlyingSafariGuide from "./FlyingSafariGuide";
import CampingTypesGuide from "./CampingTypesGuide";

interface Props {
  type: string;
}

export default function CategoryDescriptor({ type }: Props) {
  switch (type) {
    case "flyingSafariGuide":
      return <FlyingSafariGuide />;
    case "campingTypesGuide":
        return <CampingTypesGuide />;
    default:
      return null;
  }
}
