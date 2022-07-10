import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";
import { Album } from "../album";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-product-description",
  templateUrl: "./product-description.component.html",
  styleUrls: ["./product-description.component.css"],
})
export class ProductDescriptionComponent implements OnInit {
  albumInfo: Album;
  constructor(
    private _productService: ProductService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Get the Product Id from current route
    const routeParams = this._route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get("id")) - 1;

    this._productService
      .getAlbum(productIdFromRoute)
      .subscribe((response) => (this.albumInfo = response[productIdFromRoute]));
  }
}
