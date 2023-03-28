import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistItem } from '../../interfaces/wishlist.interface';
import { WishlistService } from '../../wishlist.service';

@Component({
  selector: 'app-new-wishlist-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-wishlist-form.component.html',
  styleUrls: ['./new-wishlist-form.component.scss'],
})
export class NewWishlistFormComponent {
  wlService = inject(WishlistService);
  addNewItem(text: string, e: SubmitEvent) {
    e.preventDefault();
    const newItem: WishlistItem = {
      id: crypto.randomUUID(),
      text,
      done: false,
    };
    console.log({ newItem });
    this.wlService.wlArray.set([newItem, ...this.wlService.wlArray()]);
    const target = e.target as HTMLFormElement;
    target.reset();
  }
}
