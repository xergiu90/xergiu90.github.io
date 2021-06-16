(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-favorites-favourites-module"],{

/***/ "3sif":
/*!******************************************************!*\
  !*** ./src/app/pages/favorites/favourites.module.ts ***!
  \******************************************************/
/*! exports provided: FavouritesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouritesModule", function() { return FavouritesModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _favourites_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favourites.component */ "IPnq");
/* harmony import */ var _favourites_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./favourites.routes */ "zfKE");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






class FavouritesModule {
}
FavouritesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: FavouritesModule });
FavouritesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function FavouritesModule_Factory(t) { return new (t || FavouritesModule)(); }, imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(_favourites_routes__WEBPACK_IMPORTED_MODULE_2__["FavouritesRoutes"]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](FavouritesModule, { declarations: [_favourites_component__WEBPACK_IMPORTED_MODULE_1__["FavouritesComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "IPnq":
/*!*********************************************************!*\
  !*** ./src/app/pages/favorites/favourites.component.ts ***!
  \*********************************************************/
/*! exports provided: FavouritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouritesComponent", function() { return FavouritesComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _shared_components_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/components/movie-details/movie-details.component */ "qi3s");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services */ "dJ3e");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









const _c0 = function () { return { "width": "200px", "height": "290px" }; };
function FavouritesComponent_ng_container_4_div_3_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 20);
} if (rf & 2) {
    const movie_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", movie_r1.posterURL, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c0));
} }
function FavouritesComponent_ng_container_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FavouritesComponent_ng_container_4_div_3_img_1_Template, 1, 3, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", movie_r1.posterURL);
} }
function FavouritesComponent_ng_container_4_div_20_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const genre_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r7.genreName[genre_r8] ? ctx_r7.genreName[genre_r8] : "", " ");
} }
function FavouritesComponent_ng_container_4_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Genre: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, FavouritesComponent_ng_container_4_div_20_span_2_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", movie_r1.genre);
} }
function FavouritesComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, FavouritesComponent_ng_container_4_div_3_Template, 2, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FavouritesComponent_ng_container_4_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const movie_r1 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.showMovieDetails(movie_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Year: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Rating:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, FavouritesComponent_ng_container_4_div_20_Template, 3, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FavouritesComponent_ng_container_4_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const movie_r1 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.toggleFavourites(movie_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const movie_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", movie_r1.posterURL);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](movie_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](movie_r1.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](movie_r1.rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", movie_r1.genre.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("color", !movie_r1.isFavourite ? "accent" : "primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", !movie_r1.isFavourite ? "Add to Favorites" : "Remove from Favourites", " ");
} }
class FavouritesComponent {
    constructor(dialog, usersService, cdr, stateService, movieService) {
        this.dialog = dialog;
        this.usersService = usersService;
        this.cdr = cdr;
        this.stateService = stateService;
        this.movieService = movieService;
        this.favourites = [];
        this.genreName = [];
        this.userSubscription = this.stateService.getCurrentUser().subscribe(user => {
            if (user && user.id) {
                this.currentUser = user;
            }
        });
        this.readFavourites();
        this.fetchGenres();
    }
    ngOnDestroy() {
        if (this.userSubscription) {
            this.userSubscription.unsubscribe();
        }
    }
    readFavourites() {
        const storedMoviesString = JSON.parse(localStorage.getItem('favourites'));
        if (storedMoviesString) {
            const storedMoviesObject = storedMoviesString[this.currentUser.id];
            if (storedMoviesObject) {
                this.favourites = storedMoviesObject;
                this.cdr.markForCheck();
            }
        }
    }
    toggleFavourites(movie) {
        movie.isFavourite = !movie.isFavourite;
        this.favourites = this.favourites.filter(mov => {
            return mov.isFavourite;
        });
        const favMoviesPerUser = JSON.parse(localStorage.getItem('favourites'));
        favMoviesPerUser[this.currentUser.id] = this.favourites;
        localStorage.setItem('favourites', JSON.stringify(favMoviesPerUser));
    }
    fetchGenres() {
        this.movieService.getGenres().subscribe(res => {
            if (res) {
                this.genreName = res.genres.reduce((map, genre) => {
                    map[genre.id] = genre.name;
                    return map;
                }, {});
            }
        }, err => {
        });
    }
    showMovieDetails(movie) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogConfig"]();
        dialogConfig.width = '500px';
        dialogConfig.hasBackdrop = true;
        dialogConfig.closeOnNavigation = true;
        const dialogRef = this.dialog.open(_shared_components_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_1__["MovieDetailsComponent"], dialogConfig);
        dialogRef.componentInstance.movie = movie;
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.cdr.markForCheck();
            }
        });
    }
}
FavouritesComponent.ɵfac = function FavouritesComponent_Factory(t) { return new (t || FavouritesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_3__["StateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_3__["MovieService"])); };
FavouritesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FavouritesComponent, selectors: [["app-favourites"]], decls: 5, vars: 1, consts: [["fxFlex", "100", "fxLayout", "row wrap", 1, "favourites-page"], ["fxFlex", "100"], ["fxLayout", "row wrap", "fxLayoutGap", "10px", "fxFlex", "100", 1, "users-container"], [4, "ngFor", "ngForOf"], ["fxFlex", "1 1 24", "fxFlex.lt-lg", "0 1 48", "fxFlex.lt-sm", "0 1 95", "fxLayout", "row wrap", 1, "movie"], ["fxFlex", "50%"], ["class", "photo-container", 3, "ngStyle", 4, "ngIf"], ["fxFlex", "50%", "fxLayout", "row wrap"], ["fxFlex", "calc(100%-60px)", "fxLayout", "row wrap", "fxLayoutAlign", "start start", 1, "user-info"], ["fxFlex", "100", 1, "pointer", 3, "click"], [1, "movie-title"], [1, "bold"], ["fxFlex", "calc(60px)", "fxLayout", "row wrap", "fxLayoutAlign", "center start", 1, "rating-wrapper"], ["fxFlex", "100", 1, "rating"], ["fxFlex", "100", "fxLayoutAlign", "start start"], ["fxFlex", "100", 4, "ngIf"], ["fxFlex", "100", "fxLayoutAlign", "center center", 1, "favourites"], ["mat-raised-button", "", 3, "color", "click"], [1, "photo-container", 3, "ngStyle"], ["class", "photo-tag", 3, "ngStyle", "src", 4, "ngIf"], [1, "photo-tag", 3, "ngStyle", "src"], ["class", "genre-token", 4, "ngFor", "ngForOf"], [1, "genre-token"]], template: function FavouritesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Favourite Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, FavouritesComponent_ng_container_4_Template, 24, 7, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.favourites);
    } }, directives: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"]], styles: [".favourites-page[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.favourites-page[_ngcontent-%COMP%]   .movie[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.favourites-page[_ngcontent-%COMP%]   .movie-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 24px;\n}\n.favourites-page[_ngcontent-%COMP%]   .rating-wrapper[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.favourites-page[_ngcontent-%COMP%]   .rating-wrapper[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%] {\n  background: cadetblue;\n  padding: 17px;\n  text-align: center;\n  border-radius: 50%;\n  font-size: 20px;\n  font-weight: bold;\n}\n.favourites-page[_ngcontent-%COMP%]   .favourites[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmYXZvdXJpdGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGO0FBQ0U7RUFDRSxtQkFBQTtBQUNKO0FBRUU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFBSjtBQUdFO0VBQ0Usa0JBQUE7QUFESjtBQUdJO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUROO0FBS0U7RUFDRSxnQkFBQTtBQUhKIiwiZmlsZSI6ImZhdm91cml0ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmF2b3VyaXRlcy1wYWdlIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG5cclxuICAubW92aWUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcblxyXG4gIC5tb3ZpZS10aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gIH1cclxuXHJcbiAgLnJhdGluZy13cmFwcGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAucmF0aW5nIHtcclxuICAgICAgYmFja2dyb3VuZDogY2FkZXRibHVlO1xyXG4gICAgICBwYWRkaW5nOiAxN3B4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5mYXZvdXJpdGVzIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "zfKE":
/*!******************************************************!*\
  !*** ./src/app/pages/favorites/favourites.routes.ts ***!
  \******************************************************/
/*! exports provided: FavouritesRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouritesRoutes", function() { return FavouritesRoutes; });
/* harmony import */ var _favourites_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favourites.component */ "IPnq");

const FavouritesRoutes = [
    {
        path: '',
        pathMatch: 'full',
        component: _favourites_component__WEBPACK_IMPORTED_MODULE_0__["FavouritesComponent"],
    }
];


/***/ })

}]);
//# sourceMappingURL=pages-favorites-favourites-module.js.map