import {Component, OnInit, ViewChild} from '@angular/core';
import {AddTypeTextComponent} from "./add-type-text/add-type-text.component";
import {TypeText} from "../../../_model/typeText/typeText";
import {TypeTextService} from "../../../_services/http/typeText/type-text.service";
import {TypeTextCacheService} from "../../../_services/cache/typeText-cache/type-text-cache.service";

@Component({
  selector: 'app-type-text',
  templateUrl: './type-text.component.html',
  styleUrls: ['./type-text.component.scss']
})
export class TypeTextComponent implements OnInit {

  @ViewChild('addTypeTextComponent')addTypeTextComponent!: AddTypeTextComponent;

  typeText!: TypeText[];

  constructor(
    private typeTextService: TypeTextService,
    private typeTextCache: TypeTextCacheService
  ) { }

  ngOnInit(): void {
    this.prepareLoadTypeTex();
  }

  prepareLoadTypeTex() {
    if (this.typeTextCache.getTypeText()) {
      this.typeText = this.typeTextCache.getTypeText();
      return;
    }
    this.loadTypeText();
  }

  addNewText() {
    this.addTypeTextComponent.newText();
  }

  updateText(typeText: TypeText) {
    this.addTypeTextComponent.updateText(typeText);
  }

  loadTypeText() {
    this.typeTextService.getTypeText().subscribe(value => {
      this.typeText = value;
      this.typeTextCache.createCache(value);
    });
  }
}
