import { ActivatedRoute } from "@angular/router";

interface BaseNavigationExtras {
  queryParams: Object;
  replaceUrl: boolean;
  clearHistory: boolean;
  animated: boolean;
  transition: Object;
  relativeTo: ActivatedRoute | null;
}

export interface NavExtras extends Partial<BaseNavigationExtras> {}
