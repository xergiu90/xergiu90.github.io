(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _shared_components_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/components/movie-details/movie-details.component */ "qi3s");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services */ "dJ3e");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");


















function HomeComponent_mat_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const year_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("value", year_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", year_r5, " ");
} }
function HomeComponent_mat_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const genre_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("value", genre_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", ctx_r2.genreName[genre_r6], " ");
} }
function HomeComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "Searching....");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
const _c0 = function () { return { "width": "200px", "height": "305px" }; };
function HomeComponent_ng_container_36_div_5_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](0, "img", 31);
} if (rf & 2) {
    const movie_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????propertyInterpolate"]("src", movie_r7.posterURL, _angular_core__WEBPACK_IMPORTED_MODULE_5__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pureFunction0"](2, _c0));
} }
function HomeComponent_ng_container_36_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](1, HomeComponent_ng_container_36_div_5_img_1_Template, 1, 3, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const movie_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", movie_r7.posterURL);
} }
function HomeComponent_ng_container_36_div_22_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const genre_r14 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"]("", ctx_r13.genreName[genre_r14], " ");
} }
function HomeComponent_ng_container_36_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "Genre: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](2, HomeComponent_ng_container_36_div_22_span_2_Template, 2, 1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const movie_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngForOf", movie_r7.genre);
} }
const _c1 = function (a0) { return { "is-favorite": a0 }; };
function HomeComponent_ng_container_36_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "mat-card", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](3, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "fa-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function HomeComponent_ng_container_36_Template_fa_icon_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r17); const movie_r7 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r16.toggleFavourites(movie_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](5, HomeComponent_ng_container_36_div_5_Template, 2, 3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](8, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function HomeComponent_ng_container_36_Template_div_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r17); const movie_r7 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r18.showMovieDetails(movie_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](9, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](11, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](12, "Year: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](13, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](15, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](16, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](17, "Rating:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](18, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](21, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](22, HomeComponent_ng_container_36_div_22_Template, 3, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
} if (rf & 2) {
    const movie_r7 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("icon", ctx_r4.faHeart)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pureFunction1"](7, _c1, movie_r7.isFavourite));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", movie_r7.posterURL);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](movie_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](movie_r7.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](movie_r7.rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", movie_r7.genre.length);
} }
class HomeComponent {
    constructor(authService, stateService, movieService, dialog, toastr) {
        this.authService = authService;
        this.stateService = stateService;
        this.movieService = movieService;
        this.dialog = dialog;
        this.toastr = toastr;
        this.movies = [];
        this.favourites = [];
        this.firstLoad = true;
        this.sortBy = 'name';
        this.loading = false;
        this.faHeart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faHeart"];
        this.searchField = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]();
        this.stateService.getCurrentUser().subscribe(user => {
            this.currentUser = user;
        });
    }
    get movieYears() {
        const uniqueYears = [...new Set(this.movies.map(mov => mov.year))].sort((a, b) => {
            return b - a;
        });
        return uniqueYears;
    }
    get movieGenres() {
        const allGenres = this.flatten(this.movies.map(movie => movie.genre));
        const uniqueGenres = [...new Set(allGenres)];
        return uniqueGenres;
    }
    get sortedAndFilteredMovies() {
        let sortedAndFilteredMovies = [...this.movies];
        if (this.filterByYear) {
            sortedAndFilteredMovies = [...sortedAndFilteredMovies.filter(mov => mov.year === this.filterByYear)];
        }
        if (this.filterByGenre) {
            sortedAndFilteredMovies = [...sortedAndFilteredMovies.filter(mov => mov.genre.includes(this.filterByGenre))];
        }
        return sortedAndFilteredMovies;
    }
    get favouriteMoviesIDs() {
        if (this.favourites && this.favourites.length) {
            return this.favourites.map(movie => movie.id);
        }
        else {
            return [];
        }
    }
    ngOnInit() {
        this.apiKeySubscription = this.stateService.getApiKey().subscribe(apiKey => {
            this.searchMovies(this.searchField.value);
        });
        this.fetchGenres();
        this.searchField.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(600), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(_ => {
            this.loading = true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(_ => (this.loading = false))).subscribe(term => {
            this.searchMovies(term);
        });
        this.readFavourites();
    }
    searchMovies(term) {
        if (!term) {
            return;
        }
        if (!this.genreName) {
            this.fetchGenres();
        }
        else {
            this.movieSearch(term);
        }
    }
    ngOnDestroy() {
        if (this.apiKeySubscription) {
            this.apiKeySubscription.unsubscribe();
        }
    }
    movieSearch(term) {
        this.movieService.search(term).subscribe(res => {
            let newMovie;
            this.movies = [];
            res.results.forEach(movie => {
                newMovie = {
                    name: movie.original_title,
                    year: movie.release_date ? movie.release_date.split('-')[0] : '-',
                    genre: movie.genre_ids,
                    rating: movie.vote_average,
                    posterURL: movie.poster_path ? 'https://image.tmdb.org/t/p/w440_and_h660_face' + movie.poster_path : 'https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png',
                    description: movie.overview,
                    id: movie.id,
                    isFavourite: this.favouriteMoviesIDs.includes(movie.id)
                };
                this.movies.push(newMovie);
            });
            this.doSort();
        }, err => {
            if (!this.firstLoad) {
                this.toastr.error('API Key invalid');
            }
            console.log(err);
        });
    }
    fetchGenres() {
        this.movieService.getGenres().subscribe(res => {
            if (res) {
                this.genreName = res.genres.reduce((map, genre) => {
                    map[genre.id] = genre.name;
                    return map;
                }, {});
                if (this.searchField.value) {
                    this.movieSearch(this.searchField.value);
                }
                this.firstLoad = false;
            }
        }, err => {
            if (!this.firstLoad) {
                this.toastr.error('API Key invalid');
            }
            console.log(err);
            this.firstLoad = false;
        });
    }
    readFavourites() {
        const storedMoviesString = JSON.parse(localStorage.getItem('favourites'));
        if (storedMoviesString) {
            const storedMoviesObject = storedMoviesString[this.currentUser.id];
            if (storedMoviesObject) {
                this.favourites = storedMoviesObject;
            }
        }
    }
    showMovieDetails(movie) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        dialogConfig.width = '500px';
        dialogConfig.hasBackdrop = true;
        dialogConfig.closeOnNavigation = true;
        const dialogRef = this.dialog.open(_shared_components_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_2__["MovieDetailsComponent"], dialogConfig);
        dialogRef.componentInstance.movie = movie;
    }
    updateSort() {
        this.doSort();
    }
    doSort() {
        if (this.sortBy === 'year') {
            this.movies.sort((a, b) => {
                return b.year - a.year;
            });
        }
        else if (this.sortBy === 'name') {
            this.movies.sort((a, b) => {
                return a.name.localeCompare(b.name);
            });
        }
    }
    toggleFavourites(movie) {
        movie.isFavourite = !movie.isFavourite;
        const favMovies = this.movies.filter(mov => {
            return mov.isFavourite;
        });
        let favMoviesPerUser = JSON.parse(localStorage.getItem('favourites'));
        if (!favMoviesPerUser) {
            favMoviesPerUser = { [this.currentUser.id]: favMovies };
        }
        else {
            favMoviesPerUser[this.currentUser.id] = favMovies;
        }
        localStorage.setItem('favourites', JSON.stringify(favMoviesPerUser));
    }
    doYearFilter() {
        if (this.filterByYear === 0) {
            this.filterByYear = null;
        }
    }
    doGenreFilter() {
        if (this.filterByGenre === 0) {
            this.filterByGenre = null;
        }
    }
    flatten(arr) {
        return arr.reduce((flat, toFlatten) => {
            return flat.concat(Array.isArray(toFlatten) ? this.flatten(toFlatten) : toFlatten);
        }, []);
    }
}
HomeComponent.??fac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_6__["StateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_6__["MovieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"])); };
HomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineComponent"]({ type: HomeComponent, selectors: [["favorites"]], decls: 37, vars: 15, consts: [["fxFlex", "100", "fxLayout", "row wrap", 1, "home-page"], ["fxFlex", "100"], ["fxFlex", "40"], ["fxFlex", "90", 1, "form-field"], ["matInput", "", 3, "formControl"], ["searchInput", ""], ["fxFlex", "20"], ["appearance", "outline", 1, "btr-form-field", 3, "color"], [3, "ngModel", "ngModelChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["class", "searching", "fxFlex", "100", 4, "ngIf"], ["fxLayout", "row wrap", "fxLayoutGap", "10px", "fxFlex", "100", 1, "movies-container"], [4, "ngFor", "ngForOf"], ["fxFlex", "100", 1, "searching"], ["fxFlex", "1 1 24", "fxFlex.lt-lg", "0 1 48", "fxFlex.lt-sm", "0 1 95", "fxLayout", "column wrap", "fxLayoutAlign", "center center", "fxLayoutGap", "20px", 1, "movie"], ["fxLayoutAlign", "center center", 1, "favourites"], [1, "fas", "fa-heart"], [3, "icon", "ngClass", "click"], ["class", "photo-container", 3, "ngStyle", 4, "ngIf"], ["fxLayout", "row wrap"], ["fxFlex", "calc(100%-60px)", "fxLayout", "row wrap", "fxLayoutAlign", "start start", 1, "user-info"], ["fxFlex", "100", 1, "pointer", 3, "click"], [1, "movie-title"], [1, "bold"], ["fxFlex", "calc(60px)", "fxLayout", "row wrap", "fxLayoutAlign", "center start", 1, "rating-wrapper"], ["fxFlex", "100", 1, "rating"], ["fxFlex", "100", "fxLayoutAlign", "start start"], ["fxFlex", "100", 4, "ngIf"], [1, "photo-container", 3, "ngStyle"], ["class", "photo-tag", 3, "ngStyle", "src", 4, "ngIf"], [1, "photo-tag", 3, "ngStyle", "src"], ["class", "genre-token", 4, "ngFor", "ngForOf"], [1, "genre-token"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Movie List Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](6, "Search Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](7, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](10, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](12, "Filter By Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](13, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("ngModelChange", function HomeComponent_Template_mat_select_ngModelChange_13_listener($event) { return ctx.filterByYear = $event; })("selectionChange", function HomeComponent_Template_mat_select_selectionChange_13_listener() { return ctx.doYearFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](14, HomeComponent_mat_option_14_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](15, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](16, " Clear Filter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](17, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](18, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](20, "Filter By Genre");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](21, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("ngModelChange", function HomeComponent_Template_mat_select_ngModelChange_21_listener($event) { return ctx.filterByGenre = $event; })("selectionChange", function HomeComponent_Template_mat_select_selectionChange_21_listener() { return ctx.doGenreFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](22, HomeComponent_mat_option_22_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](23, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](24, " Clear Filter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](25, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](26, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](28, "Sorty By");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](29, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("ngModelChange", function HomeComponent_Template_mat_select_ngModelChange_29_listener($event) { return ctx.sortBy = $event; })("selectionChange", function HomeComponent_Template_mat_select_selectionChange_29_listener() { return ctx.updateSort(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](30, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](31, " Sort by Year ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](32, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](33, " Sort by Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](34, HomeComponent_div_34_Template, 2, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](36, HomeComponent_ng_container_36_Template, 23, 9, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("formControl", ctx.searchField);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("color", "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngModel", ctx.filterByYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngForOf", ctx.movieYears);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("value", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("color", "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngModel", ctx.filterByGenre);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngForOf", ctx.movieGenres);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("value", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("color", "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngModel", ctx.sortBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("value", "year");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("value", "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngForOf", ctx.sortedAndFilteredMovies);
    } }, directives: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutGapDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCard"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgStyle"]], styles: [".home-page[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.home-page[_ngcontent-%COMP%]   .movie[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.home-page[_ngcontent-%COMP%]   .movie-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 24px;\n}\n.home-page[_ngcontent-%COMP%]   .rating-wrapper[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.home-page[_ngcontent-%COMP%]   .rating-wrapper[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%] {\n  background: cadetblue;\n  padding: 17px;\n  text-align: center;\n  border-radius: 50%;\n  font-size: 20px;\n  font-weight: bold;\n}\n.home-page[_ngcontent-%COMP%]   .favourites[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.home-page[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  font-size: 30px;\n  position: absolute;\n  right: 10px;\n  top: -2px;\n}\n.home-page[_ngcontent-%COMP%]   fa-icon.is-favorite[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGO0FBQ0U7RUFDRSxtQkFBQTtBQUNKO0FBRUU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFBSjtBQUdFO0VBQ0Usa0JBQUE7QUFESjtBQUdJO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUROO0FBS0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFISjtBQU1FO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFKSjtBQU1JO0VBQ0UsVUFBQTtBQUpOIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZS1wYWdlIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG5cclxuICAubW92aWUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcblxyXG4gIC5tb3ZpZS10aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gIH1cclxuXHJcbiAgLnJhdGluZy13cmFwcGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAucmF0aW5nIHtcclxuICAgICAgYmFja2dyb3VuZDogY2FkZXRibHVlO1xyXG4gICAgICBwYWRkaW5nOiAxN3B4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5mYXZvdXJpdGVzIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgZmEtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIHRvcDogLTJweDtcclxuXHJcbiAgICAmLmlzLWZhdm9yaXRlIHtcclxuICAgICAgY29sb3I6IHJlZDtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "3hiv":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.routes.ts ***!
  \*******************************************/
/*! exports provided: HomeRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutes", function() { return HomeRoutes; });
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "1LmZ");

const HomeRoutes = [
    {
        path: '',
        pathMatch: 'full',
        component: _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"],
    }
];


/***/ }),

/***/ "99Un":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.routes */ "3hiv");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ "PCNd");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "1LmZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






class HomeModule {
}
HomeModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({ type: HomeModule });
HomeModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(_home_routes__WEBPACK_IMPORTED_MODULE_1__["HomeRoutes"]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-home-home-module.js.map