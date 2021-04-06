import { Component, OnInit } from '@angular/core';
import User from 'src/app/models/user.model';
import ItemsCountPipe from 'src/app/pipes/items-count.pipe';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {

  user: User;
  items: any[];
  itemsCount!: number;

  constructor(private itemsCountPipe: ItemsCountPipe) {
    this.user = new User({ name: 'joe' });
    this.items = ['a', 'b', 'c'];
  }

  ngOnInit(): void {
    this.itemsCount = this.itemsCountPipe.transform(this.items);
  }

}
