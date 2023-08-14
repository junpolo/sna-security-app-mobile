import { Injectable } from "@angular/core";

export interface DataItem {
  id: number;
  name: string;
  description: string;
}

@Injectable({
  providedIn: "root",
})
export class DataService {
  private items = new Array<DataItem>({
    id: 1,
    name: "Item 322",
    description: "Description for Item 1",
  });

  getItems(): Array<DataItem> {
    return this.items;
  }

  getItem(id: number): DataItem {
    return this.items.filter((item) => item.id === id)[0];
  }
}
