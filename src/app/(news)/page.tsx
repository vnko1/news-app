import { redirect } from "next/navigation";
import { LinksEnum } from "@/types";

function AppPage() {
  return redirect(LinksEnum.Home);
}

export default AppPage;
