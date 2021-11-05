/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/create_scene.js":
/*!*****************************!*\
  !*** ./src/create_scene.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class CreateScene extends Phaser.Scene {
    constructor() {
        super({key: 'create'});
    }

    preload() {
        this.load.image('create_background', 'assets/create_background.png');
        this.load.image('create_scene_arrow', 'assets/create_scene_arrow.png')
        this.load.image('fight_button', 'assets/fight_button.png');
        this.load.image('archer_head', 'assets/archer_head.svg');
        this.load.image('archer_body', 'assets/archer_body.svg');
        this.load.image('archer_legs', 'assets/archer_legs.svg');
        this.load.image('barbarian_head', 'assets/barbarian_head.svg');
        this.load.image('barbarian_bdy', 'assets/barbarian_legs.svg');
        this.load.image('barbarian_legs', 'assets/barbarian_legs.svg');
    }

    create() {
        var top = 1, middle = 1, bottom = 1;

        this.cameras.main.setBackgroundColor(0xA3817A)
        var createSceneBackground;
        createSceneBackground = this.add.image(511.5, 383, 'create_background');

        var createSceneText;
        createSceneText = this.add.text(319, 97.5, 'CREATE', { fontFamily: 'GlueGun-GW8Z', fontSize: '100px', fill: '#000'});

        let createSceneArrowLeft1 = this.add.image(this.cameras.main.width / 4, 300, 'create_scene_arrow');
        createSceneArrowLeft1
            .setScale(0.40)
            .setInteractive({cursor: 'pointer'})
            .on("pointerup", () => {
                top--;
        });

        var createSceneArrowLeft2 = this.add.image(this.cameras.main.width / 4, 440, 'create_scene_arrow');
        createSceneArrowLeft2
            .setScale(0.40)
            .setInteractive({cursor: 'pointer'})
            .on("pointerup", () => {
                middle--;
        });

        var createSceneArrowLeft3 = this.add.image(this.cameras.main.width / 4, 580, 'create_scene_arrow');
        createSceneArrowLeft3
            .setScale(0.40)
            .setInteractive({cursor: 'pointer'})
            .on("pointerup", () => {
                bottom--;
        });

        var createSceneArrowRight1 = this.add.image((this.cameras.main.width / 4) * 3, 300, 'create_scene_arrow');
        createSceneArrowRight1.flipX = true;
        createSceneArrowRight1
            .setScale(0.40)
            .setInteractive({cursor: 'pointer'})
            .on("pointerup", () => {
                top++;
        });

        var createSceneArrowRight2 = this.add.image((this.cameras.main.width / 4) * 3, 440, 'create_scene_arrow');
        createSceneArrowRight2.flipX = true;
        createSceneArrowRight2
            .setScale(0.40)
            .setInteractive({cursor: 'pointer'})
            .on("pointerup", () => {
                middle++;
        });

        var createSceneArrowRight3 = this.add.image((this.cameras.main.width / 4) * 3, 580, 'create_scene_arrow');
        createSceneArrowRight3.flipX = true;
        createSceneArrowRight3
            .setScale(0.40)
            .setInteractive({cursor: 'pointer'})
            .on("pointerup", () => {
                middle++;
        });


        var archerHead = this.add.image(this.cameras.main.width / 2, 300, 'archer_head');
        var barbarianHead = this.add.image(this.cameras.main.width / 2, 300, 'barbarian_head')
        var archerBody = this.add.image(this.cameras.main.width / 2, 440, 'archer_body');
        var archerLegs = this.add.image(this.cameras.main.width / 2, 580, 'archer_legs');

        let fightButton = this.add.image(this.cameras.main.width / 2, 675, 'fight_button');
        fightButton
            .setScale(0.25)
            .setInteractive({cursor: 'pointer'})
            .on("pointerup", () => {
                this.scene.start('fight', {top: 'archer_head', middle: 'archer_body', bottom: 'archer_legs'})
        });
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new CreateScene());

/***/ }),

/***/ "./src/fight_scene.js":
/*!****************************!*\
  !*** ./src/fight_scene.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class FightScene extends Phaser.Scene {
    constructor() {
        super({key: 'fight'});
    }

    init (data) {
        console.log('init', data);
        this.playerHead = data.top;
        this.playerBody = data.middle;
        this.playerLegs = data.bottom;
    }

    preload() {
        this.load.image('battle_background', 'assets/battle_background.png');
        this.load.image('bow_ability_icon', 'assets/bow_icon.png');
        this.load.image('archer_head', 'assets/archer_head.svg');
        this.load.image('archer_body', 'assets/archer_body.svg');
        this.load.image('archer_legs', 'assets/archer_legs.svg');
    }

    create() {
        var battleSceneBackground;
        battleSceneBackground = this.add.image(511.5, 383, 'battle_background');

        var playerBattleSceneHealth = this.add.text(10, 5, '100/100', {
            fontSize: '50px',
            fill: '#000'
        });
        var enemyBattleSceneHealth = this.add.text(546, 5, '100/100', {
            fontSize: '50px',
            fill: '#000'
        });

        var ability1, ability2, ability3, ability4;
        ability1 = this.add.image(373, 720, 'bow_ability_icon');
        ability1.setScale(0.35);
        ability2 = this.add.image(463, 720, 'bow_ability_icon');
        ability2.setScale(0.35);
        ability3 = this.add.image(553, 720, 'bow_ability_icon');
        ability3.setScale(0.35);
        ability4 = this.add.image(643, 720, 'bow_ability_icon');
        ability4.setScale(0.35);

        var playerLegsImage = this.add.image(this.cameras.main.width / 4, 490, this.playerLegs);
        var playerBodyImage = this.add.image(this.cameras.main.width / 4, 440, this.playerBody);
        var playerHeadImage = this.add.image(this.cameras.main.width / 4, 330, this.playerHead);

        var enemyLegs;
        enemyLegs = this.add.image((this.cameras.main.width / 4) * 3, 490, 'archer_legs');
        enemyLegs.flipX = true;
        var enemyBody;
        enemyBody = this.add.image((this.cameras.main.width / 4) * 3, 440, 'archer_body');
        enemyBody.flipX = true;
        var enemyHead;
        enemyHead = this.add.image((this.cameras.main.width / 4) * 3, 330, 'archer_head');
        enemyHead.flipX = true;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new FightScene());

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fight_scene_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fight_scene.js */ "./src/fight_scene.js");
/* harmony import */ var _create_scene_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create_scene.js */ "./src/create_scene.js");



let config = {
    type: Phaser.AUTO,
    width: 1023,
    height: 766,
    scene: [_create_scene_js__WEBPACK_IMPORTED_MODULE_1__["default"], _fight_scene_js__WEBPACK_IMPORTED_MODULE_0__["default"]]
};

let game = new Phaser.Game(config);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLGVBQWUsY0FBYztBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0RBQStELDREQUE0RDs7QUFFM0g7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGtCQUFrQjtBQUMvQztBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsa0JBQWtCO0FBQy9DO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixrQkFBa0I7QUFDL0M7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsa0JBQWtCO0FBQy9DO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGtCQUFrQjtBQUMvQztBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixrQkFBa0I7QUFDL0M7QUFDQTtBQUNBLFNBQVM7OztBQUdUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixrQkFBa0I7QUFDL0M7QUFDQSwyQ0FBMkMsaUVBQWlFO0FBQzVHLFNBQVM7QUFDVDtBQUNBOztBQUVBLGlFQUFlLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7QUM5RmhDO0FBQ0E7QUFDQSxlQUFlLGFBQWE7QUFDNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsZ0JBQWdCOzs7Ozs7VUMzRC9CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjJDO0FBQ0U7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx3REFBWSxFQUFFLHVEQUFXO0FBQ3JDOztBQUVBLG1DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9seXBldHMtcHJvdG8vLi9zcmMvY3JlYXRlX3NjZW5lLmpzIiwid2VicGFjazovL3BvbHlwZXRzLXByb3RvLy4vc3JjL2ZpZ2h0X3NjZW5lLmpzIiwid2VicGFjazovL3BvbHlwZXRzLXByb3RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BvbHlwZXRzLXByb3RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wb2x5cGV0cy1wcm90by93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BvbHlwZXRzLXByb3RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcG9seXBldHMtcHJvdG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQ3JlYXRlU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcih7a2V5OiAnY3JlYXRlJ30pO1xuICAgIH1cblxuICAgIHByZWxvYWQoKSB7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnY3JlYXRlX2JhY2tncm91bmQnLCAnYXNzZXRzL2NyZWF0ZV9iYWNrZ3JvdW5kLnBuZycpO1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2NyZWF0ZV9zY2VuZV9hcnJvdycsICdhc3NldHMvY3JlYXRlX3NjZW5lX2Fycm93LnBuZycpXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnZmlnaHRfYnV0dG9uJywgJ2Fzc2V0cy9maWdodF9idXR0b24ucG5nJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnYXJjaGVyX2hlYWQnLCAnYXNzZXRzL2FyY2hlcl9oZWFkLnN2ZycpO1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2FyY2hlcl9ib2R5JywgJ2Fzc2V0cy9hcmNoZXJfYm9keS5zdmcnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdhcmNoZXJfbGVncycsICdhc3NldHMvYXJjaGVyX2xlZ3Muc3ZnJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnYmFyYmFyaWFuX2hlYWQnLCAnYXNzZXRzL2JhcmJhcmlhbl9oZWFkLnN2ZycpO1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2JhcmJhcmlhbl9iZHknLCAnYXNzZXRzL2JhcmJhcmlhbl9sZWdzLnN2ZycpO1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2JhcmJhcmlhbl9sZWdzJywgJ2Fzc2V0cy9iYXJiYXJpYW5fbGVncy5zdmcnKTtcbiAgICB9XG5cbiAgICBjcmVhdGUoKSB7XG4gICAgICAgIHZhciB0b3AgPSAxLCBtaWRkbGUgPSAxLCBib3R0b20gPSAxO1xuXG4gICAgICAgIHRoaXMuY2FtZXJhcy5tYWluLnNldEJhY2tncm91bmRDb2xvcigweEEzODE3QSlcbiAgICAgICAgdmFyIGNyZWF0ZVNjZW5lQmFja2dyb3VuZDtcbiAgICAgICAgY3JlYXRlU2NlbmVCYWNrZ3JvdW5kID0gdGhpcy5hZGQuaW1hZ2UoNTExLjUsIDM4MywgJ2NyZWF0ZV9iYWNrZ3JvdW5kJyk7XG5cbiAgICAgICAgdmFyIGNyZWF0ZVNjZW5lVGV4dDtcbiAgICAgICAgY3JlYXRlU2NlbmVUZXh0ID0gdGhpcy5hZGQudGV4dCgzMTksIDk3LjUsICdDUkVBVEUnLCB7IGZvbnRGYW1pbHk6ICdHbHVlR3VuLUdXOFonLCBmb250U2l6ZTogJzEwMHB4JywgZmlsbDogJyMwMDAnfSk7XG5cbiAgICAgICAgbGV0IGNyZWF0ZVNjZW5lQXJyb3dMZWZ0MSA9IHRoaXMuYWRkLmltYWdlKHRoaXMuY2FtZXJhcy5tYWluLndpZHRoIC8gNCwgMzAwLCAnY3JlYXRlX3NjZW5lX2Fycm93Jyk7XG4gICAgICAgIGNyZWF0ZVNjZW5lQXJyb3dMZWZ0MVxuICAgICAgICAgICAgLnNldFNjYWxlKDAuNDApXG4gICAgICAgICAgICAuc2V0SW50ZXJhY3RpdmUoe2N1cnNvcjogJ3BvaW50ZXInfSlcbiAgICAgICAgICAgIC5vbihcInBvaW50ZXJ1cFwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdG9wLS07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBjcmVhdGVTY2VuZUFycm93TGVmdDIgPSB0aGlzLmFkZC5pbWFnZSh0aGlzLmNhbWVyYXMubWFpbi53aWR0aCAvIDQsIDQ0MCwgJ2NyZWF0ZV9zY2VuZV9hcnJvdycpO1xuICAgICAgICBjcmVhdGVTY2VuZUFycm93TGVmdDJcbiAgICAgICAgICAgIC5zZXRTY2FsZSgwLjQwKVxuICAgICAgICAgICAgLnNldEludGVyYWN0aXZlKHtjdXJzb3I6ICdwb2ludGVyJ30pXG4gICAgICAgICAgICAub24oXCJwb2ludGVydXBcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIG1pZGRsZS0tO1xuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgY3JlYXRlU2NlbmVBcnJvd0xlZnQzID0gdGhpcy5hZGQuaW1hZ2UodGhpcy5jYW1lcmFzLm1haW4ud2lkdGggLyA0LCA1ODAsICdjcmVhdGVfc2NlbmVfYXJyb3cnKTtcbiAgICAgICAgY3JlYXRlU2NlbmVBcnJvd0xlZnQzXG4gICAgICAgICAgICAuc2V0U2NhbGUoMC40MClcbiAgICAgICAgICAgIC5zZXRJbnRlcmFjdGl2ZSh7Y3Vyc29yOiAncG9pbnRlcid9KVxuICAgICAgICAgICAgLm9uKFwicG9pbnRlcnVwXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBib3R0b20tLTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIGNyZWF0ZVNjZW5lQXJyb3dSaWdodDEgPSB0aGlzLmFkZC5pbWFnZSgodGhpcy5jYW1lcmFzLm1haW4ud2lkdGggLyA0KSAqIDMsIDMwMCwgJ2NyZWF0ZV9zY2VuZV9hcnJvdycpO1xuICAgICAgICBjcmVhdGVTY2VuZUFycm93UmlnaHQxLmZsaXBYID0gdHJ1ZTtcbiAgICAgICAgY3JlYXRlU2NlbmVBcnJvd1JpZ2h0MVxuICAgICAgICAgICAgLnNldFNjYWxlKDAuNDApXG4gICAgICAgICAgICAuc2V0SW50ZXJhY3RpdmUoe2N1cnNvcjogJ3BvaW50ZXInfSlcbiAgICAgICAgICAgIC5vbihcInBvaW50ZXJ1cFwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdG9wKys7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBjcmVhdGVTY2VuZUFycm93UmlnaHQyID0gdGhpcy5hZGQuaW1hZ2UoKHRoaXMuY2FtZXJhcy5tYWluLndpZHRoIC8gNCkgKiAzLCA0NDAsICdjcmVhdGVfc2NlbmVfYXJyb3cnKTtcbiAgICAgICAgY3JlYXRlU2NlbmVBcnJvd1JpZ2h0Mi5mbGlwWCA9IHRydWU7XG4gICAgICAgIGNyZWF0ZVNjZW5lQXJyb3dSaWdodDJcbiAgICAgICAgICAgIC5zZXRTY2FsZSgwLjQwKVxuICAgICAgICAgICAgLnNldEludGVyYWN0aXZlKHtjdXJzb3I6ICdwb2ludGVyJ30pXG4gICAgICAgICAgICAub24oXCJwb2ludGVydXBcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIG1pZGRsZSsrO1xuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgY3JlYXRlU2NlbmVBcnJvd1JpZ2h0MyA9IHRoaXMuYWRkLmltYWdlKCh0aGlzLmNhbWVyYXMubWFpbi53aWR0aCAvIDQpICogMywgNTgwLCAnY3JlYXRlX3NjZW5lX2Fycm93Jyk7XG4gICAgICAgIGNyZWF0ZVNjZW5lQXJyb3dSaWdodDMuZmxpcFggPSB0cnVlO1xuICAgICAgICBjcmVhdGVTY2VuZUFycm93UmlnaHQzXG4gICAgICAgICAgICAuc2V0U2NhbGUoMC40MClcbiAgICAgICAgICAgIC5zZXRJbnRlcmFjdGl2ZSh7Y3Vyc29yOiAncG9pbnRlcid9KVxuICAgICAgICAgICAgLm9uKFwicG9pbnRlcnVwXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBtaWRkbGUrKztcbiAgICAgICAgfSk7XG5cblxuICAgICAgICB2YXIgYXJjaGVySGVhZCA9IHRoaXMuYWRkLmltYWdlKHRoaXMuY2FtZXJhcy5tYWluLndpZHRoIC8gMiwgMzAwLCAnYXJjaGVyX2hlYWQnKTtcbiAgICAgICAgdmFyIGJhcmJhcmlhbkhlYWQgPSB0aGlzLmFkZC5pbWFnZSh0aGlzLmNhbWVyYXMubWFpbi53aWR0aCAvIDIsIDMwMCwgJ2JhcmJhcmlhbl9oZWFkJylcbiAgICAgICAgdmFyIGFyY2hlckJvZHkgPSB0aGlzLmFkZC5pbWFnZSh0aGlzLmNhbWVyYXMubWFpbi53aWR0aCAvIDIsIDQ0MCwgJ2FyY2hlcl9ib2R5Jyk7XG4gICAgICAgIHZhciBhcmNoZXJMZWdzID0gdGhpcy5hZGQuaW1hZ2UodGhpcy5jYW1lcmFzLm1haW4ud2lkdGggLyAyLCA1ODAsICdhcmNoZXJfbGVncycpO1xuXG4gICAgICAgIGxldCBmaWdodEJ1dHRvbiA9IHRoaXMuYWRkLmltYWdlKHRoaXMuY2FtZXJhcy5tYWluLndpZHRoIC8gMiwgNjc1LCAnZmlnaHRfYnV0dG9uJyk7XG4gICAgICAgIGZpZ2h0QnV0dG9uXG4gICAgICAgICAgICAuc2V0U2NhbGUoMC4yNSlcbiAgICAgICAgICAgIC5zZXRJbnRlcmFjdGl2ZSh7Y3Vyc29yOiAncG9pbnRlcid9KVxuICAgICAgICAgICAgLm9uKFwicG9pbnRlcnVwXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLnN0YXJ0KCdmaWdodCcsIHt0b3A6ICdhcmNoZXJfaGVhZCcsIG1pZGRsZTogJ2FyY2hlcl9ib2R5JywgYm90dG9tOiAnYXJjaGVyX2xlZ3MnfSlcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQ3JlYXRlU2NlbmUoKTsiLCJjbGFzcyBGaWdodFNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoe2tleTogJ2ZpZ2h0J30pO1xuICAgIH1cblxuICAgIGluaXQgKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2luaXQnLCBkYXRhKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJIZWFkID0gZGF0YS50b3A7XG4gICAgICAgIHRoaXMucGxheWVyQm9keSA9IGRhdGEubWlkZGxlO1xuICAgICAgICB0aGlzLnBsYXllckxlZ3MgPSBkYXRhLmJvdHRvbTtcbiAgICB9XG5cbiAgICBwcmVsb2FkKCkge1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2JhdHRsZV9iYWNrZ3JvdW5kJywgJ2Fzc2V0cy9iYXR0bGVfYmFja2dyb3VuZC5wbmcnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdib3dfYWJpbGl0eV9pY29uJywgJ2Fzc2V0cy9ib3dfaWNvbi5wbmcnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdhcmNoZXJfaGVhZCcsICdhc3NldHMvYXJjaGVyX2hlYWQuc3ZnJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnYXJjaGVyX2JvZHknLCAnYXNzZXRzL2FyY2hlcl9ib2R5LnN2ZycpO1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2FyY2hlcl9sZWdzJywgJ2Fzc2V0cy9hcmNoZXJfbGVncy5zdmcnKTtcbiAgICB9XG5cbiAgICBjcmVhdGUoKSB7XG4gICAgICAgIHZhciBiYXR0bGVTY2VuZUJhY2tncm91bmQ7XG4gICAgICAgIGJhdHRsZVNjZW5lQmFja2dyb3VuZCA9IHRoaXMuYWRkLmltYWdlKDUxMS41LCAzODMsICdiYXR0bGVfYmFja2dyb3VuZCcpO1xuXG4gICAgICAgIHZhciBwbGF5ZXJCYXR0bGVTY2VuZUhlYWx0aCA9IHRoaXMuYWRkLnRleHQoMTAsIDUsICcxMDAvMTAwJywge1xuICAgICAgICAgICAgZm9udFNpemU6ICc1MHB4JyxcbiAgICAgICAgICAgIGZpbGw6ICcjMDAwJ1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGVuZW15QmF0dGxlU2NlbmVIZWFsdGggPSB0aGlzLmFkZC50ZXh0KDU0NiwgNSwgJzEwMC8xMDAnLCB7XG4gICAgICAgICAgICBmb250U2l6ZTogJzUwcHgnLFxuICAgICAgICAgICAgZmlsbDogJyMwMDAnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBhYmlsaXR5MSwgYWJpbGl0eTIsIGFiaWxpdHkzLCBhYmlsaXR5NDtcbiAgICAgICAgYWJpbGl0eTEgPSB0aGlzLmFkZC5pbWFnZSgzNzMsIDcyMCwgJ2Jvd19hYmlsaXR5X2ljb24nKTtcbiAgICAgICAgYWJpbGl0eTEuc2V0U2NhbGUoMC4zNSk7XG4gICAgICAgIGFiaWxpdHkyID0gdGhpcy5hZGQuaW1hZ2UoNDYzLCA3MjAsICdib3dfYWJpbGl0eV9pY29uJyk7XG4gICAgICAgIGFiaWxpdHkyLnNldFNjYWxlKDAuMzUpO1xuICAgICAgICBhYmlsaXR5MyA9IHRoaXMuYWRkLmltYWdlKDU1MywgNzIwLCAnYm93X2FiaWxpdHlfaWNvbicpO1xuICAgICAgICBhYmlsaXR5My5zZXRTY2FsZSgwLjM1KTtcbiAgICAgICAgYWJpbGl0eTQgPSB0aGlzLmFkZC5pbWFnZSg2NDMsIDcyMCwgJ2Jvd19hYmlsaXR5X2ljb24nKTtcbiAgICAgICAgYWJpbGl0eTQuc2V0U2NhbGUoMC4zNSk7XG5cbiAgICAgICAgdmFyIHBsYXllckxlZ3NJbWFnZSA9IHRoaXMuYWRkLmltYWdlKHRoaXMuY2FtZXJhcy5tYWluLndpZHRoIC8gNCwgNDkwLCB0aGlzLnBsYXllckxlZ3MpO1xuICAgICAgICB2YXIgcGxheWVyQm9keUltYWdlID0gdGhpcy5hZGQuaW1hZ2UodGhpcy5jYW1lcmFzLm1haW4ud2lkdGggLyA0LCA0NDAsIHRoaXMucGxheWVyQm9keSk7XG4gICAgICAgIHZhciBwbGF5ZXJIZWFkSW1hZ2UgPSB0aGlzLmFkZC5pbWFnZSh0aGlzLmNhbWVyYXMubWFpbi53aWR0aCAvIDQsIDMzMCwgdGhpcy5wbGF5ZXJIZWFkKTtcblxuICAgICAgICB2YXIgZW5lbXlMZWdzO1xuICAgICAgICBlbmVteUxlZ3MgPSB0aGlzLmFkZC5pbWFnZSgodGhpcy5jYW1lcmFzLm1haW4ud2lkdGggLyA0KSAqIDMsIDQ5MCwgJ2FyY2hlcl9sZWdzJyk7XG4gICAgICAgIGVuZW15TGVncy5mbGlwWCA9IHRydWU7XG4gICAgICAgIHZhciBlbmVteUJvZHk7XG4gICAgICAgIGVuZW15Qm9keSA9IHRoaXMuYWRkLmltYWdlKCh0aGlzLmNhbWVyYXMubWFpbi53aWR0aCAvIDQpICogMywgNDQwLCAnYXJjaGVyX2JvZHknKTtcbiAgICAgICAgZW5lbXlCb2R5LmZsaXBYID0gdHJ1ZTtcbiAgICAgICAgdmFyIGVuZW15SGVhZDtcbiAgICAgICAgZW5lbXlIZWFkID0gdGhpcy5hZGQuaW1hZ2UoKHRoaXMuY2FtZXJhcy5tYWluLndpZHRoIC8gNCkgKiAzLCAzMzAsICdhcmNoZXJfaGVhZCcpO1xuICAgICAgICBlbmVteUhlYWQuZmxpcFggPSB0cnVlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEZpZ2h0U2NlbmUoKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBmaWdodF9zY2VuZSBmcm9tICcuL2ZpZ2h0X3NjZW5lLmpzJztcbmltcG9ydCBjcmVhdGVfc2NlbmUgZnJvbSAnLi9jcmVhdGVfc2NlbmUuanMnO1xuXG5sZXQgY29uZmlnID0ge1xuICAgIHR5cGU6IFBoYXNlci5BVVRPLFxuICAgIHdpZHRoOiAxMDIzLFxuICAgIGhlaWdodDogNzY2LFxuICAgIHNjZW5lOiBbY3JlYXRlX3NjZW5lLCBmaWdodF9zY2VuZV1cbn07XG5cbmxldCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKGNvbmZpZyk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9